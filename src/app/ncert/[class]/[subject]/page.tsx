'use client';

import authFetch from '@/lib/auth/authFetch';
import { get } from 'http';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubjectPageSkeleton } from '@/components/Skeletons';

interface ChapterType {
  id: string;
  order: number;
  pdf: string;
  subjectId: string;
  title: string;
}

export default function NcertSubjectPage() {
  const params = useParams<{
    class: string;
    subject: string;
  }>();
  const [chapter, setChapters] = useState<ChapterType[]>([]);
  const [subject, setSubject] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getChapters = async () => {
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
  };

  useEffect(() => {
    getChapters();
  }, []);

  if (isLoading) {
    return <SubjectPageSkeleton />;
  }

  console.log(chapter, subject);
  return (
    <main className="p-8 flex flex-col gap-16 bg-background min-h-screen">
      <div>
        <p className="text-2xl font-bold ">{subject} Curriculum</p>
        <p className="text-[14px] text-primary/60 max-w-[30%]">
          A systematic breakdown of the {subject} syllabus for the competitive
          session.
        </p>
      </div>

      <div className="border-t border-t-primary/40">
        {chapter &&
          chapter.map((val) => {
            const p = val.order % 2;
            return (
              <a
                key={val.id}
                href={`/ncert/${params.class}/${params.subject}/${val.id}`}
                className={`${p == 0 ? 'bg-accent/40 hover:bg-accent/20' : 'bg-accent/10 hover:bg-accent/8'} flex items-center gap-8  p-8  border-b border-primary/40 cursor-pointer transition-all duration-300 `}
              >
                <p className="text-4xl font-extrabold text-primary/40 ">
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
