BEGIN;

-- Rename the old enum type so we can recreate it with the new values.
ALTER TYPE "UserRole" RENAME TO "UserRole_old";

-- Create the new enum type with the updated role names.
CREATE TYPE "UserRole" AS ENUM ('USER', 'MODERATOR', 'ADMIN');

-- Convert existing values to the new enum values.
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole" USING (
  CASE
    WHEN "role" = 'STUDENT' THEN 'USER'::"UserRole"
    ELSE "role"::text::"UserRole"
  END
);

-- Clean up the old enum type.
DROP TYPE "UserRole_old";

COMMIT;
