import { z } from 'zod';

export const createQuizSchema = z
  .object({
    userId: z.string().uuid(),
    mode: z.enum(['PRACTICE', 'TEST', 'REVISION']),
    source: z.enum(['CHAPTER', 'TOPIC', 'NOTE', 'AI', 'CUSTOM']),
    chapterId: z.string().uuid().optional(),
    topicId: z.string().uuid().optional(),
    noteId: z.string().uuid().optional(),
    questionCount: z.number().int().min(1).max(100),
  })
  .superRefine((data, ctx) => {
    if (data.source === 'CHAPTER' && !data.chapterId) {
      ctx.addIssue({
        code: 'custom',
        path: ['chapterId'],
        message: 'chapterId is required for CHAPTER quizzes',
      });
    }

    if (data.source === 'TOPIC' && !data.topicId) {
      ctx.addIssue({
        code: 'custom',
        path: ['topicId'],
        message: 'topicId is required for TOPIC quizzes',
      });
    }

    if (data.source === 'NOTE' && !data.noteId) {
      ctx.addIssue({
        code: 'custom',
        path: ['noteId'],
        message: 'noteId is required for NOTE quizzes',
      });
    }
  });

export const startQuizSchema = z.object({
  userId: z.string().uuid(),
  quizId: z.string().uuid(),
});

export const submitQuizSchema = z.object({
  sessionId: z.string().uuid(),
  responses: z
    .array(
      z
        .object({
          questionId: z.string().uuid(),
          selectedOptionId: z.string().uuid().optional(),
          subjectiveAnswer: z.string().trim().min(1).optional(),
          timeTaken: z.number().int().min(0).optional(),
        })
        .refine(
          (response) =>
            Boolean(response.selectedOptionId) ||
            Boolean(response.subjectiveAnswer),
          {
            message: 'Either selectedOptionId or subjectiveAnswer is required',
          }
        )
    )
    .min(1),
});
