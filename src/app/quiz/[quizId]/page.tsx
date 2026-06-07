'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Loader2, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { showSuccess, showError } from '@/lib/toast';

interface Option {
  id: string;
  label: string;
  value: string;
}

interface Question {
  id: string;
  questionText: string;
  options: Option[];
}

export default function QuizPage({ params }: { params: Promise<{ quizId: string }> }) {
  const router = useRouter();
  const { quizId } = React.use(params);

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function initQuiz() {
      try {
        setLoading(true);
        // Start quiz session
        const startRes = await fetch('/api/quiz/start', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quizId }),
        });

        const startData = await startRes.json();

        if (!startRes.ok || !startData.data) {
          // Attempt to load mock questions if database/AI is not seeded
          setQuestions([
            {
              id: 'q1',
              questionText: 'What is the primary formulation of Newton\'s Second Law of Motion?',
              options: [
                { id: 'o1', label: 'A', value: 'F = ma' },
                { id: 'o2', label: 'B', value: 'F = m/a' },
                { id: 'o3', label: 'C', value: 'F = mv' },
                { id: 'o4', label: 'D', value: 'F = dp/dt' }
              ]
            },
            {
              id: 'q2',
              questionText: 'Which quantum mechanical principle asserts that position and momentum cannot be simultaneously measured to arbitrary precision?',
              options: [
                { id: 'o5', label: 'A', value: 'Heisenberg Uncertainty Principle' },
                { id: 'o6', label: 'B', value: 'Pauli Exclusion Principle' },
                { id: 'o7', label: 'C', value: 'Schrodinger Wave Equation' },
                { id: 'o8', label: 'D', value: 'Planck\'s Law' }
              ]
            }
          ]);
          setSessionId('mock-session-id');
          return;
        }

        const session = startData.data.session;
        setSessionId(session.id);
        
        // Fetch session questions
        const sessionRes = await fetch(`/api/quiz/session?sessionId=${session.id}`);
        const sessionData = await sessionRes.json();
        
        if (sessionRes.ok && sessionData.data?.questions) {
          setQuestions(sessionData.data.questions);
        } else {
          throw new Error('Failed to retrieve quiz questions');
        }
      } catch (err: any) {
        console.error('Quiz loading error:', err);
        showError('Failed to load quiz. Using demo version.');
        // Set mock fallback
        setQuestions([
          {
            id: 'q1',
            questionText: 'What is the primary formulation of Newton\'s Second Law of Motion?',
            options: [
              { id: 'o1', label: 'A', value: 'F = ma' },
              { id: 'o2', label: 'B', value: 'F = m/a' },
              { id: 'o3', label: 'C', value: 'F = mv' },
              { id: 'o4', label: 'D', value: 'F = dp/dt' }
            ]
          },
          {
            id: 'q2',
            questionText: 'Which quantum mechanical principle asserts that position and momentum cannot be simultaneously measured to arbitrary precision?',
            options: [
              { id: 'o5', label: 'A', value: 'Heisenberg Uncertainty Principle' },
              { id: 'o6', label: 'B', value: 'Pauli Exclusion Principle' },
              { id: 'o7', label: 'C', value: 'Schrodinger Wave Equation' },
              { id: 'o8', label: 'D', value: 'Planck\'s Law' }
            ]
          }
        ]);
        setSessionId('mock-session-id');
      } finally {
        setLoading(false);
      }
    }

    initQuiz();
  }, [quizId]);

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleSubmitQuiz = async () => {
    if (Object.keys(selectedAnswers).length < questions.length) {
      showError('Please answer all questions before submitting.');
      return;
    }

    setSubmitting(true);

    try {
      const responsePayload = {
        sessionId,
        responses: Object.entries(selectedAnswers).map(([questionId, selectedOptionId]) => ({
          questionId,
          selectedOptionId,
          timeTaken: 10, // dummy time
        })),
      };

      const res = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(responsePayload),
      });

      const submitData = await res.json();

      if (!res.ok) {
        throw new Error('Failed to evaluate quiz.');
      }

      showSuccess('Quiz submitted successfully!');
      router.push(`/quiz/${quizId}/result`);
    } catch (err) {
      console.error(err);
      showError('Failed to evaluate quiz.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-accent/5">
        <div className="text-center space-y-4">
          <Loader2 className="size-10 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground font-medium">Preparing your quiz session...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-accent/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Attempt Quiz</h1>
            <p className="text-muted-foreground mt-1">Please select the correct option for each question.</p>
          </div>
          <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold text-sm">
            {questions.length} Questions
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((q, idx) => (
            <Card key={q.id} className="border border-border shadow-xs">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex gap-3 items-start">
                  <span className="bg-muted size-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{q.questionText}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {q.options.map((opt) => {
                    const isSelected = selectedAnswers[q.id] === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionSelect(q.id, opt.id)}
                        className={`text-left p-4 rounded-xl border-2 transition-all font-medium text-sm flex justify-between items-center ${
                          isSelected
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-muted-foreground/10 hover:border-muted-foreground/30 bg-card'
                        }`}
                      >
                        <span>{opt.value}</span>
                        {isSelected && <CheckCircle2 className="size-4 text-primary shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-end pt-4">
          <Button
            size="lg"
            className="font-bold gap-2 px-8"
            disabled={submitting}
            onClick={handleSubmitQuiz}
          >
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Evaluating...
              </>
            ) : (
              <>
                Submit Quiz
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </main>
  );
}
