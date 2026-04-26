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

export default function NcertChapterPage() {
  const params = useParams<{
    class: string;
    subject: string;
    chapter: string;
  }>();

  const [chapter, setChapter] = useState<CHapterProps>();
  const [isLoading, setIsLoading] = useState(true);

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

  const src = `https://docs.google.com/viewer?url=${encodeURIComponent(chapter?.pdf!)}&embedded=true`;

  console.log(chapter)
  return (
    <main className='flex '>
      <div className='flex-1'>
        <iframe
        src={src}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="PDF Viewer"
        allow="fullscreen"
        className=''
        />

      </div>
      <div className='flex-1'>

      </div>
    </main>
  );
}


