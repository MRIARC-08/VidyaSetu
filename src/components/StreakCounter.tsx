'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StreakCounterProps extends React.ComponentProps<'div'> {
  currentStreak: number;
  longestStreak: number;
  todayActive: boolean;
  loading?: boolean;
}

const STREAK_MESSAGES = [
  { threshold: 0, message: 'Start your learning streak today!' },
  { threshold: 1, message: 'Great start! Keep the momentum going!' },
  { threshold: 3, message: 'You are building a habit. Stay consistent!' },
  { threshold: 7, message: 'One week strong! You are on fire!' },
  { threshold: 14, message: 'Two weeks of dedication! Unstoppable!' },
  { threshold: 30, message: 'One month streak! Incredible discipline!' },
  { threshold: 60, message: 'Two months! Learning is your lifestyle!' },
  { threshold: 100, message: 'Century streak! You are a learning machine!' },
];

function getMessage(streak: number): string {
  let msg = STREAK_MESSAGES[0].message;

  for (const entry of STREAK_MESSAGES) {
    if (streak >= entry.threshold) {
      msg = entry.message;
    }
  }

  return msg;
}

function StreakCounter({
  currentStreak,
  longestStreak,
  todayActive,
  loading,
  className,
  ...props
}: StreakCounterProps) {
  return (
    <Card className={cn('', className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
        <span className="text-lg">{todayActive ? '🔥' : '❄️'}</span>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-10 w-20 rounded bg-muted" />
            <div className="h-4 w-48 rounded bg-muted" />
            <div className="h-3 w-32 rounded bg-muted" />
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tabular-nums">
                {currentStreak}
              </span>
              <span className="text-sm text-muted-foreground">days</span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {getMessage(currentStreak)}
            </p>

            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              {todayActive ? (
                <span className="flex items-center gap-1 text-emerald-600">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Active today
                </span>
              ) : (
                <span className="flex items-center gap-1 text-amber-600">
                  <span className="size-1.5 rounded-full bg-amber-500" />
                  No activity yet today
                </span>
              )}
              <span className="mx-1">·</span>
              <span>Longest: {longestStreak} days</span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export { StreakCounter };
export { getMessage, STREAK_MESSAGES };
