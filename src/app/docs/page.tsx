import Link from 'next/link';

function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[12px] font-semibold uppercase tracking-wider text-secondary">
        {label}
      </p>
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
      <p className="max-w-3xl text-sm leading-7 text-secondary md:text-base">
        {children}
      </p>
    </div>
  );
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-black/10 px-6 py-6 md:px-10">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold uppercase">
            VidyaSetu
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/" className="text-secondary hover:text-black">
              Repository docs
            </Link>
          </div>
        </nav>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <SectionHeading
          label="Maintained docs"
          title="Only the repository docs you should trust"
        >
          This page has been reduced to the actively maintained documentation
          and no longer attempts to display large generated documentation
          content that is not kept up to date with the codebase.
        </SectionHeading>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-black/10 bg-background p-6">
            <h3 className="text-lg font-semibold">README</h3>
            <p className="mt-4 text-sm leading-7 text-secondary">
              Project overview, setup instructions, environment guidance, and
              Prisma migration notes.
            </p>
          </article>

          <article className="rounded-3xl border border-black/10 bg-background p-6">
            <h3 className="text-lg font-semibold">RBAC_IMPLEMENTATION</h3>
            <p className="mt-4 text-sm leading-7 text-secondary">
              Role-based access control middleware, role hierarchy, and
              protected route patterns.
            </p>
          </article>

          <article className="rounded-3xl border border-black/10 bg-background p-6">
            <h3 className="text-lg font-semibold">MIGRATION_RBAC</h3>
            <p className="mt-4 text-sm leading-7 text-secondary">
              Safe migration guidance for role enum changes and preserving
              existing data.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 p-6">
            <h3 className="text-xl font-semibold">Role migration</h3>
            <p className="mt-4 text-sm leading-7 text-secondary">
              A new migration file has been added to preserve existing rows and
              convert old STUDENT values to the current USER enum.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 p-6">
            <h3 className="text-xl font-semibold">Safe schema changes</h3>
            <p className="mt-4 text-sm leading-7 text-secondary">
              Only maintain repository docs and a migration file should be used
              for database schema updates. Large generated documentation sets
              are not part of the maintained repository docs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
