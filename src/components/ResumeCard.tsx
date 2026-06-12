'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface ReadingProgress {
  chapterName: string;
  chapterUrl: string;
  subjectName?: string;
  className?: string;
  progressPercent: number;
  lastVisited: string;
}

const STORAGE_KEY = 'vidyasetu_last_read';

function getProgress(): ReadingProgress | null {
  if (typeof window === 'undefined') return null;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? (JSON.parse(data) as ReadingProgress) : null;
  } catch {
    return null;
  }
}

export default function ResumeCard() {
  const router = useRouter();
  const [progress, setProgress] = useState<ReadingProgress | null>(null);
  const initialised = useRef(false);

  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;
    const saved = getProgress();
    setProgress(saved);
  }, []);

  if (!progress) return null;

  return (
    <div
      onClick={() => router.push(progress.chapterUrl)}
      className="bg-white p-6 shadow-2xs w-full cursor-pointer hover:shadow-md transition-all duration-300 border-l-4 border-primary"
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[12px] uppercase tracking-wider text-accent font-bold">
              Continue Reading
            </p>
            <p className="font-bold text-lg mt-1">{progress.chapterName}</p>
            {progress.subjectName && (
              <p className="text-[12px] text-secondary/70 mt-0.5">
                {progress.subjectName}{' '}
                {progress.className ? `· Class ${progress.className}` : ''}
              </p>
            )}
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 shrink-0"
          >
            <path
              d="M8 4L14 10L8 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-accent/20 h-2 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-500 rounded-full"
            style={{
              width: `${Math.min(100, Math.max(0, progress.progressPercent))}%`,
            }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-secondary/60 font-medium">
          <span>{progress.progressPercent}% completed</span>
          <span>Last read: {new Date(progress.lastVisited).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export function saveReadingProgress(data: Omit<ReadingProgress, 'lastVisited'>) {
  if (typeof window === 'undefined') return;
  try {
    const payload: ReadingProgress = {
      ...data,
      lastVisited: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // storage full — silently ignore
  }
}
