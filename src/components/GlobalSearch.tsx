'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type SearchTopic = {
  id: string;
  title: string;
};

type SearchResult = {
  class: number;
  subject: string;
  chapterId: string;
  chapter: string;
  topics: SearchTopic[];
};

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const flattenedResults = useMemo(
    () =>
      results.map((result) => ({
        ...result,
        href: `/ncert/${result.class}`,
      })),
    [results]
  );

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const isSearchShortcut =
        (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';

      if (isSearchShortcut) {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleShortcut);

    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery('');
      setResults([]);
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (trimmedQuery.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const timeout = window.setTimeout(async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `/api/ncert/search?q=${encodeURIComponent(trimmedQuery)}`,
          {
            signal: controller.signal,
          }
        );

        const data = await response.json();

        setResults(Array.isArray(data.message) ? data.message : []);
        setActiveIndex(0);
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [query]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!flattenedResults.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((current) =>
        current + 1 >= flattenedResults.length ? 0 : current + 1
      );
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) =>
        current - 1 < 0 ? flattenedResults.length - 1 : current - 1
      );
    }

    if (event.key === 'Enter') {
      const activeResult = flattenedResults[activeIndex];

      if (activeResult) {
        window.location.href = activeResult.href;
      }
    }
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 rounded-full border border-black/10 bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-lg transition hover:bg-accent"
        aria-label="Open global search"
      >
        Search <span className="text-muted-foreground">Ctrl K</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 px-4 py-20 backdrop-blur-sm">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
          <div>
            <h2 className="text-lg font-bold">Search NCERT Content</h2>
            <p className="text-sm text-muted-foreground">
              Search chapters, topics, and study content
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-border px-3 py-1 text-sm transition hover:bg-muted"
          >
            Esc
          </button>
        </div>

        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search concepts like light, force, democracy..."
          className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
        />

        <div className="mt-4 max-h-[420px] overflow-y-auto">
          {loading ? (
            <p className="p-4 text-sm text-muted-foreground">Searching...</p>
          ) : flattenedResults.length ? (
            <div className="space-y-2">
              {flattenedResults.map((result, index) => (
                <Link
                  key={result.chapterId}
                  href={result.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl border p-4 transition ${
                    index === activeIndex
                      ? 'border-primary bg-muted'
                      : 'border-border hover:bg-muted'
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Class {result.class} → {result.subject}
                  </p>
                  <h3 className="mt-1 font-bold">{result.chapter}</h3>
                  {result.topics.length > 0 && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Topics:{' '}
                      {result.topics.map((topic) => topic.title).join(', ')}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          ) : query.trim().length >= 2 ? (
            <p className="p-4 text-sm text-muted-foreground">
              No results found.
            </p>
          ) : (
            <p className="p-4 text-sm text-muted-foreground">
              Type at least 2 characters to search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
