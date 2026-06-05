'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { ActivityDay } from '@/modules/analytics/analytics.types';

interface StreakCalendarProps extends React.ComponentProps<'div'> {
  calendar: ActivityDay[];
}

const LEVEL_COLORS: Record<number, string> = {
  0: 'bg-muted',
  1: 'bg-emerald-200',
  2: 'bg-emerald-400',
  3: 'bg-emerald-600',
  4: 'bg-emerald-800',
};

const LEVEL_LABELS: Record<number, string> = {
  0: 'No activity',
  1: '1-2 sessions',
  2: '3-5 sessions',
  3: '6-10 sessions',
  4: '10+ sessions',
};

const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

function buildGrid(calendar: ActivityDay[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const oneYearAgo = new Date(today);
  oneYearAgo.setDate(oneYearAgo.getDate() - 364);

  const activityMap = new Map<string, ActivityDay>();
  for (const day of calendar) {
    activityMap.set(day.date, day);
  }

  const start = new Date(oneYearAgo);
  start.setDate(start.getDate() - start.getDay());

  const end = new Date(today);
  end.setDate(end.getDate() + (6 - end.getDay()));

  const totalDays = Math.round((end.getTime() - start.getTime()) / 86400000) + 1;
  const cols = Math.ceil(totalDays / 7);

  const flat: ActivityDay[] = [];

  for (let i = 0; i < totalDays; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const key = `${y}-${m}-${day}`;
    const existing = activityMap.get(key);
    flat.push(existing ?? { date: key, count: 0, level: 0 });
  }

  const grid: ActivityDay[][] = [];
  for (let c = 0; c < cols; c++) {
    const col: ActivityDay[] = [];
    for (let r = 0; r < 7; r++) {
      const idx = c * 7 + r;
      col.push(flat[idx] ?? { date: '', count: 0, level: 0 });
    }
    grid.push(col);
  }

  const monthLabels: { label: string; index: number }[] = [];
  let lastMonth = -1;

  grid.forEach((col, colIndex) => {
    const firstCell = col[0];
    if (!firstCell || !firstCell.date) return;
    const month = new Date(firstCell.date).getMonth();
    if (month !== lastMonth) {
      monthLabels.push({
        label: new Date(firstCell.date).toLocaleString('default', { month: 'short' }),
        index: colIndex,
      });
      lastMonth = month;
    }
  });

  return { grid, monthLabels, colsWidth: cols * 16 };
}

function StreakCalendar({ calendar, className, ...props }: StreakCalendarProps) {
  const { grid, monthLabels } = React.useMemo(() => buildGrid(calendar), [calendar]);

  const gapPx = 3;
  const cellPx = 13;
  const today = React.useMemo(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }, []);

  return (
    <div className={cn('flex flex-col', className)} {...props}>
      <div className="flex overflow-x-auto">
        <div className="flex flex-col shrink-0">
          <div
            className="h-4 text-[10px] text-muted-foreground"
            style={{ marginLeft: `${26 + gapPx}px` }}
          >
            <div className="flex" style={{ gap: `${gapPx}px` }}>
              {monthLabels.map((m, i) => {
                const offset = m.index * (cellPx + gapPx);
                const prevOffset = i > 0 ? monthLabels[i - 1].index * (cellPx + gapPx) : 0;
                const spacing = offset - prevOffset - (cellPx + gapPx);

                return (
                  <span
                    key={m.index}
                    style={{ marginLeft: i === 0 ? 0 : `${spacing}px` }}
                  >
                    {m.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex" style={{ gap: `${gapPx}px` }}>
            <div className="flex flex-col shrink-0" style={{ gap: `${gapPx}px`, width: `${26}px` }}>
              {DAY_LABELS.map((label, i) => (
                <div
                  key={i}
                  className="text-[10px] text-muted-foreground leading-[13px] h-[13px]"
                  style={{ visibility: label ? 'visible' : 'hidden' }}
                >
                  {label}
                </div>
              ))}
            </div>

            {grid.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col" style={{ gap: `${gapPx}px` }}>
                {col.map((cell, rowIndex) => {
                  const isFuture = cell.date && new Date(cell.date) > today;

                  return (
                    <div
                      key={`${colIndex}-${rowIndex}`}
                      className={cn(
                        'rounded-[3px]',
                        isFuture ? 'bg-transparent' : LEVEL_COLORS[cell.level]
                      )}
                      style={{ width: `${cellPx}px`, height: `${cellPx}px` }}
                      title={
                        cell.date && !isFuture
                          ? `${cell.date}: ${LEVEL_LABELS[cell.level]}`
                          : undefined
                      }
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 justify-end text-[10px] text-muted-foreground mt-2">
        <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={cn('rounded-sm', LEVEL_COLORS[level])}
            style={{
              width: `${cellPx - 3}px`,
              height: `${cellPx - 3}px`,
            }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

export { StreakCalendar };
