import { NextResponse } from 'next/server';
import { authenticate } from '@/lib/middleware/auth.middleware';
import { CredentialsController } from '@/modules/credentials';

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const auth = await authenticate();
    return CredentialsController.revoke(params.id, auth);
  } catch {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }
}