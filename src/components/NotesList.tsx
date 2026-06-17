'use client';

import { useState } from 'react';
import Link from 'next/link';
import authFetch from '@/lib/auth/authFetch';
import type { Note } from '@/types/notes';

type NotesListProps = {
  notes: Note[];
};
export default function NotesList({ notes }: NotesListProps) {
  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const visibleNotes = notes.filter((note) => !deletedIds.includes(note.id));
  const [error, setError] = useState('');
  if (visibleNotes.length === 0) {
    return <div className="border rounded p-4">No notes found</div>;
  }

  return (
    <>
      {error && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-3">
        {visibleNotes.map((note) => (
          <div
            key={note.id}
            className="
      border
      rounded-xl
      p-5
      shadow-sm
      hover:shadow-md
      transition
      bg-white
    "
          >
            <Link href={`/notes/${note.id}`}>
              <h3 className="text-lg font-bold">{note.title}</h3>

              <p className="text-sm text-gray-500">
                {new Date(note.createdAt).toLocaleDateString()}
              </p>

              <p className="text-sm text-gray-600 mt-2">
                {note.extractedText?.slice(0, 100) || 'No preview available'}
              </p>
            </Link>

            <button
              className="
        mt-3
        text-sm
        bg-red-50
        text-red-600
        px-3
        py-1
        rounded
      "
              onClick={async () => {
                setError('');

                const response = await authFetch({
                  url: `/api/notes/${note.id}`,
                  options: {
                    method: 'DELETE',
                  },
                });

                if (
                  response?.status === 401 ||
                  response?.status === 404 ||
                  response?.status === 500
                ) {
                  setError(response.message || 'Failed to delete note');
                  return;
                }

                setDeletedIds((prev) => [...prev, note.id]);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
