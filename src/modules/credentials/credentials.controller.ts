import { NextResponse } from 'next/server';
import { withAuth, type AuthContext } from '@/lib/middleware/auth.middleware';
import { CredentialsService, CredentialServiceError } from './credentials.service';

const handleError = (error: unknown) => {
  if (error instanceof CredentialServiceError) {
    return NextResponse.json({ success: false, message: error.message }, { status: error.statusCode });
  }
  return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
};

export class CredentialsController {
  static store = withAuth(async (req: Request, auth: AuthContext) => {
    try {
      const body = await req.json().catch(() => ({}));
      const { provider, apiKey } = body;

      if (!provider || !apiKey) {
        return NextResponse.json(
          { success: false, message: 'provider and apiKey are required' },
          { status: 400 }
        );
      }

      const metadata = await CredentialsService.store({ userId: auth.userId, provider, apiKey });
      return NextResponse.json({ success: true, data: metadata }, { status: 201 });
    } catch (error) {
      return handleError(error);
    }
  });

  static list = withAuth(async (_req: Request, auth: AuthContext) => {
    try {
      const credentials = await CredentialsService.list(auth.userId);
      return NextResponse.json({ success: true, data: credentials });
    } catch (error) {
      return handleError(error);
    }
  });

  static async revoke(id: string, auth: AuthContext) {
    try {
      await CredentialsService.revoke(id, auth.userId);
      return NextResponse.json({ success: true, message: 'Credential revoked' });
    } catch (error) {
      return handleError(error);
    }
  }
}