import { z } from 'zod';

export const GenerateQuestionsRequestSchema = z.object({
  chapterTitle: z.string().min(1),
  subjectName: z.string().min(1),
  classLevel: z.number().int().positive().optional(),
  questionCount: z.number().int().positive().max(20).default(5),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']).optional(),
});

export type GenerateQuestionsRequest = z.infer<typeof GenerateQuestionsRequestSchema>;

export interface GeneratedQuestion {
  questionText: string;
  options: { label: string; value: string; isCorrect: boolean }[];
  explanation?: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}
