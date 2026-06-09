# RBAC Migration Guide

## Overview

This guide explains how to migrate your VidyaSetu database to support the new Role-Based Access Control (RBAC) system with MODERATOR role and USER (renamed from STUDENT).

## Schema Changes

The following changes have been made to `src/prisma/schema.prisma`:

### UserRole Enum Updated

**Before:**
```prisma
enum UserRole {
  STUDENT
  ADMIN
}
```

**After:**
```prisma
enum UserRole {
  USER
  MODERATOR
  ADMIN
}
```

**User Model Default Updated:**
```prisma
role UserRole @default(USER)  // Was: @default(STUDENT)
```

## Migration Steps

### Step 1: Create Migration

Run Prisma to create a new migration:

```bash
pnpm db:migrate dev --name add_moderator_role
```

Prisma will:
1. Detect the enum changes
2. Generate SQL migration files
3. Apply the migration to your database
4. Update the Prisma client

### Step 2: Update Seed Data (If Applicable)

If you have seed scripts using STUDENT role, update them:

**Before:**
```typescript
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    role: 'STUDENT',  // ❌ This will fail after migration
  },
});
```

**After:**
```typescript
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    role: 'USER',  // ✅ Use USER instead
  },
});
```

### Step 3: Update Existing Data (For Production)

If you have existing users with STUDENT role, they will continue to work (the database will still have the old value temporarily), but you should update them:

```typescript
// Update all existing STUDENT users to USER
await prisma.user.updateMany({
  where: { role: 'STUDENT' },
  data: { role: 'USER' },
});
```

## Rollback Instructions

If you need to rollback the migration:

```bash
pnpm db:migrate resolve --rolled-back add_moderator_role
```

This will:
1. Remove the migration from your database
2. Revert the schema changes
3. Allow you to run `pnpm db:migrate dev` again if needed

## Important Notes

### Existing Data

- Existing ADMIN users remain unchanged
- STUDENT role references will need to be updated
- New default role for users is USER (not STUDENT)

### Backward Compatibility

The middleware is backward compatible:
- CODE using `requireRole('USER')` works the same as before when you had `requireRole('STUDENT')`
- `requireRole('ADMIN')` works unchanged
- MODERATOR is a new role with intermediate permissions

### Role Hierarchy

After migration, the role hierarchy is:

```
USER (Level 1) ← STUDENT equivalent
    ↓
MODERATOR (Level 2) ← New role
    ↓
ADMIN (Level 3) ← Unchanged
```

## Database Connection

### For Local Development (Docker)

If using Docker, the migration will apply automatically:

```bash
docker compose up -d
pnpm db:migrate dev --name add_moderator_role
```

### For Hosted Database (Supabase, Neon, Railway, etc.)

Ensure your `DIRECT_URL` environment variable is set correctly in `.env`:

```env
DIRECT_URL="your-direct-postgresql-connection-url"
```

Then run:

```bash
pnpm db:migrate dev --name add_moderator_role
```

## Verification

After migration, verify the changes:

```bash
# Check that migration was applied
pnpm db:migrate status

# Open Prisma Studio to inspect data
pnpm db:studio
```

In Prisma Studio, check the `User` table:
- All existing users should have valid roles (ADMIN, USER)
- New users should default to USER role
- No STUDENT values should remain (unless not updated)

## PostgreSQL Enum Behavior

PostgreSQL enum types are immutable. The migration will:

1. Create a new enum type with updated values
2. Migrate existing data to the new enum
3. Drop the old enum

You may see messages like:
```
DROP TYPE "UserRole" CASCADE
CREATE TYPE "UserRole" AS ENUM (...)
```

This is normal and expected.

## Troubleshooting

### Issue: Migration fails with "Cannot read users with role STUDENT"

This usually means the middleware is being called before the migration completes.

**Solution:** Wait for migration to complete, then restart the application:

```bash
# Kill any running dev servers
Ctrl+C

# Clear any generated files
rm -rf .next

# Re-run migration
pnpm db:migrate deploy

# Restart dev server
pnpm dev
```

### Issue: "Type "UserRole" already exists"

This means the old migration might still be cached.

**Solution:**
```bash
pnpm db:generate
pnpm db:migrate dev
```

### Issue: Production deployment error

For production deployments:

1. Back up your database first
2. Run migration on staging first
3. Ensure `DIRECT_URL` is correct (not pooled connection)
4. Deploy code changes after migration succeeds

## Configuration Commands

```bash
# Generate Prisma client after schema changes
pnpm db:generate

# Create and apply migration
pnpm db:migrate dev --name add_moderator_role

# Deploy migration to production
pnpm db:migrate deploy

# Check migration status
pnpm db:migrate status

# Reset database (caution: deletes all data)
pnpm db:reset

# Open Prisma Studio
pnpm db:studio
```

## Related Documentation

- [Middleware README](../lib/middleware/README.md) - Usage patterns and examples
- [Main README](../README.md) - RBAC overview
- [Prisma Documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate)

## Support

If you encounter issues during migration:

1. Check Prisma error logs carefully
2. Verify `DIRECT_URL` is set correctly
3. Ensure PostgreSQL connection is active
4. Check for existing migration files in `src/prisma/migrations/`
5. File an issue on the project repository
