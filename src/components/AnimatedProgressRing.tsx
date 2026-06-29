'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedProgressRingProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  label?: string;
  sublabel?: string;
  color?: string;
  bgColor?: string;
  animate?: boolean;
}

function AnimatedProgressRing({
  value,
  size = 120,
  strokeWidth = 8,
  className,
  label,
  sublabel,
  color = 'var(--primary)',
  bgColor = 'var(--muted)',
  animate = true,
}: AnimatedProgressRingProps) {
  const [progress, setProgress] = React.useState(animate ? 0 : value);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  React.useEffect(() => {
    if (!animate) return;

    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value, animate]);

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="-rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold tabular-nums">{Math.round(progress)}%</span>
        </div>
      </div>
      {label && (
        <div className="text-center">
          <p className="text-sm font-medium">{label}</p>
          {sublabel && <p className="text-xs text-muted-foreground">{sublabel}</p>}
        </div>
      )}
    </div>
  );
}

export { AnimatedProgressRing };
