'use client';

import React, { useEffect, useState } from 'react';
import authFetch from '@/lib/auth/authFetch';
import { 
  Calendar, 
  Award, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  BookOpen,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

interface QuizSession {
  id: string;
  totalQuestions: number;
  correctCount: number;
  accuracy: number;
  timeTaken: number;
  startedAt: string;
  completedAt: string | null;
  quiz: {
    id: string;
    mode: string;
    source: string;
    chapterId: string | null;
    topicId: string | null;
    createdAt: string;
  };
}

interface QuestionOption {
  id: string;
  label: string;
  value: string;
  isCorrect?: boolean;
}

interface QuestionResponse {
  id: string;
  questionId: string;
  selectedOptionId: string | null;
  subjectiveAnswer: string | null;
  isCorrect: boolean | null;
  score: number | null;
  timeTaken: number;
  question: {
    id: string;
    type: string;
    difficulty: string;
    questionText: string;
    explanation: string | null;
    options: QuestionOption[];
  };
}

interface SessionDetails {
  session: {
    id: string;
    quizId: string;
    totalQuestions: number;
    correctCount: number;
    accuracy: number;
    timeTaken: number;
    startedAt: string;
    completedAt: string | null;
    quiz: {
      id: string;
      mode: string;
      source: string;
    };
  };
  responses: QuestionResponse[];
}

export default function QuizHistoryPage() {
  const [sessions, setSessions] = useState<QuizSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [details, setDetails] = useState<SessionDetails | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await authFetch({
          url: `/api/quiz/history?page=${page}&limit=${limit}`,
          options: { method: 'GET' }
        });
        if (res && res.data) {
          setSessions(res.data.sessions || []);
          setTotal(res.data.total || 0);
        } else {
          setError('Failed to load history.');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching quiz history.');
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, [page]);

  const handleReviewSession = async (sessionId: string) => {
    setSelectedSessionId(sessionId);
    setDetailsLoading(true);
    setDetails(null);
    try {
      const res = await authFetch({
        url: `/api/quiz/session?sessionId=${sessionId}`,
        options: { method: 'GET' }
      });
      if (res && res.data) {
        setDetails(res.data);
      } else {
        console.error('Failed to load session details.');
      }
    } catch (err) {
      console.error('Error fetching session details:', err);
    } finally {
      setDetailsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && page === 1) {
    return (
      <div className="p-8 flex flex-col justify-center items-center h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-muted-foreground font-medium">Loading your quiz history...</p>
      </div>
    );
  }

  return (
    <main className="p-8 max-w-6xl mx-auto flex flex-col gap-8 min-h-screen bg-background">
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-accent rounded-full transition">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Quiz Attempts History</h1>
          <p className="text-muted-foreground mt-1">Review and analyze your past quiz attempts</p>
        </div>
      </div>

      {error ? (
        <div className="p-6 bg-destructive/10 text-destructive rounded-lg flex items-center gap-3">
          <AlertCircle className="w-6 h-6" />
          <p>{error}</p>
        </div>
      ) : sessions.length === 0 ? (
        <div className="p-12 text-center border-2 border-dashed border-accent/20 rounded-xl flex flex-col items-center gap-4">
          <HelpCircle className="w-12 h-12 text-muted-foreground" />
          <p className="text-xl font-semibold">No quiz attempts found</p>
          <p className="text-muted-foreground">Go practice chapters to see your attempts here.</p>
          <Link href="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-lg transition mt-2">
            Back to Dashboard
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Attempts List */}
          <div className={`${selectedSessionId ? 'lg:col-span-5' : 'lg:col-span-12'} flex flex-col gap-4 transition-all duration-300`}>
            <div className="flex flex-col gap-3">
              {sessions.map((s) => {
                const isActive = selectedSessionId === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => handleReviewSession(s.id)}
                    className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-4 ${
                      isActive 
                        ? 'border-indigo-600 bg-indigo-50/10 shadow-sm' 
                        : 'border-accent/14 hover:border-indigo-600/50 hover:bg-accent/4 bg-card'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 uppercase tracking-wider mb-2">
                          {s.quiz.mode}
                        </span>
                        <h3 className="font-bold text-base line-clamp-1">{s.quiz.source === 'CHAPTER' ? 'Chapter Practice' : 'Topic Quiz'}</h3>
                        <p className="text-[12px] text-muted-foreground flex items-center gap-1.5 mt-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(s.completedAt || s.startedAt)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-extrabold text-indigo-600">{s.correctCount}/{s.totalQuestions}</p>
                        <p className="text-[11px] text-muted-foreground">Accuracy: {Math.round(s.accuracy)}%</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-t border-accent/8 pt-3 mt-1">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {formatTime(s.timeTaken)}
                      </span>
                      <span className="text-xs font-bold text-indigo-600 flex items-center gap-0.5 hover:translate-x-0.5 transition">
                        Review Attempts <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {total > limit && (
              <div className="flex justify-between items-center mt-4">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-4 py-2 border rounded-lg hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition font-medium text-sm"
                >
                  Previous
                </button>
                <span className="text-sm font-medium text-muted-foreground">
                  Page {page} of {Math.ceil(total / limit)}
                </span>
                <button
                  disabled={page * limit >= total}
                  onClick={() => setPage((p) => p + 1)}
                  className="px-4 py-2 border rounded-lg hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition font-medium text-sm"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Details & Review Panel */}
          {selectedSessionId && (
            <div className="lg:col-span-7 border border-accent/14 rounded-xl bg-card p-6 flex flex-col gap-6 shadow-sm min-h-[500px]">
              {detailsLoading ? (
                <div className="flex-1 flex flex-col justify-center items-center h-full gap-4">
                  <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-muted-foreground font-medium text-sm">Loading quiz review...</p>
                </div>
              ) : details ? (
                <>
                  <div className="flex justify-between items-start border-b border-accent/8 pb-4">
                    <div>
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        Quiz Review
                        <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
                      </h2>
                      <p className="text-xs text-muted-foreground mt-1">
                        Attempted on {formatDate(details.session.completedAt || details.session.startedAt)}
                      </p>
                    </div>
                    <button 
                      onClick={() => setSelectedSessionId(null)}
                      className="p-1 text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Summary Stats */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-accent/4 rounded-xl text-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Accuracy</p>
                      <p className="text-lg font-extrabold text-indigo-600">{Math.round(details.session.accuracy)}%</p>
                    </div>
                    <div className="border-x border-accent/8">
                      <p className="text-xs text-muted-foreground">Score</p>
                      <p className="text-lg font-extrabold text-green-600">{details.session.correctCount} / {details.session.totalQuestions}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Time Spent</p>
                      <p className="text-lg font-extrabold text-blue-600">{formatTime(details.session.timeTaken)}</p>
                    </div>
                  </div>

                  {/* Question Responses list */}
                  <div className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-1">
                    {details.responses.map((res, index) => {
                      const isCorrect = res.isCorrect;
                      const selectedOption = res.question.options.find(o => o.id === res.selectedOptionId);
                      const correctOption = res.question.options.find(o => o.isCorrect);

                      return (
                        <div key={res.id} className="p-4 rounded-xl border border-accent/8 flex flex-col gap-4">
                          <div className="flex justify-between items-start gap-3">
                            <span className="font-bold text-sm text-indigo-600">Q{index + 1}.</span>
                            <div className="flex-1">
                              <p className="font-medium text-sm text-foreground leading-relaxed">
                                {res.question.questionText}
                              </p>
                            </div>
                            <span>
                              {isCorrect ? (
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                              ) : (
                                <XCircle className="w-5 h-5 text-destructive" />
                              )}
                            </span>
                          </div>

                          {/* Options */}
                          <div className="flex flex-col gap-2 pl-4">
                            {res.question.options.map((opt) => {
                              const isSelected = opt.id === res.selectedOptionId;
                              const isOptCorrect = opt.isCorrect;
                              
                              let optionStyle = 'border-accent/8 bg-accent/2';
                              if (isSelected) {
                                optionStyle = isCorrect 
                                  ? 'border-green-500 bg-green-50/10 text-green-700 font-medium' 
                                  : 'border-destructive bg-destructive/5 text-destructive font-medium';
                              } else if (isOptCorrect) {
                                optionStyle = 'border-green-500 bg-green-50/10 text-green-700 font-medium';
                              }

                              return (
                                <div key={opt.id} className={`p-3 rounded-lg border text-xs flex gap-2 items-center ${optionStyle}`}>
                                  <span className="font-bold">{opt.label}.</span>
                                  <span>{opt.value}</span>
                                  {isSelected && (
                                    <span className="text-[10px] uppercase font-bold tracking-wide ml-auto bg-card px-1.5 py-0.5 rounded border">
                                      Your Answer
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Explanation */}
                          {res.question.explanation && (
                            <div className="mt-2 p-3 bg-indigo-50/5 text-indigo-950/70 dark:text-indigo-200/70 border border-indigo-100/10 rounded-lg text-xs leading-relaxed">
                              <span className="font-bold block mb-1">Explanation:</span>
                              {res.question.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col justify-center items-center text-center gap-2">
                  <BookOpen className="w-12 h-12 text-indigo-200" />
                  <p className="text-muted-foreground text-sm font-medium">Select an attempt to view review</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
