'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { startQuizSession, submitQuizSession } from '@/lib/quiz';
import { QuizQuestion } from '@/components/QuizQuestion';
import { QuizProgress } from '@/components/QuizProgress';
import { QuizTimer } from '@/components/QuizTimer';
import { Button } from '@/components/ui/button';
import { Loader2, AlertCircle, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { QuizQuestion as QuizQuestionType } from '@/modules/quiz/quiz.types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function QuizAttemptPage({ params }: { params: any }) {
  const router = useRouter();
  
  // Next.js 15+ passes params as a Promise, so we safely unwrap it if it is one,
  // or use it directly. We'll use React.use() for robustness.
  const resolvedParams = React.use(params as Promise<{ quizId: string }> | { quizId: string }) as { quizId: string };
  const quizId = resolvedParams.quizId;

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  
  const [sessionId, setSessionId] = React.useState<string | null>(null);
  const [questions, setQuestions] = React.useState<QuizQuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [startTime, setStartTime] = React.useState(Date.now());
  
  const [responses, setResponses] = React.useState<Record<string, string>>({});
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState<any>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function initQuiz() {
      try {
        const storedQuestions = sessionStorage.getItem(`quiz_${quizId}_questions`);
        if (!storedQuestions) {
          throw new Error('Questions not found. Please create the quiz again.');
        }
        
        const parsedQuestions = JSON.parse(storedQuestions);
        if (!cancelled) setQuestions(parsedQuestions);

        const session = await startQuizSession({ quizId });
        if (!cancelled) {
          setSessionId(session.id);
          setStartTime(Date.now());
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to start quiz');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    initQuiz();
    return () => { cancelled = true; };
  }, [quizId]);

  const currentQuestion = questions[currentIndex];
  
  const handleSelectOption = (optionId: string) => {
    if (!currentQuestion) return;
    setResponses((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!sessionId) return;
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Calculate a rough time taken per question (just dividing total equally for this prototype)
      const totalElapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const avgTime = Math.floor(totalElapsedSeconds / questions.length) || 1;

      const payload = {
        sessionId,
        responses: Object.entries(responses).map(([questionId, selectedOptionId]) => ({
          questionId,
          selectedOptionId,
          timeTaken: avgTime,
        }))
      };
      
      const result = await submitQuizSession(payload);
      setSubmittedData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit quiz');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="size-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground animate-pulse">Preparing your quiz...</p>
        </div>
      </div>
    );
  }

  if (error && !submittedData) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 py-20 text-center">
        <div className="rounded-full bg-red-100 p-4">
          <AlertCircle className="size-8 text-red-600" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Oops! Something went wrong</h2>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
        <Button onClick={() => router.push('/quiz/create')} variant="outline" className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  if (submittedData) {
    const { summary } = submittedData;
    return (
      <div className="mx-auto flex max-w-lg flex-col gap-8 py-10">
        <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
          <div className="bg-primary/10 p-8 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
              <CheckCircle2 className="size-8" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Quiz Completed!</h2>
            <p className="text-sm text-muted-foreground mt-2">Here is your performance summary</p>
          </div>
          <CardContent className="grid gap-6 p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/50 p-4">
                <span className="text-3xl font-bold text-primary">{summary.accuracy}%</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Accuracy</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/50 p-4">
                <span className="text-3xl font-bold text-primary">
                  {summary.correctCount} <span className="text-base font-normal text-muted-foreground">/ {summary.totalQuestions}</span>
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Score</span>
              </div>
            </div>
            <Button onClick={() => router.push('/dashboard')} size="lg" className="w-full">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!questions.length || !currentQuestion) {
    return null;
  }

  const isLastQuestion = currentIndex === questions.length - 1;
  const isAllAnswered = Object.keys(responses).length === questions.length;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 py-6">
      {/* Header Info */}
      <div className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm">
        <QuizProgress 
          current={currentIndex + 1} 
          total={questions.length} 
          className="max-w-xs"
        />
        <QuizTimer 
          startTime={startTime} 
          isActive={!isSubmitting} 
        />
      </div>

      {/* Main Question Area */}
      <QuizQuestion
        question={currentQuestion}
        selectedOptionId={responses[currentQuestion.id]}
        onSelectOption={handleSelectOption}
      />

      {/* Navigation & Actions */}
      <div className="flex items-center justify-between pt-4">
        <Button
          variant="outline"
          size="lg"
          onClick={handlePrev}
          disabled={currentIndex === 0 || isSubmitting}
          className="gap-2"
        >
          <ChevronLeft className="size-4" />
          Previous
        </Button>

        {isLastQuestion ? (
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={isSubmitting || !isAllAnswered}
            className="gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Quiz
                <CheckCircle2 className="size-4" />
              </>
            )}
          </Button>
        ) : (
          <Button
            size="lg"
            onClick={handleNext}
            disabled={isSubmitting}
            className="gap-2"
          >
            Next
            <ChevronRight className="size-4" />
          </Button>
        )}
      </div>

      {isLastQuestion && !isAllAnswered && (
        <p className="text-center text-sm text-amber-600">
          Please answer all questions before submitting.
        </p>
      )}
    </div>
  );
}
