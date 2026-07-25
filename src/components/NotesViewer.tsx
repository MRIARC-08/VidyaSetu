'use client';

import type { Note } from '@/types/notes';

export default function NotesViewer({ note }: { note: Note }) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{note.title}</h1>
      <button
        className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
hover:bg-blue-700
"
        onClick={() => {
          const blob = new Blob([note.extractedText || ''], {
            type: 'text/plain',
          });

          const url = window.URL.createObjectURL(blob);

          const a = document.createElement('a');

          a.href = url;
          a.download = `${note.title}.txt`;

          a.click();

          window.URL.revokeObjectURL(url);
        }}
      >
        Download Extracted Text
      </button>
      {note.fileUrl && (
        <a
          href={note.fileUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Download Note
        </a>
      )}
      {note.extractedText ? (
        <div
          className="
border
rounded-xl
p-6
bg-gray-50
whitespace-pre-wrap
leading-7
"
        >
          {note.extractedText}
        </div>
      ) : (
        <div className="border rounded p-4">No extracted text available</div>
      )}
    </div>
  );
}
