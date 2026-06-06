import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withAuth } from '@/lib/middleware/auth.middleware';
import jwt from 'jsonwebtoken';

export const POST = withAuth(async (req, auth) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: auth.userId },
    });

    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    if (user.isEmailVerified) {
      return NextResponse.json({ success: false, message: 'Email is already verified' }, { status: 400 });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1d' });
    const verificationLink = `${new URL(req.url).origin}/api/auth/verify-email?token=${token}`;

    console.log(`[Verification Email] Link: ${verificationLink}`);

    return NextResponse.json({
      success: true,
      message: 'Verification email resent successfully.',
      link: verificationLink
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || 'Internal server error' }, { status: 500 });
  }
});
