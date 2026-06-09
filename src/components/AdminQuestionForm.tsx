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
import { cn } from '@/lib/utils';
import { AlertCircle, Check, Loader2, Plus, X } from 'lucide-react';

interface OptionField {
  label: string;
  value: string;
  isCorrect: boolean;
}

interface FormData {
  questionText: string;
  type: 'MCQ' | 'SUBJECTIVE';
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  topicId: string;
  explanation: string;
}

const initialOption = (label: string): OptionField => ({
  label,
  value: '',
  isCorrect: false,
});

const defaultOptions: OptionField[] = [
  initialOption('A'),
  initialOption('B'),
  initialOption('C'),
  initialOption('D'),
];

export function AdminQuestionForm({
  onSuccess,
  onCancel,
}: {
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<FormData>({
    questionText: '',
    type: 'MCQ',
    difficulty: 'EASY',
    topicId: '',
    explanation: '',
  });
  const [options, setOptions] = useState<OptionField[]>(defaultOptions);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): boolean {
    const errors: Record<string, string> = {};

    if (!form.questionText.trim()) {
      errors.questionText = 'Question text is required';
    }

    if (form.type === 'MCQ') {
      const filledOptions = options.filter((o) => o.value.trim());
      if (filledOptions.length < 2) {
        errors.options = 'At least 2 options with values are required';
      }
      const correctCount = options.filter((o) => o.isCorrect).length;
      if (correctCount !== 1) {
        errors.correctAnswer = 'Exactly one option must be marked as correct';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const body: Record<string, unknown> = {
      questionText: form.questionText.trim(),
      type: form.type,
      difficulty: form.difficulty,
    };

    if (form.topicId.trim()) {
      body.topicId = form.topicId.trim();
    }

    if (form.explanation.trim()) {
      body.explanation = form.explanation.trim();
    }

    if (form.type === 'MCQ') {
      body.options = options
        .filter((o) => o.value.trim())
        .map((o) => ({
          label: o.label,
          value: o.value.trim(),
          isCorrect: o.isCorrect,
        }));
    }

    try {
      const res = await fetch('/api/admin/add-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const apiErrors: Record<string, string> = {};
          for (const err of data.errors) {
            const path = err.path?.[0] || 'form';
            apiErrors[path] = err.message;
          }
          setFieldErrors(apiErrors);
        }
        throw new Error(data.message || data.error || 'Failed to add question');
      }

      onSuccess();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Failed to add question'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function toggleCorrect(index: number) {
    setOptions((prev) =>
      prev.map((opt, i) => ({
        ...opt,
        isCorrect: i === index,
      }))
    );
  }

  function updateOption(index: number, value: string) {
    setOptions((prev) =>
      prev.map((opt, i) => (i === index ? { ...opt, value } : opt))
    );
  }

  function addOption() {
    const nextLabel = String.fromCharCode(65 + options.length);
    setOptions((prev) => [...prev, initialOption(nextLabel)]);
  }

  function removeOption(index: number) {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  }

  const difficulties = ['EASY', 'MEDIUM', 'HARD'] as const;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Question</CardTitle>
        <CardDescription>
          Create a new MCQ or subjective question
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="questionText">Question Text</Label>
          <textarea
            id="questionText"
            value={form.questionText}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, questionText: e.target.value }))
            }
            rows={3}
            className={cn(
              'flex min-h-[80px] w-full rounded-lg border bg-transparent px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              fieldErrors.questionText && 'border-destructive'
            )}
            placeholder="Enter the question text..."
          />
          {fieldErrors.questionText && (
            <p className="text-xs text-destructive">
              {fieldErrors.questionText}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Type</Label>
            <select
              id="type"
              value={form.type}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  type: e.target.value as 'MCQ' | 'SUBJECTIVE',
                }))
              }
              className="flex h-9 w-full rounded-lg border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            >
              <option value="MCQ">Multiple Choice</option>
              <option value="SUBJECTIVE">Subjective</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <select
              id="difficulty"
              value={form.difficulty}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  difficulty: e.target.value as 'EASY' | 'MEDIUM' | 'HARD',
                }))
              }
              className="flex h-9 w-full rounded-lg border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            >
              {difficulties.map((d) => (
                <option key={d} value={d}>
                  {d.charAt(0) + d.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="topicId">
            Topic ID{' '}
            <span className="text-xs text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="topicId"
            value={form.topicId}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, topicId: e.target.value }))
            }
            placeholder="UUID of the topic this question belongs to"
          />
        </div>

        {form.type === 'MCQ' && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label>Options</Label>
              <Button
                type="button"
                variant="outline"
                size="xs"
                onClick={addOption}
              >
                <Plus className="size-3" />
                Add Option
              </Button>
            </div>

            {options.map((opt, i) => (
              <div key={i} className="flex items-start gap-2">
                <button
                  type="button"
                  onClick={() => toggleCorrect(i)}
                  className={cn(
                    'mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-medium transition-colors',
                    opt.isCorrect
                      ? 'border-green-500 bg-green-500 text-white'
                      : 'border-border text-muted-foreground hover:border-foreground'
                  )}
                  title={
                    opt.isCorrect ? 'Correct answer' : 'Mark as correct answer'
                  }
                >
                  {opt.isCorrect && <Check className="size-3" />}
                </button>
                <div className="flex flex-1 items-center gap-1">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground">
                    {opt.label}
                  </span>
                  <Input
                    value={opt.value}
                    onChange={(e) => updateOption(i, e.target.value)}
                    placeholder={`Option ${opt.label}`}
                  />
                </div>
                {options.length > 2 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => removeOption(i)}
                    className="mt-1"
                  >
                    <X className="size-3" />
                  </Button>
                )}
              </div>
            ))}

            {fieldErrors.options && (
              <p className="text-xs text-destructive">{fieldErrors.options}</p>
            )}
            {fieldErrors.correctAnswer && (
              <p className="text-xs text-destructive">
                {fieldErrors.correctAnswer}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Label htmlFor="explanation">
            Explanation{' '}
            <span className="text-xs text-muted-foreground">(optional)</span>
          </Label>
          <textarea
            id="explanation"
            value={form.explanation}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, explanation: e.target.value }))
            }
            rows={2}
            className="flex min-h-[60px] w-full rounded-lg border bg-transparent px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            placeholder="Explain why the correct answer is right..."
          />
        </div>

        {submitError && (
          <div className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="size-4 shrink-0" />
            {submitError}
          </div>
        )}

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Adding...
              </>
            ) : (
              'Add Question'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
