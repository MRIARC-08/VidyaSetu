'use client';

import { useEffect, useMemo, useState } from 'react';
import authFetch from '@/lib/auth/authFetch';
import NotesList from '@/components/NotesList';
import NotesSearch from '@/components/NotesSearch';
import type { Note } from '@/types/notes';

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const res = await authFetch({
          url: '/api/notes',
          options: {
            method: 'GET',
          },
        });

        if (res?.status === 401 || res?.status === 404 || res?.status === 500) {
          setError(res.message || 'Failed to load notes');
          return;
        }

        setNotes(res.data || []);
      } catch {
        setError('Failed to load notes');
      }
    };

    loadNotes();
  }, []);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [notes, search]);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">My Notes</h1>

      <NotesSearch value={search} onChange={setSearch} />
      {error && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-red-700">
          {error}
        </div>
      )}
      <NotesList notes={filteredNotes} />
    </main>
  );
}
