export default function NcertClassPage({ params }: { params: { class: string } }) {
  return (
    <main>
      <h1>NCERT Class: {params.class}</h1>
    </main>
  )
}
