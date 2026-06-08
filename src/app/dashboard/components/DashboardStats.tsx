'use client';

import * as React from 'react';
import { BookOpen, Target, Flame, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import authFetch from '@/lib/auth/authFetch';

interface DailyActivity {
  day: string;
  date: string;
  active: boolean;
}

interface OverviewData {
  totalAttempts: number;
  accuracy: number;
  currentStreak: number;
  longestStreak: number;
  lastActivity: string;
  dailyActivity: DailyActivity[];
}

interface OverviewResponse {
  success: boolean;
  data: OverviewData;
}

function getRelativeTime(dateStr: string): string {
  const now = Date.now();
  const date = new Date(dateStr).getTime();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  return new Date(dateStr).toLocaleDateString();
}

function CircularProgress({ value }: { value: number }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="var(--muted)"
          strokeWidth="5"
        />
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="var(--success)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute text-sm font-bold">{Math.round(value)}%</span>
    </div>
  );
}

function DashboardStats({ className, ...props }: React.ComponentProps<'div'>) {
  const [data, setData] = React.useState<OverviewData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        const res = await authFetch({
          url: '/api/analytics/overview',
          options: { method: 'GET' },
        }) as OverviewResponse;

        if (!cancelled && res.success) {
          setData(res.data);
        }
      } catch {
        if (!cancelled) setData(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchStats();
    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return (
      <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-4', className)} {...props}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-xl bg-muted" />
        ))}
      </div>
    );
  }

  const stats = data || {
    totalAttempts: 0,
    accuracy: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastActivity: new Date().toISOString(),
    dailyActivity: [],
  };

  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-4', className)} {...props}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
          <BookOpen className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalAttempts}</div>
          <p className="text-xs text-muted-foreground">quizzes completed</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
          <Target className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <CircularProgress value={stats.accuracy} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
          <Flame className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.currentStreak}</div>
          <p className="text-xs text-muted-foreground">
            {stats.currentStreak === 1 ? 'day' : 'days'} active
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Last Activity</CardTitle>
          <Clock className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {getRelativeTime(stats.lastActivity)}
          </div>
          <p className="text-xs text-muted-foreground">
            {new Date(stats.lastActivity).toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export { DashboardStats };
