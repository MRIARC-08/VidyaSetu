import { NcertController } from '@/modules/ncert/ncert.controller';

export async function GET(req: Request) {
  return await NcertController.getChapter(req);
}

export async function PATCH(req: Request) {
  return await NcertController.updateChapterContent(req);
}