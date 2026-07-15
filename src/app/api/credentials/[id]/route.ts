import { NextResponse } from 'next/server';
import { authenticate } from '@/lib/middleware/auth.middleware';
import { CredentialsController } from '@/modules/credentials';

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const auth = await authenticate();
    return CredentialsController.revoke(id, auth);
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }
}
