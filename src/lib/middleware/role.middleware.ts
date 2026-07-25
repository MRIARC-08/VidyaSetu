import type { AuthContext } from './auth.middleware';
import { ForbiddenError } from './auth.middleware';

export function requireRole(...roles: string[]) {
  return (auth: AuthContext): void => {
    if (!roles.includes(auth.role)) {
      throw new ForbiddenError(
        `Access denied. Required role: ${roles.join(' or ')}`
      );
    }
  };
}
