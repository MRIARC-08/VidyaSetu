# Quick Start: RBAC Middleware Usage

## For New Admin Endpoints

### Simplest Protection (Recommended)

```typescript
// src/app/api/admin/my-new-feature/route.ts
import { withRoleAuth } from '@/lib/middleware/auth.middleware';
import { NextResponse } from 'next/server';

export const POST = withRoleAuth('ADMIN', async (req, auth) => {
  const body = await req.json();

  // Your admin logic here
  console.log(`Admin ${auth.userId} performed action`);

  return NextResponse.json({ success: true }, { status: 201 });
});
```

## For Existing Controllers

### Update Controller Function

```typescript
import { requireRole } from '@/lib/middleware/role.middleware';
import { ForbiddenError } from '@/lib/middleware/auth.middleware';

async function requireAdmin() {
  const payload = await getAuthPayload();

  try {
    requireRole('ADMIN')({
      userId: payload.sub,
      role: payload.role,
      isProfileCompleted: true,
    });
  } catch (error) {
    if (error instanceof ForbiddenError) {
      throw new MyCustomError(error.message, 403);
    }
    throw error;
  }

  return payload;
}
```

## Role Checking Patterns

### Pattern 1: Single Role

```typescript
requireRole('ADMIN')(auth); // ADMIN only
requireRole('MODERATOR')(auth); // MODERATOR and ADMIN
requireRole('USER')(auth); // All authenticated users
```

### Pattern 2: Multiple Roles (OR condition)

```typescript
// Allow any of these roles
requireRole('ADMIN', 'MODERATOR')(auth);

// Equivalent to:
// ADMIN users: ✅ (level 3 >= 3)
// MODERATOR users: ✅ (level 2 >= 2)
// USER users: ❌ (level 1 < 2)
```

### Pattern 3: Exact Role Only (No Inheritance)

```typescript
requireExactRole('MODERATOR')(auth);

// ADMIN users: ❌ (role is "ADMIN", not "MODERATOR")
// MODERATOR users: ✅ (exact match)
// USER users: ❌ (role is "USER")
```

### Pattern 4: Conditional Checks

```typescript
if (hasMinimumRole(auth, 'MODERATOR')) {
  // Moderator or Admin-specific logic
}

// Or in route handler:
try {
  ensureMinimumRole(auth, 'ADMIN');
  // Only ADMIN can reach here
} catch (error) {
  // Handle insufficient permissions
}
```

## Common Tasks

### Add Admin-Only Endpoint

**Step 1: Create route file**

```bash
mkdir -p src/app/api/admin/my-action
touch src/app/api/admin/my-action/route.ts
```

**Step 2: Implement with role protection**

```typescript
import { withRoleAuth } from '@/lib/middleware/auth.middleware';
import { NextResponse } from 'next/server';

export const POST = withRoleAuth('ADMIN', async (req, auth) => {
  const body = await req.json();
  // Process request...
  return NextResponse.json({ success: true });
});
```

**Step 3: Update README**

- Add endpoint to admin routes list in [README.md](README.md)

### Allow Moderators Too

Change from:

```typescript
export const POST = withRoleAuth('ADMIN', async ...)
```

To:

```typescript
export const POST = withRoleAuth(['ADMIN', 'MODERATOR'], async ...)
```

### Custom Error Messages

```typescript
import { ForbiddenError } from '@/lib/middleware/auth.middleware';

export const POST = withRoleAuth('ADMIN', async (req, auth) => {
  try {
    // Some operation
    if (notValid) {
      throw new ForbiddenError(
        `Custom message: ${auth.userId} lacks permission for this action`
      );
    }
  } catch (error) {
    if (error instanceof ForbiddenError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 403 }
      );
    }
    throw error;
  }
});
```

## Role Hierarchy

```
┌─────────┐
│  ADMIN  │  Level 3 - Full system access
└────┬────┘
     │ Can access all lower-level endpoints
     │
┌─────────────┐
│ MODERATOR   │  Level 2 - Content management
└────┬────────┘
     │ Can access lower-level endpoints
     │
┌──────┐
│ USER │  Level 1 - Standard user
└──────┘
```

## Response Examples

### Successful Request

```json
HTTP 201 Created
{
  "success": true,
  "data": { /* response data */ }
}
```

### Authorization Failure

```json
HTTP 403 Forbidden
{
  "success": false,
  "message": "Access denied. Your role (USER) does not have permission. Required role: ADMIN"
}
```

### Authentication Failure

```json
HTTP 401 Unauthorized
{
  "success": false,
  "message": "Authentication required"
}
```

## Testing Endpoints

### With Admin Token

```bash
curl -X POST http://localhost:3000/api/admin/add-question \
  -H "Cookie: access_token=<admin-token>" \
  -H "Content-Type: application/json" \
  -d '{"questionText": "...", ...}'
```

### With User Token (Should Fail)

```bash
curl -X POST http://localhost:3000/api/admin/add-question \
  -H "Cookie: access_token=<user-token>" \
  -H "Content-Type: application/json" \
  -d '{"questionText": "...", ...}'
# Expected: HTTP 403 Forbidden
```

## Imports You'll Need

```typescript
// For route handlers (recommended)
import { withRoleAuth, withAuth } from '@/lib/middleware/auth.middleware';
import {
  ForbiddenError,
  UnauthorizedError,
} from '@/lib/middleware/auth.middleware';
import type { AuthContext } from '@/lib/middleware/auth.middleware';

// For role validation (in services/controllers)
import {
  requireRole,
  requireExactRole,
  hasMinimumRole,
  ROLE_HIERARCHY,
} from '@/lib/middleware/role.middleware';
```

## Troubleshooting

**Q: User gets 403 for MODERATOR endpoint despite being ADMIN**

- Check: ADMIN should inherit MODERATOR permissions
- Verify: `requireRole('MODERATOR')` should pass for ADMIN
- Solution: Use role hierarchy correctly

**Q: Roles not enforcing properly**

- Clear browser cookies
- Verify token has correct role in JWT
- Check: Is `ADMIN` string capitalization correct?

**Q: Migration not applying**

- Run: `pnpm db:migrate dev --name add_moderator_role`
- Verify: `pnpm db:migrate status`
- Check: Is `DIRECT_URL` set correctly in `.env`?

## Complete Example

```typescript
// src/app/api/admin/bulk-import/route.ts
import { withRoleAuth } from '@/lib/middleware/auth.middleware';
import { NextResponse } from 'next/server';
import { AdminServices } from '@/modules/admin/admin.service';

/**
 * Bulk import questions from CSV
 * @protected Requires ADMIN role
 * @endpoint POST /api/admin/bulk-import
 */
export const POST = withRoleAuth('ADMIN', async (req, auth) => {
  try {
    const file = await req.blob();

    // Admin action - log it
    console.log(`[ADMIN] userId=${auth.userId} action=bulk-import`);

    const result = await AdminServices.bulkImport(file);

    return NextResponse.json(
      {
        success: true,
        message: 'Import completed successfully',
        data: result,
      },
      { status: 201 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Import failed';
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
});
```

## See Also

- [Middleware README](src/lib/middleware/README.md) - Comprehensive documentation
- [RBAC Implementation](RBAC_IMPLEMENTATION.md) - Full implementation details
- [Migration Guide](MIGRATION_RBAC.md) - Database schema changes
