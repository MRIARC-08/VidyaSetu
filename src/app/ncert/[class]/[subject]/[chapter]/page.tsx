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
  const [chapters, setChapters] = useState<ChapterProps[]>([]);
  const [subjectName, setSubjectName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const chapterUrl = `/api/ncert/chapter?chapter=${params.chapter}`;
      const chaptersUrl = `/api/ncert/chapters?class=${params.class}&subject=${params.subject}`;

      const [chapterRes, chaptersRes] = await Promise.all([
        authFetch({ url: chapterUrl, options: { method: 'GET' } }),
        authFetch({ url: chaptersUrl, options: { method: 'GET' } })
      ]);

      if (chapterRes.status !== 200 || !chapterRes.message) {
        setChapter(null);
        setError(
          typeof chapterRes.message === 'string'
            ? chapterRes.message
            : 'The chapter API did not return content for this request.'
        );
        return;
      }

      if (chaptersRes.status === 200 && chaptersRes.message) {
        setSubjectName(chaptersRes.message.name);
        setChapters(chaptersRes.message.chapters);
      }

      setChapter(chapterRes.message);
    } catch {
      setChapter(null);
      setError('Unable to load this chapter. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [params.chapter, params.class, params.subject]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ReadingProgressBar chapterSlug={params.chapter} isLoading={isLoading} />
      {isLoading ? (
        <ChapterPageSkeleton />
      ) : (
        <ChapterContent
          chapter={chapter}
          chapters={chapters}
          subjectName={subjectName}
          className="lg:flex lg:gap-8"
          error={error}
        />
      )}
    </>
  );
}
