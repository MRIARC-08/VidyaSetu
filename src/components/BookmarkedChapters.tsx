'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Trash2, Bookmark } from 'lucide-react';
import authFetch from '@/lib/auth/authFetch';

interface BookmarkItem {
  id: string;
  createdAt: string;
  chapter: {
    id: string;
    title: string;
    order: number;
    subject: {
      id: string;
      name: string;
      academicClass: {
        level: number;
      };
    };
  };
}

export default function BookmarkedChapters() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBookmarks = async () => {
    try {
      const res = await authFetch({
        url: '/api/bookmarks',
        options: { method: 'GET' },
      });
      if (res.success && res.data) {
        setBookmarks(res.data);
      }
    } catch (error) {
      console.error('Failed to fetch bookmarks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const handleRemove = async (bookmarkId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const res = await authFetch({
        url: `/api/bookmarks/${bookmarkId}`,
        options: { method: 'DELETE' },
      });

      if (res.success) {
        setBookmarks((prev) => prev.filter((b) => b.id !== bookmarkId));
      }
    } catch (error) {
      console.error('Failed to remove bookmark:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full animate-pulse space-y-4">
        <div className="h-6 w-32 bg-accent/20 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-32 bg-accent/10 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (bookmarks.length === 0) {
    return null; // Don't show anything on the dashboard if there are no bookmarks
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2 border-b border-primary/10 pb-2">
        <Bookmark className="h-4 w-4 text-primary/80" />
        <h2 className="uppercase text-[12px] font-bold text-secondary/80 tracking-wider">
          Saved Chapters
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookmarks.map((item) => {
          const classLevel = item.chapter.subject.academicClass.level;
          const subjectId = item.chapter.subject.id;
          const chapterId = item.chapter.id;
          const href = `/ncert/${classLevel}/${subjectId}/${chapterId}`;

          return (
            <Link
              key={item.id}
              href={href}
              className="group relative flex flex-col justify-between bg-white border border-primary/10 p-5 shadow-xs hover:shadow-md transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex flex-col gap-1.5 pr-8">
                <span className="text-[10px] font-bold text-primary/50 uppercase tracking-wider">
                  Class {classLevel} • {item.chapter.subject.name}
                </span>
                <h3 className="font-bold text-primary line-clamp-2 leading-snug group-hover:text-primary/80 transition-colors">
                  Chapter {item.chapter.order}: {item.chapter.title}
                </h3>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase text-primary/70">
                  <BookOpen className="h-3.5 w-3.5" />
                  Read Chapter
                </span>

                <button
                  onClick={(e) => handleRemove(item.id, e)}
                  className="p-1.5 rounded-full cursor-pointer hover:bg-red-50 text-primary/40 hover:text-red-500 transition-colors duration-200"
                  title="Remove bookmark"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
