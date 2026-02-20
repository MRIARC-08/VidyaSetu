export default function NotePage({ params }: { params: { noteId: string } }) {
  return (
    <main>
      <h1>Note {params.noteId}</h1>
    </main>
  )
}
