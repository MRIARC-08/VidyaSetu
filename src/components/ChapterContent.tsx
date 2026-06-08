'use client';

import clsx from 'clsx';
import { FileText, NotebookText, TriangleAlert } from 'lucide-react';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import BookmarkButton from '@/components/BookmarkButton';

export type ChapterContentData = {
  id?: string;
  title: string;
  order: number;
  content?: string | null;
  contentFormat?: string | null;
  contentSource?: string | null;
  pdf?: string | null;
};

type ChapterContentProps = {
  chapter: ChapterContentData | null;
  error?: string | null;
  className?: string;
};

export default function ChapterContent({
  chapter,
  error,
  className,
}: ChapterContentProps) {
  if (error) {
    return (
      <section
        className={clsx(
          'min-h-screen bg-background px-5 py-8 md:px-10',
          className
        )}
      >
        <div className="border border-destructive/30 bg-white p-6">
          <TriangleAlert className="mb-4 h-6 w-6 text-destructive" />
          <h1 className="text-2xl font-bold text-primary">
            Chapter content is unavailable
          </h1>
          <p className="mt-3 max-w-2xl text-primary/70">{error}</p>
        </div>
      </section>
    );
  }

  if (!chapter) {
    return (
      <section
        className={clsx(
          'min-h-screen bg-background px-5 py-8 md:px-10',
          className
        )}
      >
        <div className="border border-primary/15 bg-white p-6">
          <TriangleAlert className="mb-4 h-6 w-6 text-primary/60" />
          <h1 className="text-2xl font-bold text-primary">Chapter not found</h1>
          <p className="mt-3 text-primary/70">
            The requested chapter could not be loaded.
          </p>
        </div>
      </section>
    );
  }

  const hasMarkdown = Boolean(chapter.content?.trim());

  return (
    <section
      className={clsx(
        'min-h-screen bg-background px-5 py-8 md:px-10',
        className
      )}
    >
      <header className="mb-8 border-b border-primary/20 pb-6">
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase text-primary/60">
          <span>Chapter {chapter.order}</span>
          {chapter.contentFormat && <span>{chapter.contentFormat}</span>}
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h1 className="text-3xl font-extrabold leading-tight text-primary md:text-5xl">
            {chapter.title}
          </h1>
          {chapter.id && (
            <BookmarkButton chapterId={chapter.id} className="mt-1" />
          )}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {chapter.contentSource && (
            <span className="inline-flex items-center gap-2 bg-white px-3 py-2 text-sm font-medium text-primary/70">
              <NotebookText className="h-4 w-4" />
              Learner notes
            </span>
          )}
          {chapter.pdf && (
            <a
              className="inline-flex items-center gap-2 bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/80"
              href={chapter.pdf}
              rel="noreferrer"
              target="_blank"
            >
              <FileText className="h-4 w-4" />
              NCERT PDF
            </a>
          )}
        </div>
      </header>

      {hasMarkdown ? (
        <MarkdownRenderer content={chapter.content ?? ''} />
      ) : chapter.pdf ? (
        <div className="border border-primary/15 bg-white p-6">
          <NotebookText className="mb-4 h-6 w-6 text-primary/60" />
          <h2 className="text-2xl font-bold text-primary">
            Notes are being prepared
          </h2>
          <p className="mt-3 max-w-2xl text-primary/70">
            This chapter is available in the NCERT PDF, but learner-facing
            markdown has not been seeded yet.
          </p>
        </div>
      ) : (
        <div className="border border-primary/15 bg-white p-6">
          <NotebookText className="mb-4 h-6 w-6 text-primary/60" />
          <h2 className="text-2xl font-bold text-primary">
            Content not yet available
          </h2>
          <p className="mt-3 max-w-2xl text-primary/70">
            Content for this chapter has not been added yet. Please check back
            later.
          </p>
        </div>
      )}
    </section>
  );
}
