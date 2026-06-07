'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import authFetch from '@/lib/auth/authFetch';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mic, MicOff, Loader2 } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  value: string;
}

interface Question {
  id: string;
  type: 'MCQ' | 'SUBJECTIVE';
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  questionText: string;
  options: Option[];
}

const SpeechRecognition = typeof window !== 'undefined' 
  ? ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition) 
  : null;

export default function QuizPage() {
  const params = useParams<{ quizId: string }>();
  const router = useRouter();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { selectedOptionId?: string; subjectiveAnswer?: string }>>({});
  
  const [isListening, setIsListening] = useState(false);
  const [recognitionSupported, setRecognitionSupported] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (SpeechRecognition) {
      setRecognitionSupported(true);
    }
  }, []);

  useEffect(() => {
    let active = true;

    async function initQuiz() {
      try {
        setLoading(true);
        setError(null);

        const startRes = await authFetch({
          url: '/api/quiz/start',
          options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quizId: params.quizId }),
          },
        });

        if (startRes.message && !startRes.data) {
          throw new Error(startRes.message);
        }

        const sessionObj = startRes.data;
        if (!active) return;
        setSessionId(sessionObj.id);

        const sessionDetails = await authFetch({
          url: `/api/quiz/session?sessionId=${sessionObj.id}`,
          options: { method: 'GET' },
        });

        if (!active) return;
        
        if (sessionDetails.data) {
          setQuestions(sessionDetails.data.questions || []);
        } else {
          throw new Error('Failed to load quiz questions');
        }
      } catch (err: any) {
        if (active) {
          setError(err.message || 'Unable to start this quiz session.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    initQuiz();

    return () => {
      active = false;
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [params.quizId]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      if (isListening && recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      if (isListening && recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSelectOption = (optionId: string) => {
    const qId = questions[currentIndex].id;
    setAnswers((prev) => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        selectedOptionId: optionId,
      },
    }));
  };

  const handleSubjectiveChange = (value: string) => {
    const qId = questions[currentIndex].id;
    setAnswers((prev) => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        subjectiveAnswer: value,
      },
    }));
  };

  const handleSubmit = async () => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
    }

    setLoading(true);
    try {
      const formattedResponses = questions
        .map((q) => {
          const ans = answers[q.id];
          if (!ans) return null;
          
          if (q.type === 'MCQ' && ans.selectedOptionId) {
            return {
              questionId: q.id,
              selectedOptionId: ans.selectedOptionId,
              timeTaken: 0,
            };
          }
          
          if (q.type === 'SUBJECTIVE' && ans.subjectiveAnswer && ans.subjectiveAnswer.trim()) {
            return {
              questionId: q.id,
              subjectiveAnswer: ans.subjectiveAnswer.trim(),
              timeTaken: 0,
            };
          }
          
          return null;
        })
        .filter((r) => r !== null);

      if (formattedResponses.length === 0) {
        alert("Please answer at least one question before submitting.");
        setLoading(false);
        return;
      }

      const submitRes = await authFetch({
        url: '/api/quiz/submit',
        options: {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            responses: formattedResponses,
          }),
        },
      });

      if (submitRes.message && !submitRes.data) {
        throw new Error(submitRes.message);
      }

      router.push(`/quiz/${params.quizId}/result?sessionId=${sessionId}`);
    } catch (err: any) {
      setError(err.message || 'Failed to submit quiz.');
      setLoading(false);
    }
  };

  const toggleListening = () => {
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Please use Chrome or Safari.');
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    } else {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-IN';

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          let finalTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            }
          }

          if (finalTranscript) {
            const currentQ = questions[currentIndex];
            setAnswers((prev) => {
              const currentVal = prev[currentQ.id]?.subjectiveAnswer || '';
              return {
                ...prev,
                [currentQ.id]: {
                  ...prev[currentQ.id],
                  subjectiveAnswer: currentVal + (currentVal ? ' ' : '') + finalTranscript,
                },
              };
            });
          }
        };

        recognition.onerror = (event: any) => {
          if (event.error === 'not-allowed') {
            alert('Microphone permission denied. Please allow microphone access in browser settings.');
          }
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
        recognition.start();
      } catch (err) {
        console.error(err);
        setIsListening(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <p className="mt-4 text-sm text-muted-foreground">Loading quiz...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto flex max-w-md h-screen flex-col items-center justify-center p-4 text-center">
        <h2 className="text-lg font-semibold text-destructive">Failed to start quiz</h2>
        <p className="mt-2 text-sm text-muted-foreground">{error}</p>
        <Button className="mt-4" onClick={() => router.push('/ncert')}>
          Go Back
        </Button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="mx-auto flex max-w-md h-screen flex-col items-center justify-center p-4 text-center">
        <h2 className="text-lg font-semibold">No questions available</h2>
        <Button className="mt-4" onClick={() => router.push('/ncert')}>
          Go Back
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const userResponse = answers[currentQuestion.id];

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-xl font-bold">Question {currentIndex + 1} of {questions.length}</h1>
        <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
          <div 
            className="h-full bg-primary transition-all" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardDescription className="uppercase text-xs font-semibold tracking-wider">
            {currentQuestion.difficulty} &bull; {currentQuestion.type}
          </CardDescription>
          <CardTitle className="text-base font-medium leading-relaxed">
            {currentQuestion.questionText}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentQuestion.type === 'MCQ' ? (
            <div className="flex flex-col gap-2">
              {currentQuestion.options.map((option) => {
                const isSelected = userResponse?.selectedOptionId === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition-all ${
                      isSelected 
                        ? 'border-primary bg-primary/5 font-semibold text-primary'
                        : 'border-border hover:bg-accent/50'
                    }`}
                  >
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs ${
                      isSelected
                        ? 'border-primary bg-primary text-white'
                        : 'border-muted-foreground/30 text-muted-foreground'
                    }`}>
                      {option.label.toUpperCase()}
                    </span>
                    <span>{option.value}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-2">
              <div className="relative flex items-center">
                <textarea
                  rows={6}
                  value={userResponse?.subjectiveAnswer || ''}
                  onChange={(e) => handleSubjectiveChange(e.target.value)}
                  placeholder="Enter your subjective response..."
                  className="w-full rounded-lg border border-input p-3 pr-12 text-sm shadow-xs focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-primary"
                />
                
                {recognitionSupported && (
                  <button
                    type="button"
                    onClick={toggleListening}
                    aria-label={isListening ? "Stop voice dictation" : "Start voice dictation"}
                    className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                      isListening
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-muted text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </button>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {isListening ? "Listening... click the mic button to stop." : "Click the microphone button to dictate your answer."}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>

        {currentIndex === questions.length - 1 ? (
          <Button onClick={handleSubmit}>
            Submit Quiz
          </Button>
        ) : (
          <Button onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </main>
  );
}
