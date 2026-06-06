import type { z } from 'zod';
import type { seedNcertSchema, addQuestionSchema } from './admin.validator';

export class AdminApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 400
  ) {
    super(message);
    this.name = 'AdminApiError';
  }
}

export type SeedNcertInput = z.infer<typeof seedNcertSchema>;
export type AddQuestionInput = z.infer<typeof addQuestionSchema>;

export type SeedResult = {
  classesCreated: number;
  subjectsCreated: number;
  chaptersCreated: number;
  duplicatesSkipped: number;
};
