'use client';

import Link from 'next/link';
import authFetch from '@/lib/auth/authFetch';
import type { Note } from '@/types/notes';

type NotesListProps = {
  notes: Note[];
};

export default function NotesList({
  notes,
}: NotesListProps) {
  if (notes.length === 0) {
    return (
      <div className="border rounded p-4">
        No notes found
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <Link
          key={note.id}
          href={`/notes/${note.id}`}
          className="
block
border
rounded-xl
p-5
shadow-sm
hover:shadow-md
transition
bg-white
"
        >
          <h3 className="text-lg font-bold">
            {note.title}
          </h3>
          <p className="text-sm text-gray-500">
            {new Date(note.createdAt).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {note.extractedText?.slice(0, 100) ||
              'No preview available'}
          </p>
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
            onClick={async (e) => {
              e.preventDefault();

              await authFetch({
                url: `/api/notes/${note.id}`,
                options: {
                  method: 'DELETE',
                },
              });

              window.location.reload();
            }}
          >
            Delete
          </button>
        </Link>
      ))}
    </div>
  );
}