'use client';

import { useEffect, useState } from 'react';
import { buildHeadingIds } from '@/lib/slugger';

type TocItem = {
  id: string;
  text: string;
  level: number;
};

type Props = {
  content: string;
};

export default function ChapterTOC({ content }: Props) {
  const [activeId, setActiveId] = useState('');
  const headings = buildHeadingIds(content) as TocItem[];
  useEffect(() => {
    const headingElements = document.querySelectorAll('h1[id], h2[id], h3[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-120px 0px -70% 0px',
      }
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [content]);

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
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
