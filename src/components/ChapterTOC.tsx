'use client';

import { useEffect, useState } from 'react';

type TocItem = {
  id: string;
  text: string;
  level: number;
};

type Props = {
  content: string;
};

const createHeadingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export default function ChapterTOC({ content }: Props) {
  const [activeId, setActiveId] = useState('');

  if (!content) return null;

  const headings: TocItem[] = content
    .split('\n')
    .map((line) => {
      const match = line.trim().match(/^(#{1,3})\s+(.+)$/);

      if (!match) return null;

      return {
        level: match[1].length,
        text: match[2].trim(),
        id: createHeadingId(match[2]),
      };
    })
    .filter((item): item is TocItem => item !== null);
  useEffect(() => {
    const headingElements =
      document.querySelectorAll(
        'h1[id], h2[id], h3[id]'
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(
                entry.target.id
              );
            }
          });
        },
        {
          rootMargin:
            '-120px 0px -70% 0px',
        }
      );

    headingElements.forEach(
      (element) =>
        observer.observe(element)
    );

    return () =>
      observer.disconnect();
  }, []);

  if (!headings.length) return null;

  return (
    <aside className="sticky top-24">
      <h3 className="font-bold mb-4">Table of Contents</h3>

      <ul className="space-y-2">
        {headings.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className={
              item.level === 2 ? 'ml-4' : item.level === 3 ? 'ml-8' : ''
            }
          >
            <a
              href={`#${item.id}`}
              className={
                activeId === item.id
                  ? 'font-bold text-blue-600'
                  : 'text-primary/70'
              }
            >{item.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
