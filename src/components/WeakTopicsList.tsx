'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  AlertCircle,
  ArrowDownUp,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Loader2,
  Search,
  TrendingUp,
} from 'lucide-react';
import authFetch from '@/lib/auth/authFetch';
import { TopicCard, type TopicCardData } from '@/components/TopicCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WeakTopicResult {
  topicName: string;
  topicId: string;
  accuracy: number;
  attempts: number;
  correctAnswers: number;
}

interface WeakTopicsResponse {
  message?: string;
  data: {
    topics: WeakTopicResult[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

function WeakTopicsList({ className, ...props }: React.ComponentProps<'div'>) {
  const router = useRouter();
  const [topics, setTopics] = React.useState<WeakTopicResult[]>([]);
  const [pagination, setPagination] = React.useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [sortBy, setSortBy] = React.useState<'accuracy' | 'attempts'>('accuracy');
  const [searchQuery, setSearchQuery] = React.useState('');

  const fetchWeakTopics = React.useCallback(
    async (page: number, sort: 'accuracy' | 'attempts') => {
      setLoading(true);
      setError(null);

      try {
        const res = await authFetch({
          url: `/api/analytics/weak-topics?page=${page}&limit=10&sortBy=${sort}`,
          options: { method: 'GET' },
        });

        const json = res as WeakTopicsResponse;
        if (json?.data) {
          setTopics(json.data.topics);
          setPagination(json.data.pagination);
        } else {
          setTopics([]);
          setPagination({ page: 1, limit: 10, total: 0, totalPages: 0 });
        }
      } catch {
        setError('Failed to load weak topics. Please try again.');
        setTopics([]);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  React.useEffect(() => {
    fetchWeakTopics(1, sortBy);
  }, [fetchWeakTopics, sortBy]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pagination.totalPages) return;
    fetchWeakTopics(newPage, sortBy);
  };

  const toggleSort = () => {
    setSortBy((prev) => (prev === 'accuracy' ? 'attempts' : 'accuracy'));
  };

  const handlePractice = (topicId: string) => {
    router.push(`/quiz/create?topicId=${encodeURIComponent(topicId)}`);
  };

  const handleViewChapter = (topicId: string) => {
    router.push(`/ncert?topicId=${encodeURIComponent(topicId)}`);
  };

  const filteredTopics = React.useMemo(() => {
    if (!searchQuery.trim()) return topics;
    const q = searchQuery.toLowerCase();
    return topics.filter((t) => t.topicName.toLowerCase().includes(q));
  }, [topics, searchQuery]);

  return (
    <Card className={cn('', className)} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="size-5 text-muted-foreground" />
          Weak Topics
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {error ? (
          <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="size-4 shrink-0" />
            {error}
          </div>
        ) : null}

        {!loading && !error ? (
          <>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleSort}
                className="gap-2"
              >
                <ArrowDownUp className="size-3.5" />
                Sort by {sortBy === 'accuracy' ? 'accuracy' : 'attempts'}
              </Button>
            </div>

            {filteredTopics.length === 0 ? (
              <div className="flex flex-col items-center gap-2 py-8 text-center">
                <BookOpen className="size-8 text-muted-foreground/50" />
                {searchQuery ? (
                  <p className="text-sm text-muted-foreground">
                    No topics match your search
                  </p>
                ) : (
                  <>
                    <p className="text-sm font-medium">No weak topics found</p>
                    <p className="text-xs text-muted-foreground">
                      Keep practicing and check back after your next quiz
                    </p>
                  </>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {filteredTopics.map((topic) => (
                  <TopicCard
                    key={topic.topicId}
                    topic={topic as TopicCardData}
                    onPractice={handlePractice}
                    onViewChapter={handleViewChapter}
                  />
                ))}
              </div>
            )}

            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-between border-t pt-4">
                <p className="text-xs text-muted-foreground">
                  Page {pagination.page} of {pagination.totalPages} ({pagination.total} topics)
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="xs"
                    disabled={pagination.page <= 1}
                    onClick={() => handlePageChange(pagination.page - 1)}
                  >
                    <ChevronLeft className="size-3.5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="xs"
                    disabled={pagination.page >= pagination.totalPages}
                    onClick={() => handlePageChange(pagination.page + 1)}
                  >
                    <ChevronRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}

export { WeakTopicsList };
