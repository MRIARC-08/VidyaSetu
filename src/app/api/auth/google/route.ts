import { NextResponse } from 'next/server';

export async function POST() {
    // TODO: Implement Google OAuth
    return NextResponse.json({ message: 'Google auth not implemented' }, { status: 501 });
}
