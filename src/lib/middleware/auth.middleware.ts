import { SetCookies } from '@/lib/auth/cookies';
import { NextResponse } from 'next/server';

export class UnauthorizedError extends Error {
  statusCode: number;
  constructor(message = 'Authentication required') {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
  }
}

export class ForbiddenError extends Error {
  statusCode: number;
  constructor(message = 'Insufficient permissions') {
    super(message);
    this.name = 'ForbiddenError';
    this.statusCode = 403;
  }
}

export interface AuthContext {
  userId: string;
  role: string;
  isProfileCompleted: boolean;
}

export async function authenticate(): Promise<AuthContext> {
  const payload = await SetCookies.verifyCookies();
  if (!payload) {
    throw new UnauthorizedError();
  }
  return {
    userId: payload.sub,
    role: payload.role,
    isProfileCompleted: payload.isProfileCompleted,
  };
}

export function withAuth(
  handler: (req: Request, auth: AuthContext) => Promise<Response>
): (req: Request) => Promise<Response> {
  return async (req: Request) => {
    try {
      const auth = await authenticate();
      return handler(req, auth);
    } catch (error: unknown) {
      if (error instanceof UnauthorizedError) {
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 401 }
        );
      }
      if (error instanceof ForbiddenError) {
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 403 }
        );
      }
      return NextResponse.json(
        { success: false, message: 'Internal server error' },
        { status: 500 }
      );
    }
  };
}
