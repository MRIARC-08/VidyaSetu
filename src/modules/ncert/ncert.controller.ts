import { NextResponse } from 'next/server';
import { NcertServices } from './ncert.service';
import crypto from 'crypto';

function addCacheHeaders(response: NextResponse): NextResponse {
  response.headers.set(
    'Cache-Control',
    'public, max-age=3600, stale-while-revalidate=86400'
  );
  return response;
}

function addEtagHeader(response: NextResponse, data: unknown): NextResponse {
  const etag = crypto
    .createHash('md5')
    .update(JSON.stringify(data))
    .digest('hex');
  response.headers.set('ETag', `"${etag}"`);
  return response;
}

export class NcertController {
  static async getSubjects(req: Request) {
    try {
      const res = await NcertServices.getSubjects();
      const response = NextResponse.json({ status: 200, message: res });
      addCacheHeaders(response);
      addEtagHeader(response, res);
      return response;
    } catch (error: any) {
      return NextResponse.json({
        status: error.status,
        message: error.message,
      });
    }
  }

  static async getChapters(req: Request) {
    try {
      const url = new URL(req.url);
      // const peices = pathname.split("/")
      const p = url.searchParams.get('subject');
      const subjectId = JSON.stringify(p);

      const res = await NcertServices.getChapters(subjectId);
      const response = NextResponse.json({ status: 200, message: res });
      addCacheHeaders(response);
      addEtagHeader(response, res);
      return response;
    } catch (error: any) {
      return NextResponse.json({
        status: error.status,
        message: error.message,
      });
    }
  }

  static async getChapter(req: Request) {
    try {
      const url = new URL(req.url);
      // const peices = pathname.split("/")
      const p = url.searchParams.get('chapter');
      const chapterId = JSON.stringify(p);

      const res = await NcertServices.getChapter(chapterId);
      const response = NextResponse.json({ status: 200, message: res });
      addCacheHeaders(response);
      addEtagHeader(response, res);
      return response;
    } catch (error: any) {
      return NextResponse.json({
        status: error.status,
        message: error.message,
      });
    }
  }
}
