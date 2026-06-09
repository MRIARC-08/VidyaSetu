'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertCircle, Check, Loader2, Plus, X } from 'lucide-react';

interface BookEntry {
  grade: number;
  subject: string;
  chapters: string[];
}

function emptyBook(): BookEntry {
  return { grade: 6, subject: '', chapters: [''] };
}

export function AdminSeedingPanel() {
  const [books, setBooks] = useState<BookEntry[]>([emptyBook()]);
  const [status, setStatus] = useState<
    'idle' | 'seeding' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState<string | null>(null);
  const [result, setResult] = useState<{
    classesCreated: number;
    subjectsCreated: number;
    chaptersCreated: number;
    duplicatesSkipped: number;
  } | null>(null);

  function updateBook(index: number, field: keyof BookEntry, value: unknown) {
    setBooks((prev) =>
      prev.map((book, i) => (i === index ? { ...book, [field]: value } : book))
    );
  }

  function updateChapter(
    bookIndex: number,
    chapterIndex: number,
    value: string
  ) {
    setBooks((prev) =>
      prev.map((book, bi) =>
        bi === bookIndex
          ? {
              ...book,
              chapters: book.chapters.map((ch, ci) =>
                ci === chapterIndex ? value : ch
              ),
            }
          : book
      )
    );
  }

  function addChapter(bookIndex: number) {
    setBooks((prev) =>
      prev.map((book, bi) =>
        bi === bookIndex ? { ...book, chapters: [...book.chapters, ''] } : book
      )
    );
  }

  function removeChapter(bookIndex: number, chapterIndex: number) {
    setBooks((prev) =>
      prev.map((book, bi) =>
        bi === bookIndex
          ? {
              ...book,
              chapters: book.chapters.filter((_, ci) => ci !== chapterIndex),
            }
          : book
      )
    );
  }

  function addBook() {
    setBooks((prev) => [...prev, emptyBook()]);
  }

  function removeBook(index: number) {
    setBooks((prev) => prev.filter((_, i) => i !== index));
  }

  function isValid(): boolean {
    return books.some(
      (book) => book.subject.trim() && book.chapters.some((ch) => ch.trim())
    );
  }

  async function handleSeed() {
    setStatus('seeding');
    setMessage(null);
    setResult(null);

    const payload = {
      books: books
        .filter((book) => book.subject.trim())
        .map((book) => ({
          grade: book.grade,
          subject: book.subject.trim(),
          chapters: book.chapters.filter((ch) => ch.trim()),
        })),
    };

    try {
      const res = await fetch('/api/admin/seed-ncert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setResult(data.data);
        setMessage('NCERT data seeded successfully');
      } else {
        setStatus('error');
        setMessage(data.message || data.error || 'Seed failed');
      }
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Seed request failed');
    }
  }

  function handleReset() {
    setBooks([emptyBook()]);
    setStatus('idle');
    setMessage(null);
    setResult(null);
  }

  const grades = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Seed NCERT Data</CardTitle>
        <CardDescription>
          Add grades, subjects, and chapters to populate the curriculum database
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {books.map((book, bi) => (
          <div key={bi} className="rounded-lg border bg-muted/20 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium">Book #{bi + 1}</span>
              {books.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  onClick={() => removeBook(bi)}
                >
                  <X className="size-3" />
                </Button>
              )}
            </div>

            <div className="mb-3 grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label>Grade</Label>
                <select
                  value={book.grade}
                  onChange={(e) =>
                    updateBook(bi, 'grade', Number(e.target.value))
                  }
                  className="flex h-9 w-full rounded-lg border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  {grades.map((g) => (
                    <option key={g} value={g}>
                      Class {g}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label>Subject</Label>
                <Input
                  value={book.subject}
                  onChange={(e) => updateBook(bi, 'subject', e.target.value)}
                  placeholder="e.g. Mathematics"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-muted-foreground">
                  Chapters
                </Label>
                <Button
                  type="button"
                  variant="outline"
                  size="xs"
                  onClick={() => addChapter(bi)}
                >
                  <Plus className="size-3" />
                  Add Chapter
                </Button>
              </div>

              {book.chapters.map((chapter, ci) => (
                <div key={ci} className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground">
                    {ci + 1}
                  </span>
                  <Input
                    value={chapter}
                    onChange={(e) => updateChapter(bi, ci, e.target.value)}
                    placeholder={`Chapter ${ci + 1} name`}
                  />
                  {book.chapters.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-xs"
                      onClick={() => removeChapter(bi, ci)}
                    >
                      <X className="size-3" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <Button type="button" variant="outline" onClick={addBook}>
          <Plus className="size-4" />
          Add Another Book
        </Button>

        <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Ready to seed:</p>
          <ul className="mt-1 list-inside list-disc space-y-0.5">
            {books
              .filter((b) => b.subject.trim())
              .map((book, i) => (
                <li key={i}>
                  Class {book.grade} — {book.subject} (
                  {book.chapters.filter((c) => c.trim()).length} chapters)
                </li>
              ))}
            {!isValid() && (
              <li className="text-muted-foreground">
                Fill in subject and at least one chapter
              </li>
            )}
          </ul>
        </div>

        {message && (
          <div
            className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-sm ${
              status === 'success'
                ? 'border-green-200 bg-green-50 text-green-700'
                : 'border-destructive/20 bg-destructive/10 text-destructive'
            }`}
          >
            {status === 'success' ? (
              <Check className="size-4 shrink-0" />
            ) : (
              <AlertCircle className="size-4 shrink-0" />
            )}
            <div>
              <p>{message}</p>
              {result && (
                <p className="mt-0.5 text-xs opacity-80">
                  {result.classesCreated} classes, {result.subjectsCreated}{' '}
                  subjects, {result.chaptersCreated} chapters,{' '}
                  {result.duplicatesSkipped} duplicates skipped
                </p>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button
            type="button"
            onClick={handleSeed}
            disabled={!isValid() || status === 'seeding'}
          >
            {status === 'seeding' ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Seeding...
              </>
            ) : (
              'Seed NCERT Data'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
