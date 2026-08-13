'use client';

import * as React from 'react';
import { BookOpen, ExternalLink, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface TopicCardData {
  topicName: string;
  topicId: string;
  accuracy: number;
  attempts: number;
  correctAnswers: number;
}

function getAccuracyColor(accuracy: number): string {
  if (accuracy < 30) return 'text-red-600 bg-red-50 border-red-200';
  if (accuracy < 45) return 'text-orange-600 bg-orange-50 border-orange-200';
  return 'text-amber-600 bg-amber-50 border-amber-200';
}

function getProgressColor(accuracy: number): string {
  if (accuracy < 30) return 'bg-red-500';
  if (accuracy < 45) return 'bg-orange-500';
  return 'bg-amber-500';
}

function TopicCard({
  topic,
  onPractice,
  onViewChapter,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  topic: TopicCardData;
  onPractice?: (topicId: string) => void;
  onViewChapter?: (topicId: string) => void;
}) {
  const accuracyColor = getAccuracyColor(topic.accuracy);

  return (
    <Card
      className={cn('group transition-shadow hover:shadow-md', className)}
      {...props}
    >
      <CardContent className="flex items-center gap-4 p-4">
        <div
          className={cn(
            'flex size-14 shrink-0 items-center justify-center rounded-full border-2 font-bold text-sm',
            accuracyColor
          )}
        >
          {topic.accuracy}%
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex items-center gap-2">
            <Target className="size-4 shrink-0 text-muted-foreground" />
            <span className="truncate text-sm font-medium">
              {topic.topicName}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>
              {topic.attempts} attempt{topic.attempts !== 1 ? 's' : ''}
            </span>
            <span>{topic.correctAnswers} correct</span>
          </div>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={cn('h-full rounded-full transition-all', getProgressColor(topic.accuracy))}
              style={{ width: `${topic.accuracy}%` }}
            />
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-1.5">
          <Button
            size="sm"
            variant="default"
            onClick={() => onPractice?.(topic.topicId)}
            className="gap-1.5 text-xs"
          >
            <BookOpen className="size-3.5" />
            Practice
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onViewChapter?.(topic.topicId)}
            className="gap-1.5 text-xs"
          >
            <ExternalLink className="size-3.5" />
            Chapter
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export { TopicCard };
