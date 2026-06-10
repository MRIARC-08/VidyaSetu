'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import authFetch from '@/lib/auth/authFetch';
import NotesViewer from '@/components/NotesViewer';
import type { Note } from '@/types/notes';

export default function NotePage() {
  const params = useParams();
  const [note, setNote] =
    useState<Note | null>(null);

  useEffect(() => {
    authFetch({
      url: `/api/notes/${params.noteId}`,
      options: {
        method: 'GET',
      },
    }).then((res) => {
      setNote(res.data);
    });
  }, [params.noteId]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return <NotesViewer note={note} />;
}