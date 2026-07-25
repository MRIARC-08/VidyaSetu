'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface ProgressChartProps extends React.ComponentProps<'div'> {
  title: string;
  description?: string;
  data: DataPoint[];
  type?: 'bar' | 'line';
  height?: number;
}

function ProgressChart({
  title,
  description,
  data,
  type = 'bar',
  height = 200,
  className,
  ...props
}: ProgressChartProps) {
  if (!data.length) {
    return (
      <div className={cn('flex flex-col gap-2', className)} {...props}>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        <div
          className="flex items-center justify-center rounded-xl bg-muted/50 text-sm text-muted-foreground"
          style={{ height }}
        >
          No data available yet
        </div>
      </div>
    );
  }

  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}

      {type === 'bar' ? (
        <div className="flex items-end gap-2" style={{ height }}>
          {data.map((point, i) => {
            const barHeight = (point.value / maxValue) * 100;
            return (
              <div
                key={i}
                className="flex flex-1 flex-col items-center gap-1 h-full justify-end"
              >
                <span className="text-[10px] font-medium text-muted-foreground">
                  {point.value}
                </span>
                <div
                  className="w-full rounded-t transition-all duration-500"
                  style={{
                    height: `${barHeight}%`,
                    backgroundColor: point.color || 'var(--primary)',
                    minHeight: barHeight > 0 ? 4 : 0,
                  }}
                />
                <span className="text-[10px] text-muted-foreground truncate w-full text-center">
                  {point.label}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <svg
          viewBox={`0 0 ${data.length * 60} ${height}`}
          className="w-full"
          style={{ height }}
          role="img"
          aria-label={title}
        >
          <polyline
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={data
              .map(
                (point, i) =>
                  `${i * 60 + 30},${height - (point.value / maxValue) * (height - 40) - 20}`
              )
              .join(' ')}
          />
          {data.map((point, i) => {
            const cx = i * 60 + 30;
            const cy = height - (point.value / maxValue) * (height - 40) - 20;
            return (
              <g key={i}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="var(--primary)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <text
                  x={cx}
                  y={height - 5}
                  textAnchor="middle"
                  className="text-[10px] fill-muted-foreground"
                  fontSize="10"
                >
                  {point.label}
                </text>
                <text
                  x={cx}
                  y={cy - 8}
                  textAnchor="middle"
                  className="text-[10px] fill-foreground"
                  fontSize="10"
                >
                  {point.value}
                </text>
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}

export { ProgressChart };
export type { DataPoint };
