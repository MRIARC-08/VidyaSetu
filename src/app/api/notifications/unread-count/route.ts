import { NotificationController } from '@/modules/notification/notification.controller';

export async function GET(req: Request) {
  return NotificationController.getUnreadCount(req);
}
