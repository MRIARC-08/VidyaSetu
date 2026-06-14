import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withAuth, type AuthContext } from '@/lib/middleware/auth.middleware';

export const PATCH = withAuth(async (req: Request, auth: AuthContext) => {
  try {
    // Safely extract the ID from the URL since withAuth intercepts the params
    const id = req.url.split('/notifications/')[1].split('/')[0];

    const existingNotif = await prisma.notification.findUnique({
      where: { id: id }
    });

    if (!existingNotif || existingNotif.userId !== auth.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updatedNotification = await prisma.notification.update({
      where: { id: id },
      data: { read: true },
    });

    return NextResponse.json(updatedNotification);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
});