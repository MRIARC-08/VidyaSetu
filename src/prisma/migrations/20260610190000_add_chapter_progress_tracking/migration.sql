CREATE TABLE "ChapterProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "quizAttempts" INTEGER NOT NULL DEFAULT 0,
    "totalQuestions" INTEGER NOT NULL DEFAULT 0,
    "correctAnswers" INTEGER NOT NULL DEFAULT 0,
    "accuracy" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "completion" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "topicsCovered" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChapterProgress_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "ChapterProgress_userId_chapterId_key"
ON "ChapterProgress"("userId", "chapterId");

CREATE INDEX "ChapterProgress_userId_idx"
ON "ChapterProgress"("userId");

CREATE INDEX "ChapterProgress_chapterId_idx"
ON "ChapterProgress"("chapterId");

CREATE INDEX "ChapterProgress_subjectId_idx"
ON "ChapterProgress"("subjectId");

ALTER TABLE "ChapterProgress"
ADD CONSTRAINT "ChapterProgress_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ChapterProgress"
ADD CONSTRAINT "ChapterProgress_chapterId_fkey"
FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ChapterProgress"
ADD CONSTRAINT "ChapterProgress_subjectId_fkey"
FOREIGN KEY ("subjectId") REFERENCES "Subject"("id")
ON DELETE CASCADE ON UPDATE CASCADE;