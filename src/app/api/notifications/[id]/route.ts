import { NotificationController } from '@/modules/notification/notification.controller';

export async function DELETE(req: Request) {
  return NotificationController.deleteNotification(req);
}

export async function PATCH(req: Request) {
  return NotificationController.markAsRead(req);
}
