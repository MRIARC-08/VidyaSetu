'use client';

import Link from 'next/link';

type Props = {
  classId: string;
  subjectId: string;
  chapterTitle: string;
};

export default function ChapterBreadcrumb({
  classId,
  subjectId,
  chapterTitle,
}: Props) {
  return (
    <nav className="mb-6 text-sm text-primary/60">
      <div className="flex flex-wrap gap-2">
        <Link href="/ncert">NCERT</Link>
        <span>/</span>

        <Link href={`/ncert/${classId}`}>Class {classId}</Link>

        <span>/</span>

        <Link href={`/ncert/${classId}/${subjectId}`}>Subject</Link>

        <span>/</span>

        <span className="font-medium text-primary">{chapterTitle}</span>
      </div>
    </nav>
  );
}
