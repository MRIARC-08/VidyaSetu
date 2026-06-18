import * as React from 'react';
import { cn } from '@/lib/utils';
import { Trophy } from 'lucide-react';

interface QuizProgressProps {
  current: number;
  total: number;
  className?: string;
}

export function QuizProgress({ current, total, className }: QuizProgressProps) {
  const percentage = Math.max(
    0,
    Math.min(100, Math.round((current / total) * 100))
  );

  return (
    <div className={cn('flex w-full items-center gap-4', className)}>
      <div className="flex flex-col gap-1 text-sm font-medium">
        <span className="text-muted-foreground whitespace-nowrap">
          Question {current} of {total}
        </span>
      </div>
      <div className="relative h-2 w-full flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className="absolute inset-y-0 left-0 bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex items-center justify-center rounded-full bg-primary/10 p-1.5 text-primary">
        <Trophy className="size-4" />
      </div>
    </div>
  );
}
