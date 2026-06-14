'use client';

import ChapterContent, { type ChapterContentData } from '@/components/ChapterContent';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { ChapterPageSkeleton } from '@/components/Skeletons';
import { saveReadingProgress, getReadingProgress } from '@/components/ResumeCard';
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
    // FIX 1: Reset scrollProgress ref on every chapter navigation
    // so previous chapter's progress threshold doesn't carry over
    scrollProgress.current = 0;

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

      // FIX 2: Don't overwrite existing progress with 0.
      // Check if we already have saved progress for this chapter URL.
      // Only save if there's no existing entry, or preserve the existing progressPercent.
      const chapterUrl = `/ncert/${params.class}/${params.subject}/${params.chapter}`;
      const existing = getReadingProgress();
      const existingPercent =
        existing?.chapterUrl === chapterUrl ? existing.progressPercent : 0;

      saveReadingProgress({
        chapterName: chapterData.title,
        chapterUrl,
        className: params.class,
        progressPercent: existingPercent,
      });

      // Also sync the in-memory ref so the scroll handler doesn't
      // save a lower value over the restored one
      scrollProgress.current = existingPercent;

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
