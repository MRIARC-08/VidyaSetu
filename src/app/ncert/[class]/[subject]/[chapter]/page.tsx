export default function NcertChapterPage({
  params,
}: {
  params: { class: string; subject: string; chapter: string };
}) {
  return (
    <main>
      <h1>
        NCERT {params.class} — {params.subject} — Chapter {params.chapter}
      </h1>
    </main>
  );
}
