/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowLeft, LayoutDashboard } from 'lucide-react';
import { AppShell } from './components/AppShell';
import { LoginView } from './components/LoginView';
import { StudentDiscoveryApp } from './components/StudentDiscoveryApp';
import { AuthProvider, useAuth } from './context/AuthContext';

function RootRouter() {
  const { session, loading } = useAuth();
  const [viewMode, setViewMode] = useState<'discovery' | 'portal'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('portal') === 'true' || window.location.hash.startsWith('#portal')) {
        return 'portal';
      }
    }
    return 'discovery';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.startsWith('#portal')) {
        setViewMode('portal');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openPortal = () => {
    window.location.hash = 'portal';
    setViewMode('portal');
  };

  const returnToDiscovery = () => {
    window.location.hash = 'home';
    setViewMode('discovery');
  };

  if (viewMode === 'discovery') {
    return <StudentDiscoveryApp onOpenPortal={openPortal} />;
  }

  // Officer / Admin management portal view
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-slate-900 text-slate-200 px-4 py-2.5 text-xs flex items-center justify-between border-b border-slate-800 shrink-0">
        <button
          onClick={returnToDiscovery}
          className="inline-flex items-center gap-1.5 font-medium text-amber-400 hover:text-amber-300 focus:outline-none focus:underline"
          title="Return to student-facing club discovery"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Student Club Discovery</span>
        </button>
        <div className="flex items-center gap-2 text-slate-400">
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">CUNY SPS Club Social Hub · Officer Portal</span>
          <span className="sm:hidden">Officer Portal</span>
        </div>
      </header>
      <div className="flex-1">
        {loading ? (
          <div className="min-h-[50vh] flex items-center justify-center text-sm text-slate-600">
            Verifying CUNY institutional session...
          </div>
        ) : !session ? (
          <LoginView />
        ) : (
          <AppShell />
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
}

