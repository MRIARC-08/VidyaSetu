export default function NcertSubjectPage({
  params,
}: {
  params: { class: string; subject: string };
}) {
  return (
    <main>
      <h1>
        NCERT {params.class} — {params.subject}
      </h1>
    </main>
  );
}
