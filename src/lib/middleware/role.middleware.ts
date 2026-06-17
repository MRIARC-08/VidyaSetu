import type { AuthContext } from './auth.middleware';
import { ForbiddenError } from './auth.middleware';

/**
 * Role Hierarchy Definition
 * Higher numbers indicate higher privilege levels
 * USER (1) < MODERATOR (2) < ADMIN (3)
 *
 * Role Permissions:
 * - USER: Standard user access, can read content and take quizzes
 * - MODERATOR: Can manage content, approve questions, moderate discussions
 * - ADMIN: Full system access, including user management and system configuration
 */
const ROLE_HIERARCHY: Record<string, number> = {
  USER: 1,
  MODERATOR: 2,
  ADMIN: 3,
};

/**
 * Role validation error helper
 * Provides detailed error information for access violations
 */
function createRoleError(roles: string[], userRole: string): ForbiddenError {
  const requiredRoles = roles.join(' or ');
  return new ForbiddenError(
    `Access denied. Your role (${userRole}) does not have permission. Required role: ${requiredRoles}`
  );
}

/**
 * Require specific role(s) for route access
 * Supports role hierarchy - higher roles inherit lower role permissions
 *
 * @param roles - Allowed role(s). Can pass multiple roles for flexible access
 * @returns Middleware function that validates user role
 *
 * @example
 * // Require ADMIN role
 * requireRole('ADMIN')(authContext);
 *
 * // Allow ADMIN or MODERATOR
 * requireRole('ADMIN', 'MODERATOR')(authContext);
 */
export function requireRole(...roles: string[]): (auth: AuthContext) => void {
  return (auth: AuthContext): void => {
    const userLevel = ROLE_HIERARCHY[auth.role];

    // Check if user role is valid
    if (userLevel === undefined) {
      throw new ForbiddenError(`Invalid user role: ${auth.role}`);
    }

    // Check if user has access - user can access if their level >= any required role level
    const hasAccess = roles.some((role) => {
      const requiredLevel = ROLE_HIERARCHY[role];
      return userLevel >= requiredLevel;
    });

    if (!hasAccess) {
      throw createRoleError(roles, auth.role);
    }
  };
}

/**
 * Check if user has exact role (no hierarchy)
 * Useful when you need exact role matching without hierarchy
 *
 * @param roles - Required exact role(s)
 * @returns Middleware function that validates exact user role
 */
export function requireExactRole(
  ...roles: string[]
): (auth: AuthContext) => void {
  return (auth: AuthContext): void => {
    if (!roles.includes(auth.role)) {
      throw createRoleError(roles, auth.role);
    }
  };
}

/**
 * Validate if user has minimum role level
 *
 * @param minimumRole - Minimum required role
 * @returns true if user has at least this role level
 */
export function hasMinimumRole(
  auth: AuthContext,
  minimumRole: string
): boolean {
  const userLevel = ROLE_HIERARCHY[auth.role];
  const minimumLevel = ROLE_HIERARCHY[minimumRole];
  return userLevel >= minimumLevel;
}

/**
 * Get all roles accessible to a user (includes inherited roles)
 *
 * @param userRole - User's current role
 * @returns Array of accessible roles
 */
export function getAccessibleRoles(userRole: string): string[] {
  const userLevel = ROLE_HIERARCHY[userRole];

  return Object.entries(ROLE_HIERARCHY)
    .filter(([_, level]) => level <= userLevel)
    .map(([role, _]) => role)
    .sort();
}

// Export role hierarchy for reference
export { ROLE_HIERARCHY };
