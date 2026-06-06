'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

interface QuizTimerProps {
  startTime: number;
  isActive: boolean;
  onTimeUpdate?: (seconds: number) => void;
  className?: string;
}

export function QuizTimer({ startTime, isActive, onTimeUpdate, className }: QuizTimerProps) {
  const [elapsed, setElapsed] = React.useState(0);

  React.useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const seconds = Math.floor((now - startTime) / 1000);
      setElapsed(seconds);
      if (onTimeUpdate) {
        onTimeUpdate(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, isActive, onTimeUpdate]);

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  const displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-lg border bg-card px-3 py-1.5 text-sm font-medium shadow-sm transition-colors',
        isActive ? 'text-primary' : 'text-muted-foreground',
        className
      )}
    >
      <Clock className={cn('size-4', isActive && 'animate-pulse')} />
      <span className="tabular-nums tracking-wider">{displayTime}</span>
    </div>
  );
}
