import { z } from 'zod';

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/webp',
] as const;

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const uploadSchema = z.object({
  title: z.string().trim().min(1, 'Title is required').max(255),
  file: z
    .instanceof(File)
    .refine(
      (f) =>
        ALLOWED_MIME_TYPES.includes(
          f.type as (typeof ALLOWED_MIME_TYPES)[number]
        ),
      {
        message: 'File must be PDF, PNG, JPEG, or WebP',
      }
    )
    .refine((f) => f.size <= MAX_FILE_SIZE, {
      message: 'File must be under 10MB',
    }),
});
