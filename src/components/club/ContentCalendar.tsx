import { useMemo, useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import type { ClubEvent, Post, SocialAccount } from '../../types';
import { StatusText } from '../StatusText';

interface ContentCalendarProps {
  posts: Post[];
  events: ClubEvent[];
  accounts: SocialAccount[];
  onSelectPost: (post: Post) => void;
}

type CalendarViewMode = 'Monthly' | 'Weekly' | 'Daily' | 'List';

interface CalendarEntry {
  id: string;
  dateStr: string; // YYYY-MM-DD
  timeLabel: string;
  title: string;
  kind: 'Post' | 'Club Event';
  platformLabel: string;
  status: string;
  creator: string;
  relatedEvent?: string;
  rawPost?: Post;
}

export function ContentCalendar({
  posts,
  events,
  accounts,
  onSelectPost,
}: ContentCalendarProps) {
  const [viewMode, setViewMode] = useState<CalendarViewMode>('Monthly');
  const [platformFilter, setPlatformFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedDay, setSelectedDay] = useState('2026-11-16');

  const entries: CalendarEntry[] = useMemo(() => {
    const accountMap = new Map(accounts.map((a) => [a.accountId, a]));
    const postEntries: CalendarEntry[] = posts.map((p) => {
      const iso = p.scheduledAt || p.publishedAt || p.createdAt;
      const d = new Date(iso);
      const dateStr = d.toISOString().slice(0, 10);
      const timeLabel = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const platformLabel =
        p.targetAccountIds
          .map((id) => accountMap.get(id)?.platform)
          .filter(Boolean)
          .join(' · ') || 'Draft';
      return {
        id: p.postId,
        dateStr,
        timeLabel,
        title: p.title,
        kind: 'Post',
        platformLabel,
        status: p.status,
        creator: p.authorName,
        relatedEvent: p.relatedEvent,
        rawPost: p,
      };
    });

    const eventEntries: CalendarEntry[] = events.map((ev) => ({
      id: ev.eventId,
      dateStr: ev.date,
      timeLabel: ev.time,
      title: ev.title,
      kind: 'Club Event',
      platformLabel: ev.location,
      status: 'Planned Event',
      creator: 'Club Calendar',
      relatedEvent: ev.description,
    }));

    return [...postEntries, ...eventEntries]
      .filter((item) => {
        if (platformFilter !== 'All' && !item.platformLabel.includes(platformFilter)) return false;
        if (statusFilter !== 'All' && item.status !== statusFilter) return false;
        return true;
      })
      .sort((a, b) => a.dateStr.localeCompare(b.dateStr));
  }, [posts, events, accounts, platformFilter, statusFilter]);

  // November 2026 grid (Nov 1 2026 is Sunday)
  const novemberDays = Array.from({ length: 30 }, (_, i) => {
    const dayNum = i + 1;
    const dateStr = `2026-11-${String(dayNum).padStart(2, '0')}`;
    return { dayNum, dateStr };
  });

  // Weekly view centered around Nov 15–21, 2026
  const weekDays = novemberDays.slice(14, 21);

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Content Calendar & Club Events</h1>
          <p className="text-sm text-slate-600 mt-0.5">
            Coordinate scheduled social media posts alongside planned organization events (Module 7).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value)}
            aria-label="Filter by platform"
            className="px-3 py-1.5 text-xs border border-slate-300 rounded-md bg-white"
          >
            <option value="All">All Platforms</option>
            <option value="Facebook Pages">Facebook Pages</option>
            <option value="Instagram Professional">Instagram Professional</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter by status"
            className="px-3 py-1.5 text-xs border border-slate-300 rounded-md bg-white"
          >
            <option value="All">All Statuses</option>
            <option value="Scheduled">Scheduled</option>
            <option value="In Review">In Review</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Failed">Failed</option>
            <option value="Planned Event">Planned Event</option>
          </select>

          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
            {(['Monthly', 'Weekly', 'Daily', 'List'] as CalendarViewMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === mode
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {viewMode === 'Monthly' && (
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-[#004B87]" />
              <span>November 2026</span>
            </span>
            <span className="text-xs text-slate-500">Click any post to open in Content Studio</span>
          </div>
          <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d} className="py-2 px-3 border-r border-slate-200 last:border-r-0">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {novemberDays.map(({ dayNum, dateStr }) => {
              const dayItems = entries.filter((e) => e.dateStr === dateStr);
              return (
                <div
                  key={dateStr}
                  onClick={() => {
                    setSelectedDay(dateStr);
                  }}
                  className={`min-h-[112px] p-2 border-b border-r border-slate-200 flex flex-col gap-1.5 ${
                    selectedDay === dateStr ? 'bg-sky-50/40' : 'bg-white'
                  }`}
                >
                  <div className="text-xs font-mono-tabular font-semibold text-slate-500">
                    {dayNum}
                  </div>
                  {dayItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.rawPost) onSelectPost(item.rawPost);
                        else {
                          setSelectedDay(dateStr);
                          setViewMode('Daily');
                        }
                      }}
                      className={`text-left p-1.5 rounded border text-[11px] leading-tight cursor-pointer ${
                        item.kind === 'Club Event'
                          ? 'bg-slate-100 border-slate-300 text-slate-800'
                          : 'bg-sky-50 border-sky-200 text-slate-900 hover:border-[#004B87]'
                      }`}
                    >
                      <div className="font-semibold truncate">{item.title}</div>
                      <div className="text-[10px] text-slate-500 truncate mt-0.5">
                        {item.status} · {item.timeLabel}
                      </div>
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {viewMode === 'Weekly' && (
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="px-5 py-3.5 border-b border-slate-200 text-sm font-semibold text-slate-900">
            Week of Nov 15 – Nov 21, 2026
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {weekDays.map(({ dayNum, dateStr }) => {
              const dayItems = entries.filter((e) => e.dateStr === dateStr);
              return (
                <div key={dateStr} className="p-3 min-h-[220px] space-y-2">
                  <div className="text-xs font-mono-tabular font-semibold text-slate-700 border-b border-slate-100 pb-1.5">
                    Nov {dayNum}
                  </div>
                  {dayItems.length === 0 ? (
                    <div className="text-[11px] text-slate-400">No items</div>
                  ) : (
                    dayItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          if (item.rawPost) onSelectPost(item.rawPost);
                        }}
                        className="w-full text-left p-2 rounded border border-slate-200 hover:border-[#004B87] text-xs space-y-1 cursor-pointer"
                      >
                        <div className="font-semibold text-slate-900">{item.title}</div>
                        <div className="text-[11px] text-slate-500">{item.platformLabel}</div>
                        <StatusText status={item.status} />
                      </button>
                    ))
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {viewMode === 'Daily' && (
        <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#004B87]" />
              <span>Daily Schedule for {selectedDay}</span>
            </h2>
            <input
              type="date"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="px-3 py-1.5 text-xs font-mono-tabular border border-slate-300 rounded-md"
            />
          </div>
          <div className="divide-y divide-slate-200">
            {entries.filter((e) => e.dateStr === selectedDay).length === 0 ? (
              <div className="py-8 text-center text-sm text-slate-500">
                No scheduled posts or club events on {selectedDay}.
              </div>
            ) : (
              entries
                .filter((e) => e.dateStr === selectedDay)
                .map((item) => (
                  <div key={item.id} className="py-3.5 flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                      <div className="text-xs text-slate-500">
                        {item.timeLabel} · {item.kind} · {item.platformLabel} · Creator: {item.creator}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <StatusText status={item.status} />
                      {item.rawPost && (
                        <button
                          type="button"
                          onClick={() => onSelectPost(item.rawPost!)}
                          className="text-xs font-medium text-[#004B87] hover:underline cursor-pointer"
                        >
                          Edit Post
                        </button>
                      )}
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      )}

      {viewMode === 'List' && (
        <div className="bg-white border border-slate-200 rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-xs font-semibold text-slate-600">
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Platform / Location</th>
                <th className="py-3 px-4">Creator</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs">
              {entries.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-mono-tabular text-slate-700 whitespace-nowrap">
                    {item.dateStr} · {item.timeLabel}
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-900">{item.title}</div>
                    {item.relatedEvent && (
                      <div className="text-slate-500 truncate max-w-xs">{item.relatedEvent}</div>
                    )}
                  </td>
                  <td className="py-3 px-4 text-slate-600">{item.platformLabel}</td>
                  <td className="py-3 px-4 text-slate-600">{item.creator}</td>
                  <td className="py-3 px-4">
                    <StatusText status={item.status} />
                  </td>
                  <td className="py-3 px-4 text-right">
                    {item.rawPost && (
                      <button
                        type="button"
                        onClick={() => onSelectPost(item.rawPost!)}
                        className="text-xs font-medium text-[#004B87] hover:underline cursor-pointer"
                      >
                        Open in Studio
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
