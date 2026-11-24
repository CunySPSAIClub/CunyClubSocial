import React, { useMemo, useState, useEffect } from 'react';
import {
  Search,
  Calendar,
  Users,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Clock,
  MapPin,
  Mail,
  Shield,
  Sparkles,
  Share2,
  CheckCircle2,
  Globe,
  Menu,
  X,
  Lock,
  ChevronRight,
  Filter,
  Check,
  Star,
  BookOpen,
  Newspaper,
  Compass,
  HelpCircle,
  Smartphone
} from 'lucide-react';
import {
  CLUBS_DATA,
  EVENTS_DATA,
  ALL_CATEGORIES,
  ClubDiscoveryItem,
  DiscoveryEvent,
  ClubChannel
} from '../data/clubDiscoveryData';
import { ClubLogoMark, StudentLifeLogo } from './BrandMarks';

// Recognizable Brand SVG Icons
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.13 19.76 7.87 19.01L7.57 18.83L4.45 19.65L5.28 16.61L5.08 16.29C4.26 14.99 3.82 13.47 3.82 11.91C3.82 7.38 7.51 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.86 6.11C19.42 7.66 20.27 9.72 20.27 11.92C20.27 16.46 16.58 20.16 12.05 20.16ZM16.56 14.37C16.31 14.25 15.1 13.65 14.88 13.57C14.65 13.48 14.49 13.44 14.33 13.69C14.16 13.93 13.7 14.48 13.55 14.64C13.41 14.81 13.27 14.83 13.02 14.71C12.77 14.58 11.97 14.32 11.02 13.48C10.28 12.82 9.78 12.01 9.64 11.76C9.5 11.52 9.62 11.38 9.75 11.26C9.86 11.15 10 10.97 10.12 10.83C10.25 10.69 10.29 10.58 10.37 10.42C10.45 10.25 10.41 10.11 10.35 9.99C10.29 9.86 9.8 8.66 9.6 8.17C9.4 7.69 9.2 7.76 9.05 7.75C8.91 7.74 8.75 7.74 8.58 7.74C8.42 7.74 8.16 7.8 7.93 8.05C7.71 8.3 7.08 8.89 7.08 10.09C7.08 11.29 7.95 12.45 8.08 12.61C8.2 12.78 9.8 15.24 12.26 16.3C12.85 16.55 13.3 16.7 13.66 16.82C14.25 17.01 14.78 16.98 15.2 16.92C15.68 16.85 16.66 16.32 16.87 15.75C17.07 15.17 17.07 14.68 17.01 14.58C16.95 14.48 16.81 14.42 16.56 14.37Z" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11V9.36a6.34 6.34 0 0 0-.79-.05A6.33 6.33 0 0 0 3 15.64 6.33 6.33 0 0 0 9.33 22a6.33 6.33 0 0 0 6.33-6.33V9.08a8.28 8.28 0 0 0 4.88 1.58V7.2a4.83 4.83 0 0 1-.95-.51z" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function getGoogleCalendarUrl(ev: DiscoveryEvent): string {
  let hh = 18;
  let mm = 0;
  const match = (ev.time || "").match(/(\d+):(\d+)\s*(AM|PM)?/i);
  if (match) {
    hh = parseInt(match[1], 10);
    mm = parseInt(match[2], 10);
    const meridiem = match[3] ? match[3].toUpperCase() : null;
    if (meridiem === "PM" && hh < 12) hh += 12;
    if (meridiem === "AM" && hh === 12) hh = 0;
  }
  const utcHh = (hh + 5) % 24;
  const pad = (n: number) => String(n).padStart(2, "0");
  const dClean = ev.date.replace(/-/g, "");
  const startCode = `${dClean}T${pad(utcHh)}${pad(mm)}00Z`;
  const endCode = `${dClean}T${pad((utcHh + 1) % 24)}${pad(mm)}00Z`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${startCode}/${endCode}&details=${encodeURIComponent(ev.description)}&location=${encodeURIComponent(ev.location)}`;
}

export function StudentDiscoveryApp() {
  // Navigation: 'home' | 'clubs' | 'events' | 'club-profile'
  const [currentTab, setCurrentTab] = useState<'home' | 'clubs' | 'events' | 'club-profile'>('home');
  const [selectedClubId, setSelectedClubId] = useState<string>('club-ai');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search & Filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [eventSearch, setEventSearch] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);


  // Sync hash routing on mount
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('club/')) {
        const cid = hash.replace('club/', '');
        const found = CLUBS_DATA.find((c) => c.clubId === cid);
        if (found) {
          setSelectedClubId(cid);
          setCurrentTab('club-profile');
        }
      } else if (hash === 'clubs') {
        setCurrentTab('clubs');
      } else if (hash === 'events') {
        setCurrentTab('events');
      } else if (hash === 'home' || hash === '') {
        setCurrentTab('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (tab: 'home' | 'clubs' | 'events' | 'club-profile', clubId?: string) => {
    if (tab === 'club-profile' && clubId) {
      setSelectedClubId(clubId);
      window.location.hash = `club/${clubId}`;
    } else {
      window.location.hash = tab;
    }
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedClub = useMemo(() => {
    return CLUBS_DATA.find((c) => c.clubId === selectedClubId) || CLUBS_DATA[0];
  }, [selectedClubId]);

  // Filtered clubs for directory
  const filteredClubs = useMemo(() => {
    return CLUBS_DATA.filter((club) => {
      const matchesSearch =
        !searchQuery.trim() ||
        club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        club.shortCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        club.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        club.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' || club.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  // Filtered events
  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((ev) => {
      if (!eventSearch.trim()) return true;
      const q = eventSearch.toLowerCase();
      return (
        ev.title.toLowerCase().includes(q) ||
        ev.clubName.toLowerCase().includes(q) ||
        ev.description.toLowerCase().includes(q) ||
        ev.format.toLowerCase().includes(q)
      );
    });
  }, [eventSearch]);

  const clubEvents = useMemo(() => {
    return EVENTS_DATA.filter((ev) => ev.clubId === selectedClub.clubId);
  }, [selectedClub.clubId]);

  const featuredClubs = useMemo(() => {
    return CLUBS_DATA.filter((c) => c.isFeatured);
  }, []);

  const upcomingPreviewEvents = useMemo(() => {
    return EVENTS_DATA.slice(0, 3);
  }, []);

  const handleShareClub = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#FFB81C]/30 selection:text-slate-900 overflow-x-hidden">
      {/* Top Banner & Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        {/* Top Community Utility Bar: Student & Alumni Social Networks */}
        <div className="bg-gradient-to-r from-[#12072B] via-[#1E0B3C] to-[#12072B] text-white border-b border-violet-900/30 shadow-xs relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 text-xs">
            {/* Left Tagline & Badge */}
            <div className="flex items-center gap-2 min-w-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-950/60 text-[#FFD100] text-[10px] sm:text-[11px] font-bold tracking-wide uppercase shadow-2xs shrink-0 border border-violet-500/30">
                <Sparkles className="w-3 h-3 text-[#FFD100] animate-pulse" />
                <span>SPS Networks</span>
              </span>
              <p className="text-white/90 text-xs font-medium truncate hidden sm:block">
                Connect with 25,000+ CUNY SPS students &amp; alumni on official school channels:
              </p>
            </div>

            {/* Right Action Pills: Student LinkedIn & SPS Facebook */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <a
                href="https://www.linkedin.com/school/cuny-school-of-professional-studies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on CUNY SPS Student & Alumni LinkedIn"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs transition-all duration-150 shadow-sm hover:shadow-md hover:shadow-[#0A66C2]/40 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer border border-white/20"
                title="Connect with CUNY SPS on LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5 fill-white shrink-0 group-hover:rotate-6 transition-transform" />
                <span className="font-semibold tracking-tight">Student LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
              </a>

              <a
                href="https://www.facebook.com/cunysps/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join CUNY SPS Student Facebook Community"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2] hover:bg-[#0d65d9] text-white font-semibold text-xs transition-all duration-150 shadow-sm hover:shadow-md hover:shadow-[#1877F2]/40 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer border border-white/20"
                title="Follow CUNY SPS on Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5 fill-white shrink-0 group-hover:rotate-6 transition-transform" />
                <span className="font-semibold tracking-tight">SPS Facebook</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
              </a>

              <a
                href="https://missme2026.github.io/club-hub-demo/?v=23#welcome"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Companion Mobile Demo"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB71B]/20 hover:bg-[#FFB71B]/30 text-[#FFD100] font-semibold text-xs transition-all duration-150 shadow-sm border border-[#FFB71B]/40 group cursor-pointer"
                title="Launch companion Club Social Hub mobile interactive demo"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#FFB71B] shrink-0" />
                <span className="font-semibold tracking-tight">Mobile Demo</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
              </a>

              <a
                href="https://www.cuny.edu/cuny-login/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Access official CUNY Login Portal"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-900/60 hover:bg-violet-800 text-white font-semibold text-xs transition-all duration-150 shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.98] group cursor-pointer border border-violet-400/30"
                title="Sign into CUNY Institutional Portal (CUNYfirst, Brightspace, SSO)"
              >
                <Lock className="w-3.5 h-3.5 text-[#FFD100] shrink-0" />
                <span className="font-semibold tracking-tight">CUNY Login</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Brand Logo & Name */}
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#7c3aed] rounded-lg p-1"
              aria-label="CUNY SPS Club Social Hub Home"
            >
              <img
                src="./club-social-hub-mark.svg"
                alt="Club Social Hub logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shrink-0 shadow-sm transition-transform group-hover:scale-105"
                width="40"
                height="40"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight tracking-tight">
                    Club Social Hub
                  </span>
                  <span className="w-2 h-2 rounded-xs bg-[#B6EB00] shrink-0 inline-block" title="Official Hub"></span>
                </div>
                <p className="text-[11px] text-slate-500 truncate font-medium hidden xs:block">
                  CUNY SPS · Student Life
                </p>
              </div>
            </button>

            {/* Right Action: Quick Network Badges & Universal Burger Menu */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <a
                href="https://www.linkedin.com/school/cuny-school-of-professional-studies/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] rounded-lg text-xs font-semibold transition-colors"
                title="Connect on CUNY SPS Student LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5 fill-[#0A66C2] shrink-0" />
                <span>Student LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href="https://www.facebook.com/cunysps/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] rounded-lg text-xs font-semibold transition-colors"
                title="Visit SPS Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5 fill-[#1877F2] shrink-0" />
                <span>SPS Facebook</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href="https://www.cuny.edu/cuny-login/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-100 hover:bg-violet-200 text-violet-900 font-semibold text-xs transition-colors"
                title="Sign into CUNY Institutional Portal"
              >
                <Lock className="w-3.5 h-3.5 text-violet-700 shrink-0" />
                <span className="hidden xs:inline">CUNY Login</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              {/* Universal Burger Menu Button (Available across desktop & mobile) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-violet-50 hover:text-violet-700 active:bg-violet-100 rounded-xl transition-all border border-slate-200 shadow-xs cursor-pointer"
                aria-label="Toggle navigation sections menu"
              >
                {mobileMenuOpen ? (
                  <>
                    <X className="w-4 h-4 text-slate-700" />
                    <span>Close</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-4 h-4 text-violet-600" />
                    <span>Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Slide-out Navigation Drawer Modal */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop Scrim */}
            <div
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Drawer Panel */}
            <aside
              className="relative w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col z-10 border-l border-slate-200 overflow-y-auto"
              aria-label="Campus Sections Menu"
            >
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-slate-900 via-violet-950 to-slate-900 text-white sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <img
                    src="./club-social-hub-mark.svg"
                    alt="Club Social Hub"
                    className="w-8 h-8 rounded-lg"
                  />
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-tight">CUNY SPS Menu &amp; Sections</h2>
                    <p className="text-[11px] text-violet-200">Campus Directory &amp; Student Life</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-5 space-y-6 flex-1">
                {/* 1. Campus Exploration Sections */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                    Campus Exploration
                  </p>
                  <button
                    type="button"
                    onClick={() => { navigateTo('home'); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      currentTab === 'home'
                        ? 'bg-violet-50 text-violet-700 font-bold border-l-4 border-violet-600 shadow-xs'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-violet-600" />
                      <span>Home / Overview</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>

                  <button
                    type="button"
                    onClick={() => { navigateTo('clubs'); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      currentTab === 'clubs' || currentTab === 'club-profile'
                        ? 'bg-violet-50 text-violet-700 font-bold border-l-4 border-violet-600 shadow-xs'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-indigo-600" />
                      <div className="text-left">
                        <div>Explore Clubs</div>
                        <div className="text-[11px] text-slate-500 font-normal">All 34 Recognized Organizations</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-bold bg-indigo-100 text-indigo-800 rounded-full">34</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { navigateTo('events'); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      currentTab === 'events'
                        ? 'bg-violet-50 text-violet-700 font-bold border-l-4 border-violet-600 shadow-xs'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-violet-600" />
                      <div className="text-left">
                        <div>Campus Events</div>
                        <div className="text-[11px] text-slate-500 font-normal">Meetings, Workshops &amp; Builds</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-bold bg-violet-100 text-violet-800 rounded-full">{EVENTS_DATA.length}</span>
                  </button>
                </div>

                {/* 2. OpenLab & Student Life Portal */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                    OpenLab &amp; Student Life
                  </p>
                  
                  <a
                    href="https://openlab.sps.cuny.edu/groups/student-organizations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-violet-500" />
                      <span>Student Organizations Hub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://openlab.sps.cuny.edu/thekiosk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Newspaper className="w-4 h-4 text-emerald-500" />
                      <span>The Kiosk (Student News)</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://openlab.sps.cuny.edu/openroad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-amber-500" />
                      <span>Open Road (Literary Magazine)</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://openlab.sps.cuny.edu/groups/cuny-sps-student-life/events/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-rose-500" />
                      <span>Master Student Life Calendar</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://openlab.sps.cuny.edu/studentlife/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Compass className="w-4 h-4 text-blue-500" />
                      <span>Office of Student Life</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>

                {/* 3. Official Institutional Access */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                    Institutional Access
                  </p>
                  
                  <a
                    href="https://www.cuny.edu/cuny-login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-violet-50 hover:text-violet-700 transition-colors border border-slate-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <Lock className="w-4 h-4 text-[#FFB71B]" />
                      <span>CUNY Login Portal</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://openlab.sps.cuny.edu/help/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-teal-500" />
                      <span>OpenLab Help &amp; Support</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>

                {/* 4. Official Student Networks */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                    Official Student Networks
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://www.linkedin.com/school/cuny-school-of-professional-studies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                    >
                      <LinkedInIcon className="w-4 h-4 fill-white shrink-0" />
                      <span>Student LinkedIn</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                    <a
                      href="https://www.facebook.com/cunysps/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#1877F2] hover:bg-[#0d65d9] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                    >
                      <FacebookIcon className="w-4 h-4 fill-white shrink-0" />
                      <span>SPS Facebook</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  </div>
                </div>

                {/* 5. Companion Web App Demo */}
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="https://missme2026.github.io/club-hub-demo/?v=23#welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-violet-900 to-indigo-900 text-white shadow-sm hover:opacity-95 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-5 h-5 text-[#FFD100]" />
                      <div className="text-left">
                        <div className="text-xs font-bold">Interactive Mobile Demo</div>
                        <div className="text-[10px] text-violet-200">Open companion mobile web app</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-violet-200" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-20 md:pb-0">
        {/* ========================================================================= */}
        {/* SCREEN 1: HOME                                                            */}
        {/* ========================================================================= */}
        {currentTab === 'home' && (
          <div className="space-y-12 pb-16">
            {/* Hero Section with Uploaded Authentic CUNY Student Community Photo */}
            <section
              className="relative bg-cover bg-center bg-no-repeat text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[520px] flex items-center justify-center"
              style={{ backgroundImage: "url('./img/hero-cuny-students.jpg')" }}
            >
              {/* High-contrast gradient scrim ensuring text legibility and cinematic depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90 backdrop-blur-[0.5px]" />
              <div className="absolute inset-0 bg-radial from-transparent via-slate-950/30 to-slate-950/70 pointer-events-none" />

              {/* Ambient Golden & Violet Glow Orbs */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none translate-y-1/3" />

              <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-violet-500/20 border border-violet-400/30 rounded-full text-xs font-semibold text-violet-200 backdrop-blur-md shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#FFB71B] animate-ping" />
                  <span className="text-[#FFB71B] font-bold">Club Social Hub</span>
                  <span className="text-violet-400">·</span>
                  <span>CUNY SPS Student Life Platform</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-50 to-amber-200 drop-shadow-md">
                  Find your next club at CUNY SPS
                </h1>

                <p className="text-base sm:text-xl font-bold text-[#FFD100] tracking-tight drop-shadow-sm">
                  Your student life, all in one place.
                </p>

                <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-sm">
                  Connect with fellow online and hybrid students, join active WhatsApp groups, participate in civic tech builds, and find your community across 34 recognized organizations.
                </p>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => navigateTo('clubs')}
                    className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] bg-gradient-to-r from-amber-500 via-amber-400 to-[#FFB71B] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base rounded-xl shadow-lg shadow-amber-900/40 hover:shadow-amber-900/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group border border-amber-300/40"
                  >
                    <span>Explore clubs</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('events')}
                    className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] bg-white/15 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/25 hover:border-white/40 backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-violet-300" />
                    <span>View upcoming events</span>
                  </button>
                  <a
                    href="https://missme2026.github.io/club-hub-demo/?v=23#welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3.5 min-h-[48px] bg-[#FFB71B]/20 hover:bg-[#FFB71B]/30 text-[#FFD100] font-semibold text-xs rounded-xl border border-[#FFB71B]/40 transition-all flex items-center justify-center gap-2 group cursor-pointer backdrop-blur-md"
                    title="Try the companion Club Social Hub interactive demo"
                  >
                    <Smartphone className="w-4 h-4 text-[#FFD100]" />
                    <span>Interactive Mobile Demo</span>
                    <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                  </a>
                </div>

                {/* Trust & Engagement Stats */}
                <div className="pt-8 grid grid-cols-3 gap-2 border-t border-white/15 max-w-lg mx-auto text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">34</div>
                    <div className="text-[11px] sm:text-xs text-amber-200/90 font-medium">Active Clubs</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">{EVENTS_DATA.length}</div>
                    <div className="text-[11px] sm:text-xs text-amber-200/90 font-medium">Upcoming Events</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#FFD100]">100%</div>
                    <div className="text-[11px] sm:text-xs text-amber-200/90 font-medium">Online Friendly</div>
                  </div>
                </div>
              </div>
            </section>

            {/* V0-STYLE BENTO GRID SHOWCASE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* TILE 1: Spotlit Featured Organization: AI Club (8 cols) */}
                <div className="lg:col-span-8 bg-gradient-to-br from-white via-violet-50/40 to-purple-50/20 rounded-3xl border border-violet-200/90 hover:border-violet-400 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
                  
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-violet-200 p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                          <img src="./club-logos/ai-club.jpg" alt="Artificial Intelligence Club logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-violet-100 text-violet-800 border border-violet-200">
                              <Sparkles className="w-3 h-3 text-violet-600 animate-pulse" />
                              Spotlight Club
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                              Active Verified
                            </span>
                            <img src="./img/ai-club-seal.jpg" alt="AI Club Seal" className="w-5 h-5 rounded-full border border-violet-200 shadow-2xs hidden sm:inline-block" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                            Artificial Intelligence Club
                          </h3>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-600 shadow-2xs">
                        Academic & Technology
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      Student-led organization dedicated to helping CUNY SPS students of all backgrounds explore artificial intelligence, hands-on technical projects, and ethical innovation.
                    </p>

                    {/* Direct Social Channels on Bento Spotlight */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <a
                        href="https://chat.whatsapp.com/ED7Z2tY5s2W7v2O7b7Zq9A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-all shadow-sm hover:shadow-emerald-500/20 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        <span>Join WhatsApp</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                      <a
                        href="https://www.instagram.com/cunyspsaiclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-95 text-white font-semibold text-xs transition-all shadow-sm cursor-pointer"
                      >
                        <InstagramIcon className="w-3.5 h-3.5 fill-white" />
                        <span>Follow on Instagram</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                      <a
                        href="https://openlab.sps.cuny.edu/groups/ai-club/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-all cursor-pointer border border-slate-200"
                      >
                        <Globe className="w-3.5 h-3.5 text-slate-600" />
                        <span>Visit OpenLab Hub</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-3">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-violet-600" />
                      Welcomes all students · Zero prerequisites
                    </span>
                    <button
                      type="button"
                      onClick={() => navigateTo('club-profile', 'club-ai')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 hover:text-violet-800 bg-violet-100/80 hover:bg-violet-200/80 px-4 py-2 rounded-xl transition-all cursor-pointer"
                    >
                      <span>Explore AI Club Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* TILE 2: Live Upcoming Event Radar (4 cols) */}
                <div className="lg:col-span-4 bg-gradient-to-br from-[#0F0728] via-[#1B0A33] to-[#080314] rounded-3xl border border-violet-500/20 p-6 sm:p-7 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-luminosity" style={{ backgroundImage: 'url(./img/summer-at-cuny-students-campus.jpg)' }} />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/20 text-[#FFD100] border border-violet-400/20">
                        <Clock className="w-3 h-3 text-[#FFD100]" />
                        Next Up on Campus
                      </span>
                      <span className="text-xs font-mono text-violet-300">
                        {upcomingPreviewEvents[0]?.date || 'Upcoming'}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2">
                      {upcomingPreviewEvents[0]?.title || 'Campus Event'}
                    </h4>

                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {upcomingPreviewEvents[0]?.description || 'Join student organizations on Zoom or in-person for our next gathering.'}
                    </p>

                    <div className="mt-4 space-y-1.5 text-xs text-violet-200">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span>{upcomingPreviewEvents[0]?.time} EST · {upcomingPreviewEvents[0]?.format}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span className="truncate">{upcomingPreviewEvents[0]?.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => navigateTo('events')}
                      className="w-full py-2.5 px-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View All {EVENTS_DATA.length} Events</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* TILE 3: OpenLab Digital Commons (5 cols) */}
                <div className="lg:col-span-5 bg-gradient-to-br from-white via-indigo-50/30 to-violet-50/20 rounded-3xl border border-violet-200/90 p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-900 border border-indigo-200">
                        <Globe className="w-3 h-3 text-indigo-600" />
                        CUNY SPS OpenLab Hub
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">Official Student Platform</span>
                    </div>

                    <h4 className="text-lg font-extrabold text-slate-900 leading-snug">
                      Digital Student Commons
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Connect, collaborate, and share creative and academic work across degree programs on CUNY SPS OpenLab.
                    </p>

                    <div className="mt-4 space-y-2.5">
                      <a
                        href="https://openlab.sps.cuny.edu/groups/type/club/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-violet-300 hover:bg-violet-50/40 transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                            <Compass className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-violet-700">OpenLab Student Organizations</div>
                            <div className="text-[11px] text-slate-500">Browse official club groups and member directories</div>
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-600 shrink-0" />
                      </a>

                      <a
                        href="https://openlab.sps.cuny.edu/groups/the-kiosk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-violet-300 hover:bg-violet-50/40 transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                            <Newspaper className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-violet-700">The Kiosk Student Publication</div>
                            <div className="text-[11px] text-slate-500">Official student newspaper, creative articles & essays</div>
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-600 shrink-0" />
                      </a>

                      <a
                        href="https://openlab.sps.cuny.edu/sps-open-road/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-violet-300 hover:bg-violet-50/40 transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-violet-700">CUNY SPS Open Road</div>
                            <div className="text-[11px] text-slate-500">Community news, spotlight stories & updates</div>
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-violet-600 shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Hosted by CUNY SPS</span>
                    <a
                      href="https://openlab.sps.cuny.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-violet-700 hover:text-violet-800 inline-flex items-center gap-1 group"
                    >
                      <span>Visit OpenLab Main Site</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* TILE 4: Office of Student Life & Institutional Gateways (7 cols) */}
                <div className="lg:col-span-7 bg-gradient-to-br from-[#0F0728] via-[#1E0B38] to-[#0A0318] rounded-3xl border border-violet-500/25 p-6 sm:p-7 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/20 text-[#FFD100] border border-violet-400/20">
                        <Shield className="w-3 h-3 text-[#FFD100]" />
                        Office of Student Life
                      </span>
                      <span className="text-xs text-violet-300/80">Co-Curricular & Leadership Hub</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                      Accessible Leadership & Community Engagement
                    </h4>
                    <p className="text-xs text-violet-200/90 mt-1.5 leading-relaxed max-w-2xl">
                      Providing our diverse student population with accessible co-curricular and academic enrichment opportunities to develop leadership skills and community beyond the classroom.
                    </p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <a
                        href="https://www.cuny.edu/cuny-login/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/40 transition-all flex items-start gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-[#FFD100] flex items-center justify-center shrink-0 border border-amber-400/30">
                          <Lock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#FFD100] flex items-center gap-1">
                            <span>CUNY Login Portal</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </div>
                          <div className="text-[11px] text-violet-300 mt-0.5">CUNYfirst, Brightspace & SSO</div>
                        </div>
                      </a>

                      <a
                        href="https://openlab.sps.cuny.edu/groups/cuny-sps-student-life/events/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/40 transition-all flex items-start gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-xl bg-violet-500/20 text-violet-300 flex items-center justify-center shrink-0 border border-violet-400/30">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-violet-300 flex items-center gap-1">
                            <span>Student Life Calendar</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </div>
                          <div className="text-[11px] text-violet-300 mt-0.5">Master schedule of all events</div>
                        </div>
                      </a>

                      <a
                        href="mailto:studentlife@sps.cuny.edu"
                        className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/40 transition-all flex items-start gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-emerald-300 flex items-center gap-1">
                            <span>Contact Student Life</span>
                            <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                          </div>
                          <div className="text-[11px] text-violet-300 mt-0.5">studentlife@sps.cuny.edu</div>
                        </div>
                      </a>

                      <a
                        href="https://openlab.sps.cuny.edu/help-documentation/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/40 transition-all flex items-start gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-400/30">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-cyan-300 flex items-center gap-1">
                            <span>Help & Student Guides</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </div>
                          <div className="text-[11px] text-violet-300 mt-0.5">OpenLab guides and FAQs</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-violet-300/80">
                    <span>CUNY School of Professional Studies</span>
                    <a
                      href="https://sps.cuny.edu/student-services/student-life"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#FFD100] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Official Student Life Page</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Value Pillars */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Direct Student Channels</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Instant access to student-run WhatsApp, Discord, and social media channels with zero bureaucracy.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Online & Asynchronous</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Meetings are scheduled in the evening and recorded so working adult learners can easily participate.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Hands-On Projects</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Build apps, write articles, organize civic events, and expand your portfolio alongside classmates.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* AUTHENTIC CUNY STUDENT LIFE GALLERY (Two Sides of the Same Coin) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#FFB71B]" />
                    <span>Campus Community in Focus</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Student Life in Action
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Real CUNY SPS students leading clubs, building open-source tech, and collaborating across New York.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-500">Official Student Life Archive</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {/* Photo 1: Summer at CUNY */}
                <div className="group relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src="./img/summer-at-cuny-students-campus.jpg"
                      alt="Students talking together outside on a CUNY campus in summer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[10px] font-bold text-[#FFB71B] uppercase tracking-wider">Campus Life</span>
                    <span className="text-xs font-bold line-clamp-1">Summer Community Sessions</span>
                  </div>
                </div>

                {/* Photo 2: Skaters Circle */}
                <div className="group relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src="./img/splash-skate-circle.jpg"
                      alt="CUNY students in a circle holding skateboards, looking down at the camera"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[10px] font-bold text-[#FFB71B] uppercase tracking-wider">Student Clubs</span>
                    <span className="text-xs font-bold line-clamp-1">Recreation & Affinity Groups</span>
                  </div>
                </div>

                {/* Photo 3: Skates Club Group */}
                <div className="group relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src="./img/cuny-skates-club-group.jpg"
                      alt="Members of the CUNY Skates Club posing together with their skateboards"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[10px] font-bold text-[#FFB71B] uppercase tracking-wider">Collaborative Spirit</span>
                    <span className="text-xs font-bold line-clamp-1">Peer Communities in NYC</span>
                  </div>
                </div>

                {/* Photo 4: Student Portrait */}
                <div className="group relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src="./img/cuny-student-portrait-msa.jpg"
                      alt="Portrait of a smiling CUNY student"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[10px] font-bold text-[#FFB71B] uppercase tracking-wider">Student Voices</span>
                    <span className="text-xs font-bold line-clamp-1">Empowering Adult Learners</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Clubs Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#FFB81C] text-[#FFB81C]" />
                    <span>Featured Organizations</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Featured Student Clubs</h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Active student organizations with verified communication channels and upcoming events.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigateTo('clubs')}
                  className="text-xs sm:text-sm font-semibold text-violet-600 hover:text-violet-700 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
                >
                  <span>View all 34 clubs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {featuredClubs.map((club) => (
                  <div
                    key={club.clubId}
                    className="bg-white rounded-2xl border border-slate-200/80 hover:border-violet-300 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        {club.logoUrl ? (
                          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                            <img
                              src={club.logoUrl}
                              alt={`${club.name} logo`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0"
                            style={{ backgroundColor: club.accentColor }}
                          >
                            {club.shortCode}
                          </div>
                        )}
                        <span className="text-[10px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full truncate max-w-[140px]">
                          {club.category}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base leading-snug">
                        {club.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {club.description}
                      </p>

                      {/* Direct Verified Channel Links */}
                      {club.channels.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                          {club.channels.map((ch, i) => (
                            <a
                              key={i}
                              href={ch.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              title={`${ch.actionLabel} (${ch.badge}) - Opens external link`}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors shadow-2xs"
                            >
                              {ch.platform === 'whatsapp' && <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />}
                              {ch.platform === 'tiktok' && <TikTokIcon className="w-3 h-3 text-slate-900" />}
                              {ch.platform === 'facebook' && <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />}
                              {ch.platform === 'instagram' && <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />}
                              {ch.platform === 'linkedin' && <LinkedInIcon className="w-3.5 h-3.5 text-sky-700" />}
                              {ch.platform === 'website' && <Globe className="w-3.5 h-3.5 text-slate-600" />}
                              <span>{ch.actionLabel}</span>
                              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => navigateTo('club-profile', club.clubId)}
                      className="mt-5 w-full min-h-[44px] py-2 px-3 bg-slate-50 hover:bg-violet-50/80 text-violet-700 font-semibold text-xs rounded-xl border border-slate-200 hover:border-violet-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View club</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Events Preview */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-[#0F0728] via-[#1B0A33] to-[#080314] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-violet-900/30">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FFB81C]">
                      Calendar Highlights
                    </span>
                    <h2 className="text-2xl font-bold text-white mt-1">Upcoming Campus Events</h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      Open to all enrolled students. Times shown in New York campus time (EST).
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => navigateTo('events')}
                      className="text-xs sm:text-sm font-semibold text-[#FFB81C] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View all events ({EVENTS_DATA.length})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="https://openlab.sps.cuny.edu/groups/cuny-sps-student-life/events/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#FFB81C]" />
                      <span>Student Life Calendar</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {upcomingPreviewEvents.map((ev) => (
                    <div
                      key={ev.eventId}
                      className="bg-white/10 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/15 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-sky-200 mb-2 font-mono">
                          <span>{ev.date}</span>
                          <span>{ev.time} EST</span>
                        </div>
                        <h4 className="font-bold text-white text-sm line-clamp-2">{ev.title}</h4>
                        <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                          Hosted by {ev.clubName}
                        </p>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-300 mt-2">
                          <MapPin className="w-3.5 h-3.5 text-[#FFB81C]" />
                          <span>{ev.format} · {ev.location}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => navigateTo('club-profile', ev.clubId)}
                        className="mt-4 text-xs font-semibold text-[#FFB81C] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View {ev.clubName.split(' ')[0]} Profile</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCREEN 2: CLUB DIRECTORY                                                 */}
        {/* ========================================================================= */}
        {currentTab === 'clubs' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Page Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 bg-violet-100 text-violet-800 rounded-full mb-2">
                <span>Student Directory</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                CUNY SPS Student Organizations
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Browse all 34 recognized student clubs. Search by name, category, or interests to find your community and join their official communication channels.
              </p>
            </div>

            {/* Fast Search & Category Chips */}
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search clubs by name, category, topic, or keyword..."
                  className="w-full pl-11 pr-10 py-3 text-sm bg-white border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent min-h-[44px]"
                  aria-label="Search clubs by name or keyword"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Filter Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" aria-label="Category filters">
                {ALL_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[36px] flex items-center gap-1 ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm shadow-violet-500/25'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-violet-300 hover:text-violet-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
              <span>
                Showing <strong className="text-slate-900 font-semibold">{filteredClubs.length}</strong> of{' '}
                {CLUBS_DATA.length} clubs
              </span>
              {(searchQuery || selectedCategory !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="text-xs font-semibold text-violet-600 hover:text-violet-700 hover:underline cursor-pointer"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Club Cards Grid */}
            {filteredClubs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClubs.map((club) => (
                  <article
                    key={club.clubId}
                    className="bg-white rounded-2xl border border-slate-200/80 hover:border-violet-300 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header: Monogram/Logo, Name, ShortCode */}
                      <div className="flex items-start gap-3.5 mb-3">
                        {club.logoUrl ? (
                          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                            <img
                              src={club.logoUrl}
                              alt={`${club.name} logo`}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm"
                            style={{ backgroundColor: club.accentColor }}
                          >
                            {club.shortCode}
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                              {club.category}
                            </span>
                          </div>
                          <h2 className="font-bold text-slate-900 text-base leading-snug mt-1 truncate">
                            {club.name}
                          </h2>
                          <p className="text-[11px] text-slate-500 truncate">
                            {club.contactEmail}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mt-2">
                        {club.description}
                      </p>

                      {/* Direct Verified Social & Group Channels */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                          <span className="font-semibold uppercase tracking-wider text-[10px] text-slate-400">
                            {club.channels.length > 0 ? 'Verified Channels' : 'Social Channels'}
                          </span>
                          <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                            Active Club
                          </span>
                        </div>

                        {club.channels.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5 pt-0.5">
                            {club.channels.map((ch, idx) => {
                              const isWhatsApp = ch.platform === 'whatsapp';
                              const isTikTok = ch.platform === 'tiktok';
                              const isFacebook = ch.platform === 'facebook';
                              const isInstagram = ch.platform === 'instagram';
                              const isLinkedIn = ch.platform === 'linkedin';

                              const badgeStyle = isWhatsApp
                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                : isTikTok
                                ? 'bg-slate-900 hover:bg-black text-white'
                                : isFacebook
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : isInstagram
                                ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white'
                                : isLinkedIn
                                ? 'bg-sky-700 hover:bg-sky-800 text-white'
                                : 'bg-slate-800 hover:bg-slate-900 text-white';

                              return (
                                <a
                                  key={idx}
                                  href={ch.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  title={`${ch.actionLabel} (${ch.badge}) - Opens external link`}
                                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-all hover:scale-102 focus-visible:outline-2 ${badgeStyle}`}
                                >
                                  {isWhatsApp && <WhatsAppIcon className="w-3.5 h-3.5" />}
                                  {isTikTok && <TikTokIcon className="w-3 h-3" />}
                                  {isFacebook && <FacebookIcon className="w-3.5 h-3.5" />}
                                  {isInstagram && <InstagramIcon className="w-3.5 h-3.5" />}
                                  {isLinkedIn && <LinkedInIcon className="w-3.5 h-3.5" />}
                                  {!isWhatsApp && !isTikTok && !isFacebook && !isInstagram && !isLinkedIn && (
                                    <Globe className="w-3.5 h-3.5" />
                                  )}
                                  <span>{ch.actionLabel}</span>
                                  <ExternalLink className="w-3 h-3 opacity-70" />
                                </a>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="pt-0.5">
                            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 italic">
                              <Lock className="w-3 h-3 text-slate-400" />
                              <span>No public links verified yet</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Primary "View club" Action */}
                    <div className="mt-5 pt-2">
                      <button
                        type="button"
                        onClick={() => navigateTo('club-profile', club.clubId)}
                        className="w-full min-h-[44px] py-2.5 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm shadow-violet-500/25 flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        <span>View club</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
                <Search className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-900 text-base">No clubs found</h3>
                <p className="text-xs text-slate-500">
                  No clubs matched your search "{searchQuery}". Try selecting "All" categories or searching another term.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCREEN 3: CLUB PROFILE                                                    */}
        {/* ========================================================================= */}
        {currentTab === 'club-profile' && selectedClub && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Back Navigation Bar */}
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => navigateTo('clubs')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-violet-600 hover:text-violet-700 px-3 py-2 rounded-lg hover:bg-violet-50 transition-colors cursor-pointer min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to club directory</span>
              </button>

              <button
                type="button"
                onClick={handleShareClub}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copiedLink ? 'Link copied!' : 'Share profile'}</span>
              </button>
            </div>

            {/* Club Hero Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {selectedClub.logoUrl ? (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                    <img
                      src={selectedClub.logoUrl}
                      alt={`${selectedClub.name} logo`}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                  </div>
                ) : (
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl shrink-0 shadow-md"
                    style={{ backgroundColor: selectedClub.accentColor }}
                  >
                    {selectedClub.shortCode}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-emerald-100 text-emerald-800">
                      {selectedClub.category}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Active Recognized Club
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {selectedClub.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
                    <span>CUNY SPS Chartered Student Organization</span>
                    <span>·</span>
                    <a href="mailto:studentservices@sps.cuny.edu" className="text-violet-600 hover:underline">Office of Student Life</a>
                  </p>
                </div>
              </div>

              {/* Who It Welcomes Callout (Required in Build Specs) */}
              <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 border border-violet-100 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Who We Welcome</h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      {selectedClub.whoItWelcomes}
                    </p>
                  </div>
                </div>
              </div>

              {/* What the Club Does (About) */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
                  About the Organization
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedClub.description}
                </p>
              </div>
            </div>

            {/* PROMINENT CHANNELS SECTION (Core Goal of Redesign) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Direct Communication Channels</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Connect & Join Our Online Groups
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Open direct external links to join student chats, watch video recaps, or follow official social pages.
                </p>
              </div>

              {/* Action Buttons Grid */}
              {selectedClub.channels && selectedClub.channels.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedClub.channels.map((ch, idx) => {
                    const isWhatsApp = ch.platform === 'whatsapp';
                    const isTikTok = ch.platform === 'tiktok';
                    const isFacebook = ch.platform === 'facebook';
                    const isInstagram = ch.platform === 'instagram';
                    const isLinkedIn = ch.platform === 'linkedin';

                    // Style configuration per platform
                    const buttonStyles = isWhatsApp
                      ? 'bg-[#25D366] hover:bg-[#20ba59] text-white shadow-emerald-200'
                      : isTikTok
                      ? 'bg-[#010101] hover:bg-[#1a1a1a] text-white shadow-slate-300'
                      : isFacebook
                      ? 'bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-blue-200'
                      : isInstagram
                      ? 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white shadow-pink-200'
                      : isLinkedIn
                      ? 'bg-[#0A66C2] hover:bg-[#095196] text-white shadow-sky-200'
                      : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-violet-200';

                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-4"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                ch.badge === 'Verified Official Link'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-900'
                              }`}
                            >
                              {ch.badge}
                            </span>
                            <span className="text-[11px] font-medium text-slate-500 capitalize">
                              {ch.platform}
                            </span>
                          </div>

                          <h4 className="font-bold text-slate-900 text-sm">
                            {ch.actionLabel}
                          </h4>
                          {ch.description && (
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {ch.description}
                            </p>
                          )}
                        </div>

                        {/* Direct External Link Button */}
                        <a
                          href={ch.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-3 px-4 min-h-[48px] rounded-xl font-bold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer ${buttonStyles}`}
                        >
                          {isWhatsApp && <WhatsAppIcon className="w-5 h-5" />}
                          {isTikTok && <TikTokIcon className="w-5 h-5" />}
                          {isFacebook && <FacebookIcon className="w-5 h-5" />}
                          {isInstagram && <InstagramIcon className="w-5 h-5" />}
                          {isLinkedIn && <LinkedInIcon className="w-5 h-5" />}
                          {!isWhatsApp && !isTikTok && !isFacebook && !isInstagram && !isLinkedIn && (
                            <Globe className="w-5 h-5" />
                          )}
                          <span>{ch.actionLabel}</span>
                          <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Privacy & Missing Links Handling */
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center mx-auto">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Channels Under Officer Setup</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    This club's official WhatsApp and social media links are currently being verified by the faculty advisor and Student Life. In the meantime, you can connect directly with the officer team below.
                  </p>
                  <a
                    href={`mailto:${selectedClub.contactEmail}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>Email Club Officers ({selectedClub.contactEmail})</span>
                  </a>
                </div>
              )}
            </div>

            {/* Upcoming Events for This Club */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Upcoming Events ({clubEvents.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Events organized by {selectedClub.name}
                  </p>
                </div>
                <a
                  href="https://openlab.sps.cuny.edu/groups/cuny-sps-student-life/events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-violet-700 hover:text-violet-800 bg-violet-50 hover:bg-violet-100 rounded-lg border border-violet-100 transition-colors self-start sm:self-auto cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-violet-600" />
                  <span>CUNY SPS Student Life Calendar</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>

              {clubEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clubEvents.map((ev) => (
                    <div
                      key={ev.eventId}
                      className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-violet-700 mb-1.5">
                          <span className="font-bold">{ev.date}</span>
                          <span>{ev.time} EST</span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{ev.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">{ev.description}</p>
                        <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{ev.format} · {ev.location}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                        <a
                          href={ev.url || "https://openlab.sps.cuny.edu/groups/cuny-sps-student-life/events/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-medium text-slate-500 hover:text-violet-600 flex items-center gap-1 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>Student Life Calendar</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                        <a
                          href={getGoogleCalendarUrl(ev)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-violet-600 hover:text-violet-700 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Add to Calendar</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center text-xs text-slate-500">
                  No public events scheduled for this semester yet. Check back soon or join the WhatsApp group for informal meetups!
                </div>
              )}
            </div>

            {/* Official School Join & Inquiry Form */}
            <div className="bg-gradient-to-br from-[#0F0728] via-[#1E0B36] to-[#090414] rounded-3xl p-6 sm:p-8 text-white space-y-5 border border-violet-500/20 shadow-xl shadow-purple-950/20 relative overflow-hidden">
              <div className="max-w-2xl space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-[#FFD100] text-[11px] font-bold tracking-wide uppercase">
                  <Shield className="w-3.5 h-3.5 text-[#FFD100]" />
                  <span>Official School Form</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Have a question or want to join {selectedClub.name}?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Submit your student inquiry or membership request directly through the official CUNY SPS Student Life form. Your submission is routed directly to the Office of Student Life and club leadership.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <a
                  href={selectedClub.joinUrl || "https://sps.cuny.edu/student-success/student-life/student-clubs-and-organizations"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#FFB81C] hover:bg-[#e5a415] text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Open Official {selectedClub.name} Form</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://sps.cuny.edu/student-success/student-life/student-clubs-and-organizations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-sky-300" />
                  <span>CUNY SPS Clubs &amp; Organizations Directory</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Club Email: <a href={`mailto:${selectedClub.contactEmail}`} className="text-sky-300 hover:underline">{selectedClub.contactEmail}</a></span>
                </div>
                <span>Office of Student Life · <a href="mailto:studentservices@sps.cuny.edu" className="text-sky-300 hover:underline">studentservices@sps.cuny.edu</a></span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCREEN 4: EVENTS                                                          */}
        {/* ========================================================================= */}
        {currentTab === 'events' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Campus Calendar</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Upcoming Club Events &amp; Workshops
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  All club events are open to enrolled CUNY SPS students. Scan dates, add meetings to your calendar, and explore official Student Life activities.
                </p>
              </div>

              <a
                href="https://openlab.sps.cuny.edu/groups/cuny-sps-student-life/events/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-violet-500/25 hover:shadow-lg transition-all cursor-pointer shrink-0 self-start sm:self-auto"
              >
                <Calendar className="w-4 h-4 text-[#FFB81C]" />
                <span>Open Student Life Calendar</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Event Search */}
            <div className="relative max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
                placeholder="Search events by topic, club, or format..."
                className="w-full pl-11 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 min-h-[44px]"
                aria-label="Search events"
              />
            </div>

            {/* Events List */}
            <div className="space-y-4">
              {filteredEvents.map((ev, idx) => {
                const isHero = idx === 0 && !eventSearch.trim();
                if (isHero) {
                  return (
                    <article
                      key={ev.eventId}
                      className="bg-white rounded-3xl border border-violet-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
                    >
                      {/* Photo Banner with Floating Date Block */}
                      <div
                        className="relative h-44 sm:h-52 w-full bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: 'url(./img/summer-at-cuny-students-campus.jpg)' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                        
                        {/* Floating Date Block */}
                        <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 flex flex-col items-center justify-center text-center shadow-lg">
                          <span className="text-[10px] font-bold text-violet-700 uppercase tracking-wider">
                            {new Date(ev.date + 'T12:00:00Z').toLocaleString('en-US', { month: 'short' })}
                          </span>
                          <span className="text-2xl font-extrabold text-violet-950 leading-none mt-0.5">
                            {ev.date.split('-')[2]}
                          </span>
                        </div>

                        {/* Top Right Badges */}
                        <div className="absolute top-4 right-4 flex items-center gap-1.5">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFB71B] text-[#011D49] shadow-sm">
                            Next Spotlight Event
                          </span>
                        </div>

                        {/* Bottom Overlay Info */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-[#FFD100] uppercase tracking-wider">
                              {ev.clubName}
                            </span>
                            <span className="opacity-60">·</span>
                            <span className="text-xs text-slate-200 font-mono">{ev.time} EST</span>
                          </div>
                          <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight line-clamp-2">
                            {ev.title}
                          </h2>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
                        <div className="space-y-2 flex-1">
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                            {ev.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-slate-500 flex-wrap">
                            <span className="inline-flex items-center gap-1 font-medium">
                              <MapPin className="w-3.5 h-3.5 text-violet-600" />
                              {ev.format} ({ev.location})
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center w-full md:w-auto">
                          <button
                            type="button"
                            onClick={() => navigateTo('club-profile', ev.clubId)}
                            className="flex-1 md:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
                          >
                            <span>View Club Profile</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          {ev.url && (
                            <a
                              href={ev.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 md:flex-none px-4 py-2.5 bg-violet-50 hover:bg-violet-100 text-violet-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5 border border-violet-100"
                            >
                              <Calendar className="w-3.5 h-3.5 text-violet-600" />
                              <span>Calendar Listing</span>
                              <ExternalLink className="w-3 h-3 opacity-60" />
                            </a>
                          )}
                          <a
                            href={getGoogleCalendarUrl(ev)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 md:flex-none px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm shadow-violet-500/25 transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
                          >
                            <Calendar className="w-3.5 h-3.5 text-[#FFB81C]" />
                            <span>Add to Calendar</span>
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                }

                return (
                  <div
                    key={ev.eventId}
                    className="bg-white rounded-2xl border border-slate-200/80 hover:border-violet-300 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-5 group"
                  >
                  <div className="flex items-start gap-4">
                    {/* Date Block */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-violet-50 to-purple-50 border border-violet-100 flex flex-col items-center justify-center text-center shrink-0">
                      <span className="text-[10px] font-bold text-violet-700 uppercase">
                        {new Date(ev.date + 'T12:00:00Z').toLocaleString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-xl font-extrabold text-violet-950 leading-none mt-0.5">
                        {ev.date.split('-')[2]}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <button
                          type="button"
                          onClick={() => navigateTo('club-profile', ev.clubId)}
                          className="text-xs font-bold text-violet-700 hover:text-violet-800 hover:underline cursor-pointer"
                        >
                          {ev.clubName}
                        </button>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500 font-mono">{ev.time} EST</span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                        {ev.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                        {ev.description}
                      </p>

                      <div className="mt-2.5 flex items-center gap-3 text-xs text-slate-500 flex-wrap">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {ev.format} ({ev.location})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center w-full md:w-auto">
                    <button
                      type="button"
                      onClick={() => navigateTo('club-profile', ev.clubId)}
                      className="flex-1 md:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
                    >
                      <span>View Club Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {ev.url && (
                      <a
                        href={ev.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 md:flex-none px-4 py-2.5 bg-violet-50 hover:bg-violet-100 text-violet-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5 border border-violet-100"
                      >
                        <Calendar className="w-3.5 h-3.5 text-violet-600" />
                        <span>Calendar Listing</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                    <a
                      href={getGoogleCalendarUrl(ev)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm shadow-violet-500/25 transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#FFB81C]" />
                      <span>Add to Calendar</span>
                    </a>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        )}
      </main>

      {/* Student Discovery Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="./club-social-hub-mark.svg" alt="Club Social Hub logo" className="w-5 h-5 rounded-md" width="20" height="20" />
            <span className="font-bold text-slate-900">Club Social Hub</span>
            <span>·</span>
            <span>CUNY SPS Office of Student Life & AI Club Project</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/school/cuny-school-of-professional-studies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#0A66C2] flex items-center gap-1 transition-colors"
              title="Connect on LinkedIn"
            >
              <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/cunysps/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#1877F2] flex items-center gap-1 transition-colors"
              title="Follow on Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5 fill-current" />
              <span>Facebook</span>
            </a>
            <span className="text-slate-300">·</span>
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="hover:text-slate-900 cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => navigateTo('clubs')}
              className="hover:text-slate-900 cursor-pointer"
            >
              All Clubs
            </button>
            <button
              type="button"
              onClick={() => navigateTo('events')}
              className="hover:text-slate-900 cursor-pointer"
            >
              Events Calendar
            </button>

          </div>
        </div>
      </footer>

      {/* V23-INSPIRED MOBILE BOTTOM TAB BAR */}
      <nav
        id="tabbar"
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-around"
        style={{ paddingBottom: 'max(6px, env(safe-area-inset-bottom, 6px))' }}
      >
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
            currentTab === 'home' ? 'text-violet-700 font-bold' : 'text-slate-500 hover:text-slate-900 font-medium'
          }`}
        >
          <Compass className={`w-5 h-5 ${currentTab === 'home' ? 'text-violet-600' : 'text-slate-400'}`} />
          <span className="text-[11px] leading-tight">Home</span>
        </button>

        <button
          type="button"
          onClick={() => navigateTo('clubs')}
          className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-xl transition-all cursor-pointer relative ${
            currentTab === 'clubs' ? 'text-violet-700 font-bold' : 'text-slate-500 hover:text-slate-900 font-medium'
          }`}
        >
          <Users className={`w-5 h-5 ${currentTab === 'clubs' ? 'text-violet-600' : 'text-slate-400'}`} />
          <span className="text-[11px] leading-tight">Clubs</span>
          <span className="absolute -top-1 -right-0.5 px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-violet-100 text-violet-800 border border-violet-200">
            34
          </span>
        </button>

        {/* Elevated Center Action Tab */}
        <button
          type="button"
          onClick={() => navigateTo('events')}
          className="flex flex-col items-center justify-center -mt-5 group cursor-pointer"
          title="Browse Upcoming Events"
        >
          <div className={`w-12 h-10 rounded-2xl flex items-center justify-center shadow-md transition-all ${
            currentTab === 'events'
              ? 'bg-[#FFB71B] text-[#011D49] shadow-[#FFB71B]/40 scale-105'
              : 'bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-violet-500/30 group-hover:scale-105'
          }`}>
            <Calendar className="w-5 h-5" />
          </div>
          <span className={`text-[10px] mt-1 font-bold ${
            currentTab === 'events' ? 'text-violet-800' : 'text-slate-600'
          }`}>
            Events
          </span>
        </button>

        <a
          href="https://openlab.sps.cuny.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-xl text-slate-500 hover:text-violet-700 font-medium transition-all cursor-pointer"
        >
          <Globe className="w-5 h-5 text-slate-400" />
          <span className="text-[11px] leading-tight">OpenLab</span>
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-xl text-slate-600 hover:text-violet-800 font-medium transition-all cursor-pointer"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5 text-violet-600" />
          <span className="text-[11px] leading-tight font-semibold">Menu</span>
        </button>
      </nav>
    </div>
  );
}
