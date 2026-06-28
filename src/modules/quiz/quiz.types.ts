import { z } from 'zod';

export const QuizModeEnum = z.enum(['PRACTICE', 'TEST', 'REVISION']);
export const QuizSourceEnum = z.enum(['CHAPTER', 'TOPIC', 'NOTE', 'AI', 'CUSTOM']);
export const DifficultyEnum = z.enum(['EASY', 'MEDIUM', 'HARD']);
export const QuestionTypeEnum = z.enum(['MCQ', 'SUBJECTIVE']);

export const CreateQuizSchema = z.object({
  mode: QuizModeEnum,
  source: QuizSourceEnum,
  chapterId: z.string().uuid().optional(),
  topicId: z.string().uuid().optional(),
  noteId: z.string().uuid().optional(),
  questionCount: z.number().int().positive().max(50).default(10),
});

export const UpdateQuizSchema = z.object({
  mode: QuizModeEnum.optional(),
  questionCount: z.number().int().positive().max(50).optional(),
});

export const SubmitQuizSchema = z.object({
  sessionId: z.string().uuid(),
  answers: z
    .array(
      z.object({
        questionId: z.string().uuid(),
        selectedOptionId: z.string().uuid().optional(),
        subjectiveAnswer: z.string().optional(),
        timeTaken: z.number().int().nonnegative(),
      }),
    )
    .min(1),
});

export type CreateQuizInput = z.infer<typeof CreateQuizSchema>;
export type UpdateQuizInput = z.infer<typeof UpdateQuizSchema>;
export type SubmitQuizInput = z.infer<typeof SubmitQuizSchema>;
