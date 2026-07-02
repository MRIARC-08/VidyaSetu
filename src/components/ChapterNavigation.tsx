'use client';

import Link from 'next/link';

type Props = {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
};

export default function ChapterNavigation({ previous, next }: Props) {
  if (!previous && !next) return null;

  return (
    <div className="mt-10 flex justify-between gap-4">
      <div>
        {previous && (
          <Link
            href={previous.href}
            className="inline-flex items-center border px-4 py-2"
          >
            &larr; {previous.title}
          </Link>
        )}
      </div>

      <div>
        {next && (
          <Link
            href={next.href}
            className="inline-flex items-center border px-4 py-2"
          >
            {next.title} &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}
