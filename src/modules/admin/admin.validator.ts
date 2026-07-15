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

export const addQuestionSchema = z
  .object({
    topicId: z.string().uuid().nullable().optional(),
    type: z.enum(['MCQ', 'SUBJECTIVE']),
    difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
    questionText: z
      .string()
      .trim()
      .min(10, 'Question text must be at least 10 characters'),
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
  })
  .superRefine((data, ctx) => {
    if (data.type === 'MCQ') {
      if (!data.explanation || data.explanation.trim().length < 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            'MCQ questions must have an explanation of at least 10 characters',
          path: ['explanation'],
        });
      }
      if (data.options) {
        const labels = data.options.map((o) => o.label.toLowerCase());
        if (new Set(labels).size !== labels.length) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'MCQ options must have unique labels',
            path: ['options'],
          });
        }
        const values = data.options.map((o) => o.value.toLowerCase());
        if (new Set(values).size !== values.length) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'MCQ options must have unique answer text',
            path: ['options'],
          });
        }
      }
    }
  });
