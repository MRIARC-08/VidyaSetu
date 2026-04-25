import { NextResponse } from 'next/server';
import { NcertServices } from './ncert.service';

// TODO: Implement NCERT controller
export class NcertController {
  static async getSubjects(req: Request) {
    try {
      const res = await NcertServices.getSubjects();

      return NextResponse.json({ status: 200, message: res });
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

      return NextResponse.json({ status: 200, message: res });
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

      return NextResponse.json({ status: 200, message: res });
    } catch (error: any) {
      return NextResponse.json({
        status: error.status,
        message: error.message,
      });
    }
  }
}
