import { NextResponse } from 'next/server';

export async function POST() {
  // TODO: Implement token refresh
  return NextResponse.json(
    { message: 'Refresh not implemented' },
    { status: 501 }
  );
}
