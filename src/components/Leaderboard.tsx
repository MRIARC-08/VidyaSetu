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
  if (rank === 1) return '1st';
  if (rank === 2) return '2nd';
  if (rank === 3) return '3rd';
  return `#${rank}`;
};

const Leaderboard: React.FC<LeaderboardProps> = ({
  entries,
  title = 'Leaderboard',
}) => {
  return (
    <div className="w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Medal className="w-5 h-5 text-black" />
        <h2 className="text-xl font-bold text-black uppercase tracking-wide">
          {title}
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${
              entry.rank <= 3
                ? 'border-black bg-gray-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            {/* Rank */}
            <span className="text-sm font-bold text-black min-w-[40px] text-center">
              {rankLabel(entry.rank)}
            </span>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 border border-gray-200">
              {entry.avatar ? (
                <Image
                  src={entry.avatar}
                  alt={entry.name}
                  width={36}
                  height={36}
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <User className="w-4 h-4 text-gray-400" />
              )}
            </div>

            {/* Name */}
            <span className="flex-1 text-sm font-medium text-black">
              {entry.name}
            </span>

            {/* Stats */}
            <div className="text-right">
              <div className="text-sm font-bold text-black">
                {entry.score} pts
              </div>
              <div className="text-xs text-gray-400">
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
