import type { z } from 'zod';

import type {
  createQuizSchema,
  startQuizSchema,
  submitQuizSchema,
} from './quiz.validator';

export class QuizApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'QuizApiError';
    this.statusCode = statusCode;
  }
}

export type CreateQuizInput = z.infer<typeof createQuizSchema>;
export type StartQuizInput = z.infer<typeof startQuizSchema>;
export type SubmitQuizInput = z.infer<typeof submitQuizSchema>;

export type SanitizedOption = {
  id: string;
  label: string;
  value: string;
};

export type QuizQuestion = {
  id: string;
  topicId: string | null;
  type: string;
  difficulty: string;
  questionText: string;
  explanation: string | null;
  options: SanitizedOption[];
};

export type CreateQuizResponse = {
  quiz: {
    id: string;
    userId: string;
    mode: string;
    source: string;
    chapterId: string | null;
    topicId: string | null;
    noteId: string | null;
    questionCount: number;
    createdAt: string;
  };
  questions: QuizQuestion[];
};

export type QuizApiSuccess<T> = {
  message: string;
  data: T;
};

export type QuizApiErrorResponse = {
  message: string;
  errors?: unknown;
};

export type ChapterInfo = {
  id: string;
  title: string;
  order: number;
};

/** Returned by POST /api/quiz/start — the newly created session row */
export type StartQuizSessionResponse = {
  id: string;
  quizId: string;
  userId: string;
  totalQuestions: number;
  correctCount: number;
  accuracy: number;
  timeTaken: number;
  startedAt: string;
  completedAt: string | null;
};

/** Returned by GET /api/quiz/session */
export type QuizSessionData = {
  session: {
    id: string;
    quizId: string;
    totalQuestions: number;
    correctCount: number;
    accuracy: number;
    timeTaken: number;
    startedAt: string;
    completedAt: string | null;
    quiz: { id: string; mode: string; source: string };
  };
  responses: Array<{
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
      options: SanitizedOption[];
    };
  }>;
};

/** Returned by POST /api/quiz/submit */
export type SubmitQuizResponse = {
  session: {
    id: string;
    quizId: string;
    userId: string;
    totalQuestions: number;
    correctCount: number;
    accuracy: number;
    timeTaken: number;
    startedAt: string;
    completedAt: string | null;
  };
  summary: {
    totalQuestions: number;
    attemptedQuestions: number;
    correctCount: number;
    accuracy: number;
    timeTaken: number;
  };
};
