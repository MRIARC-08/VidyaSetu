'use client';

import { useEffect, useMemo, useState } from 'react';
import authFetch from '@/lib/auth/authFetch';
import NotesList from '@/components/NotesList';
import NotesSearch from '@/components/NotesSearch';
import type { Note } from '@/types/notes';

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    authFetch({
      url: '/api/notes',
      options: {
        method: 'GET',
      },
    }).then((res) => {
      setNotes(res.data || []);
    });
  }, []);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [notes, search]);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        My Notes
      </h1>

      <NotesSearch
        value={search}
        onChange={setSearch}
      />

      <NotesList notes={filteredNotes} />
    </main>
  );
}