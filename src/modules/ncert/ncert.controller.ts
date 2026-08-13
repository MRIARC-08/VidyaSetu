import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { SetCookies } from '@/lib/auth/cookies';
import { createHash } from 'crypto';

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
      const classId = requireNcertParam(query, ['classId', 'class']);
      const subjectId = requireNcertParam(query, ['subjectId', 'subject']);

      const page = Math.max(1, parseInt(query.page as string, 10) || 1);
      const limit = Math.min(100, Math.max(1, parseInt(query.limit as string, 10) || 20));

      const res = await NcertServices.getChapters(
        subjectId,
        classId,
        page,
        limit
      );

      return NextResponse.json({ status: 200, message: res });
    } catch (error) {
      return handleNcertError(error);
    }
  }
  static async getChapter(req: Request) {
    try {
      const query = parseNcertQuery(req.url);
      const classId = requireNcertParam(query, ['classId', 'class']);
      const subjectId = requireNcertParam(query, ['subjectId', 'subject']);
      const chapterId = requireNcertParam(query, ['chapterId', 'chapter']);

      const res = await NcertServices.getChapter(chapterId, subjectId, classId);

      const body = JSON.stringify({ status: 200, message: res });
      const etag = `"${createHash('md5').update(body).digest('hex')}"`;

      const ifNoneMatch = req.headers.get('if-none-match');
      if (ifNoneMatch === etag) {
        return new NextResponse(null, { status: 304 });
      }

      return new NextResponse(body, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
          ETag: etag,
        },
      });
    } catch (error) {
      return handleNcertError(error);
    }
  }
  static async updateChapterContent(req: Request) {
  try {
    const user = await SetCookies.verifyCookies();

    if (!user) {
      return NextResponse.json(
        {
          status: 401,
          message: 'Authentication required',
        },
        { status: 401 }
      );
    }

    if (user.role !== 'ADMIN') {
      return NextResponse.json(
        {
          status: 403,
          message: 'Admin access required',
        },
        { status: 403 }
      );
    }

    const body = await req.json();

    const res =
      await NcertServices.updateChapterContent(
        body.chapterId,
        body.content
      );

    return NextResponse.json({
      status: 200,
      message: res,
    });
  } catch (error) {
    return handleNcertError(error);
  }
}
}
