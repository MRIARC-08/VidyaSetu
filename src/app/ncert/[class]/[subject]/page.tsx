'use client';

import authFetch from '@/lib/auth/authFetch';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { SubjectPageSkeleton } from '@/components/Skeletons';
import { useKeyboardNav } from '@/hooks/useKeyboardNav';
import { KeyboardHelpOverlay } from '@/components/KeyboardHelpOverlay';

interface ChapterType {
  id: string;
  order: number;
  pdf: string;
  subjectId: string;
  title: string;
}

export default function NcertSubjectPage() {
  const params = useParams<{ class: string; subject: string }>();
  const router = useRouter();
  const [chapters, setChapters] = useState<ChapterType[]>([]);
  const [subject, setSubject] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  const getChapters = useCallback(async () => {
    try {
      const res = await authFetch({
        url: `/api/ncert/chapters?class=${params.class}&subject=${params.subject}`,
        options: { method: 'GET' },
      });
      setSubject(res.message.name);
      setChapters(res.message.chapters);
    } finally {
      setIsLoading(false);
    }
  }, [params.class, params.subject]);

  useEffect(() => {
    getChapters();
  }, [getChapters]);

  const handleBack = useCallback(() => {
    router.push(`/ncert/${params.class}`);
  }, [router, params.class]);

  const { selectedIndex, showHelp, setShowHelp } = useKeyboardNav({
    itemCount: chapters.length,
    onSelect: (index) => {
      const chapter = chapters[index];
      if (chapter) {
        router.push(`/ncert/${params.class}/${params.subject}/${chapter.id}`);
      }
    },
    onBack: handleBack,
  });

  if (isLoading) return <SubjectPageSkeleton />;

  return (
    <main className="p-8 flex flex-col gap-16 bg-background min-h-screen">
      <KeyboardHelpOverlay open={showHelp} onClose={() => setShowHelp(false)} />

      <div>
        <p className="text-2xl font-bold">{subject} Curriculum</p>
        <p className="text-[14px] text-primary/60 max-w-[30%]">
          A systematic breakdown of the {subject} syllabus for the competitive
          session.
        </p>
        <p className="text-[12px] text-primary/40 mt-2">
          Press{' '}
          <kbd className="px-1 py-0.5 bg-gray-100 rounded text-[11px] font-mono">
            ?
          </kbd>{' '}
          for keyboard shortcuts
        </p>
      </div>

      <div className="border-t border-t-primary/40">
        {chapters.map((val, index) => {
          const p = val.order % 2;
          const isSelected = index === selectedIndex;
          return (
            <a
              key={val.id}
              href={`/ncert/${params.class}/${params.subject}/${val.id}`}
              className={`${p === 0 ? 'bg-accent/40 hover:bg-accent/20' : 'bg-accent/10 hover:bg-accent/8'} flex items-center gap-8 p-8 border-b border-primary/40 cursor-pointer transition-all duration-300 ${
                isSelected ? 'ring-2 ring-primary ring-offset-1' : ''
              }`}
            >
              <p className="text-4xl font-extrabold text-primary/40">
                {val.order < 10 ? `0${val.order}` : `${val.order}`}
              </p>
              <p className="text-xl font-semibold">{val.title}</p>
            </a>
          );
        })}
      </div>
    </main>
  );
}
