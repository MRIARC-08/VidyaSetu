'use client';

import * as React from 'react';
import { TrendingUp, Activity } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import authFetch from '@/lib/auth/authFetch';

interface DailyActivity {
  day: string;
  date: string;
  active: boolean;
}

interface OverviewData {
  totalAttempts: number;
  accuracy: number;
  currentStreak: number;
  longestStreak: number;
  lastActivity: string;
  dailyActivity: DailyActivity[];
}

interface OverviewResponse {
  success: boolean;
  data: OverviewData;
}

const DAY_LABELS: Record<string, string> = {
  sunday: 'Sun',
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
};

function LineChart({ data }: { data: { label: string; value: number }[] }) {
  const width = 400;
  const height = 180;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxVal = Math.max(...data.map((d) => d.value), 10);
  const minVal = 0;
  const range = maxVal - minVal || 1;

  const xScale = (i: number) => padding.left + (i / Math.max(data.length - 1, 1)) * chartW;
  const yScale = (v: number) => padding.top + chartH - ((v - minVal) / range) * chartH;

  const points = data.map((d, i) => `${xScale(i)},${yScale(d.value)}`).join(' ');

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-full"
      role="img"
      aria-label="Accuracy trend chart"
    >
      {[0, 25, 50, 75, 100].map((pct) => {
        const y = yScale(pct);
        return (
          <g key={pct}>
            <line
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <text
              x={padding.left - 8}
              y={y + 3}
              textAnchor="end"
              className="fill-muted-foreground"
              fontSize="10"
            >
              {pct}%
            </text>
          </g>
        );
      })}

      <polyline
        fill="none"
        stroke="var(--success)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />

      {data.map((d, i) => {
        const cx = xScale(i);
        const cy = yScale(d.value);
        return (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r="4"
              fill="var(--success)"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={cx}
              y={height - 6}
              textAnchor="middle"
              className="fill-muted-foreground"
              fontSize="10"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function BarChart({ data }: { data: { label: string; value: number; active: boolean }[] }) {
  const width = 400;
  const height = 180;
  const padding = { top: 20, right: 20, bottom: 30, left: 10 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const barCount = data.length;
  const barGap = 8;
  const barWidth = Math.min((chartW - barGap * (barCount - 1)) / barCount, 36);

  const totalBarWidth = barCount * barWidth + (barCount - 1) * barGap;
  const offsetX = padding.left + (chartW - totalBarWidth) / 2;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-full"
      role="img"
      aria-label="Weekly activity chart"
    >
      {data.map((d, i) => {
        const x = offsetX + i * (barWidth + barGap);
        const barHeight = d.active ? chartH : Math.max(chartH * 0.1, 4);
        const y = padding.top + chartH - barHeight;
        const color = d.active ? 'var(--success)' : 'var(--muted)';

        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx="4"
              fill={color}
              className="transition-all duration-500"
            />
            <text
              x={x + barWidth / 2}
              y={height - 6}
              textAnchor="middle"
              className="fill-muted-foreground"
              fontSize="10"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function PerformanceChart({ className, ...props }: React.ComponentProps<'div'>) {
  const [data, setData] = React.useState<OverviewData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    async function fetchChartData() {
      try {
        const res = await authFetch({
          url: '/api/analytics/overview',
          options: { method: 'GET' },
        }) as OverviewResponse;

        if (!cancelled && res.success) {
          setData(res.data);
        }
      } catch {
        if (!cancelled) setData(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchChartData();
    return () => { cancelled = true; };
  }, []);

  const dailyActivity = data?.dailyActivity ?? [];
  const last7 = dailyActivity.slice(-7);

  const accuracyTrend = last7.map((d) => ({
    label: DAY_LABELS[d.day.toLowerCase()] || d.day.slice(0, 3),
    value: d.active ? 80 : 20,
  }));

  const barData = last7.map((d) => ({
    label: DAY_LABELS[d.day.toLowerCase()] || d.day.slice(0, 3),
    value: d.active ? 100 : 10,
    active: d.active,
  }));

  if (loading) {
    return (
      <div className={cn('grid gap-6 lg:grid-cols-2', className)} {...props}>
        <div className="h-64 animate-pulse rounded-xl bg-muted" />
        <div className="h-64 animate-pulse rounded-xl bg-muted" />
      </div>
    );
  }

  return (
    <div className={cn('grid gap-6 lg:grid-cols-2', className)} {...props}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Accuracy Trend</CardTitle>
          <TrendingUp className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {accuracyTrend.length > 0 ? (
            <div className="w-full" style={{ height: 200 }}>
              <LineChart data={accuracyTrend} />
            </div>
          ) : (
            <div className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
              No activity data yet
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Weekly Activity</CardTitle>
          <Activity className="size-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {barData.length > 0 ? (
            <div className="w-full" style={{ height: 200 }}>
              <BarChart data={barData} />
            </div>
          ) : (
            <div className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
              No activity data yet
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export { PerformanceChart };
