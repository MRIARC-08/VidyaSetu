'use client';

import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import authFetch from '@/lib/auth/authFetch';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface Question {
  id: string;
  type: 'MCQ' | 'SUBJECTIVE';
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  questionText: string;
}

interface Evaluation {
  feedback: string;
  idealAnswer?: string | null;
  score?: number | null;
}

interface ResponseDetail {
  id: string;
  questionId: string;
  selectedOptionId?: string | null;
  subjectiveAnswer?: string | null;
  isCorrect?: boolean | null;
  score?: number | null;
  question: Question;
  evaluation?: Evaluation | null;
}

interface SessionData {
  id: string;
  totalQuestions: number;
  correctCount: number;
  accuracy: number;
  timeTaken: number;
}

export default function QuizResultPage() {
  const params = useParams<{ quizId: string }>();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('sessionId');
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [session, setSession] = useState<SessionData | null>(null);
  const [responses, setResponses] = useState<ResponseDetail[]>([]);

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID found. Please return to dashboard.');
      setLoading(false);
      return;
    }

    async function fetchResult() {
      try {
        setLoading(true);
        const res = await authFetch({
          url: `/api/quiz/session?sessionId=${sessionId}`,
          options: { method: 'GET' },
        });

        if (res.data) {
          setSession(res.data.session || null);
          setResponses(res.data.responses || []);
        } else {
          throw new Error('Failed to fetch quiz results.');
        }
      } catch (err: any) {
        setError(err.message || 'Unable to load quiz results.');
      } finally {
        setLoading(false);
      }
    }

    fetchResult();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <p className="mt-4 text-sm text-muted-foreground">Loading results...</p>
      </div>
    );
  }

  if (error || !session) {
    return (
      <div className="mx-auto flex max-w-md h-screen flex-col items-center justify-center p-4 text-center">
        <h2 className="text-lg font-semibold text-destructive">Error</h2>
        <p className="mt-2 text-sm text-muted-foreground">{error || 'Session results not found.'}</p>
        <Button className="mt-4" onClick={() => router.push('/dashboard')}>
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Quiz Results</h1>
        <p className="text-sm text-muted-foreground">Accuracy: {session.accuracy}%</p>
        <p className="text-sm text-muted-foreground">Correct Answers: {session.correctCount} / {session.totalQuestions}</p>
      </div>

      <div className="space-y-4 mb-6">
        {responses.map((response, idx) => (
          <Card key={response.id}>
            <CardHeader>
              <CardDescription className="text-xs font-semibold">
                Question {idx + 1} &bull; {response.question.type}
              </CardDescription>
              <CardTitle className="text-sm font-medium leading-relaxed">
                {response.question.questionText}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              {response.question.type === 'MCQ' ? (
                <p className={response.isCorrect ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                  {response.isCorrect ? 'Correct Option Selected' : 'Incorrect Option Selected'}
                </p>
              ) : (
                <div className="space-y-2">
                  <div className="rounded border bg-muted/20 p-3">
                    <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Your Answer:</p>
                    <p className="text-sm leading-relaxed">{response.subjectiveAnswer || 'No answer entered.'}</p>
                  </div>
                  {response.evaluation ? (
                    <div className="rounded border border-blue-200 bg-blue-50/35 p-3 space-y-1">
                      <p className="text-xs font-bold text-blue-900 uppercase">AI Evaluation (Score: {response.score}/10):</p>
                      <p className="text-xs text-blue-950 leading-relaxed">{response.evaluation.feedback}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-amber-600">AI evaluation pending...</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => router.push('/ncert')}>
          Chapters
        </Button>
        <Button onClick={() => router.push('/dashboard')}>
          Dashboard
        </Button>
      </div>
    </main>
  );
}
