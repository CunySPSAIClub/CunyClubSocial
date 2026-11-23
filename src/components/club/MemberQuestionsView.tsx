import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import type { ClubEvent, MemberQuestion } from "../../types";

export function AskQuestionButton({ event }: { event: ClubEvent }) {
  const { session, activeClubId } = useAuth();
  const membership = session?.memberships.find(
    (m) =>
      (m.clubId === event.clubId || event.coSponsorClubIds?.includes(m.clubId)) && m.clubId === activeClubId &&
      m.status === "Active" &&
      m.role === "CONTRIBUTOR",
  );
  if (!membership || session?.effectiveAdminRole) return null;
  return (
    <button
      type="button"
      className="text-xs font-medium text-[#004B87] underline"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("ask-club", {
            detail: { clubId: membership.clubId, event },
          }),
        )
      }
    >
      Ask a question
    </button>
  );
}

export function MemberQuestionsView({
  clubId,
  leader = false,
  event,
  onChange,
}: {
  clubId: string;
  leader?: boolean;
  event?: ClubEvent | null;
  onChange?: () => void;
}) {
  const { apiFetch, session } = useAuth();
  const [questions, setQuestions] = useState<MemberQuestion[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [topic, setTopic] = useState("General");
  const [body, setBody] = useState("");
  const [reply, setReply] = useState("");
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const load = useCallback(async () => {
    try {
      const data = await apiFetch<{ questions: MemberQuestion[] }>(
        `/api/clubs/${clubId}/member-questions`,
      );
      setQuestions(data.questions);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to load questions.");
    } finally {
      setLoading(false);
    }
  }, [apiFetch, clubId]);
  useEffect(() => {
    setSelected(null);
    setReply("");
    setBody(event ? `Question about ${event.title}: ` : "");
    setTopic(event ? "Events" : "General");
    setLoading(true);
    void load();
  }, [load, event]);
  const current = questions.find((q) => q.questionId === selected);
  const run = async (action: () => Promise<void>) => {
    setBusy(true);
    setError("");
    try {
      await action();
      await load();
      onChange?.();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to save question.");
    } finally {
      setBusy(false);
    }
  };
  const open = (q: MemberQuestion) => {
    setSelected(q.questionId);
    setReply("");
    void run(async () => {
      await apiFetch(
        `/api/clubs/${clubId}/member-questions/${q.questionId}/read`,
        { method: "POST" },
      );
    });
  };
  return (
    <section className="space-y-5">
      <h1 className="text-xl font-bold">
        {leader ? "Member Questions" : "Ask the Club"}{" "}
        <span className="text-sm text-slate-600">
          (
          {
            questions.filter((q) =>
              q.unreadByUserIds.includes(session!.user.userId),
            ).length
          }{" "}
          unread)
        </span>
      </h1>
      <p className="text-sm text-slate-600">
        Private conversations between each member and this club’s leaders and
        editors.
      </p>
      {error && (
        <div role="alert" className="text-red-700">
          {error}{" "}
          <button onClick={() => void load()} className="underline">
            Retry
          </button>
        </div>
      )}
      {!leader && (
        <form
          className="bg-white border rounded-lg p-5 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            void run(async () => {
              const result = await apiFetch<{ question: MemberQuestion }>(
                `/api/clubs/${clubId}/member-questions`,
                {
                  method: "POST",
                  body: JSON.stringify({
                    topic,
                    body,
                    eventId: event?.eventId,
                  }),
                },
              );
              setSelected(result.question.questionId);
              setBody("");
            });
          }}
        >
          {event && (
            <p className="text-sm font-semibold">About: {event.title}</p>
          )}
          <label className="block text-sm">
            Topic
            <select
              className="block border rounded p-2 w-full"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              {["General", "Events", "Joining/Membership", "Other"].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            Your message
            <textarea
              required
              maxLength={5000}
              className="block w-full border rounded p-2"
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
          <button
            disabled={busy || !body.trim()}
            className="px-4 py-2 rounded bg-[#004B87] text-white disabled:opacity-50"
          >
            Send question
          </button>
        </form>
      )}
      <label className="block text-sm">
        Filter{" "}
        <select
          className="border rounded p-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {["All", "Waiting for reply", "Answered"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      {loading ? (
        <p role="status">Loading questions…</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            {questions
              .filter((q) => filter === "All" || q.status === filter)
              .map((q) => (
                <button
                  key={q.questionId}
                  onClick={() => open(q)}
                  className="block text-left w-full bg-white border rounded-lg p-4"
                >
                  <strong>
                    {leader ? `${q.memberName} · ` : ""}
                    {q.topic}
                    {q.unreadByUserIds.includes(session!.user.userId)
                      ? " · Unread"
                      : ""}
                  </strong>
                  <p className="text-sm whitespace-pre-wrap">
                    {q.messages[0].body}
                  </p>
                  <p className="text-xs text-slate-600">
                    {q.status}
                    {q.resolved ? " · Resolved" : ""}
                  </p>
                </button>
              ))}
            {!questions.length && <p>No questions yet.</p>}
          </div>
          {current && (
            <div className="bg-white border rounded-lg p-5 space-y-4">
              <h2 className="font-semibold">
                {current.topic}
                {current.eventTitle ? `: ${current.eventTitle}` : ""}
              </h2>
              {current.messages.map((m) => (
                <article key={m.messageId} className="border-b pb-3">
                  <p className="text-xs text-slate-600">
                    {m.authorName}
                    {m.fromLeader ? " · Club team" : ""} ·{" "}
                    {new Date(m.createdAt).toLocaleString()}
                  </p>
                  <p className="text-sm whitespace-pre-wrap">{m.body}</p>
                </article>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void run(async () => {
                    await apiFetch(
                      `/api/clubs/${clubId}/member-questions/${current.questionId}/messages`,
                      { method: "POST", body: JSON.stringify({ body: reply }) },
                    );
                    setReply("");
                  });
                }}
              >
                <label className="text-sm">
                  {leader ? "Reply" : "Follow-up"}
                  <textarea
                    required
                    maxLength={5000}
                    rows={3}
                    className="block w-full border rounded p-2"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                  />
                </label>
                <button
                  disabled={busy || !reply.trim()}
                  className="mt-2 px-4 py-2 bg-[#004B87] text-white rounded disabled:opacity-50"
                >
                  {leader ? "Send reply" : "Send follow-up"}
                </button>
              </form>
              {leader && !current.resolved && (
                <button
                  disabled={busy}
                  className="text-sm underline"
                  onClick={() =>
                    void run(async () => {
                      await apiFetch(
                        `/api/clubs/${clubId}/member-questions/${current.questionId}/resolve`,
                        { method: "POST" },
                      );
                    })
                  }
                >
                  Mark Resolved
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
