'use client';

import * as React from 'react';
import { CheckCircle, BookOpen, Target, TrendingUp } from 'lucide-react';
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

interface ActivityItem {
  id: string;
  icon: React.ReactNode;
  description: string;
  timestamp: string;
  relativeTime: string;
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
  if (diffDays === 1) return '1d ago';
  return `${diffDays}d ago`;
}

function buildActivityFeed(data: OverviewData): ActivityItem[] {
  const items: ActivityItem[] = [];
  const now = new Date();
  const lastDate = new Date(data.lastActivity);

  items.push({
    id: 'last-activity',
    icon: <CheckCircle className="size-4 text-success" />,
    description: 'Completed a quiz session',
    timestamp: data.lastActivity,
    relativeTime: getRelativeTime(data.lastActivity),
  });

  if (data.accuracy > 0) {
    items.push({
      id: 'accuracy',
      icon: <Target className="size-4 text-primary" />,
      description: `Achieved ${Math.round(data.accuracy)}% accuracy`,
      timestamp: data.lastActivity,
      relativeTime: getRelativeTime(data.lastActivity),
    });
  }

  if (data.currentStreak >= 2) {
    const streakDate = new Date(lastDate);
    streakDate.setDate(streakDate.getDate() - 1);
    items.push({
      id: 'streak',
      icon: <TrendingUp className="size-4 text-warning" />,
      description: `${data.currentStreak}-day streak maintained`,
      timestamp: streakDate.toISOString(),
      relativeTime: getRelativeTime(streakDate.toISOString()),
    });
  }

  const activeDays = data.dailyActivity.filter((d) => d.active).length;
  if (activeDays > 0) {
    const weekAgo = new Date(now);
    weekAgo.setDate(weekAgo.getDate() - 7);
    items.push({
      id: 'weekly',
      icon: <BookOpen className="size-4 text-accent" />,
      description: `${activeDays} active days this week`,
      timestamp: weekAgo.toISOString(),
      relativeTime: `${activeDays}d this week`,
    });
  }

  if (data.totalAttempts > 0) {
    items.push({
      id: 'total',
      icon: <BookOpen className="size-4 text-muted-foreground" />,
      description: `${data.totalAttempts} total quizzes taken`,
      timestamp: data.lastActivity,
      relativeTime: 'All time',
    });
  }

  return items;
}

function ActivityFeed({ className, ...props }: React.ComponentProps<'div'>) {
  const [data, setData] = React.useState<OverviewData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    async function fetchData() {
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

    fetchData();
    return () => { cancelled = true; };
  }, []);

  const activities = data ? buildActivityFeed(data) : [];

  if (loading) {
    return (
      <Card className={cn('', className)} {...props}>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="size-8 animate-pulse rounded-full bg-muted" />
                <div className="flex-1 space-y-1">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                  <div className="h-3 w-1/4 animate-pulse rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('', className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {activities.length > 0 ? (
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="flex flex-col gap-0">
              {activities.map((item) => (
                <div key={item.id} className="relative flex items-start gap-4 pb-5 last:pb-0">
                  <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-background ring-1 ring-border">
                    {item.icon}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5 pt-1">
                    <p className="text-sm text-foreground">{item.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.relativeTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-32 items-center justify-center text-sm text-muted-foreground">
            No recent activity
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export { ActivityFeed };
