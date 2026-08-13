'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import authFetch from '@/lib/auth/authFetch';
import NotesViewer from '@/components/NotesViewer';
import type { Note } from '@/types/notes';

export default function NotePage() {
  const params = useParams();
  const [note, setNote] = useState<Note | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadNote = async () => {
      try {
        const res = await authFetch({
          url: `/api/notes/${params.noteId}`,
          options: {
            method: 'GET',
          },
        });

        if (res?.status === 401 || res?.status === 404 || res?.status === 500) {
          setError(res.message || 'Failed to load note');
          return;
        }

        setNote(res.data);
      } catch {
        setError('Failed to load note');
      }
    };

    loadNote();
  }, [params.noteId]);
  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }
  if (!note) {
    return <div>Loading...</div>;
  }

  return <NotesViewer note={note} />;
}
