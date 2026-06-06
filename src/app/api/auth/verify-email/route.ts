import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json({ success: false, message: 'Token is required' }, { status: 400 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { email: string };
    
    if (!decoded.email) {
      return NextResponse.json({ success: false, message: 'Invalid token payload' }, { status: 400 });
    }

    await prisma.user.update({
      where: { email: decoded.email },
      data: {
        isEmailVerified: true,
        emailVerifiedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, message: 'Email verified successfully!' });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || 'Token verification failed' }, { status: 400 });
  }
}
