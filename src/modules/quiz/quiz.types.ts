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
