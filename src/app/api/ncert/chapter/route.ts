import { NcertController } from '@/modules/ncert/ncert.controller';

export async function GET(req: Request) {
  return await NcertController.getChapter(req);
}
