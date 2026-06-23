import { NotificationController } from '@/modules/notification/notification.controller';

export async function POST(req: Request) {
  return NotificationController.markAllAsRead(req);
}
