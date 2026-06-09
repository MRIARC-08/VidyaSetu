'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  BarChart3,
  Brain,
  CheckCircle2,
  Circle,
  Layers,
  ListChecks,
  Target,
  Zap,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Difficulty = 'easy' | 'medium' | 'hard';

type QuizType =
  | 'Concept Check'
  | 'Timed Practice'
  | 'Revision Drill'
  | 'Mixed Quiz';

type TopicPerformance = {
  topic: string;
  subject: string;
  accuracy: number;
  attempts: number;
  confidence: number;
  suggestedType: QuizType;
};

type ProgressionStep = {
  label: string;
  description: string;
  difficulty: Difficulty;
  completed: boolean;
  active: boolean;
};

type AdaptiveQuizData = {
  overallAccuracy: number;
  streak: number;
  recentAttempts: number;
  topics: TopicPerformance[];
  progression: ProgressionStep[];
};

type AdaptiveQuizProps = React.ComponentProps<'div'> & {
  state?: 'default' | 'loading' | 'error' | 'empty';
};

const mockPerformanceData: AdaptiveQuizData = {
  overallAccuracy: 68,
  streak: 4,
  recentAttempts: 12,
  topics: [
    {
      topic: 'Motion Graphs',
      subject: 'Physics',
      accuracy: 42,
      attempts: 5,
      confidence: 38,
      suggestedType: 'Concept Check',
    },
    {
      topic: 'Linear Equations',
      subject: 'Maths',
      accuracy: 71,
      attempts: 8,
      confidence: 74,
      suggestedType: 'Timed Practice',
    },
    {
      topic: 'Acids and Bases',
      subject: 'Chemistry',
      accuracy: 57,
      attempts: 6,
      confidence: 52,
      suggestedType: 'Revision Drill',
    },
    {
      topic: 'Cell Structure',
      subject: 'Biology',
      accuracy: 84,
      attempts: 7,
      confidence: 81,
      suggestedType: 'Mixed Quiz',
    },
  ],
  progression: [
    {
      label: 'Build Accuracy',
      description: 'Start with guided questions from weak concepts.',
      difficulty: 'easy',
      completed: true,
      active: false,
    },
    {
      label: 'Improve Speed',
      description: 'Move into timed practice with familiar patterns.',
      difficulty: 'medium',
      completed: false,
      active: true,
    },
    {
      label: 'Challenge Round',
      description: 'Unlock hard mixed quizzes after 80% consistency.',
      difficulty: 'hard',
      completed: false,
      active: false,
    },
  ],
};

const difficultyStyles: Record<Difficulty, string> = {
  easy: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  medium: 'border-amber-100 bg-amber-50 text-amber-700',
  hard: 'border-red-100 bg-red-50 text-red-700',
};

const quizTypeStyles: Record<QuizType, string> = {
  'Concept Check': 'border-blue-100 bg-blue-50 text-blue-700',
  'Timed Practice': 'border-violet-100 bg-violet-50 text-violet-700',
  'Revision Drill': 'border-amber-100 bg-amber-50 text-amber-700',
  'Mixed Quiz': 'border-emerald-100 bg-emerald-50 text-emerald-700',
};

function getSuggestedDifficulty(data: AdaptiveQuizData): Difficulty {
  const weakTopicCount = data.topics.filter(
    (topic) => topic.accuracy < 55
  ).length;

  if (data.overallAccuracy >= 80 && weakTopicCount === 0) {
    return 'hard';
  }

  if (data.overallAccuracy >= 60 && data.recentAttempts >= 8) {
    return 'medium';
  }

  return 'easy';
}

function getPriorityLabel(accuracy: number) {
  if (accuracy < 50) {
    return 'High priority';
  }

  if (accuracy < 70) {
    return 'Needs practice';
  }

  return 'Ready to advance';
}

export default function AdaptiveQuiz({
  className,
  state = 'default',
  ...props
}: AdaptiveQuizProps) {
  const [data, setData] = useState<AdaptiveQuizData | null>(null);
  const [loading, setLoading] = useState(
    state === 'loading' || state === 'default'
  );
  const [error, setError] = useState<string | null>(
    state === 'error' ? 'Unable to prepare adaptive quiz suggestions.' : null
  );

  useEffect(() => {
    if (state === 'loading') {
      setLoading(true);
      setError(null);
      setData(null);
      return;
    }

    if (state === 'error') {
      setLoading(false);
      setError('Unable to prepare adaptive quiz suggestions.');
      setData(null);
      return;
    }

    if (state === 'empty') {
      setLoading(false);
      setError(null);
      setData({
        overallAccuracy: 0,
        streak: 0,
        recentAttempts: 0,
        topics: [],
        progression: [],
      });
      return;
    }

    let isMounted = true;

    async function loadAdaptiveQuiz() {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (isMounted) {
        setData(mockPerformanceData);
        setLoading(false);
      }
    }

    loadAdaptiveQuiz();

    return () => {
      isMounted = false;
    };
  }, [state]);

  const suggestedDifficulty = useMemo(() => {
    if (!data) {
      return 'easy';
    }

    return getSuggestedDifficulty(data);
  }, [data]);

  const recommendedTopics = useMemo(() => {
    if (!data) {
      return [];
    }

    return [...data.topics].sort((first, second) => {
      return first.accuracy - second.accuracy;
    });
  }, [data]);

  if (loading) {
    return (
      <div className={cn('grid gap-6 animate-pulse', className)} {...props}>
        <div className="h-7 w-56 rounded bg-muted" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index}>
              <CardContent className="space-y-4 p-6">
                <div className="h-4 w-28 rounded bg-muted" />
                <div className="h-8 w-16 rounded bg-muted" />
                <div className="h-2 rounded bg-muted" />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Card className="h-80" />
          <Card className="h-80" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className={cn('border-red-200', className)} {...props}>
        <CardContent className="flex items-start gap-3 p-6 text-red-600">
          <AlertCircle className="mt-0.5 size-5 shrink-0" />
          <div>
            <p className="text-sm font-medium">Adaptive quiz unavailable</p>
            <p className="mt-1 text-sm text-muted-foreground">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!data || data.topics.length === 0) {
    return (
      <Card className={className} {...props}>
        <CardContent className="flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
          <Brain className="size-8 text-muted-foreground" />
          <div>
            <p className="font-semibold">No quiz suggestions yet</p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Complete a few practice questions to generate adaptive difficulty,
              topic, and quiz type recommendations.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Suggested Difficulty
            </CardTitle>
            <Zap className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'rounded-full border px-3 py-1 text-sm font-semibold capitalize',
                  difficultyStyles[suggestedDifficulty]
                )}
              >
                {suggestedDifficulty}
              </span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Based on recent accuracy, attempts, and weak topic count
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Overall Accuracy
            </CardTitle>
            <BarChart3 className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overallAccuracy}%</div>
            <div className="mt-3 h-2 rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${data.overallAccuracy}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Practice Momentum
            </CardTitle>
            <Target className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.streak} days</div>
            <p className="text-xs text-muted-foreground">
              {data.recentAttempts} recent quiz attempts reviewed
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="size-5" />
              Recommended Topics and Quiz Types
            </CardTitle>
            <CardDescription>
              Lower accuracy topics are prioritized first
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-1">
              {recommendedTopics.map((topic) => (
                <div
                  key={`${topic.subject}-${topic.topic}`}
                  className="rounded-lg border bg-muted/30 p-4"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold">{topic.topic}</h3>
                        <span
                          className={cn(
                            'rounded-full border px-2 py-0.5 text-[11px] font-medium',
                            quizTypeStyles[topic.suggestedType]
                          )}
                        >
                          {topic.suggestedType}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {topic.subject} · {topic.attempts} attempts ·{' '}
                        {getPriorityLabel(topic.accuracy)}
                      </p>
                    </div>
                    <div className="min-w-32">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-xs text-muted-foreground">
                          Accuracy
                        </span>
                        <span className="text-sm font-semibold">
                          {topic.accuracy}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-background">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${topic.accuracy}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="size-5" />
                Progression Logic
              </CardTitle>
              <CardDescription>
                Difficulty increases as consistency improves
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.progression.map((step, index) => (
                <div
                  key={step.label}
                  className={cn(
                    'rounded-lg border p-4',
                    step.active
                      ? 'bg-primary/5 border-primary/30'
                      : 'bg-muted/30'
                  )}
                >
                  <div className="flex items-start gap-3">
                    {step.completed ? (
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                    ) : (
                      <Circle
                        className={cn(
                          'mt-0.5 size-5 shrink-0',
                          step.active ? 'text-primary' : 'text-muted-foreground'
                        )}
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold">
                          {index + 1}. {step.label}
                        </p>
                        <span
                          className={cn(
                            'rounded-full border px-2 py-0.5 text-[11px] font-medium capitalize',
                            difficultyStyles[step.difficulty]
                          )}
                        >
                          {step.difficulty}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="size-5" />
                Next Quiz Mix
              </CardTitle>
              <CardDescription>
                Suggested structure for the next adaptive session
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                ['Weak concepts', '40%', 'Concept Check'],
                ['Current practice', '35%', 'Timed Practice'],
                ['Retention review', '25%', 'Revision Drill'],
              ].map(([label, weight, type]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-3 rounded-lg border bg-muted/30 p-3"
                >
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-muted-foreground">{type}</p>
                  </div>
                  <span className="text-sm font-semibold">{weight}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
