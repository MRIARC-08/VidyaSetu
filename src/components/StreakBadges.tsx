'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StreakBadgesProps extends React.ComponentProps<'div'> {
  currentStreak: number;
  longestStreak: number;
  loading?: boolean;
}

interface BadgeDef {
  id: string;
  title: string;
  description: string;
  icon: string;
  threshold: number;
}

const BADGES: BadgeDef[] = [
  {
    id: 'first-spark',
    title: 'First Spark',
    description: 'Complete your first day',
    icon: '✨',
    threshold: 1,
  },
  {
    id: 'hat-trick',
    title: 'Hat Trick',
    description: '3-day streak',
    icon: '🎩',
    threshold: 3,
  },
  {
    id: 'week-warrior',
    title: 'Week Warrior',
    description: '7-day streak',
    icon: '⚔️',
    threshold: 7,
  },
  {
    id: 'fortnight-force',
    title: 'Fortnight Force',
    description: '14-day streak',
    icon: '💪',
    threshold: 14,
  },
  {
    id: 'month-master',
    title: 'Month Master',
    description: '30-day streak',
    icon: '👑',
    threshold: 30,
  },
  {
    id: 'bimonthly-beast',
    title: 'Bimonthly Beast',
    description: '60-day streak',
    icon: '🐉',
    threshold: 60,
  },
  {
    id: 'century',
    title: 'Century',
    description: '100-day streak',
    icon: '🏆',
    threshold: 100,
  },
  {
    id: 'dedication',
    title: 'Dedication',
    description: '365-day streak',
    icon: '🌟',
    threshold: 365,
  },
];

function StreakBadges({
  currentStreak,
  longestStreak,
  loading,
  className,
  ...props
}: StreakBadgesProps) {
  const streakForBadges = Math.max(currentStreak, longestStreak);

  return (
    <Card className={cn('', className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Streak Badges</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex flex-wrap gap-3 animate-pulse">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="size-14 rounded-full bg-muted" />
                <div className="h-3 w-16 rounded bg-muted" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-4">
            {BADGES.map((badge) => {
              const earned = streakForBadges >= badge.threshold;
              return (
                <div
                  key={badge.id}
                  className={cn(
                    'flex flex-col items-center gap-1 transition-opacity',
                    earned ? 'opacity-100' : 'opacity-30 grayscale'
                  )}
                  title={
                    earned
                      ? `${badge.title} — Earned!`
                      : `${badge.title} — ${badge.threshold - streakForBadges} more days to go`
                  }
                >
                  <div
                    className={cn(
                      'flex size-14 items-center justify-center rounded-full text-2xl',
                      earned
                        ? 'bg-emerald-100 ring-2 ring-emerald-400'
                        : 'bg-muted'
                    )}
                  >
                    {badge.icon}
                  </div>
                  <span className="text-[10px] font-medium text-center leading-tight text-muted-foreground max-w-16">
                    {badge.title}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export { StreakBadges };
export type { BadgeDef };
