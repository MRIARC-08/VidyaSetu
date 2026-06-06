import * as React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Circle } from 'lucide-react';
import type { QuizQuestion as QuizQuestionType } from '@/modules/quiz/quiz.types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
  className?: string;
}

export function QuizQuestion({
  question,
  selectedOptionId,
  onSelectOption,
  className,
}: QuizQuestionProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
          {question.questionText}
        </h3>
        
        {/* Render tags for difficulty or type if needed */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            {question.difficulty}
          </span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
            {question.type}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          
          return (
            <button
              key={option.id}
              onClick={() => onSelectOption(option.id)}
              className={cn(
                'group relative flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ease-in-out',
                isSelected
                  ? 'border-primary bg-primary/5 ring-1 ring-primary'
                  : 'hover:border-primary/50 hover:bg-accent/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50'
              )}
            >
              <div
                className={cn(
                  'flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors',
                  isSelected
                    ? 'border-primary text-primary'
                    : 'border-muted-foreground/30 text-transparent group-hover:border-primary/50'
                )}
              >
                {isSelected ? (
                  <CheckCircle2 className="size-5 fill-primary text-primary-foreground" />
                ) : (
                  <Circle className="size-5" />
                )}
              </div>
              <span
                className={cn(
                  'text-base font-medium transition-colors',
                  isSelected ? 'text-primary' : 'text-foreground group-hover:text-foreground/90'
                )}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
