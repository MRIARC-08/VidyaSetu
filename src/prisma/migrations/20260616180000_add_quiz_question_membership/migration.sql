CREATE TABLE "QuizQuestion" (
    "id" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "QuizQuestion_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "QuizQuestion_quizId_questionId_key" ON "QuizQuestion"("quizId", "questionId");

CREATE INDEX "QuizQuestion_quizId_idx" ON "QuizQuestion"("quizId");

CREATE INDEX "QuizQuestion_questionId_idx" ON "QuizQuestion"("questionId");

CREATE UNIQUE INDEX "QuestionResponse_sessionId_questionId_key" ON "QuestionResponse"("sessionId", "questionId");

ALTER TABLE "QuizQuestion"
ADD CONSTRAINT "QuizQuestion_quizId_fkey"
FOREIGN KEY ("quizId")
REFERENCES "Quiz"("id")
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE "QuizQuestion"
ADD CONSTRAINT "QuizQuestion_questionId_fkey"
FOREIGN KEY ("questionId")
REFERENCES "Question"("id")
ON DELETE CASCADE
ON UPDATE CASCADE;
