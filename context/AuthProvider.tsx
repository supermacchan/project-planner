'use client';

import { SessionProvider } from 'next-auth/react';

// only necessary for client components / pages that need auth
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
