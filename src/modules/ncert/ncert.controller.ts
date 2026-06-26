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

      const res = await NcertServices.getChapters(subjectId);

      return NextResponse.json({ status: 200, message: res });
    } catch (error) {
      return handleNcertError(error);
    }
  }

  static async getChapter(req: Request) {
    try {
      const query = parseNcertQuery(req.url);
      requireNcertParam(query, ['classId', 'class']);
      requireNcertParam(query, ['subjectId', 'subject']);
      const chapterId = requireNcertParam(query, ['chapterId', 'chapter']);

      const res = await NcertServices.getChapter(chapterId);

      return NextResponse.json({ status: 200, message: res });
    } catch (error) {
      return handleNcertError(error);
    }
  }
}
