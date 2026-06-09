import { AdminController } from '@/modules/admin/admin.controller';

export async function POST(req: Request) {
  return AdminController.addQuestion(req);
}
