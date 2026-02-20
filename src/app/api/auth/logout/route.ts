import { NextResponse } from 'next/server';

export async function POST() {
  // TODO: Implement logout
  return NextResponse.json(
    { message: 'Logout not implemented' },
    { status: 501 }
  );
}
