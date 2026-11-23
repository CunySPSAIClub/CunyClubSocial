import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, mkdir, readFile, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const temp = await mkdtemp(path.join(os.tmpdir(), "contributor-qa-"));
const source = await readFile(path.join(root, "server.ts"), "utf8");
const store = JSON.parse(
  await readFile(path.join(root, ".data/hub-store.json"), "utf8"),
);
// Only synthetic demo fixtures; never run publishing or SMTP jobs in this check.
store.posts = store.posts.filter((p) => p.status !== "Scheduled");
store.smtpConfig = { ...store.smtpConfig, host: "", authPass: "" };
store.emailReminders = [];
store.events = store.events.map((e) => ({ ...e, date: "2030-12-01" }));
store.users.push({
  ...store.users.find((u) => u.userId === "usr-contrib-ai"),
  userId: "qa-other-member",
  email: "qa-other@spsmail.cuny.edu",
  name: "Other Member",
});
store.memberships.push({
  membershipId: "qa-other",
  userId: "qa-other-member",
  clubId: "club-ai",
  role: "CONTRIBUTOR",
  status: "Active",
  authorizedBy: "QA",
  authorizedAt: new Date().toISOString(),
});
store.memberships.push({membershipId:'qa-other-editor',userId:'qa-other-member',clubId:'club-msa',role:'EDITOR',status:'Active',authorizedBy:'QA',authorizedAt:new Date().toISOString()});
await mkdir(path.join(temp, ".data"));
await writeFile(path.join(temp, ".data/hub-store.json"), JSON.stringify(store));
const port = 5188,
  base = `http://127.0.0.1:${port}`;
const proc = spawn(process.execPath, [path.join(root, "server.ts")], {
  cwd: temp,
  env: {
    ...process.env,
    NODE_ENV: "production",
    PORT: String(port),
    DEMO_MODE: "true",
    SMTP_HOST: "",
    SMTP_PASS: "",
    SESSION_SECRET: "synthetic-contributor-check",
  },
  stdio: ["ignore", "pipe", "pipe"],
});
let logs = "";
proc.stderr.on("data", (b) => (logs += b));
proc.stdout.on("data", (b) => (logs += b));
let count = 0;
async function request(cookie, url, method = "GET", body, extraHeaders = {}) {
  const res = await fetch(base + url, {
    method,
    headers: {
      ...extraHeaders,
      Cookie: cookie,
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { res, data };
}
async function login(userId) {
  const { res } = await request("", "/api/auth/login", "POST", { userId });
  assert.equal(res.status, 200);
  return res.headers.get("set-cookie").split(";")[0];
}
function status(result, expected, label) {
  count++;
  assert.equal(
    result.res.status,
    expected,
    `${label}: ${JSON.stringify(result.data)}`,
  );
}
try {
  for (let i = 0; i < 100; i++) {
    try {
      if ((await fetch(base + "/api/health")).ok) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 100));
    if (i === 99) throw Error(logs);
  }
  const sofia = await login("usr-contrib-ai"),
    lead = await login("usr-lead-ai"),
    editor = await login("usr-editor-ai"),
    other = await login("qa-other-member"),
    outsider = await login("usr-lead-msa");
  const workspace = await request(sofia, "/api/clubs/club-ai");
  status(workspace, 200, "workspace");
  assert.equal(workspace.data.effectiveRole, "CONTRIBUTOR");
  assert.deepEqual(workspace.data.members, []);
  assert.deepEqual(workspace.data.posts, []);
  const mutations = [
    ...source.matchAll(/app\.(post|put|patch|delete)\('(\/api\/[^']+)'/g),
  ].map((m) => ({ method: m[1].toUpperCase(), route: m[2] }));
  for (const { method, route } of mutations) {
    if (
      ["/api/auth/login", "/api/auth/google", "/api/auth/logout"].includes(
        route,
      ) ||
      route.endsWith("/rsvp")
    )
      continue;
    const url = route
      .replace(":id", "club-ai")
      .replaceAll(/:[A-Za-z]+/g, "synthetic");
    const denied = await request(sofia, url, method, {});
    status(denied, 403, method + " " + route);
    assert.equal(denied.data.error, "Not allowed for your role");
  }
  status(
    await request(sofia, "/api/clubs/%63lub-ai/events", "POST", {}),
    403,
    "encoded club path cannot bypass role guard",
  );
  status(await request(sofia, '/api/events', 'GET', undefined, {'X-Club-Id':'club-ai'}), 200, 'selected Contributor can read events');
  status(await request(sofia, '/api/profile', 'PATCH', {displayName:'Blocked'}, {'X-Club-Id':'club-ai'}), 403, 'selected Contributor cannot mutate profile');
  const joinLogin = await request('', '/api/auth/login', 'POST', {email:'qa-new-join@spsmail.cuny.edu'});
  const joinCookie = joinLogin.res.headers.get('set-cookie').split(';')[0];
  const join = await request(joinCookie, '/api/clubs/club-ai/join-requests', 'POST', {reason:'Synthetic membership check'});
  status(join, 201, 'new student requests membership');
  status(await request(lead, `/api/clubs/club-ai/join-requests/${join.data.joinRequest.joinRequestId}/decision`, 'POST', {decision:'Approved'}), 200, 'lead approves join request');
  const joined = await request(joinCookie, '/api/auth/session');
  assert.equal(joined.data.memberships.find(m=>m.clubId==='club-ai').role, 'CONTRIBUTOR');
  status(await request(other, '/api/profile', 'PATCH', {displayName:'QA Other'}, {'X-Club-Id':'club-msa'}), 200, 'mixed club editor retains global profile access');
  status(await request(other, '/api/clubs/club-ai/posts', 'POST', {title:'Blocked',caption:'Blocked'}, {'X-Club-Id':'club-msa'}), 403, 'editor header cannot override Contributor target club');
  const seed = await request(sofia, "/api/clubs/club-ai/member-questions");
  status(seed, 200, "seed questions");
  assert.equal(seed.data.questions.length, 2);
  const created = await request(
    sofia,
    "/api/clubs/club-ai/member-questions",
    "POST",
    { topic: "Events", body: "Private QA question" },
  );
  status(created, 201, "ask");
  const id = created.data.question.questionId,
    url = `/api/clubs/club-ai/member-questions/${id}`;
  status(await request(other, url), 404, "other member privacy");
  status(await request(outsider, url), 403, "cross club privacy");
  status(await request(lead, url), 200, "lead can read");
  status(await request(editor, url), 200, "editor can read");
  status(
    await request(lead, url + "/messages", "POST", {
      body: "Private QA answer",
    }),
    200,
    "reply",
  );
  let detail = await request(sofia, url);
  assert.equal(detail.data.question.status, "Answered");
  assert.equal(detail.data.question.messages.length, 2);
  status(
    await request(sofia, url + "/read", "POST"),
    200,
    "mark question read",
  );
  status(
    await request(sofia, url + "/resolve", "POST"),
    403,
    "member cannot resolve",
  );
  status(await request(lead, url + "/resolve", "POST"), 200, "leader resolve");
  status(
    await request(sofia, url + "/messages", "POST", { body: "Follow up" }),
    200,
    "follow up",
  );
  detail = await request(lead, url);
  assert.equal(detail.data.question.status, "Waiting for reply");
  assert.equal(detail.data.question.resolved, false);
  const notifications = await request(other, "/api/clubs/club-ai");
  assert.ok(
    !notifications.data.notifications.some((n) => n.type === "Member Question"),
  );
  const leadNotifications = await request(lead, "/api/notifications");
  assert.ok(
    leadNotifications.data.notifications.some(
      (n) => n.type === "Member Question",
    ),
  );
  const event = workspace.data.events[0];
  assert.ok(event);
  const rsvp = `/api/clubs/${event.clubId}/events/${event.eventId}/rsvp`;
  status(
    await request(sofia, rsvp, "POST", {
      attending: true,
      userId: "qa-other-member",
    }),
    200,
    "own RSVP only",
  );
  status(
    await request(sofia, rsvp, "POST", { attending: false }),
    200,
    "cancel RSVP",
  );
  const ics = await fetch(base + "/api/clubs/club-ai/calendar.ics");
  assert.equal(ics.status, 200);
  assert.match(await ics.text(), /BEGIN:VCALENDAR/);
  status(
    await request(lead, "/api/clubs/club-ai/posts", "POST", {
      title: "QA leader draft",
      caption: "QA",
      targetAccountIds: [],
    }),
    201,
    "leader still authors",
  );
  status(
    await request(editor, "/api/clubs/club-ai/posts", "POST", {
      title: "QA editor draft",
      caption: "QA",
      targetAccountIds: [],
    }),
    201,
    "editor still authors",
  );
  status(
    await request(lead, "/api/clubs/club-ai/members/usr-contrib-ai", "PATCH", {
      role: "CLUB_LEAD",
    }),
    403,
    "lead cannot promote lead",
  );
  status(
    await request(lead, "/api/clubs/club-ai/members/usr-contrib-ai", "PATCH", {
      role: "EDITOR",
    }),
    200,
    "lead can assign editor",
  );
  status(
    await request(sofia, "/api/clubs/club-ai/posts", "POST", {
      title: "QA role switch",
      caption: "QA",
      targetAccountIds: [],
    }),
    201,
    "permissions follow changed role",
  );
  console.log(
    `PASS: ${count} isolated HTTP checks including all existing mutation routes, private questions, RSVP, role changes and leader/editor authoring.`,
  );
} finally {
  proc.kill();
  await new Promise((r) => proc.once("exit", r));
  await rm(temp, { recursive: true, force: true });
}
