# Contributor members and private questions

Contributor is a club-scoped member role. Contributors can view Overview, Announcements, Upcoming Events, Club Event Calendar, published Club Blog stories, and Forums. They can manage only their own RSVPs and private Ask the Club conversations. Social publishing, analytics, reminders setup, WhatsApp management, tasks, and Administration are hidden. Server middleware rejects other mutations with HTTP 403 and `Not allowed for your role` (authentication sign-in/out remains available).

Ask the Club conversations are persisted separately from shared Messaging Center broadcasts. Only the member who opened a conversation and the club's active Leads/Editors can read or reply. Club-wide workspace notifications exclude other people's private question notifications. Conversations support topics, event context, follow-ups, Waiting/Answered filters, unread counts, and leader resolution. Notifications go to club Leads/Editors for new questions and to the member for replies. Email uses existing opt-in preferences and SMTP settings; without SMTP it is recorded as queued, never claimed as delivered. Email alerts do not include private message bodies.

The selected club is sent in X-Club-Id for global API operations, validated against server memberships. An explicit club API path always overrides that header. Club Leads retain member role management, with Contributor as the invitation and join approval default. Only Student Life can assign or change Club Lead roles.

## Demo test

1. Sign in as Sofia Patel (sofia.patel@spsmail.cuny.edu), Contributor in Artificial Intelligence Club. The demo has one answered and one waiting question and existing event RSVPs.
2. Open Ask the Club, choose a topic and send a question. Open an event and use Ask a question to verify its name is prefilled.
3. Sign out and enter Aisha Rahman's Club Lead persona. Under Club Community, open Member Questions, choose the question, reply and optionally mark Resolved.
4. Sign back in as Sofia, read the reply, and send a follow-up. The status returns to Waiting for reply.
5. Open Upcoming Events or Club Event Calendar. RSVP, cancel, and export the existing .ics calendar entry. Publishing and management controls are absent.
6. Sign in as a second member or a different club's leader: Sofia's private conversations must not be readable.

## Validation

- `npm run lint`
- `npm run build`
- `node --import tsx --test tests/*.test.ts`
- `node tests/contributorEndpoint.check.mjs`

The endpoint check starts native Node in an isolated temporary directory, checks every existing mutation route for Contributor rejection, question privacy and replies, notifications, own RSVP, join approval default, role promotion limits, and multiple club roles. It never edits the tracked runtime JSON or sends real SMTP/social messages.
