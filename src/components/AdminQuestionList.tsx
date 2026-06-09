'use client';

import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Loader2,
  AlertCircle,
  Search,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface QuestionOption {
  id: string;
  label: string;
  value: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  questionText: string;
  type: string;
  difficulty: string;
  createdAt: string;
  topic: {
    id: string;
    title: string;
    chapter: { id: string; title: string };
  } | null;
  options: QuestionOption[];
}

interface ListResponse {
  data: {
    questions: Question[];
    total: number;
    page: number;
    limit: number;
  };
}

export function AdminQuestionList({
  onAddClick,
  refreshKey,
}: {
  onAddClick: () => void;
  refreshKey: number;
}) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const totalPages = Math.max(1, Math.ceil(total / limit));

  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
      });
      const res = await fetch(`/api/admin/questions?${params}`, {
        credentials: 'include',
      });
      if (!res.ok) throw new Error('Failed to load questions');
      const data: ListResponse = await res.json();
      setQuestions(data.data.questions);
      setTotal(data.data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load questions');
    } finally {
      setLoading(false);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions, refreshKey]);

  async function handleDelete(id: string) {
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/questions/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to delete question');
      }
      setQuestions((prev) => prev.filter((q) => q.id !== id));
      setTotal((prev) => prev - 1);
      setDeleteId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete');
    } finally {
      setDeleting(false);
    }
  }

  const filtered = search.trim()
    ? questions.filter((q) =>
        q.questionText.toLowerCase().includes(search.toLowerCase())
      )
    : questions;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="pl-9"
          />
        </div>
        <Button onClick={onAddClick}>Add Question</Button>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" />
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex flex-col gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-14 animate-pulse rounded-lg bg-muted" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-xl border bg-card px-6 py-12 text-center">
          <p className="text-sm text-muted-foreground">
            {search
              ? 'No questions match your search.'
              : 'No questions yet. Add your first question.'}
          </p>
          {!search && (
            <Button variant="outline" className="mt-3" onClick={onAddClick}>
              Add Question
            </Button>
          )}
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Question
                </th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Difficulty
                </th>
                <th className="hidden px-4 py-3 text-left font-medium text-muted-foreground md:table-cell">
                  Topic
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((q) => (
                <tr
                  key={q.id}
                  className="border-b last:border-0 hover:bg-muted/30"
                >
                  <td className="max-w-xs truncate px-4 py-3">
                    {q.questionText}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
                      {q.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        q.difficulty === 'EASY'
                          ? 'bg-green-100 text-green-700'
                          : q.difficulty === 'MEDIUM'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {q.difficulty}
                    </span>
                  </td>
                  <td className="hidden max-w-[200px] truncate px-4 py-3 text-muted-foreground md:table-cell">
                    {q.topic?.title || '-'}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {deleteId === q.id ? (
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="destructive"
                          size="xs"
                          onClick={() => handleDelete(q.id)}
                          disabled={deleting}
                        >
                          {deleting ? (
                            <Loader2 className="size-3 animate-spin" />
                          ) : (
                            'Confirm'
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="xs"
                          onClick={() => setDeleteId(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setDeleteId(q.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Page {page} of {totalPages} ({total} total)
          </span>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="xs"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="size-3" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="xs"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
              <ChevronRight className="size-3" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
