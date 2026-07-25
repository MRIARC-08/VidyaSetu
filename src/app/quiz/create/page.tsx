'use client';

import { QuizCreationForm } from '@/components/QuizCreationForm';

export default function CreateQuizPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight">Create Quiz</h1>
        <p className="text-sm text-muted-foreground">
          Generate a quiz from your NCERT chapters to test your knowledge
        </p>
      </div>

      <QuizCreationForm />
    </main>
  );
}
