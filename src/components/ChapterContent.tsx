import clsx from 'clsx';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  List,
  NotebookText,
  TriangleAlert,
} from 'lucide-react';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Link from 'next/link';

export type ChapterContentData = {
  title: string;
  order: number;
  content?: string | null;
  contentFormat?: string | null;
  contentSource?: string | null;
  pdf?: string | null;
  id?: string;
  subjectId?: string;
};

type ChapterContentProps = {
  chapter: ChapterContentData | null;
  chapters?: ChapterContentData[];
  subjectName?: string;
  error?: string | null;
  className?: string;
};

export default function ChapterContent({
  chapter,
  chapters = [],
  subjectName,
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
  const wordsPerMinute = 200;
  const wordCount = chapter.content?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  const getTOC = (markdown: string) => {
    const headings = markdown.match(/^(#{1,3})\s+(.+)$/gm) || [];
    return headings.map((heading) => {
      const match = heading.match(/^(#{1,3})\s+(.+)$/);
      return {
        level: match ? match[1].length : 1,
        text: match ? match[2] : '',
        id: match ? match[2].toLowerCase().replace(/[^\w]+/g, '-') : '',
      };
    });
  };

  const toc = hasMarkdown ? getTOC(chapter.content ?? '') : [];

  const currentIndex = chapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex !== -1 && currentIndex < chapters.length - 1
      ? chapters[currentIndex + 1]
      : null;

  return (
    <section className={clsx('min-h-screen bg-background', className)}>
      <div className="sticky top-0 z-10 border-b border-primary/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-2 px-5 py-4 text-sm font-medium text-primary/60 md:px-10">
          <Link href="/dashboard" className="hover:text-primary transition">
            Class
          </Link>
          <ChevronRight className="h-4 w-4" />
          {subjectName ? (
            <>
              <Link href="#" className="hover:text-primary transition">
                {subjectName}
              </Link>
              <ChevronRight className="h-4 w-4" />
            </>
          ) : null}
          <span className="truncate text-primary">Chapter {chapter.order}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 md:px-10 lg:flex-row">
        <main className="w-full lg:w-3/4">
          <header className="mb-8 border-b border-primary/20 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase text-primary/60">
              <span>Chapter {chapter.order}</span>
              {chapter.contentFormat && <span>{chapter.contentFormat}</span>}
              {hasMarkdown && (
                <span className="flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-primary/40" />
                  {readingTime} min read
                </span>
              )}
            </div>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-primary md:text-5xl">
              {chapter.title}
            </h1>
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
                Content for this chapter has not been added yet. Please check
                back later.
              </p>
            </div>
          )}

          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-primary/10 pt-8">
            {prevChapter ? (
              <Link
                href={`./${prevChapter.id}`}
                className="group flex flex-1 flex-col items-start gap-1 rounded-xl border border-primary/10 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <span className="flex items-center gap-1 text-sm font-medium text-primary/60">
                  <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Previous Chapter
                </span>
                <span className="line-clamp-1 font-semibold text-primary">
                  {prevChapter.order}. {prevChapter.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            
            {nextChapter ? (
              <Link
                href={`./${nextChapter.id}`}
                className="group flex flex-1 flex-col items-end gap-1 rounded-xl border border-primary/10 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-sm sm:text-right"
              >
                <span className="flex items-center gap-1 text-sm font-medium text-primary/60">
                  Next Chapter
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="line-clamp-1 font-semibold text-primary">
                  {nextChapter.order}. {nextChapter.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </main>

        <aside className="w-full lg:w-1/4">
          <div className="sticky top-24 flex flex-col gap-6">
            {toc.length > 0 && (
              <div className="rounded-xl border border-primary/10 bg-white p-5">
                <div className="mb-4 flex items-center gap-2 font-semibold text-primary">
                  <List className="h-5 w-5" />
                  <h3>Table of Contents</h3>
                </div>
                <nav className="flex flex-col gap-2">
                  {toc.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={clsx(
                        'text-sm text-primary/70 transition-colors hover:text-primary',
                        item.level === 1 && 'font-medium',
                        item.level === 2 && 'ml-3',
                        item.level === 3 && 'ml-6'
                      )}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div className="rounded-xl border border-primary/10 bg-white p-5">
              <h3 className="mb-4 font-semibold text-primary">Actions</h3>
              <div className="flex flex-col gap-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                  <BookOpen className="h-4 w-4" />
                  Take Chapter Quiz
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary/20 bg-background py-2.5 text-sm font-semibold text-primary transition-all hover:bg-accent/10">
                  <NotebookText className="h-4 w-4" />
                  My Notes
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
