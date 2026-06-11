import { z } from 'zod';

export const userUpdateSchema = z
  .object({
    email: z.string().trim().email().optional(),
    name: z.string().trim().min(1).max(255).optional(),
    password: z.string().trim().min(1).max(255).optional(),
    class: z.enum(['9', '10', '11', '12']).optional(),
    image: z.string().trim().url().optional(),
    firstTime: z.boolean().optional(),
    streakCount: z.number().int().min(0).optional(),
    lastActiveDate: z.coerce.date().optional(),
  })
  .strict()
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one user field must be provided for update.',
  });

export type UserUpdateInput = z.input<typeof userUpdateSchema>;
export type UserUpdateData = z.output<typeof userUpdateSchema>;
