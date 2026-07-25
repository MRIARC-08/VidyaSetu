/*
  Warnings:

  - You are about to drop the column `easyAccuracy` on the `UserStats` table. All the data in the column will be lost.
  - You are about to drop the column `hardAccuracy` on the `UserStats` table. All the data in the column will be lost.
  - You are about to drop the column `mediumAccuracy` on the `UserStats` table. All the data in the column will be lost.
  - You are about to drop the column `overallAccuracy` on the `UserStats` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "pdf" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "class" TEXT,
ADD COLUMN     "firstTime" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "UserStats" DROP COLUMN "easyAccuracy",
DROP COLUMN "hardAccuracy",
DROP COLUMN "mediumAccuracy",
DROP COLUMN "overallAccuracy",
ADD COLUMN     "currentStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastActivityDate" TIMESTAMP(3),
ADD COLUMN     "longestStreak" INTEGER NOT NULL DEFAULT 0;
