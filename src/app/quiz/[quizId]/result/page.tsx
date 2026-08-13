'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { fetchQuizSession } from '@/lib/quiz';
import { QuizQuestion } from '@/components/QuizQuestion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Loader2,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  BarChart3,
  XCircle,
  Medal,
  Trophy,
  User,
} from 'lucide-react';
import type { QuizSessionData } from '@/modules/quiz/quiz.types';
import { fetchLeaderboard, type LeaderboardEntry } from '@/lib/leaderboard';
import { cn } from '@/lib/utils';

export default function QuizResultPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const quizId = resolvedParams.quizId;

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [sessionData, setSessionData] =
    React.useState<QuizSessionData | null>(null);
  const [leaderboard, setLeaderboard] = React.useState<LeaderboardEntry[]>([]);
  const [leaderboardLoaded, setLeaderboardLoaded] = React.useState(false);
  React.useEffect(() => {
    let cancelled = false;

    async function loadResults() {
      try {
        const storedSessionId = sessionStorage.getItem(
          `quiz_${quizId}_sessionId`
        );
        if (!storedSessionId) {
          throw new Error('No quiz session found. Please take a quiz first.');
        }
        const data = await fetchQuizSession(storedSessionId);
        if (!cancelled) setSessionData(data);

        try {
          const lb = await fetchLeaderboard();
          if (!cancelled) {
            setLeaderboard(lb);
            setLeaderboardLoaded(true);
          }
        } catch {
          if (!cancelled) setLeaderboardLoaded(true);
        }
      } catch (err) {
        if (!cancelled)
          setError(
            err instanceof Error ? err.message : 'Failed to load results'
          );
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadResults();
    return () => {
      cancelled = true;
    };
  }, [quizId]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="size-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground animate-pulse">
            Loading your results...
          </p>
        </div>
      </div>
    );
  }

  if (error || !sessionData) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 py-20 text-center">
        <div className="rounded-full bg-red-100 p-4">
          <AlertCircle className="size-8 text-red-600" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Could not load results</h2>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
        <Button
          onClick={() => router.push('/dashboard')}
          variant="outline"
          className="mt-4"
        >
          Go to Dashboard
        </Button>
      </div>
    );
  }

  const { session, responses } = sessionData;
  const correctCount = responses.filter((r) => r.isCorrect).length;
  const totalCount = responses.length;
  const accuracy =
    totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 py-10 px-4">
      <Button
        variant="ghost"
        onClick={() => router.push('/dashboard')}
        className="self-start gap-2"
      >
        <ArrowLeft className="size-4" />
        Back to Dashboard
      </Button>

      <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
        <div
          className={cn(
            'p-8 text-center',
            accuracy >= 60 ? 'bg-green-50' : 'bg-amber-50'
          )}
        >
          <div
            className={cn(
              'mx-auto flex size-16 items-center justify-center rounded-full mb-4',
              accuracy >= 60
                ? 'bg-green-100 text-green-600'
                : 'bg-amber-100 text-amber-600'
            )}
          >
            <BarChart3 className="size-8" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Quiz Complete!
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Review your answers below to learn from mistakes
          </p>
        </div>
        <CardContent className="grid gap-6 p-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/50 p-4">
              <span className="text-3xl font-bold text-primary">
                {accuracy}%
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                Accuracy
              </span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/50 p-4">
              <CheckCircle2 className="size-5 text-green-600 mb-1" />
              <span className="text-3xl font-bold text-green-600">
                {correctCount}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                Correct
              </span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/50 p-4">
              <XCircle className="size-5 text-red-600 mb-1" />
              <span className="text-3xl font-bold text-red-600">
                {totalCount - correctCount}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                Incorrect
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <CheckCircle2 className="size-5 text-primary" />
          Detailed Review ({responses.length} question
          {responses.length !== 1 ? 's' : ''})
        </h3>

        {responses.map((response, index) => {
          const correctOption = response.question.options.find(
            (opt) => opt.isCorrect
          );

          return (
            <div
              key={response.id}
              className="rounded-xl border bg-card shadow-sm"
            >
              <div className="flex items-center gap-3 border-b bg-muted/30 px-6 py-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  {index + 1}
                </span>
                <span
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
                    response.isCorrect
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  )}
                >
                  {response.isCorrect ? (
                    <>
                      <CheckCircle2 className="size-3" /> Correct
                    </>
                  ) : (
                    <>
                      <XCircle className="size-3" /> Incorrect
                    </>
                  )}
                </span>
              </div>
              <div className="p-6">
                <QuizQuestion
                  question={response.question as any}
                  selectedOptionId={response.selectedOptionId || undefined}
                  onSelectOption={() => {}}
                  reviewMode
                  wasCorrect={response.isCorrect}
                  correctOptionId={correctOption?.id}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 pt-4">
        <Button
          onClick={() => router.push('/quiz/create')}
          size="lg"
          variant="outline"
          className="gap-2"
        >
          Take Another Quiz
        </Button>
        <Button
          onClick={() => router.push('/dashboard')}
          size="lg"
          className="gap-2"
        >
          <BarChart3 className="size-4" />
          View Dashboard
        </Button>
      </div>

      {leaderboardLoaded && leaderboard.length > 0 && (
        <div className="mx-auto mt-12 w-full max-w-2xl border-t pt-10">
          <div className="mb-6 flex items-center gap-2">
            <Trophy className="size-5 text-yellow-600" />
            <h2 className="text-lg font-bold tracking-tight">Leaderboard</h2>
          </div>
          <div className="divide-y rounded-lg border">
            {leaderboard.map((entry) => (
              <div
                key={entry.userId}
                className="flex items-center gap-3 px-4 py-3"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">
                  {entry.rank <= 3 ? (
                    <Medal
                      className={`size-4 ${
                        entry.rank === 1
                          ? 'text-yellow-500'
                          : entry.rank === 2
                            ? 'text-gray-400'
                            : 'text-amber-700'
                      }`}
                    />
                  ) : (
                    `#${entry.rank}`
                  )}
                </span>
                <div className="flex size-8 items-center justify-center overflow-hidden rounded-full bg-muted">
                  <User className="size-4 text-muted-foreground" />
                </div>
                <span className="flex-1 text-sm font-medium">
                  {entry.name}
                </span>
                <span className="text-sm font-bold tabular-nums">
                  {entry.score}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
