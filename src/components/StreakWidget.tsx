'use client';

import * as React from 'react';
import { Flame, Award, Calendar } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { ProgressChart } from '@/components/ProgressChart';

interface DailyActivityDay {
  day: string;
  date: string;
  active: boolean;
}

interface StreakWidgetProps extends React.ComponentProps<typeof Card> {
  currentStreak: number;
  longestStreak: number;
  dailyActivity?: DailyActivityDay[];
}

export function StreakWidget({
  currentStreak,
  longestStreak,
  dailyActivity = [],
  className,
  ...props
}: StreakWidgetProps) {
  const [animate, setAnimate] = React.useState(false);
  const prevStreakRef = React.useRef(currentStreak);

  React.useEffect(() => {
    const prev = prevStreakRef.current;
    prevStreakRef.current = currentStreak;
    if (currentStreak > prev) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timer);
    }
  }, [currentStreak]);

  // Construct chart data for the streak history chart
  const chartData = dailyActivity.map((day) => ({
    label: day.day,
    value: day.active ? 1 : 0,
    color: day.active ? '#f59e0b' : '#e5e7eb', // warning yellow/orange or gray
  }));

  return (
    <Card className={className} {...props}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg font-bold">Practice Streak</CardTitle>
          <CardDescription className="text-xs">
            Complete a quiz every day to maintain your momentum
          </CardDescription>
        </div>
        <Flame
          className={`size-8 transition-transform duration-300 ${
            currentStreak > 0
              ? 'text-orange-500 fill-orange-500 animate-pulse'
              : 'text-muted-foreground'
          } ${animate ? 'scale-110 rotate-12' : ''}`}
          style={{
            filter:
              currentStreak > 0
                ? 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.4))'
                : 'none',
          }}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {/* Streak numbers */}
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-extrabold tracking-tight">
            {currentStreak}
          </span>
          <span className="text-sm font-semibold text-muted-foreground">
            {currentStreak === 1 ? 'day active' : 'days active'}
          </span>
        </div>

        {/* Longest streak badge */}
        <div className="flex items-center gap-2 rounded-lg bg-muted/50 p-2 text-xs font-medium border border-border/40">
          <Award className="size-4 text-warning" />
          <span>
            Personal Record:{' '}
            <strong className="text-foreground">{longestStreak} days</strong>
          </span>
        </div>

        {/* Daily Practice Indicator */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            Weekly Activity
          </span>
          <div className="grid grid-cols-7 gap-1.5">
            {dailyActivity.map((day, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1"
                title={day.date}
              >
                <div
                  className={`flex size-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 border ${
                    day.active
                      ? 'bg-warning border-warning text-white shadow-xs'
                      : 'bg-background border-border text-muted-foreground'
                  }`}
                  style={{
                    boxShadow: day.active
                      ? '0 0 8px rgba(245, 158, 11, 0.2)'
                      : 'none',
                  }}
                >
                  {day.active ? (
                    <Flame className="size-4 fill-white text-white animate-bounce-subtle" />
                  ) : (
                    day.day.charAt(0)
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground font-semibold">
                  {day.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Streak History Chart */}
        {dailyActivity.length > 0 && (
          <div className="mt-2 border-t border-border/40 pt-4">
            <ProgressChart
              title="Practice Record"
              description="Active vs inactive days"
              data={chartData}
              type="bar"
              height={100}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
