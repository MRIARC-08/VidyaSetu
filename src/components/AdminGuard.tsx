'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type AuthState =
  | { status: 'loading' }
  | { status: 'authenticated'; role: string }
  | { status: 'unauthenticated' };

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [auth, setAuth] = useState<AuthState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const res = await fetch('/api/auth/me', {
          credentials: 'include',
        });

        if (cancelled) return;

        if (!res.ok) {
          setAuth({ status: 'unauthenticated' });
          router.replace('/login');
          return;
        }

        const data = await res.json();

        if (data.role !== 'ADMIN') {
          setAuth({ status: 'unauthenticated' });
          router.replace('/dashboard');
          return;
        }

        setAuth({ status: 'authenticated', role: data.role });
      } catch {
        if (!cancelled) {
          setAuth({ status: 'unauthenticated' });
          router.replace('/login');
        }
      }
    }

    check();
    return () => {
      cancelled = true;
    };
  }, [router]);

  if (auth.status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="size-6 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
      </div>
    );
  }

  if (auth.status === 'unauthenticated') {
    return null;
  }

  return <>{children}</>;
}
