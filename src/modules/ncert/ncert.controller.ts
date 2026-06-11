import { NextResponse } from 'next/server';
import { NcertServices } from './ncert.service';
import { NcertApiError } from './ncert.types';

// TODO: Implement NCERT controller
export class NcertController {
  static async getSubjects() {
    try {
      const res = await NcertServices.getSubjects();

      return NextResponse.json({ status: 200, message: res });
    } catch (error: unknown) {
      const status = error instanceof NcertApiError ? error.statusCode : 500;
      const message =
        error instanceof Error && status !== 500
          ? error.message
          : 'Failed to load NCERT subjects';

      if (status === 500) {
        console.error('[NCERT] Failed to load subjects', error);
      }

      return NextResponse.json(
        {
          status,
          message,
        },
        { status }
      );
    }
  }

  static async getChapters(req: Request) {
    try {
      const url = new URL(req.url);
      const subjectId = url.searchParams.get('subject') ?? '';

      const res = await NcertServices.getChapters(subjectId);

      return NextResponse.json({ status: 200, message: res });
    } catch (error: unknown) {
      const status = error instanceof NcertApiError ? error.statusCode : 500;
      const message =
        error instanceof Error && status !== 500
          ? error.message
          : 'Failed to load NCERT chapters';

      if (status === 500) {
        console.error('[NCERT] Failed to load chapters', error);
      }

      return NextResponse.json(
        {
          status,
          message,
        },
        { status }
      );
    }
  }

  static async getChapter(req: Request) {
    try {
      const url = new URL(req.url);
      const chapterId = url.searchParams.get('chapter') ?? '';

      const res = await NcertServices.getChapter(chapterId);

      return NextResponse.json({ status: 200, message: res });
    } catch (error: unknown) {
      const status = error instanceof NcertApiError ? error.statusCode : 500;
      const message =
        error instanceof Error && status !== 500
          ? error.message
          : 'Failed to load NCERT chapter';

      if (status === 500) {
        console.error('[NCERT] Failed to load chapter', error);
      }

      return NextResponse.json(
        {
          status,
          message,
        },
        { status }
      );
    }
  }
}
