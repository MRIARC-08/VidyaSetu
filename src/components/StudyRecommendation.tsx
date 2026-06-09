'use client';

import * as React from 'react';
import {
  AlertCircle,
  BookOpen,
  Clock,
  Lightbulb,
  Loader2,
  Sparkles,
  Target,
  Trophy,
} from 'lucide-react';
import authFetch from '@/lib/auth/authFetch';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WeakTopicResult {
  topicName: string;
  topicId: string;
  accuracy: number;
  attempts: number;
  correctAnswers: number;
}

interface WeakTopicsData {
  topics: WeakTopicResult[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface Recommendation {
  topicName: string;
  accuracy: number;
  suggestion: string;
}

function generateRecommendations(topics: WeakTopicResult[]): {
  recommendations: Recommendation[];
  insight: string;
  estimatedHours: number;
} {
  if (topics.length === 0) {
    return {
      recommendations: [],
      insight: 'No weak topics identified. Great job keeping up!',
      estimatedHours: 0,
    };
  }

  const avgAccuracy =
    topics.reduce((sum, t) => sum + t.accuracy, 0) / topics.length;
  const worst = [...topics].sort((a, b) => a.accuracy - b.accuracy);

  const recommendations: Recommendation[] = worst.slice(0, 3).map((t) => {
    let suggestion: string;
    if (t.attempts < 3) {
      suggestion = 'Start with a practice quiz to gauge your understanding';
    } else if (t.accuracy < 30) {
      suggestion = 'Review the chapter content first, then attempt a quiz';
    } else {
      suggestion = 'Take a focused quiz on this topic to improve accuracy';
    }
    return {
      topicName: t.topicName,
      accuracy: t.accuracy,
      suggestion,
    };
  });

  const totalNeeded = topics.filter((t) => t.accuracy < 60).length;
  const estimatedHours = Math.max(1, Math.ceil(totalNeeded * 0.5));

  let insight: string;
  if (avgAccuracy < 30) {
    insight = 'Focus on reviewing chapter content before attempting quizzes';
  } else if (avgAccuracy < 45) {
    insight = 'Consistent practice will help — aim for one quiz per topic per day';
  } else {
    insight = 'You are close to mastering these topics — targeted practice will close the gap';
  }

  return { recommendations, insight, estimatedHours };
}

function StudyRecommendation({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [weakTopics, setWeakTopics] = React.useState<WeakTopicResult[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let active = true;

    async function fetchData() {
      try {
        const res = await authFetch({
          url: '/api/analytics/weak-topics?limit=50&sortBy=accuracy',
          options: { method: 'GET' },
        });
        const json = res as { data?: WeakTopicsData };
        if (active && json?.data) {
          setWeakTopics(json.data.topics);
        }
      } catch {
        if (active) setError('Unable to load recommendations');
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchData();
    return () => {
      active = false;
    };
  }, []);

  const { recommendations, insight, estimatedHours } =
    React.useMemo(() => generateRecommendations(weakTopics), [weakTopics]);

  return (
    <Card className={cn('', className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="size-5 text-muted-foreground" />
          Study Recommendations
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {loading ? (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="size-5 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="size-4 shrink-0" />
            {error}
          </div>
        ) : recommendations.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-6 text-center">
            <Trophy className="size-8 text-muted-foreground/50" />
            <p className="text-sm font-medium">No recommendations needed</p>
            <p className="text-xs text-muted-foreground">
              You are doing great — keep up the consistent practice
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 rounded-lg border bg-muted/30 px-4 py-3">
              <Lightbulb className="size-5 shrink-0 text-amber-500" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {insight}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Focus on these topics first
              </h4>
              {recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border p-3"
                >
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {rec.topicName}
                      </span>
                      <span
                        className={cn(
                          'text-xs font-medium',
                          rec.accuracy < 30
                            ? 'text-red-600'
                            : rec.accuracy < 45
                              ? 'text-orange-600'
                              : 'text-amber-600'
                        )}
                      >
                        {rec.accuracy}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {rec.suggestion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 rounded-lg border bg-muted/20 px-4 py-3">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Est. study time:</span>
                <span className="font-medium">{estimatedHours}h</span>
              </div>
              <div className="ml-auto flex items-center gap-2 text-sm">
                <Target className="size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Topics to review:</span>
                <span className="font-medium">{weakTopics.length}</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.location.href = '/quiz/create'}
            >
              <BookOpen className="size-3.5" />
              Create Practice Quiz
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export { StudyRecommendation };
