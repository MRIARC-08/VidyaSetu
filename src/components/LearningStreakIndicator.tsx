'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Star, Award, Zap } from 'lucide-react';

interface StreakDayProps {
  day: string;
  date: number;
  active: boolean;
  current: boolean;
}

function StreakDay({ day, date, active, current }: StreakDayProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] font-medium text-muted-foreground uppercase">
        {day}
      </span>
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300",
          current
            ? "bg-primary text-primary-foreground scale-110 shadow-lg"
            : active
              ? "bg-primary/20 text-primary"
              : "bg-muted text-muted-foreground"
        )}
      >
        {date}
      </div>
      {active && (
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      )}
    </div>
  );
}

interface LearningStreakIndicatorProps extends React.ComponentProps<'div'> {
  streakCount?: number;
  weekData?: { day: string; date: number; active: boolean }[];
}

function LearningStreakIndicator({
  streakCount = 7,
  weekData,
  className,
  ...props
}: LearningStreakIndicatorProps) {
  const [animatedStreak, setAnimatedStreak] = React.useState(0);

  const defaultWeekData = weekData || [
    { day: 'Mon', date: 17, active: true },
    { day: 'Tue', date: 18, active: true },
    { day: 'Wed', date: 19, active: true },
    { day: 'Thu', date: 20, active: false },
    { day: 'Fri', date: 21, active: false },
    { day: 'Sat', date: 22, active: false },
    { day: 'Sun', date: 23, active: false },
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStreak(streakCount);
    }, 300);
    return () => clearTimeout(timer);
  }, [streakCount]);

  const getStreakMessage = () => {
    if (streakCount === 0) return "Start your streak today!";
    if (streakCount < 3) return "Great start! Keep going!";
    if (streakCount < 7) return "You're building momentum!";
    if (streakCount < 14) return "One week strong! Amazing!";
    if (streakCount < 30) return "Incredible dedication!";
    return "You're unstoppable! Learning champion!";
  };

  const getStreakIcon = () => {
    if (streakCount === 0) return <Star className="w-6 h-6" />;
    if (streakCount < 3) return <Zap className="w-6 h-6" />;
    if (streakCount < 7) return <Flame className="w-6 h-6" />;
    return <Award className="w-6 h-6" />;
  };

  return (
    <Card className={cn('overflow-hidden', className)} {...props}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <span className="text-amber-500">{getStreakIcon()}</span>
          Learning Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tabular-nums text-amber-500">
                {animatedStreak}
              </span>
              <span className="text-sm text-muted-foreground">days</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {getStreakMessage()}
            </p>
          </div>
          <div className="flex gap-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-6 rounded-full transition-all duration-300",
                  i < (streakCount % 7 || 7)
                    ? "bg-amber-500"
                    : "bg-muted"
                )}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  opacity: i < (streakCount % 7 || 7) ? 1 : 0.5
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4 pt-4 border-t border-border/50">
          {defaultWeekData.map((day, i) => (
            <StreakDay
              key={i}
              day={day.day}
              date={day.date}
              active={day.active}
              current={i === defaultWeekData.length - 1 && day.active}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { LearningStreakIndicator };
