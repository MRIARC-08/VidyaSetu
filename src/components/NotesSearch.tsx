'use client';

type NotesSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function NotesSearch({ value, onChange }: NotesSearchProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search notes..."
      className="
w-full
border
rounded-lg
px-4
py-3
shadow-sm
focus:outline-none
focus:ring-2
focus:ring-blue-500
"
    />
  );
}
