'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { StreakCounter } from '@/components/StreakCounter';
import { StreakCalendar } from '@/components/StreakCalendar';
import { StreakBadges } from '@/components/StreakBadges';
import type { StreakData } from '@/modules/analytics/analytics.types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface StreakDashboardProps extends React.ComponentProps<'div'> {}

function StreakDashboard({ className, ...props }: StreakDashboardProps) {
  const [data, setData] = React.useState<StreakData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function fetchStreakData() {
      try {
        const res = await fetch('/api/analytics/streak', {
          credentials: 'include',
        });
        const json = await res.json();

        if (cancelled) return;

        if (res.ok && json.success) {
          setData(json.data);
        } else {
          setError(json.message || 'Failed to load streak data');
        }
      } catch {
        if (!cancelled) setError('Failed to load streak data');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchStreakData();
    return () => { cancelled = true; };
  }, []);

  if (error) {
    return (
      <div
        className={cn(
          'rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800',
          className
        )}
        {...props}
      >
        {error}
        <button
          onClick={() => {
            setLoading(true);
            setError(null);
            setData(null);
          }}
          className="ml-2 underline hover:no-underline"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StreakCounter
          currentStreak={data?.currentStreak ?? 0}
          longestStreak={data?.longestStreak ?? 0}
          todayActive={data?.todayActive ?? false}
          loading={loading}
          className="lg:col-span-1"
        />

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Activity Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-[140px] animate-pulse rounded bg-muted" />
            ) : (
              <StreakCalendar calendar={data?.calendar ?? []} />
            )}
          </CardContent>
        </Card>
      </div>

      <StreakBadges
        currentStreak={data?.currentStreak ?? 0}
        longestStreak={data?.longestStreak ?? 0}
        loading={loading}
      />
    </div>
  );
}

export { StreakDashboard };
