'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Swords, RefreshCw } from 'lucide-react';

type QuizMode = 'PRACTICE' | 'TEST' | 'REVISION';

interface QuizModeSelectorProps {
  value: QuizMode | null;
  onChange: (mode: QuizMode) => void;
  className?: string;
}

const MODES: { value: QuizMode; label: string; description: string; icon: React.ReactNode }[] = [
  {
    value: 'PRACTICE',
    label: 'Practice',
    description: 'Learn at your own pace with instant feedback on each question',
    icon: <BookOpen className="size-5" />,
  },
  {
    value: 'TEST',
    label: 'Test',
    description: 'Timed assessment with scoring and detailed results at the end',
    icon: <Swords className="size-5" />,
  },
  {
    value: 'REVISION',
    label: 'Revision',
    description: 'Quick review of key concepts with targeted questions',
    icon: <RefreshCw className="size-5" />,
  },
];

function QuizModeSelector({ value, onChange, className }: QuizModeSelectorProps) {
  return (
    <div className={cn('grid gap-3 sm:grid-cols-3', className)}>
      {MODES.map((mode) => {
        const isSelected = value === mode.value;
        return (
          <button
            key={mode.value}
            type="button"
            onClick={() => onChange(mode.value)}
            className={cn(
              'flex flex-col items-start gap-2 rounded-xl border p-4 text-left transition-all',
              'hover:border-primary/50 hover:bg-accent/50',
              isSelected
                ? 'border-primary bg-primary/5 ring-1 ring-primary'
                : 'border-border bg-card'
            )}
          >
            <div
              className={cn(
                'flex size-9 items-center justify-center rounded-lg',
                isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              )}
            >
              {mode.icon}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold">{mode.label}</span>
              <span className="text-xs text-muted-foreground leading-relaxed">
                {mode.description}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export type { QuizMode };
export { QuizModeSelector };
