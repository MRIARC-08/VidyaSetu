'use client';

import { useEffect, useState } from 'react';

interface AdminStats {
  totalUsers: number;
  totalQuizzes: number;
  totalQuestions: number;
  activeToday: number;
}

export function DashboardCards() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        const res = await fetch('/api/admin/stats', {
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Failed to load stats');
        const data = await res.json();
        if (!cancelled) setStats(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load stats');
        }
      }
    }

    fetchStats();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="rounded-lg border border-border bg-muted/50 p-6 text-sm text-muted-foreground">
        {error}
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
    );
  }

  const cards = [
    { label: 'Total Users', value: stats.totalUsers },
    { label: 'Total Quizzes', value: stats.totalQuizzes },
    { label: 'Total Questions', value: stats.totalQuestions },
    { label: 'Active Today', value: stats.activeToday },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-xl border bg-card p-5 shadow-sm"
        >
          <p className="text-sm text-muted-foreground">{card.label}</p>
          <p className="mt-1 text-3xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
