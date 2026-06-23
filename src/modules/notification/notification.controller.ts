import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { withAuth, type AuthContext } from '@/lib/middleware/auth.middleware';
import { NotificationService } from './notification.service';
import { NotificationType } from '@/generated/prisma';

const handleError = (error: unknown) => {
  if (error instanceof ZodError) {
    return NextResponse.json(
      { success: false, message: 'Invalid request body', errors: error.issues },
      { status: 400 }
    );
  }

  const message = error instanceof Error ? error.message : 'Internal server error';

  let status = 500;
  if (message.includes('not found')) status = 404;
  else if (message.includes('Unauthorized')) status = 403;

  return NextResponse.json({ success: false, message }, { status });
};

function extractIdFromUrl(url: string): string | null {
  const urlObj = new URL(url);
  const pathSegments = urlObj.pathname.split('/').filter(Boolean);
  // Expected path: /api/notifications/[id]
  // pathSegments would be: ['api', 'notifications', '[id]'] or ['api', 'notifications', 'some-uuid']
  const notificationsIndex = pathSegments.indexOf('notifications');
  if (notificationsIndex !== -1 && pathSegments[notificationsIndex + 1]) {
    const id = pathSegments[notificationsIndex + 1];
    if (id !== 'mark-all-read' && id !== 'unread-count') {
      return id;
    }
  }
  return null;
}

export class NotificationController {
  // GET /api/notifications - get all user's notifications
  static getNotifications = withAuth(async (req: Request, auth: AuthContext) => {
    try {
      const { searchParams } = new URL(req.url);
      const isRead = searchParams.get('isRead');
      const type = searchParams.get('type') as NotificationType | null;
      const limit = parseInt(searchParams.get('limit') || '20');
      const offset = parseInt(searchParams.get('offset') || '0');

      const result = await NotificationService.getNotifications({
        userId: auth.userId,
        isRead: isRead === 'true' ? true : isRead === 'false' ? false : undefined,
        type: type || undefined,
        limit,
        offset,
      });

      return NextResponse.json({ success: true, data: result });
    } catch (error) {
      return handleError(error);
    }
  });

  // GET /api/notifications/unread-count - get unread notification count
  static getUnreadCount = withAuth(async (_req: Request, auth: AuthContext) => {
    try {
      const count = await NotificationService.getUnreadCount(auth.userId);
      return NextResponse.json({ success: true, data: { unreadCount: count } });
    } catch (error) {
      return handleError(error);
    }
  });

  // POST /api/notifications - create a notification (admin/system use)
  static createNotification = withAuth(async (req: Request, auth: AuthContext) => {
    try {
      const body = await req.json();
      const { userId, type, title, message, data } = body;

      if (!userId || !type || !title || !message) {
        return NextResponse.json(
          { success: false, message: 'userId, type, title, and message are required' },
          { status: 400 }
        );
      }

      // Validate notification type
      const validTypes = Object.values(NotificationType);
      if (!validTypes.includes(type)) {
        return NextResponse.json(
          { success: false, message: `Invalid notification type. Must be one of: ${validTypes.join(', ')}` },
          { status: 400 }
        );
      }

      const notification = await NotificationService.createNotification({
        userId,
        type,
        title,
        message,
        data,
      });

      return NextResponse.json(
        { success: true, message: 'Notification created successfully', data: notification },
        { status: 201 }
      );
    } catch (error) {
      return handleError(error);
    }
  });

  // PATCH /api/notifications/[id] - mark notification as read
  static markAsRead = withAuth(async (req: Request, auth: AuthContext) => {
    try {
      const id = extractIdFromUrl(req.url);
      if (!id) {
        return NextResponse.json(
          { success: false, message: 'Notification ID is required' },
          { status: 400 }
        );
      }
      const result = await NotificationService.markAsRead(id, auth.userId);
      return NextResponse.json({ success: true, data: result });
    } catch (error) {
      return handleError(error);
    }
  });

  // POST /api/notifications/mark-all-read - mark all notifications as read
  static markAllAsRead = withAuth(async (_req: Request, auth: AuthContext) => {
    try {
      const result = await NotificationService.markAllAsRead(auth.userId);
      return NextResponse.json({ success: true, data: result });
    } catch (error) {
      return handleError(error);
    }
  });

  // DELETE /api/notifications/[id] - delete a notification
  static deleteNotification = withAuth(async (req: Request, auth: AuthContext) => {
    try {
      const id = extractIdFromUrl(req.url);
      if (!id) {
        return NextResponse.json(
          { success: false, message: 'Notification ID is required' },
          { status: 400 }
        );
      }
      const result = await NotificationService.deleteNotification(id, auth.userId);
      return NextResponse.json({ success: true, data: result });
    } catch (error) {
      return handleError(error);
    }
  });

  // DELETE /api/notifications - delete all read notifications
  static deleteAllRead = withAuth(async (_req: Request, auth: AuthContext) => {
    try {
      const result = await NotificationService.deleteAllRead(auth.userId);
      return NextResponse.json({ success: true, data: result });
    } catch (error) {
      return handleError(error);
    }
  });
}
