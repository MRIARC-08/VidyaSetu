# Role-Based Access Control Middleware

This directory contains centralized middleware for authentication and role-based authorization in VidyaSetu.

## Overview

VidyaSetu implements a hierarchical role-based access control (RBAC) system to protect admin and moderator endpoints. All roles follow a privilege hierarchy:

```
USER (Level 1) < MODERATOR (Level 2) < ADMIN (Level 3)
```

## Role Definitions

| Role | Level | Permissions |
|------|-------|-------------|
| **USER** | 1 | Standard user access - read content, take quizzes, view analytics |
| **MODERATOR** | 2 | Content management - approve questions, moderate discussions, view analytics |
| **ADMIN** | 3 | Full system access - user management, system configuration, all operations |

## Files

### `auth.middleware.ts`
Core authentication middleware with role-based authorization helpers.

**Key Exports:**
- `authenticate()` - Verify cookies and extract user context
- `withAuth()` - Wrap route handlers with authentication
- `withRoleAuth()` - Wrap handlers with role hierarchy validation
- `withExactRoleAuth()` - Wrap handlers with exact role matching
- `ensureMinimumRole()` - Check role within handler logic
- `UnauthorizedError` - 401 authentication failures
- `ForbiddenError` - 403 authorization failures

### `role.middleware.ts`
Role hierarchy management and validation.

**Key Exports:**
- `requireRole()` - Validate user has required role (supports hierarchy)
- `requireExactRole()` - Validate user has exact role (no inheritance)
- `hasMinimumRole()` - Check if user meets minimum role requirement
- `getAccessibleRoles()` - Get all roles accessible to a user
- `ROLE_HIERARCHY` - Role-to-level mapping

## Usage Patterns

### Pattern 1: Using `withRoleAuth` in Route Handlers (Recommended)

This is the cleanest approach for Next.js API routes.

```typescript
// src/app/api/admin/add-question/route.ts
import { withRoleAuth } from '@/lib/middleware/auth.middleware';

export const POST = withRoleAuth('ADMIN', async (req, auth) => {
  // Handler code - only ADMIN and higher can access
  const body = await req.json();
  // Process request...
  return NextResponse.json({ success: true });
});

// Allow multiple roles
export const GET = withRoleAuth(['ADMIN', 'MODERATOR'], async (req, auth) => {
  // MODERATOR and ADMIN can access (based on hierarchy)
  return NextResponse.json({ data: [] });
});
```

### Pattern 2: Using `requireRole` in Controllers (Current Pattern)

For existing controller-based patterns, use `requireRole` inside async functions.

```typescript
// src/modules/admin/admin.controller.ts
import { requireRole } from '@/lib/middleware/role.middleware';
import { ForbiddenError } from '@/lib/middleware/auth.middleware';

async function requireAdmin() {
  const payload = await getPayload(); // Get user payload
  
  try {
    requireRole('ADMIN')({
      userId: payload.sub,
      role: payload.role,
      isProfileCompleted: true,
    });
  } catch (error) {
    if (error instanceof ForbiddenError) {
      // Handle authorization failure
      throw new CustomError(error.message, 403);
    }
    throw error;
  }
  
  return payload;
}
```

### Pattern 3: Conditional Role Checks in Handlers

Check roles conditionally within handler logic.

```typescript
// src/app/api/some-route/route.ts
import { withAuth, ensureMinimumRole } from '@/lib/middleware/auth.middleware';

export const POST = withAuth(async (req, auth) => {
  // Regular user access
  
  // Optionally check for higher permissions
  if (auth.role === 'ADMIN') {
    // Admin-specific logic
  } else {
    ensureMinimumRole(auth, 'MODERATOR'); // Will throw if user is just a USER
    // Moderator-specific logic
  }
  
  return NextResponse.json({ success: true });
});
```

## Protected Endpoints

### Admin Endpoints (Require ADMIN Role)

- `POST /api/admin/seed-ncert` - Seed NCERT data
- `POST /api/admin/add-question` - Add questions
- `GET /api/admin/questions` - List questions
- `DELETE /api/admin/questions/:questionId` - Delete questions

### Moderator Endpoints (Require MODERATOR or ADMIN Role)

To be implemented as needed:
- Content approval workflows
- Discussion moderation
- Bulk operations

### User Endpoints (Open to USER and above)

Analytics and profile endpoints are typically open to authenticated users:
- `GET /api/analytics/overview` - User's performance analytics
- `GET /api/analytics/streak` - User's streak data
- `GET /api/analytics/weak-topics` - Weak topics for user

## Role Hierarchy in Action

The role hierarchy means:

```typescript
// This grants access to ADMIN
requireRole('ADMIN')(auth); // ✅ Passes if auth.role === 'ADMIN'

// This grants access to ADMIN and MODERATOR (ADMIN >= MODERATOR in hierarchy)
requireRole('MODERATOR')(auth); // ✅ Passes if 'MODERATOR' or 'ADMIN'

// This grants access to ADMIN, MODERATOR, or USER
requireRole('USER')(auth); // ✅ Always passes for authenticated users

// Multiple roles work as OR condition
requireRole('ADMIN', 'MODERATOR')(auth); // ✅ Passes if either level met
```

## Error Handling

All middleware throws typed errors for proper HTTP status codes:

```typescript
// 401 - Authentication required
throw new UnauthorizedError('Please log in');

// 403 - Insufficient permissions
throw new ForbiddenError('Admin role required');
```

Route handlers automatically convert these to appropriate HTTP responses:

```json
{
  "success": false,
  "message": "Access denied. Your role (USER) does not have permission. Required role: ADMIN"
}
```

## Migration from STUDENT to USER Role

If migrating from an older schema using STUDENT role:

1. Update Prisma schema: Change `STUDENT` → `USER`
2. Run migration: `prisma migrate`
3. Existing logic works unchanged (USER and ADMIN behave same as STUDENT and ADMIN)
4. Optional: Add MODERATOR role assignment in user management

## Best Practices

1. **Use `withRoleAuth` for new routes** - Cleanest and most secure
2. **Centralize role checks** - Don't scatter authorization logic
3. **Test role enforcement** - Verify 403 responses for insufficient roles
4. **Log role violations** - Track failed access attempts
5. **Update roles carefully** - Role changes should be explicit operations
6. **Document role requirements** - Add JSDoc comments to protected routes

## Testing Role Authorization

```typescript
describe('Admin Routes', () => {
  it('should allow ADMIN users', async () => {
    const response = await fetch('/api/admin/add-question', {
      method: 'POST',
      headers: { 'Cookie': 'access_token=admin_token' },
      body: JSON.stringify({ /* data */ }),
    });
    expect(response.status).toBe(201);
  });

  it('should reject USER role', async () => {
    const response = await fetch('/api/admin/add-question', {
      method: 'POST',
      headers: { 'Cookie': 'access_token=user_token' },
      body: JSON.stringify({ /* data */ }),
    });
    expect(response.status).toBe(403);
  });
});
```

## See Also

- [Prisma Schema](../../prisma/schema.prisma) - User role definitions
- [Admin Module](../../modules/admin/) - Admin operation implementations
- Next.js [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
