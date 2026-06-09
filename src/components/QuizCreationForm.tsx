'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { createQuiz, fetchSubjects, fetchUserProfile } from '@/lib/quiz';
import { QuizModeSelector, type QuizMode } from '@/components/QuizModeSelector';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BookOpen,
  FileText,
  Sparkles,
  Layers,
  ChevronRight,
  Loader2,
  AlertCircle,
} from 'lucide-react';

type QuizSource = 'CHAPTER' | 'TOPIC' | 'NOTE' | 'AI' | 'CUSTOM';

interface SubjectWithChapters {
  id: string;
  name: string;
  chapters: { id: string; title: string; order: number }[];
}

const SOURCES: {
  value: QuizSource;
  label: string;
  description: string;
  icon: React.ReactNode;
  enabled: boolean;
}[] = [
  {
    value: 'CHAPTER',
    label: 'From Chapter',
    description: 'Generate questions from a specific chapter',
    icon: <BookOpen className="size-5" />,
    enabled: true,
  },
  {
    value: 'TOPIC',
    label: 'From Topic',
    description: 'Focus on a specific topic within a chapter',
    icon: <Layers className="size-5" />,
    enabled: false,
  },
  {
    value: 'NOTE',
    label: 'From Notes',
    description: 'Create a quiz from your uploaded notes',
    icon: <FileText className="size-5" />,
    enabled: false,
  },
  {
    value: 'AI',
    label: 'AI Generated',
    description: 'Let AI generate questions on any subject',
    icon: <Sparkles className="size-5" />,
    enabled: false,
  },
];

function QuizCreationForm({ className }: { className?: string }) {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [userClass, setUserClass] = React.useState<number | null>(null);
  const [subjects, setSubjects] = React.useState<SubjectWithChapters[]>([]);
  const [selectedSubject, setSelectedSubject] = React.useState<string | null>(
    null
  );
  const [selectedChapter, setSelectedChapter] = React.useState<string | null>(
    null
  );
  const [selectedMode, setSelectedMode] = React.useState<QuizMode | null>(
    null
  );
  const [questionCount, setQuestionCount] = React.useState(10);

  const [pageError, setPageError] = React.useState<string | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const user = await fetchUserProfile();

        if (cancelled) return;

        if (!user.class) {
          setPageError(
            'Please set your class in profile settings before creating a quiz.'
          );
          setLoading(false);
          return;
        }

        const classNum = Number(user.class);
        setUserClass(classNum);

        try {
          const subjectsData = await fetchSubjects();
          if (!cancelled) setSubjects(subjectsData);
        } catch (subjectsErr) {
          if (!cancelled) {
            setPageError(
              subjectsErr instanceof Error
                ? subjectsErr.message
                : 'Failed to load subjects'
            );
          }
          return;
        }
      } catch {
        if (!cancelled)
          setPageError('Failed to load your profile. Please try again.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  const selectedSubjectData = subjects.find((s) => s.id === selectedSubject);
  const selectedChapterData = selectedSubjectData?.chapters.find(
    (c) => c.id === selectedChapter
  );

  const chapterBelongsToSubject = selectedSubjectData?.chapters.some(
    (c) => c.id === selectedChapter
  );
  const canCreate =
    selectedSubject &&
    selectedChapter &&
    chapterBelongsToSubject &&
    selectedMode &&
    questionCount >= 1;

  async function handleCreate() {
    if (!canCreate || !userClass) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await createQuiz({
        userId: '',
        mode: selectedMode,
        source: 'CHAPTER',
        chapterId: selectedChapter,
        questionCount,
      });

      router.push(`/quiz/${result.quiz.id}`);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Failed to create quiz'
      );
      setIsSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (pageError) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/50 px-6 py-10 text-center">
        <AlertCircle className="size-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">{pageError}</p>
      </div>
    );
  }

  return (
    <div className={cn('mx-auto flex max-w-2xl flex-col gap-8', className)}>
      {/* Source Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Source</CardTitle>
          <CardDescription>
            Choose where to generate questions from
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {SOURCES.map((source) => (
              <button
                key={source.value}
                type="button"
                disabled={!source.enabled}
                className={cn(
                  'flex items-start gap-3 rounded-xl border p-4 text-left transition-all',
                  source.enabled
                    ? 'cursor-pointer hover:border-primary/50 hover:bg-accent/50'
                    : 'cursor-not-allowed opacity-40'
                )}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  {source.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">{source.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {source.description}
                  </span>
                  {!source.enabled && (
                    <span className="mt-1 text-[10px] font-medium text-amber-600 uppercase tracking-wide">
                      Coming soon
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Chapter browser */}
          <div className="flex flex-col gap-4">
            <Label>Browse Chapters</Label>

            {subjects.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No subjects available for your class.
              </p>
            ) : (
              <div className="flex max-h-72 flex-col gap-2 overflow-y-auto">
                {subjects.map((subject) => {
                  const isExpanded = selectedSubject === subject.id;
                  return (
                    <div
                      key={subject.id}
                      className="overflow-hidden rounded-lg border"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSubject(
                            isExpanded ? null : subject.id
                          );
                          if (!isExpanded) setSelectedChapter(null);
                        }}
                        className={cn(
                          'flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors',
                          isExpanded ? 'bg-accent' : 'hover:bg-accent/50'
                        )}
                      >
                        <span>{subject.name}</span>
                        <ChevronRight
                          className={cn(
                            'size-4 text-muted-foreground transition-transform',
                            isExpanded && 'rotate-90'
                          )}
                        />
                      </button>

                      {isExpanded && (
                        <div className="border-t bg-card">
                          {subject.chapters.length === 0 ? (
                            <p className="px-4 py-3 text-xs text-muted-foreground">
                              No chapters available
                            </p>
                          ) : (
                            subject.chapters
                              .sort((a, b) => a.order - b.order)
                              .map((chapter) => {
                                const isSelected =
                                  selectedChapter === chapter.id;
                                return (
                                  <button
                                    key={chapter.id}
                                    type="button"
                                    onClick={() =>
                                      setSelectedChapter(chapter.id)
                                    }
                                    className={cn(
                                      'flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors',
                                      isSelected
                                        ? 'bg-primary/5 font-medium text-primary'
                                        : 'hover:bg-accent/50'
                                    )}
                                  >
                                    <span
                                      className={cn(
                                        'flex size-5 shrink-0 items-center justify-center rounded border text-[10px] font-medium',
                                        isSelected
                                          ? 'border-primary bg-primary text-primary-foreground'
                                          : 'border-border text-muted-foreground'
                                      )}
                                    >
                                      {chapter.order}
                                    </span>
                                    <span className="leading-snug">
                                      {chapter.title}
                                    </span>
                                    {isSelected && (
                                      <span className="ml-auto text-[10px] font-medium uppercase tracking-wide text-primary">
                                        Selected
                                      </span>
                                    )}
                                  </button>
                                );
                              })
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Mode + Configuration */}
      {selectedChapter && (
        <Card>
          <CardHeader>
            <CardTitle>Quiz Settings</CardTitle>
            <CardDescription>
              {selectedSubjectData?.name} &mdash; {selectedChapterData?.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label>Mode</Label>
              <QuizModeSelector
                value={selectedMode}
                onChange={setSelectedMode}
              />
            </div>

            {selectedMode && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="question-count">
                  Questions:{' '}
                  <span className="font-semibold text-foreground">
                    {questionCount}
                  </span>
                </Label>
                <input
                  id="question-count"
                  type="range"
                  min={1}
                  max={50}
                  aria-label={`Number of questions: ${questionCount}`}
                  value={questionCount}
                  onChange={(e) =>
                    setQuestionCount(Number(e.target.value))
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Review + Create */}
      {selectedMode && (
        <div className="flex flex-col gap-3">
          {submitError && (
            <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
              <AlertCircle className="size-4 shrink-0 text-muted-foreground" />
              {submitError}
            </div>
          )}

          <Button
            size="lg"
            disabled={isSubmitting}
            onClick={handleCreate}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Creating Quiz...
              </>
            ) : (
              'Create Quiz'
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            You will be redirected to the quiz attempt page after creation
          </p>
        </div>
      )}
    </div>
  );
}

export { QuizCreationForm };