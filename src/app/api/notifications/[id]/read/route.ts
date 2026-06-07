import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const updatedNotification = await prisma.notification.update({
      where: { id },
      data: { read: true },
    });

    return NextResponse.json(updatedNotification);
  } catch (error) {
    console.error("Error marking notification as read:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}