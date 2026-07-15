import * as React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Circle, XCircle, HelpCircle } from 'lucide-react';
import type { QuizQuestion as QuizQuestionType } from '@/modules/quiz/quiz.types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
  className?: string;
  reviewMode?: boolean;
  correctOptionId?: string;
  wasCorrect?: boolean | null;
}

export function QuizQuestion({
  question,
  selectedOptionId,
  onSelectOption,
  className,
  reviewMode = false,
  correctOptionId,
  wasCorrect,
}: QuizQuestionProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
          {question.questionText}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground">
            {question.difficulty}
          </span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary/10 text-primary">
            {question.type}
          </span>
          {reviewMode && wasCorrect !== null && (
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                wasCorrect
                  ? 'border-green-500/30 bg-green-50 text-green-700'
                  : 'border-red-500/30 bg-red-50 text-red-700'
              )}
            >
              {wasCorrect ? (
                <>
                  <CheckCircle2 className="size-3" /> Correct
                </>
              ) : (
                <>
                  <XCircle className="size-3" /> Incorrect
                </>
              )}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrectAnswer = correctOptionId === option.id;
          const isWrongSelection = isSelected && !isCorrectAnswer;

          let borderClass =
            'border-border hover:border-primary/50 hover:bg-accent/50';
          let icon = <Circle className="size-5" />;
          let iconContainerClass =
            'border-muted-foreground/30 text-transparent';

          if (reviewMode) {
            if (isCorrectAnswer) {
              borderClass =
                'border-green-500 bg-green-50/50 ring-1 ring-green-500';
              icon = (
                <CheckCircle2 className="size-5 fill-green-500 text-white" />
              );
              iconContainerClass = 'border-green-500 text-green-500';
            } else if (isWrongSelection) {
              borderClass = 'border-red-500 bg-red-50/50 ring-1 ring-red-500';
              icon = <XCircle className="size-5 fill-red-500 text-white" />;
              iconContainerClass = 'border-red-500 text-red-500';
            } else if (isSelected) {
              borderClass = 'border-primary bg-primary/5 ring-1 ring-primary';
              icon = (
                <CheckCircle2 className="size-5 fill-primary text-primary-foreground" />
              );
              iconContainerClass = 'border-primary text-primary';
            }
          } else if (isSelected) {
            borderClass = 'border-primary bg-primary/5 ring-1 ring-primary';
            icon = (
              <CheckCircle2 className="size-5 fill-primary text-primary-foreground" />
            );
            iconContainerClass = 'border-primary text-primary';
          }

          return (
            <button
              key={option.id}
              onClick={() => !reviewMode && onSelectOption(option.id)}
              disabled={reviewMode}
              className={cn(
                'group relative flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ease-in-out',
                borderClass,
                reviewMode && 'cursor-default'
              )}
            >
              <div
                className={cn(
                  'flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors',
                  iconContainerClass
                )}
              >
                {icon}
              </div>
              <span
                className={cn(
                  'text-base font-medium transition-colors',
                  reviewMode &&
                    isCorrectAnswer &&
                    'text-green-700 font-semibold',
                  reviewMode && isWrongSelection && 'text-red-700',
                  !reviewMode && isSelected && 'text-primary'
                )}
              >
                {option.label}
                {reviewMode && isCorrectAnswer && !isSelected && (
                  <span className="ml-2 text-xs text-green-600 font-normal">
                    (correct answer)
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {reviewMode && question.explanation && (
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
          <div className="flex items-center gap-2 mb-1 font-medium">
            <HelpCircle className="size-4" />
            Explanation
          </div>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
