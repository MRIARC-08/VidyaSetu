import { NotificationController } from '@/modules/notification/notification.controller';

export async function GET(req: Request) {
  return NotificationController.getNotifications(req);
}

export async function POST(req: Request) {
  return NotificationController.createNotification(req);
}

export async function DELETE(req: Request) {
  return NotificationController.deleteAllRead(req);
}
