export default function QuizResultPage({
  params,
}: {
  params: { quizId: string };
}) {
  return (
    <main>
      <h1>Result for Quiz {params.quizId}</h1>
    </main>
  );
}
