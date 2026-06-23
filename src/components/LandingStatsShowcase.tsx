'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { AnimatedProgressRing } from './AnimatedProgressRing';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BookOpen, Clock, Target, Zap } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  trend?: string;
  trendUp?: boolean;
}

function StatCard({ icon, value, label, trend, trendUp }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-default">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs text-muted-foreground">{label}</span>
        {trend && (
          <span className={cn(
            "text-xs font-medium flex items-center gap-1",
            trendUp ? "text-emerald-600" : "text-red-500"
          )}>
            {trendUp ? <TrendingUp className="w-3 h-3" /> : null}
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}

interface MiniBarChartProps {
  data: { label: string; value: number; max?: number }[];
  height?: number;
}

function MiniBarChart({ data, height = 60 }: MiniBarChartProps) {
  const maxValue = Math.max(...data.map(d => d.max ?? d.value), 1);
  
  return (
    <div className="flex items-end gap-1" style={{ height }}>
      {data.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full bg-primary/80 rounded-t transition-all duration-500 hover:bg-primary"
            style={{ height: `${(item.value / maxValue) * 100}%`, minHeight: 4 }}
          />
          <span className="text-[8px] text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function LandingStatsShowcase({ className }: React.ComponentProps<'div'>) {
  const stats = [
    { icon: <BookOpen className="w-5 h-5" />, value: "24", label: "Chapters Completed", trend: "+3 this week", trendUp: true },
    { icon: <Target className="w-5 h-5" />, value: "87%", label: "Average Accuracy", trend: "+5% from last month", trendUp: true },
    { icon: <Clock className="w-5 h-5" />, value: "12h", label: "Study Time", trend: "This week", trendUp: true },
    { icon: <Zap className="w-5 h-5" />, value: "7", label: "Day Streak", trend: "Keep it going!", trendUp: true },
  ];

  const weeklyProgress = [
    { label: 'Mon', value: 45 },
    { label: 'Tue', value: 60 },
    { label: 'Wed', value: 35 },
    { label: 'Thu', value: 80 },
    { label: 'Fri', value: 55 },
    { label: 'Sat', value: 90 },
    { label: 'Sun', value: 40 },
  ];

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Progress Overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Weekly Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MiniBarChart data={weeklyProgress} />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Overall Goal
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <AnimatedProgressRing
              value={68}
              size={140}
              strokeWidth={12}
              label="Physics"
              sublabel="Chapter 1-5"
              color="#14B8A6"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export { LandingStatsShowcase, StatCard, MiniBarChart };
