import { z } from 'zod';

const idSchema = z
  .string()
  .trim()
  .min(1, 'Parameter is required')
  .refine((value) => value !== 'null' && value !== 'undefined', {
    message: 'Parameter is required',
  });

const classIdSchema = idSchema.regex(/^\d+$/, {
  message: 'classId must be a numeric class level',
});

export const ncertQuerySchema = z.object({
  classId: classIdSchema.optional(),
  class: classIdSchema.optional(),
  subjectId: idSchema.optional(),
  subject: idSchema.optional(),
  chapterId: idSchema.optional(),
  chapter: idSchema.optional(),
});

type NcertQueryInput = z.infer<typeof ncertQuerySchema>;

export function parseNcertQuery(url: string): NcertQueryInput {
  const searchParams = new URL(url).searchParams;

  return ncertQuerySchema.parse({
    classId: searchParams.get('classId') ?? undefined,
    class: searchParams.get('class') ?? undefined,
    subjectId: searchParams.get('subjectId') ?? undefined,
    subject: searchParams.get('subject') ?? undefined,
    chapterId: searchParams.get('chapterId') ?? undefined,
    chapter: searchParams.get('chapter') ?? undefined,
  });
}

export function requireNcertParam(
  query: NcertQueryInput,
  names: Array<keyof NcertQueryInput>
) {
  const value = names.map((name) => query[name]).find(Boolean);

  if (!value) {
    throw new z.ZodError([
      {
        code: 'custom',
        message: `${names[0]} is required`,
        path: [names[0]],
      },
    ]);
  }

  return value;
}
