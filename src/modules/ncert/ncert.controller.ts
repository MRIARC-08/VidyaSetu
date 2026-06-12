import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { NcertServices } from './ncert.service';
import { parseNcertQuery, requireNcertParam } from './ncert.validator';

const handleNcertError = (error: unknown) => {
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        status: 400,
        message: 'Invalid NCERT request parameters',
        errors: error.issues,
      },
      { status: 400 }
    );
  }

  const message =
    error instanceof Error ? error.message : 'Internal server error';

  return NextResponse.json(
    {
      status: 500,
      message,
    },
    { status: 500 }
  );
};

export class NcertController {
  static async getSubjects(req: Request) {
    try {
      const query = parseNcertQuery(req.url);
      const classId = requireNcertParam(query, ['classId', 'class']);
      const res = await NcertServices.getSubjects(classId);

      return NextResponse.json({ status: 200, message: res });
    } catch (error) {
      return handleNcertError(error);
    }
  }

  static async getChapters(req: Request) {
    try {
      const query = parseNcertQuery(req.url);
      const subjectId = requireNcertParam(query, ['subjectId', 'subject']);

      const DEFAULT_LIMIT = 20;
      const MAX_LIMIT = 50;
      const DEFAULT_OFFSET = 0;

      const rawLimit = query.limit ? parseInt(String(query.limit), 10) : DEFAULT_LIMIT;
      let limit = isNaN(rawLimit) || rawLimit <= 0 ? DEFAULT_LIMIT : Math.min(rawLimit, MAX_LIMIT);

      const rawOffset = query.offset ? parseInt(String(query.offset), 10) : DEFAULT_OFFSET;
      let offset = isNaN(rawOffset) || rawOffset < 0 ? DEFAULT_OFFSET : rawOffset;

      const res = await NcertServices.getChapters(subjectId, offset, limit);

      return NextResponse.json({ status: 200, message: res });
    } catch (error) {
      return handleNcertError(error);
    }
  }

  static async getChapter(req: Request) {
    try {
      const query = parseNcertQuery(req.url);
      const chapterId = requireNcertParam(query, ['chapterId', 'chapter']);

      const res = await NcertServices.getChapter(chapterId);

      return NextResponse.json({ status: 200, message: res });
    } catch (error) {
      return handleNcertError(error);
    }
  }
}
