'use client';

import authFetch from '@/lib/auth/authFetch';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChapterPageSkeleton } from '@/components/Skeletons';

interface CHapterProps {
  id: string;
  order: number;
  pdf: string;
  subjectId: string;
  title: string;
}

const DEFAULT_CHECKLIST = [
  { id: '1', label: 'Read the chapter thoroughly' },
  { id: '2', label: 'Highlight key concepts and definitions' },
  { id: '3', label: 'Solve all in-text questions' },
  { id: '4', label: 'Review diagrams and illustrations' },
  { id: '5', label: 'Summarize the chapter in your own words' },
  { id: '6', label: 'Attempt practice questions' },
];

export default function NcertChapterPage() {
  const params = useParams<{
    class: string;
    subject: string;
    chapter: string;
  }>();

  const [chapter, setChapter] = useState<CHapterProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [checklist, setChecklist] = useState<{ id: string; label: string; checked: boolean }[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(`checklist-${params.chapter}`);
    if (saved) {
      setChecklist(JSON.parse(saved));
    } else {
      setChecklist(DEFAULT_CHECKLIST.map((item) => ({ ...item, checked: false })));
    }
  }, [params.chapter]);

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      localStorage.setItem(`checklist-${params.chapter}`, JSON.stringify(updated));
      return updated;
    });
  };

  const getChaptr = async () => {
    try {
      const url = `/api/ncert/chapter?chapter=${params.chapter}`;

      const res = await authFetch({
        url,
        options: {
          method: 'GET',
        },
      });

      setChapter(res.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getChaptr();
  }, []);

  if (isLoading) {
    return <ChapterPageSkeleton />;
  }

  const completedCount = checklist.filter((item) => item.checked).length;

  return (
    <main className='flex min-h-screen p-6 gap-6'>
      <div className='flex-1'>
        <h1 className='text-2xl font-bold mb-4'>{chapter?.title || 'Chapter'}</h1>
        {chapter?.pdf && (
          <iframe src={chapter.pdf} className='w-full h-[80vh] border rounded' title='Chapter PDF' />
        )}
      </div>
      <div className='w-80 flex-shrink-0'>
        <div className='sticky top-6 bg-accent/20 rounded-lg p-4 border'>
          <h2 className='text-lg font-semibold mb-3'>Final Revision Checklist</h2>
          <p className='text-sm text-secondary/70 mb-4'>
            {completedCount} / {checklist.length} completed
          </p>
          <div className='w-full bg-secondary/20 rounded-full h-2 mb-4'>
            <div
              className='bg-primary h-full rounded-full transition-all'
              style={{ width: `${(completedCount / checklist.length) * 100}%` }}
            />
          </div>
          <ul className='space-y-3'>
            {checklist.map((item) => (
              <li key={item.id}>
                <label className='flex items-start gap-3 cursor-pointer group'>
                  <input
                    type='checkbox'
                    checked={item.checked}
                    onChange={() => toggleChecklistItem(item.id)}
                    className='mt-0.5 h-4 w-4 rounded border-secondary/40 accent-primary cursor-pointer'
                  />
                  <span
                    className={`text-sm transition-colors ${
                      item.checked ? 'line-through text-secondary/50' : 'text-secondary'
                    }`}
                  >
                    {item.label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}


