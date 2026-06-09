'use client';

import ChapterContent, {
  type ChapterContentData,
} from '@/components/ChapterContent';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { ChapterPageSkeleton } from '@/components/Skeletons';
import authFetch from '@/lib/auth/authFetch';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface ChapterProps extends ChapterContentData {
  id: string;
  subjectId: string;
}

export default function NcertChapterPage() {
  const params = useParams<{
    class: string;
    subject: string;
    chapter: string;
  }>();

  const [chapter, setChapter] = useState<ChapterProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
        setError(
          typeof res.message === 'string'
            ? res.message
            : 'The chapter API did not return content for this request.'
        );
        return;
      }

      setChapter(res.message);
    } catch {
      setChapter(null);
      setError('Unable to load this chapter. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [params.chapter]);

  useEffect(() => {
    getChapter();
  }, [getChapter]);

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
