'use client';

import { useEffect, useState, useCallback } from 'react';
import { List, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: 1 | 2 | 3 | 4;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

const generateId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

function parseHeadings(content: string): TocItem[] {
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 1 | 2 | 3 | 4;
    const text = match[2].trim();
    items.push({ id: generateId(text), text, level });
  }

  return items;
}

export default function TableOfContents({
  content,
  className,
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setHeadings(parseHeadings(content));
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    const elements = document.querySelectorAll('h1, h2, h3, h4');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [content]);

  const handleClick = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${id}`);
      }
      setMobileOpen(false);
    },
    []
  );

  if (headings.length === 0) return null;

  const tocContent = (
    <nav className="space-y-1">
      {headings.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => handleClick(item.id)}
          className={cn(
            'block w-full text-left text-sm transition-colors py-1.5 border-l-2',
            activeId === item.id
              ? 'text-primary font-semibold border-l-primary'
              : 'text-muted-foreground hover:text-foreground border-l-transparent hover:border-l-muted-foreground/30',
            item.level === 1 && 'pl-0',
            item.level === 2 && 'pl-4',
            item.level === 3 && 'pl-8',
            item.level === 4 && 'pl-12'
          )}
        >
          {item.text}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          'hidden lg:block w-56 lg:w-60 xl:w-64 shrink-0',
          className
        )}
      >
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="mb-4 pb-3 border-b border-border">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              On this page
            </h3>
          </div>
          {tocContent}
        </div>
      </aside>

      {/* Mobile floating button */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg"
        >
          <List className="h-4 w-4" />
          Contents
        </button>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex items-end lg:hidden">
            <div
              className="fixed inset-0 bg-black/30"
              onClick={() => setMobileOpen(false)}
            />
            <div className="relative w-full max-h-[60vh] overflow-y-auto rounded-t-xl bg-card border border-border p-5 animate-in slide-in-from-bottom">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  On this page
                </h3>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              {tocContent}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
