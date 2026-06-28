'use client';

import * as React from 'react';
import { BookOpen, Clock, Award, TrendingUp, Target } from 'lucide-react';
import { ProgressBar } from '@/components/ProgressBar';
import { ProgressChart } from '@/components/ProgressChart';
import type { DataPoint } from '@/components/ProgressChart';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import authFetch from '@/lib/auth/authFetch';

interface SubjectProgress {
  subject: string;
  completed: number;
  total: number;
  percentage: number;
}

interface ChapterProgress {
  chapter: string;
  completed: boolean;
  score: number;
}

interface DashboardData {
  overallPercentage: number;
  totalQuizzes: number;
  totalTimeSpent: number;
  streakDays: number;
  subjects: SubjectProgress[];
  accuracyTrend: DataPoint[];
  studyTimeByDay: DataPoint[];
  achievements: string[];
  recentChapters: ChapterProgress[];
}

function ProgressDashboard({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [data, setData] = React.useState<DashboardData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchAnalytics() {
      try {
        const json = await authFetch({
          url: '/api/analytics/overview',
          options: {
            method: 'GET',
          },
        });

        if (json.success && json.data) {
          setData({
            overallPercentage: json.data.accuracy ?? 0,
            totalQuizzes: json.data.totalAttempts ?? 0,
            totalTimeSpent: (json.data.totalAttempts ?? 0) * 15,
            streakDays: json.data.currentStreak ?? 0,
            subjects: [],
            accuracyTrend: [],
            studyTimeByDay: json.data.dailyActivity
              ? json.data.dailyActivity.map(
                  (d: { day: string; date: string; active: boolean }) => ({
                    label: d.day,
                    value: d.active ? 15 : 0,
                    color: d.active ? '#f59e0b' : '#e5e7eb',
                  })
                )
              : [],
            achievements: [],
            recentChapters: [],
          });
        }
      } catch {
        // Fail silently
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className={cn('grid gap-6 animate-pulse', className)} {...props}>
        <div className="h-8 w-48 rounded bg-muted" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 rounded-xl bg-muted" />
          ))}
        </div>
        <div className="h-64 rounded-xl bg-muted" />
        <div className="h-48 rounded-xl bg-muted" />
      </div>
    );
  }

  const showMock = !data;
  const displayData: DashboardData = data || {
    overallPercentage: 0,
    totalQuizzes: 0,
    totalTimeSpent: 0,
    streakDays: 0,
    subjects: [],
    accuracyTrend: [],
    studyTimeByDay: [],
    achievements: [],
    recentChapters: [],
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {showMock && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Analytics data not yet available. The dashboard below shows example
          data to demonstrate the layout.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Overall Progress
            </CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {displayData.overallPercentage ?? 0}%
            </div>
            <ProgressBar
              value={displayData.overallPercentage ?? 0}
              size="sm"
              showLabel={false}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Quizzes Taken</CardTitle>
            <BookOpen className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {displayData.totalQuizzes ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">Total attempts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((displayData.totalTimeSpent ?? 0) / 60)}h
            </div>
            <p className="text-xs text-muted-foreground">
              {displayData.totalTimeSpent ?? 0} minutes total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Streak</CardTitle>
            <Award className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {displayData.streakDays ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">Days active</p>
          </CardContent>
        </Card>
      </div>

      {displayData.subjects?.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Subject Progress</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {displayData.subjects?.map((subject) => (
              <ProgressBar
                key={subject.subject}
                label={subject.subject}
                value={subject.percentage}
                size="md"
                color={
                  subject.percentage >= 80
                    ? 'success'
                    : subject.percentage >= 50
                      ? 'warning'
                      : 'primary'
                }
              />
            ))}
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {displayData.accuracyTrend?.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Accuracy Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ProgressChart
                title=""
                data={displayData.accuracyTrend}
                type="line"
                height={180}
              />
            </CardContent>
          </Card>
        )}

        {displayData.studyTimeByDay?.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Study Time (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <ProgressChart
                title=""
                data={displayData.studyTimeByDay}
                type="bar"
                height={180}
              />
            </CardContent>
          </Card>
        )}
      </div>

      {displayData.achievements?.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {displayData.achievements?.map((achievement, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1 text-xs font-medium"
                >
                  <Award className="size-3" />
                  {achievement}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {displayData.recentChapters?.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Chapters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col divide-y divide-border/50">
              {displayData.recentChapters?.map((ch, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Target className="size-4 text-muted-foreground" />
                    <span className="text-sm">{ch.chapter}</span>
                  </div>
                  <span
                    className={cn(
                      'text-xs font-medium',
                      ch.completed
                        ? 'text-emerald-600'
                        : 'text-muted-foreground'
                    )}
                  >
                    {ch.completed ? 'Completed' : `${ch.score}%`}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export { ProgressDashboard };
export type { DashboardData, SubjectProgress, ChapterProgress };
