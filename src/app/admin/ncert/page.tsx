'use client';

import { useState } from 'react';

type SeedStatus = 'idle' | 'seeding' | 'success' | 'error';

export default function AdminNcertPage() {
  const [status, setStatus] = useState<SeedStatus>('idle');
  const [message, setMessage] = useState<string | null>(null);

  async function handleSeed() {
    setStatus('seeding');
    setMessage(null);

    try {
      const res = await fetch('/api/admin/seed-ncert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          books: [],
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(
          `Created ${data.data?.classesCreated ?? 0} classes, ${data.data?.subjectsCreated ?? 0} subjects, ${data.data?.chaptersCreated ?? 0} chapters`
        );
      } else {
        setStatus('error');
        setMessage(data.message || data.error || 'Seed failed');
      }
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Seed request failed');
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Seed NCERT Data</h1>
        <p className="text-sm text-muted-foreground">
          Populate the database with NCERT curriculum data
        </p>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <p className="mb-4 text-sm text-muted-foreground">
          Click the button below to seed NCERT classes, subjects, and chapters
          into the database. This will use the curriculum data API.
        </p>

        <button
          type="button"
          onClick={handleSeed}
          disabled={status === 'seeding'}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === 'seeding' ? (
            <>
              <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Seeding...
            </>
          ) : (
            'Seed NCERT Data'
          )}
        </button>

        {message && (
          <p
            className={`mt-4 text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
