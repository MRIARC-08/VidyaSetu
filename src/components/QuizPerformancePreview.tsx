'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, CheckCircle, XCircle, Clock, Brain } from 'lucide-react';

interface QuizResult {
  chapter: string;
  score: number;
  total: number;
  time: number;
  correct: number;
  incorrect: number;
}

interface QuizPerformancePreviewProps extends React.ComponentProps<'div'> {
  results?: QuizResult[];
}

function QuizResultCard({ result, index }: { result: QuizResult; index: number }) {
  const percentage = Math.round((result.score / result.total) * 100);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-3 rounded-lg bg-white/60 border border-border/30 transition-all duration-500",
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
    >
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold" style={{ 
          color: percentage >= 80 ? '#14B8A6' : percentage >= 60 ? '#F59E0B' : '#EF4444' 
        }}>
          {percentage}%
        </span>
        <span className="text-[10px] text-muted-foreground">score</span>
      </div>
      
      <div className="flex-1 flex flex-col gap-1">
        <span className="text-sm font-medium truncate">{result.chapter}</span>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-emerald-500" />
            {result.correct}
          </span>
          <span className="flex items-center gap-1">
            <XCircle className="w-3 h-3 text-red-500" />
            {result.incorrect}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {result.time}m
          </span>
        </div>
      </div>

      <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-700 ease-out",
            percentage >= 80 ? "bg-emerald-500" : percentage >= 60 ? "bg-amber-500" : "bg-red-500"
          )}
          style={{ width: visible ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function MiniAccuracyChart({ data }: { data: { chapter: string; accuracy: number }[] }) {
  return (
    <div className="flex items-end gap-2 h-16">
      {data.map((item, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className={cn(
              "w-full rounded-t transition-all duration-500",
              item.accuracy >= 80 ? "bg-emerald-500" : item.accuracy >= 60 ? "bg-amber-500" : "bg-red-500"
            )}
            style={{ height: `${item.accuracy}%` }}
          />
          <span className="text-[8px] text-muted-foreground truncate w-full text-center">
            {item.chapter.split(' ')[0]}
          </span>
        </div>
      ))}
    </div>
  );
}

function QuizPerformancePreview({
  results,
  className,
  ...props
}: QuizPerformancePreviewProps) {
  const defaultResults: QuizResult[] = results || [
    { chapter: "Motion and Force", score: 18, total: 20, time: 12, correct: 18, incorrect: 2 },
    { chapter: "Work and Energy", score: 15, total: 20, time: 10, correct: 15, incorrect: 5 },
    { chapter: "Gravitation", score: 20, total: 20, time: 8, correct: 20, incorrect: 0 },
    { chapter: "Sound Waves", score: 14, total: 20, time: 15, correct: 14, incorrect: 6 },
    { chapter: "Light Reflection", score: 17, total: 20, time: 11, correct: 17, incorrect: 3 },
  ];

  const avgAccuracy = Math.round(
    defaultResults.reduce((acc, r) => acc + (r.score / r.total) * 100, 0) / defaultResults.length
  );

  const totalCorrect = defaultResults.reduce((acc, r) => acc + r.correct, 0);
  const totalIncorrect = defaultResults.reduce((acc, r) => acc + r.incorrect, 0);

  const chartData = defaultResults.map(r => ({
    chapter: r.chapter,
    accuracy: Math.round((r.score / r.total) * 100)
  }));

  return (
    <Card className={cn('overflow-hidden', className)} {...props}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Brain className="w-4 h-4 text-primary" />
          Quiz Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center p-2 rounded-lg bg-white/60">
            <span className="text-xl font-bold text-emerald-600">{avgAccuracy}%</span>
            <span className="text-[10px] text-muted-foreground">Avg Accuracy</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-white/60">
            <span className="text-xl font-bold">{totalCorrect}</span>
            <span className="text-[10px] text-muted-foreground">Correct</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-white/60">
            <span className="text-xl font-bold text-red-500">{totalIncorrect}</span>
            <span className="text-[10px] text-muted-foreground">Incorrect</span>
          </div>
        </div>

        {/* Mini Chart */}
        <div className="pt-2 border-t border-border/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Chapter Performance</span>
            <TrendingUp className="w-3 h-3 text-emerald-500" />
          </div>
          <MiniAccuracyChart data={chartData} />
        </div>

        {/* Recent Quizzes */}
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Recent Quizzes</span>
          {defaultResults.slice(0, 3).map((result, i) => (
            <QuizResultCard key={i} result={result} index={i} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { QuizPerformancePreview, QuizResultCard, MiniAccuracyChart };
