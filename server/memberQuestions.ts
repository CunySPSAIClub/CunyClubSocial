import { randomUUID } from "node:crypto";
import type { Express, Request, Response, NextFunction } from "express";
import type { MemberQuestion, User } from "../src/types.ts";
import { getUserEffectiveClubRole } from "./rbac.ts";
import { getDb, pushNotification, saveDb } from "./store.ts";
import { sendMemberQuestionEmail } from "./reminders.ts";

type Authed = Request & { currentUser?: User };
const leaderRoles = ["CLUB_LEAD", "EDITOR"];
export function registerMemberQuestions(app: Express) {
  app.use(
    "/api/clubs/:id/member-questions",
    (req: Authed, res: Response, next: NextFunction) => {
      const role =
        req.currentUser &&
        getUserEffectiveClubRole(req.currentUser, String(req.params.id));
      if (
        !role ||
        !["CONTRIBUTOR", ...leaderRoles, "SL_ADMIN", "SL_SUPER_ADMIN"].includes(
          role,
        )
      ) {
        res.status(403).json({ error: "Not allowed for your role" });
        return;
      }
      next();
    },
  );
  const leaders = (clubId: string) =>
    getDb().users.filter((u) =>
      leaderRoles.includes(getUserEffectiveClubRole(u, clubId) || ""),
    );
  const canRead = (user: User, q: MemberQuestion) =>
    q.memberUserId === user.userId ||
    leaderRoles.includes(getUserEffectiveClubRole(user, q.clubId) || "");
  const notify = (q: MemberQuestion, recipients: User[], title: string) => {
    for (const recipient of recipients) {
      pushNotification({
        userId: recipient.userId,
        clubId: q.clubId,
        type: "Member Question",
        title,
        message: `${q.topic}${q.eventTitle ? `: ${q.eventTitle}` : ""}. Open ${recipient.userId === q.memberUserId ? "Ask the Club" : "Member Questions"} to read the private conversation.`,
      });
      void sendMemberQuestionEmail(recipient, q.clubId, title).catch(() => {});
    }
  };
  app.get("/api/clubs/:id/member-questions", (req: Authed, res) => {
    const user = req.currentUser!;
    const questions = getDb()
      .memberQuestions.filter(
        (q) => q.clubId === req.params.id && canRead(user, q),
      )
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    res.json({
      questions,
      unreadCount: questions.filter((q) =>
        q.unreadByUserIds.includes(user.userId),
      ).length,
    });
  });
  app.get("/api/clubs/:id/member-questions/:questionId", (req: Authed, res) => {
    const q = getDb().memberQuestions.find(
      (q) =>
        q.clubId === req.params.id &&
        q.questionId === req.params.questionId &&
        canRead(req.currentUser!, q),
    );
    if (!q) {
      res.status(404).json({ error: "Question not found." });
      return;
    }
    res.json({ question: q });
  });
  app.post("/api/clubs/:id/member-questions", (req: Authed, res) => {
    const user = req.currentUser!,
      clubId = String(req.params.id);
    if (getUserEffectiveClubRole(user, clubId) !== "CONTRIBUTOR") {
      res.status(403).json({ error: "Not allowed for your role" });
      return;
    }
    const { topic, body, eventId } = req.body || {};
    if (
      !["General", "Events", "Joining/Membership", "Other"].includes(topic) ||
      typeof body !== "string" ||
      !body.trim() ||
      body.length > 5000
    ) {
      res
        .status(400)
        .json({
          error:
            "Choose a topic and write a message (maximum 5,000 characters).",
        });
      return;
    }
    const event =
      eventId &&
      getDb().events.find(
        (e) =>
          e.eventId === eventId &&
          (e.clubId === clubId || e.coSponsorClubIds?.includes(clubId)),
      );
    if (eventId && !event) {
      res.status(400).json({ error: "Event does not belong to this club." });
      return;
    }
    const now = new Date().toISOString(),
      recipients = leaders(clubId);
    const question: MemberQuestion = {
      questionId: randomUUID(),
      clubId,
      memberUserId: user.userId,
      memberName: user.name,
      topic,
      eventId: event?.eventId,
      eventTitle: event?.title,
      status: "Waiting for reply",
      resolved: false,
      messages: [
        {
          messageId: randomUUID(),
          authorUserId: user.userId,
          authorName: user.name,
          body: body.trim(),
          createdAt: now,
          fromLeader: false,
        },
      ],
      unreadByUserIds: recipients.map((u) => u.userId),
      createdAt: now,
      updatedAt: now,
    };
    getDb().memberQuestions.unshift(question);
    saveDb();
    notify(question, recipients, "New private member question");
    res.status(201).json({ question });
  });
  app.post(
    "/api/clubs/:id/member-questions/:questionId/:action",
    (req: Authed, res) => {
      const user = req.currentUser!,
        action = String(req.params.action);
      const q = getDb().memberQuestions.find(
        (q) =>
          q.clubId === req.params.id &&
          q.questionId === req.params.questionId &&
          canRead(user, q),
      );
      if (!q) {
        res.status(404).json({ error: "Question not found." });
        return;
      }
      const fromLeader = leaderRoles.includes(
        getUserEffectiveClubRole(user, q.clubId) || "",
      );
      if (action === "read") {
        q.unreadByUserIds = q.unreadByUserIds.filter(
          (id) => id !== user.userId,
        );
      } else if (action === "resolve") {
        if (!fromLeader) {
          res.status(403).json({ error: "Not allowed for your role" });
          return;
        }
        q.resolved = true;
        q.status = "Answered";
        q.updatedAt = new Date().toISOString();
      } else if (action === "messages") {
        const body = req.body?.body;
        if (typeof body !== "string" || !body.trim() || body.length > 5000) {
          res
            .status(400)
            .json({ error: "Write a message (maximum 5,000 characters)." });
          return;
        }
        const now = new Date().toISOString();
        q.messages.push({
          messageId: randomUUID(),
          authorUserId: user.userId,
          authorName: user.name,
          body: body.trim(),
          createdAt: now,
          fromLeader,
        });
        q.status = fromLeader ? "Answered" : "Waiting for reply";
        q.resolved = false;
        q.updatedAt = now;
        const recipients = fromLeader
          ? getDb().users.filter((u) => u.userId === q.memberUserId)
          : leaders(q.clubId);
        q.unreadByUserIds = recipients.map((u) => u.userId);
        saveDb();
        notify(
          q,
          recipients,
          fromLeader ? "Your club replied" : "Member question follow-up",
        );
      } else {
        res.status(404).json({ error: "Action not found." });
        return;
      }
      saveDb();
      res.json({ question: q });
    },
  );
}
