import { NotificationType } from '@/generated/prisma';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  data?: Record<string, unknown>;
  createdAt: Date;
  readAt?: Date | null;
}

export interface CreateNotificationInput {
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, unknown>;
}

export interface NotificationFilters {
  userId: string;
  isRead?: boolean;
  type?: NotificationType;
  limit?: number;
  offset?: number;
}

export interface NotificationResponse {
  success: boolean;
  message?: string;
  data?: Notification | Notification[] | { notifications: Notification[]; unreadCount: number; total: number };
}
