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
