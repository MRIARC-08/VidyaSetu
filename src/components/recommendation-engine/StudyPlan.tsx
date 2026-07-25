'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock,
  Target,
  TrendingUp,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type StudyTask = {
  title: string;
  subject: string;
  duration: string;
  completed: boolean;
};

type DailySchedule = {
  time: string;
  title: string;
  subject: string;
  type: 'Concept' | 'Practice' | 'Revision' | 'Quiz';
  completed: boolean;
};

type WeeklyPlan = {
  day: string;
  focus: string;
  progress: number;
  tasks: StudyTask[];
};

type StudyPlanData = {
  weeklyPlan: WeeklyPlan[];
  dailySchedule: DailySchedule[];
  goals: {
    label: string;
    value: number;
    total: number;
  }[];
};

type StudyPlanProps = React.ComponentProps<'div'> & {
  state?: 'default' | 'loading' | 'error' | 'empty';
};

const mockStudyPlan: StudyPlanData = {
  weeklyPlan: [],
  dailySchedule: [],
  goals: [],
};

const typeStyles: Record<DailySchedule['type'], string> = {
  Concept: 'bg-blue-50 text-blue-700 border-blue-100',
  Practice: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Revision: 'bg-amber-50 text-amber-700 border-amber-100',
  Quiz: 'bg-violet-50 text-violet-700 border-violet-100',
};

export default function StudyPlan({
  className,
  state = 'default',
  ...props
}: StudyPlanProps) {
  const [data, setData] = useState<StudyPlanData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isLoading = state === 'loading' || state === 'default';

  useEffect(() => {
    if (state === 'error') {
      setLoading(false);
      setError('Unable to load your study plan right now.');
      setData(null);
      return;
    }

    if (state === 'empty') {
      setLoading(false);
      setError(null);
      setData({
        weeklyPlan: [],
        dailySchedule: [],
        goals: [],
      });
      return;
    }

    let isMounted = true;

    async function loadStudyPlan() {
      setLoading(true);
      setError(null);

      await new Promise((r) => setTimeout(r, 400));

      if (isMounted) {
        setData(mockStudyPlan);
        setLoading(false);
      }
    }

    loadStudyPlan();

    return () => {
      isMounted = false;
    };
  }, [state]);

  const overallProgress = useMemo(() => {
    if (!data?.weeklyPlan.length) return 0;

    const total = data.weeklyPlan.reduce((sum, d) => sum + d.progress, 0);

    return Math.round(total / data.weeklyPlan.length);
  }, [data]);

  if (loading || isLoading) {
    return (
      <div className={cn('grid gap-6 animate-pulse', className)} {...props}>
        <div className="h-7 w-48 rounded bg-muted" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="space-y-4 p-6">
                <div className="h-4 w-28 rounded bg-muted" />
                <div className="h-8 w-16 rounded bg-muted" />
                <div className="h-2 rounded bg-muted" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className={cn('border-red-200', className)} {...props}>
        <CardContent className="flex gap-3 p-6 text-red-600">
          <AlertCircle className="size-5 shrink-0" />
          <div>
            <p className="text-sm font-medium">Study plan unavailable</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card className={className} {...props}>
        <CardContent className="flex flex-col items-center py-10 text-center">
          <BookOpen className="size-8 text-muted-foreground" />
          <p className="mt-2 font-medium">No study plan available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Plan Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Today's Load</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data.dailySchedule.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Primary Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Physics</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="size-5" />
            Weekly Plan
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Clean study plan loaded successfully.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
