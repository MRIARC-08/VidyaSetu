import { AdminController } from '@/modules/admin/admin.controller';

export const dynamic = 'force-dynamic';

export async function GET() {
  return AdminController.getStats();
}
