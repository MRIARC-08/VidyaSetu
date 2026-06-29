'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CheckCircle, Circle, ChevronRight, Map } from 'lucide-react';

interface ChapterNodeProps {
  title: string;
  number: number;
  status: 'completed' | 'in-progress' | 'locked';
  score?: number;
  onClick?: () => void;
  hovered?: boolean;
}

function ChapterNode({ title, number, status, score, onClick, hovered }: ChapterNodeProps) {
  return (
    <button
      onClick={status !== 'locked' ? onClick : undefined}
      disabled={status === 'locked'}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 text-left w-full",
        hovered && status !== 'locked' ? "bg-primary/5 border-primary/30" : "bg-white/60 border-border/30",
        status === 'locked' && "opacity-50 cursor-not-allowed",
        status === 'completed' && "hover:border-emerald-300 hover:bg-emerald-50/30",
        status === 'in-progress' && "hover:border-amber-300 hover:bg-amber-50/30"
      )}
    >
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
        status === 'completed' && "bg-emerald-500 text-white",
        status === 'in-progress' && "bg-amber-500 text-white",
        status === 'locked' && "bg-muted text-muted-foreground"
      )}>
        {status === 'completed' ? <CheckCircle className="w-4 h-4" /> : number}
      </div>
      
      <div className="flex-1 min-w-0">
        <span className="text-sm font-medium truncate block">{title}</span>
        {status === 'in-progress' && score !== undefined && (
          <span className="text-[10px] text-amber-600">{score}% complete</span>
        )}
      </div>

      {status !== 'locked' && (
        <ChevronRight className={cn(
          "w-4 h-4 shrink-0 transition-transform",
          hovered && "translate-x-1"
        )} />
      )}
    </button>
  );
}

interface ChapterMapPreviewProps extends React.ComponentProps<'div'> {
  className?: string;
  subject?: string;
}

function ChapterMapPreview({ 
  className,
  subject = "Physics",
  ...props 
}: ChapterMapPreviewProps) {
  const [hoveredChapter, setHoveredChapter] = React.useState<number | null>(null);
  const [expandedChapter, setExpandedChapter] = React.useState<number | null>(1);

  const chapters = [
    { id: 1, title: "Motion and Force", status: 'completed' as const, score: 100 },
    { id: 2, title: "Laws of Motion", status: 'completed' as const, score: 100 },
    { id: 3, title: "Work and Energy", status: 'in-progress' as const, score: 65 },
    { id: 4, title: "Gravitation", status: 'locked' as const, score: 0 },
    { id: 5, title: "Sound Waves", status: 'locked' as const, score: 0 },
    { id: 6, title: "Light Reflection", status: 'locked' as const, score: 0 },
  ];

  const completedCount = chapters.filter(c => c.status === 'completed').length;
  const progress = Math.round((completedCount / chapters.length) * 100);

  return (
    <Card className={cn('overflow-hidden', className)} {...props}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Map className="w-4 h-4 text-primary" />
            {subject} - Chapter Map
          </CardTitle>
          <span className="text-xs text-muted-foreground">
            {completedCount}/{chapters.length} completed
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-medium text-emerald-600">{progress}%</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {chapters.map((chapter) => (
          <ChapterNode
            key={chapter.id}
            title={chapter.title}
            number={chapter.id}
            status={chapter.status}
            score={chapter.score}
            hovered={hoveredChapter === chapter.id}
            onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
          />
        ))}
        
        <button className="w-full mt-2 p-2 rounded-lg border border-dashed border-border/50 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors flex items-center justify-center gap-2">
          <BookOpen className="w-3 h-3" />
          View all chapters
        </button>
      </CardContent>
    </Card>
  );
}

export { ChapterMapPreview, ChapterNode };
