import { AdminController } from '@/modules/admin/admin.controller';

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return AdminController.deleteQuestion(_req, id);
}
