import { NextResponse } from 'next/server';
import type { ZodSchema } from 'zod';

export function validateRequest<T>(schema: ZodSchema<T>, body: unknown): { data?: T; error?: NextResponse } {
  const result = schema.safeParse(body);
  if (!result.success) {
    return {
      error: NextResponse.json(
        {
          error: 'Validation failed',
          details: result.error.issues.map((issue) => ({
            path: issue.path.join('.'),
            message: issue.message,
          })),
        },
        { status: 400 },
      ),
    };
  }
  return { data: result.data };
}
