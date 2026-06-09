'use client';
import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;

  earnedAt?: string;
  level?: 'bronze' | 'silver' | 'gold';
}

const levelConfig = {
  bronze: { label: 'BRONZE', Icon: Award },
  silver: { label: 'SILVER', Icon: Star },
  gold: { label: 'GOLD', Icon: Trophy },
};

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  earnedAt,
  level = 'bronze',
}) => {
  const { label, Icon } = levelConfig[level];

  return (
    <div className="inline-flex flex-col items-center p-4 border border-black bg-white max-w-[200px] text-center">
      <div className="w-16 h-16 border border-black flex items-center justify-center mb-3">
        <Icon className="w-8 h-8 text-black" strokeWidth={1.5} />
      </div>
      <h3 className="text-sm font-semibold text-black mb-1 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-xs text-gray-500 mb-2">{description}</p>
      {earnedAt && (
        <span className="text-xs text-gray-400">Earned: {earnedAt}</span>
      )}
      <span className="mt-2 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest border border-black text-black">
        {label}
      </span>
    </div>
  );
};

export default AchievementBadge;
