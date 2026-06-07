import { NextResponse } from 'next/server';
import {prisma} from '../../../lib/prisma';

export async function GET(req: Request) {
  try {
    // Note: We will hook this up to VidyaSetu's actual auth later
    const userId = "REPLACE_WITH_LOGGED_IN_USER_ID"; 

    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}