-- CreateEnum
CREATE TYPE "ValidationStatus" AS ENUM ('PENDING', 'VALIDATED', 'REJECTED', 'REQUIRES_REVIEW');

-- AlterTable
ALTER TABLE "Note" ADD COLUMN "isAIGenerated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "validationStatus" "ValidationStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN "safetyFlags" TEXT;

-- CreateIndex
CREATE INDEX "Note_isAIGenerated_idx" ON "Note"("isAIGenerated");
