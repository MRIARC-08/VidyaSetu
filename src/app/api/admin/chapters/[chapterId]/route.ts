import { AdminController } from '@/modules/admin/admin.controller';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ chapterId: string }> }
) {
  const { chapterId } = await params;
  return AdminController.getChapter(req, chapterId);
}
