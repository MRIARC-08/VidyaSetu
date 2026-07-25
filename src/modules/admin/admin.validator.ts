import { z } from 'zod';

export const seedNcertSchema = z.object({
  books: z
    .array(
      z.object({
        grade: z.number().int().min(1).max(12),
        subject: z.string().trim().min(1),
        chapters: z.array(z.string().trim().min(1)).min(1),
      })
    )
    .min(1),
});

export const addQuestionSchema = z.object({
  topicId: z.string().uuid().nullable().optional(),
  type: z.enum(['MCQ', 'SUBJECTIVE']),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
  questionText: z.string().trim().min(1),
  explanation: z.string().trim().optional(),
  options: z
    .array(
      z.object({
        label: z.string().trim().min(1),
        value: z.string().trim().min(1),
        isCorrect: z.boolean(),
      })
    )
    .optional(),
});
