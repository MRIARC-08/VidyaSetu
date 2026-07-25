-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "pdf" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "class" TEXT,
ADD COLUMN     "firstTime" BOOLEAN NOT NULL DEFAULT true;
