'use client';

import ChapterContent, { type ChapterContentData } from '@/components/ChapterContent';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { ChapterPageSkeleton } from '@/components/Skeletons';
import { saveReadingProgress } from '@/components/ResumeCard';
import authFetch from '@/lib/auth/authFetch';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState, useRef } from 'react';

interface ChapterProps extends ChapterContentData {
  id: string;
  subjectId: string;
}

export default function NcertChapterPage() {
  const params = useParams<{ class: string; subject: string; chapter: string }>();
  const [chapter, setChapter] = useState<ChapterProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const scrollProgress = useRef(0);

  const getChapter = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = `/api/ncert/chapter?chapter=${params.chapter}`;

      const res = await authFetch({
        url,
        options: {
          method: 'GET',
        },
      });

      if (res.status !== 200 || !res.message) {
        setChapter(null);
        setError(typeof res.message === 'string' ? res.message : 'The chapter API did not return content for this request.');
        return;
      }
      const chapterData = res.message as ChapterProps;
      setChapter(chapterData);

      saveReadingProgress({
        chapterName: chapterData.title,
        chapterUrl: `/ncert/${params.class}/${params.subject}/${params.chapter}`,
        className: params.class,
        progressPercent: 0,
      });
    } catch {
      setChapter(null);
      setError('Unable to load this chapter. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [params.chapter, params.class, params.subject]);

  useEffect(() => {
    getChapter();
  }, [getChapter]);

  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight <= 0) return;

      const pct = Math.round((scrollTop / scrollHeight) * 100);
      const clamped = Math.min(100, Math.max(0, pct));

      if (clamped > scrollProgress.current || clamped === 100) {
        scrollProgress.current = clamped;
        saveReadingProgress({
          chapterName: chapter?.title || '',
          chapterUrl: `/ncert/${params.class}/${params.subject}/${params.chapter}`,
          className: params.class,
          progressPercent: clamped,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, chapter, params.class, params.subject, params.chapter]);

  return (
    <>
      <ReadingProgressBar chapterSlug={params.chapter} isLoading={isLoading} />
      {isLoading ? (
        <ChapterPageSkeleton />
      ) : (
        <ChapterContent chapter={chapter} error={error} />
      )}
    </>
  );
}