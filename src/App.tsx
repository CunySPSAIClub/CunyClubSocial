/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppShell } from './components/AppShell';
import { LoginView } from './components/LoginView';
import { AuthProvider, useAuth } from './context/AuthContext';

function RootRouter() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-sm text-slate-600">
        Verifying CUNY institutional session...
      </div>
    );
  }

  if (!session) {
    return <LoginView />;
  }

  return <AppShell />;
}

export default function App() {
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
}
