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
  Star
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

interface StudentDiscoveryAppProps {
  onOpenPortal?: () => void;
}

export function StudentDiscoveryApp({ onOpenPortal }: StudentDiscoveryAppProps) {
  // Navigation: 'home' | 'clubs' | 'events' | 'club-profile'
  const [currentTab, setCurrentTab] = useState<'home' | 'clubs' | 'events' | 'club-profile'>('home');
  const [selectedClubId, setSelectedClubId] = useState<string>('club-ai');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search & Filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [eventSearch, setEventSearch] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Join inquiry state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

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
        <div className="bg-gradient-to-r from-[#00284d] via-[#004B87] to-[#00284d] text-white border-b border-white/10 shadow-xs relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 text-xs">
            {/* Left Tagline & Badge */}
            <div className="flex items-center gap-2 min-w-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#FFD100] text-[10px] sm:text-[11px] font-bold tracking-wide uppercase shadow-2xs shrink-0 border border-white/15">
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
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Brand Logo & Name */}
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#004B87] rounded-lg p-1"
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

            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl" aria-label="Student Navigation">
              <button
                type="button"
                onClick={() => navigateTo('home')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  currentTab === 'home'
                    ? 'bg-white text-[#004B87] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => navigateTo('clubs')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  currentTab === 'clubs' || currentTab === 'club-profile'
                    ? 'bg-white text-[#004B87] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Clubs
              </button>
              <button
                type="button"
                onClick={() => navigateTo('events')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  currentTab === 'events'
                    ? 'bg-white text-[#004B87] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Events
              </button>
            </nav>

            {/* Right Action: Officer / Admin Switcher */}
            <div className="flex items-center gap-2">
              {onOpenPortal && (
                <button
                  type="button"
                  onClick={onOpenPortal}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  title="Switch to Club Officer & Administrator Management Portal"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-500" />
                  <span>Officer Portal</span>
                </button>
              )}

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold cursor-pointer ${
                currentTab === 'home'
                  ? 'bg-sky-50 text-[#004B87]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => navigateTo('clubs')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold cursor-pointer ${
                currentTab === 'clubs' || currentTab === 'club-profile'
                  ? 'bg-sky-50 text-[#004B87]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Explore Clubs ({CLUBS_DATA.length})</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              type="button"
              onClick={() => navigateTo('events')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold cursor-pointer ${
                currentTab === 'events'
                  ? 'bg-sky-50 text-[#004B87]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Campus Events ({EVENTS_DATA.length})</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Mobile Community Social Cards */}
            <div className="pt-3 pb-1 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Official Student Networks
                </span>
                <span className="text-[10px] text-slate-400 font-medium">SPS Community</span>
              </div>
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

            {onOpenPortal && (
              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenPortal}
                  className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 cursor-pointer"
                >
                  <Shield className="w-4 h-4 text-slate-500" />
                  <span>Club Officer & Management Portal</span>
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SCREEN 1: HOME                                                            */}
        {/* ========================================================================= */}
        {currentTab === 'home' && (
          <div className="space-y-12 pb-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#004B87] via-[#003865] to-[#0A2540] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-sky-200 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFB81C]" />
                  <span>CUNY SPS Office of Student Life & AI Club</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Find your next club at CUNY SPS
                </h1>

                <p className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
                  Connect with fellow online and hybrid students, join active WhatsApp groups, participate in civic tech builds, and find your community across 30+ recognized organizations.
                </p>

                {/* Primary Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => navigateTo('clubs')}
                    className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] bg-[#FFB81C] hover:bg-[#e5a415] text-slate-950 font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>Explore clubs</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('events')}
                    className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-sky-300" />
                    <span>View upcoming events</span>
                  </button>
                </div>

                {/* Trust & Engagement Stats */}
                <div className="pt-6 grid grid-cols-3 gap-2 border-t border-white/10 max-w-lg mx-auto text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white">34</div>
                    <div className="text-[11px] sm:text-xs text-sky-200">Active Clubs</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white">10</div>
                    <div className="text-[11px] sm:text-xs text-sky-200">Upcoming Events</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#FFB81C]">100%</div>
                    <div className="text-[11px] sm:text-xs text-sky-200">Online Friendly</div>
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
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#004B87] flex items-center justify-center shrink-0">
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

            {/* Featured Clubs Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#004B87] mb-1">
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
                  className="text-xs sm:text-sm font-semibold text-[#004B87] hover:text-[#003865] flex items-center gap-1 self-start sm:self-auto cursor-pointer"
                >
                  <span>View all 34 clubs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {featuredClubs.map((club) => (
                  <div
                    key={club.clubId}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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
                      className="mt-5 w-full min-h-[44px] py-2 px-3 bg-slate-50 hover:bg-sky-50 text-[#004B87] font-semibold text-xs rounded-xl border border-slate-200 hover:border-sky-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
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
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
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
                  <button
                    type="button"
                    onClick={() => navigateTo('events')}
                    className="text-xs sm:text-sm font-semibold text-[#FFB81C] hover:underline flex items-center gap-1 self-start sm:self-auto cursor-pointer"
                  >
                    <span>View all events ({EVENTS_DATA.length})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 bg-sky-100 text-[#004B87] rounded-full mb-2">
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
                  className="w-full pl-11 pr-10 py-3 text-sm bg-white border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004B87] focus:border-transparent min-h-[44px]"
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
                        ? 'bg-[#004B87] text-white shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
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
                  className="text-xs font-semibold text-[#004B87] hover:underline cursor-pointer"
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
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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
                            Advisor: {club.facultyAdvisor}
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
                          <span>{club.meetingSchedule.split('·')[0]}</span>
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
                        className="w-full min-h-[44px] py-2.5 px-4 bg-[#004B87] hover:bg-[#003865] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
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
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#004B87] hover:text-[#003865] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer min-h-[44px]"
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
                    <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-sky-100 text-[#004B87]">
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
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Faculty Advisor: <span className="font-semibold text-slate-700">{selectedClub.facultyAdvisor}</span> · Meeting Format: {selectedClub.meetingSchedule}
                  </p>
                </div>
              </div>

              {/* Who It Welcomes Callout (Required in Build Specs) */}
              <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#004B87] text-white flex items-center justify-center shrink-0 mt-0.5">
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
                      : 'bg-[#004B87] hover:bg-[#003865] text-white shadow-sky-200';

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
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Upcoming Events ({clubEvents.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Events organized by {selectedClub.name}
                  </p>
                </div>
              </div>

              {clubEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clubEvents.map((ev) => (
                    <div
                      key={ev.eventId}
                      className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-[#004B87] mb-1.5">
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

                      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500">{ev.rsvps} RSVPs registered</span>
                        <a
                          href={getGoogleCalendarUrl(ev)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#004B87] hover:underline flex items-center gap-1 cursor-pointer"
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

            {/* Quick Inquiry / Contact Officers Form */}
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white space-y-4">
              <div className="max-w-xl">
                <h3 className="text-lg font-bold text-white">Have a question for {selectedClub.name}?</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Send a note to the student president and faculty advisor. They will get back to you via your CUNY email.
                </p>
              </div>

              {inquirySubmitted ? (
                <div className="p-4 bg-emerald-900/60 border border-emerald-500 rounded-xl flex items-center gap-2.5 text-emerald-200 text-xs">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>Your note was sent to the officers of {selectedClub.name}. Check your student email for a reply.</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (inquiryName.trim() && inquiryEmail.trim()) {
                      setInquirySubmitted(true);
                    }
                  }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                >
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Your Full Name"
                    className="px-3.5 py-2.5 text-xs bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FFB81C]"
                  />
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="Your @spsmail.cuny.edu"
                    className="px-3.5 py-2.5 text-xs bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FFB81C]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#FFB81C] hover:bg-[#e5a415] text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer min-h-[44px]"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCREEN 4: EVENTS                                                          */}
        {/* ========================================================================= */}
        {currentTab === 'events' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full mb-2">
                <span>Campus Calendar</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Upcoming Club Events & Workshops
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                All club events are open to enrolled CUNY SPS students. Scan dates, register for Zoom workshops, and click through to any club's profile.
              </p>
            </div>

            {/* Event Search */}
            <div className="relative max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
                placeholder="Search events by topic, club, or format..."
                className="w-full pl-11 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004B87] min-h-[44px]"
                aria-label="Search events"
              />
            </div>

            {/* Events List */}
            <div className="space-y-4">
              {filteredEvents.map((ev) => (
                <div
                  key={ev.eventId}
                  className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
                >
                  <div className="flex items-start gap-4">
                    {/* Date Block */}
                    <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col items-center justify-center text-center shrink-0">
                      <span className="text-[10px] font-bold text-sky-700 uppercase">
                        {new Date(ev.date + 'T12:00:00Z').toLocaleString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-xl font-extrabold text-[#004B87] leading-none mt-0.5">
                        {ev.date.split('-')[2]}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <button
                          type="button"
                          onClick={() => navigateTo('club-profile', ev.clubId)}
                          className="text-xs font-bold text-[#004B87] hover:underline cursor-pointer"
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
                        <span>·</span>
                        <span>{ev.rsvps} Students Registered</span>
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
                    <a
                      href={getGoogleCalendarUrl(ev)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none px-4 py-2.5 bg-[#004B87] hover:bg-[#003865] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#FFB81C]" />
                      <span>RSVP</span>
                    </a>
                  </div>
                </div>
              ))}
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
            {onOpenPortal && (
              <button
                type="button"
                onClick={onOpenPortal}
                className="hover:text-[#004B87] font-semibold cursor-pointer flex items-center gap-1 text-[#004B87]"
              >
                <Shield className="w-3 h-3" />
                <span>Officer Login</span>
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
