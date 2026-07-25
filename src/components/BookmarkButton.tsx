'use client';

import { useEffect, useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import authFetch from '@/lib/auth/authFetch';

interface BookmarkData {
  id: string;
  userId: string;
  chapterId: string;
  createdAt: string;
}

// Shared state for all BookmarkButton instances on the same page
let cachedBookmarks: BookmarkData[] | null = null;
let fetchPromise: Promise<BookmarkData[]> | null = null;
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const notifyAll = () => {
  listeners.forEach((listener) => listener());
};

const getBookmarks = async () => {
  if (cachedBookmarks) return cachedBookmarks;
  if (!fetchPromise) {
    fetchPromise = authFetch({
      url: '/api/bookmarks',
      options: { method: 'GET' },
    })
      .then((res) => {
        cachedBookmarks = res.data || [];
        return cachedBookmarks!;
      })
      .catch(() => {
        fetchPromise = null;
        return [];
      });
  }
  return fetchPromise;
};

interface BookmarkButtonProps {
  chapterId: string;
  className?: string;
}

export default function BookmarkButton({
  chapterId,
  className,
}: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkId, setBookmarkId] = useState<string | null>(null);
  const [isMutating, setIsMutating] = useState(false);

  useEffect(() => {
    let active = true;

    const syncState = () => {
      if (!cachedBookmarks) return;
      const found = cachedBookmarks.find((b) => b.chapterId === chapterId);
      if (active) {
        setIsBookmarked(!!found);
        setBookmarkId(found ? found.id : null);
      }
    };

    // Load initial bookmarks
    getBookmarks().then(() => {
      syncState();
    });

    // Subscribe to updates when other buttons toggle bookmarks
    const unsubscribe = subscribe(syncState);

    return () => {
      active = false;
      unsubscribe();
    };
  }, [chapterId]);

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevents page navigation if the button is inside an <a> or <Link> card

    if (isMutating) return;
    setIsMutating(true);

    try {
      if (isBookmarked && bookmarkId) {
        // DELETE Bookmark
        const res = await authFetch({
          url: `/api/bookmarks/${bookmarkId}`,
          options: { method: 'DELETE' },
        });

        if (res.success) {
          cachedBookmarks = (cachedBookmarks || []).filter(
            (b) => b.id !== bookmarkId
          );
          notifyAll();
        }
      } else {
        // POST Bookmark
        const res = await authFetch({
          url: '/api/bookmarks',
          options: {
            method: 'POST',
            body: JSON.stringify({ chapterId }),
          },
        });

        if (res.success && res.data) {
          cachedBookmarks = [...(cachedBookmarks || []), res.data];
          notifyAll();
        }
      }
    } catch (error) {
      console.error('Failed to toggle bookmark:', error);
    } finally {
      setIsMutating(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isMutating}
      className={`p-2 rounded-full hover:bg-black/5 transition duration-200 cursor-pointer disabled:opacity-50 ${className}`}
      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Chapter'}
    >
      {isBookmarked ? (
        <BookmarkCheck className="h-6 w-6 text-yellow-500 fill-yellow-500" />
      ) : (
        <Bookmark className="h-6 w-6 text-gray-400 hover:text-yellow-500" />
      )}
    </button>
  );
}
