import { AdminController } from '@/modules/admin/admin.controller';

export async function GET(req: Request) {
  return AdminController.listQuestions(req);
}
