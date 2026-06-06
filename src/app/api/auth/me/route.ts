import { authenticate } from '@/lib/middleware/auth.middleware';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const auth = await authenticate();
    return NextResponse.json({
      role: auth.role,
      userId: auth.userId,
    });
  } catch {
    return NextResponse.json({ role: null, userId: null }, { status: 401 });
  }
}
