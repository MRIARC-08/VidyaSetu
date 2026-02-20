export default function QuizPage({ params }: { params: { quizId: string } }) {
  return (
    <main>
      <h1>Quiz {params.quizId}</h1>
    </main>
  );
}
