'use client';
import React from 'react';
import Image from 'next/image';
import { Medal, User } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar?: string;
  score: number;
  achievements: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  title?: string;
}

const rankLabel = (rank: number) => {
  if (rank === 1) return '1ST';
  if (rank === 2) return '2ND';
  if (rank === 3) return '3RD';
  return `#${rank}`;
};

const Leaderboard: React.FC<LeaderboardProps> = ({
  entries,
  title = 'Leaderboard',
}) => {
  return (
    <div className="w-full max-w-lg bg-white border border-black p-5">
      <div className="flex items-center justify-center gap-2 mb-4 border-b border-black pb-3">
        <Medal className="w-4 h-4 text-black" strokeWidth={1.5} />
        <h2 className="text-sm font-bold text-black uppercase tracking-widest">
          {title}
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center gap-3 px-4 py-3 border ${
              entry.rank <= 3
                ? 'border-black bg-black text-white'
                : 'border-gray-200 bg-white text-black'
            }`}
          >
            {/* Rank */}
            <span className="text-xs font-bold min-w-[40px] text-center uppercase tracking-widest">
              {rankLabel(entry.rank)}
            </span>

            {/* Avatar */}
            <div className="w-8 h-8 flex items-center justify-center overflow-hidden flex-shrink-0 border border-current">
              {entry.avatar ? (
                <Image
                  src={entry.avatar}
                  alt={entry.name}
                  width={32}
                  height={32}
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <User className="w-4 h-4" strokeWidth={1.5} />
              )}
            </div>

            {/* Name */}
            <span className="flex-1 text-xs font-medium uppercase tracking-wide">
              {entry.name}
            </span>

            {/* Stats */}
            <div className="text-right">
              <div className="text-xs font-bold">{entry.score} PTS</div>
              <div className="text-xs opacity-60">
                {entry.achievements} badges
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
