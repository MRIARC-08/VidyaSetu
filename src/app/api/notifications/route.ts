import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  try {
    // 1. Hunt for the token everywhere it could possibly hide
    let token = req.cookies.get('access_token')?.value || req.cookies.get('accessToken')?.value;

    // If not in cookies, check the Authorization header
    if (!token) {
      const authHeader = req.headers.get('authorization');
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
      }
    }

    // If it's STILL missing, we catch it
    if (!token) {
      return NextResponse.json({ error: "No access token found" }, { status: 401 });
    }

    // 2. Decrypt the token using your secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, email?: string, sub?: string };

    // 3. Find the user (Checking common JWT payload fields)
    let dbUser;
    if (decoded.email) {
      dbUser = await prisma.user.findUnique({ where: { email: decoded.email } });
    } else if (decoded.id || decoded.userId || decoded.sub) {
      const userId = decoded.id || decoded.userId || decoded.sub;
      dbUser = await prisma.user.findUnique({ where: { id: userId } });
    }

    if (!dbUser) {
      return NextResponse.json({ error: "User not found in DB" }, { status: 401 });
    }

    // 4. Fetch the notifications
    const notifications = await prisma.notification.findMany({
      where: { userId: dbUser.id },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(notifications);

  } catch (error) {
    console.error("JWT Verification/Fetch Error:", error);
    return NextResponse.json({ error: "Unauthorized or Invalid Token" }, { status: 401 });
  }
}