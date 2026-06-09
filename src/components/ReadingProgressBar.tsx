'use client';

import { useEffect, useState } from 'react';

interface ReadingProgressBarProps {
  chapterSlug: string;
  isLoading?: boolean;
}

export default function ReadingProgressBar({ chapterSlug, isLoading = false }: ReadingProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storageKey = `reading-progress-${chapterSlug}`;
    
    // Restore scroll position ONLY when content has finished loading
    if (!isLoading) {
      const savedScroll = localStorage.getItem(storageKey);
      if (savedScroll !== null) {
        setTimeout(() => {
          window.scrollTo({ top: Number(savedScroll), behavior: 'smooth' });
        }, 100);
      }
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        const currentProgress = (scrollTop / docHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      } else {
        setProgress(0);
      }
    };

    // Save scroll position persistently
    const saveScroll = () => {
      if (!isLoading) {
        localStorage.setItem(storageKey, window.scrollY.toString());
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', saveScroll);
    handleScroll();

    return () => {
      saveScroll();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', saveScroll);
    };
  }, [chapterSlug, isLoading]);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100]">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
