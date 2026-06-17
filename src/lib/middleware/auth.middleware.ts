import { SetCookies } from '@/lib/auth/cookies';
import { NextResponse } from 'next/server';
import {
  requireRole,
  requireExactRole,
  hasMinimumRole,
} from './role.middleware';

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

/**
 * Higher-order function to add role-based access control to route handlers
 * Supports role hierarchy validation
 *
 * @param requiredRoles - Role(s) required to access the route
 * @param handler - The actual route handler function
 * @returns Wrapped handler with role validation
 *
 * @example
 * export const POST = withRoleAuth('ADMIN', async (req, auth) => {
 *   // Admin-only logic
 *   return NextResponse.json({ success: true });
 * });
 */
export function withRoleAuth(
  requiredRoles: string | string[],
  handler: (req: Request, auth: AuthContext) => Promise<Response>
): (req: Request) => Promise<Response> {
  const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];

  return withAuth(async (req: Request, auth: AuthContext) => {
    try {
      // Validate role using role middleware
      requireRole(...roles)(auth);
      return handler(req, auth);
    } catch (error: unknown) {
      if (error instanceof ForbiddenError) {
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 403 }
        );
      }
      throw error;
    }
  });
}

/**
 * Higher-order function for exact role matching (no inheritance)
 *
 * @param requiredRoles - Exact role(s) required
 * @param handler - The route handler function
 * @returns Wrapped handler with exact role validation
 */
export function withExactRoleAuth(
  requiredRoles: string | string[],
  handler: (req: Request, auth: AuthContext) => Promise<Response>
): (req: Request) => Promise<Response> {
  const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];

  return withAuth(async (req: Request, auth: AuthContext) => {
    try {
      requireExactRole(...roles)(auth);
      return handler(req, auth);
    } catch (error: unknown) {
      if (error instanceof ForbiddenError) {
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 403 }
        );
      }
      throw error;
    }
  });
}

/**
 * Helper to check if user has minimum role in controller logic
 * Can be used inside route handlers to conditionally execute code
 *
 * @param auth - Authentication context
 * @param minimumRole - Minimum required role
 * @throws ForbiddenError if user doesn't have required role
 *
 * @example
 * export const POST = withAuth(async (req, auth) => {
 *   ensureMinimumRole(auth, 'MODERATOR');
 *   // MODERATOR and ADMIN can reach here
 * });
 */
export function ensureMinimumRole(
  auth: AuthContext,
  minimumRole: string
): void {
  if (!hasMinimumRole(auth, minimumRole)) {
    throw new ForbiddenError(
      `This action requires at least ${minimumRole} role. Your role: ${auth.role}`
    );
  }
}
