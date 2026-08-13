import { errorResponse } from '@/lib/api-response';
import { ZodError } from 'zod';

import {
  parseNcertQuery,
  requireNcertParam,
} from '@/modules/ncert/ncert.validator';

export async function GET(req: Request) {
  try {
    const query = parseNcertQuery(req.url);
    requireNcertParam(query, ['chapterId', 'chapter']);
  } catch (error) {
    if (error instanceof ZodError) {
      return errorResponse(
        'Invalid NCERT request parameters',
        400,
        error.issues
      );
    }

    throw error;
  }

  return errorResponse('Not implemented', 501);
}
