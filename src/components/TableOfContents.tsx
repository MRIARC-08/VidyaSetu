'use client';

import clsx from 'clsx';
import { collectMarkdownHeadings } from './markdown-headings';

type TableOfContentsProps = {
  content: string;
};

export default function TableOfContents({ content }: TableOfContentsProps) {
  const headings = collectMarkdownHeadings(content);

  if (!headings.length) {
    return null;
  }

  return (
    <nav className="mb-8 border-l-4 border-primary/15 bg-white/70 px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/50">
        On this page
      </p>
      <ul className="mt-4 space-y-2">
        {headings.map((heading) => (
          <li
            className={clsx(
              'text-sm leading-6 text-primary/70',
              heading.level === 2 && 'pl-4',
              heading.level === 3 && 'pl-8'
            )}
            key={heading.id}
          >
            <a
              className="inline-flex items-center gap-2 hover:text-primary hover:underline"
              href={`#${heading.id}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
