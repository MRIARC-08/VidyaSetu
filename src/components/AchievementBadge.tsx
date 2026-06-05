'use client';
import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon?: string;
  earnedAt?: string;
  level?: 'bronze' | 'silver' | 'gold';
}

const levelConfig = {
  bronze: {
    bg: 'bg-amber-700',
    text: 'text-white',
    border: 'border-amber-700',
    label: 'text-amber-700',
  },
  silver: {
    bg: 'bg-gray-400',
    text: 'text-white',
    border: 'border-gray-400',
    label: 'text-gray-500',
  },
  gold: {
    bg: 'bg-yellow-400',
    text: 'text-black',
    border: 'border-yellow-400',
    label: 'text-yellow-500',
  },
};

const LevelIcon = ({ level }: { level: 'bronze' | 'silver' | 'gold' }) => {
  if (level === 'gold') return <Trophy className="w-8 h-8" />;
  if (level === 'silver') return <Star className="w-8 h-8" />;
  return <Award className="w-8 h-8" />;
};

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  earnedAt,
  level = 'bronze',
}) => {
  const config = levelConfig[level];

  return (
    <div
      className={`inline-flex flex-col items-center p-4 rounded-xl border-2 ${config.border} bg-white max-w-[200px] text-center shadow-sm`}
    >
      <div
        className={`w-16 h-16 rounded-full ${config.bg} ${config.text} flex items-center justify-center mb-3`}
      >
        <LevelIcon level={level} />
      </div>
      <h3 className="text-sm font-semibold text-black mb-1">{title}</h3>
      <p className="text-xs text-gray-500 mb-2">{description}</p>
      {earnedAt && (
        <span className="text-xs text-gray-400">Earned: {earnedAt}</span>
      )}
      <span
        className={`mt-2 px-3 py-0.5 rounded-full text-xs font-semibold uppercase ${config.bg} ${config.text}`}
      >
        {level}
      </span>
    </div>
  );
};

export default AchievementBadge;
