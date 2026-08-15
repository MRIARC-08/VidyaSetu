'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import authFetch from '@/lib/auth/authFetch';
import { SubjectPageSkeleton } from '@/components/Skeletons';
import BookmarkButton from '@/components/BookmarkButton';
import { Search, ChevronRight, BookOpen, Clock, FileText, ArrowUpDown } from 'lucide-react';

interface ChapterType {
  id: string;
  order: number;
  pdf: string;
  subjectId: string;
  title: string;
  content?: string;
  summary?: string;
}

function getReadTime(content?: string | null): number | null {
  if (!content) return null;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export default function NcertSubjectPage() {
  const params = useParams<{ class: string; subject: string }>();
  const [chapters, setChapters] = useState<ChapterType[]>([]);
  const [subjectName, setSubjectName] = useState<string>('Subject');
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [hoveredChapter, setHoveredChapter] = useState<ChapterType | null>(null);

  useEffect(() => {
    let isMounted = true;

    const getChapters = async () => {
      try {
        const res = await authFetch({
          url: `/api/ncert/chapters?class=${params.class}&subject=${params.subject}`,
          options: { method: 'GET' },
        });
        if (!isMounted) return;
        setSubjectName(res?.message?.name || 'Subject');
        setChapters(res?.message?.chapters || []);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    getChapters();

    return () => {
      isMounted = false;
    };
  }, [params.class, params.subject]);

  const filteredChapters = chapters
    .filter((ch) => ch.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a.order - b.order : b.order - a.order));

  if (isLoading) {
    return <SubjectPageSkeleton />;
  }

  return (
    <main className="p-6 md:p-10 flex flex-col gap-8 bg-background min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-primary/60">
        <Link href="/ncert" className="hover:text-primary transition-colors">NCERT</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/ncert/${params.class}`} className="hover:text-primary transition-colors">
          Class {params.class}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-primary font-bold">{subjectName}</span>
      </nav>

      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-border/40">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">{subjectName} Syllabus</h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">
            Explore chapter outlines, syllabus material, interactive reads, and practice assessments.
          </p>
        </div>

        {/* Quick Filter & Search Bar */}
        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-accent/10 border border-border/60 pl-9 pr-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <button
            type="button"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="flex items-center gap-1.5 px-3 py-2 border border-border/60 rounded-lg text-xs font-semibold bg-card hover:bg-accent/20 transition-colors"
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>{sortOrder === 'asc' ? '1 → N' : 'N → 1'}</span>
          </button>
        </div>
      </div>

      {/* Main Chapter Layout with Dynamic Hover Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Chapter List */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          {filteredChapters.length === 0 ? (
            <div className="text-center py-12 border border-dashed rounded-xl text-muted-foreground text-sm">
              No chapters found matching "{searchQuery}".
            </div>
          ) : (
            filteredChapters.map((val) => {
              const readTime = getReadTime(val.content);

              return (
                <div
                  key={val.id}
                  onMouseEnter={() => setHoveredChapter(val)}
                  className="group bg-card border border-border/60 hover:border-primary/40 rounded-xl p-5 flex items-center justify-between gap-4 transition-all duration-200 hover:shadow-sm"
                >
                  <Link
                    href={`/ncert/${params.class}/${params.subject}/${val.id}`}
                    className="flex items-center gap-5 flex-1 min-w-0"
                  >
                    <span className="text-2xl sm:text-3xl font-black text-muted-foreground/40 group-hover:text-primary transition-colors font-mono">
                      {val.order < 10 ? `0${val.order}` : val.order}
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-base sm:text-lg font-bold group-hover:text-primary transition-colors truncate">
                        {val.title}
                      </h2>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        {readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> ~{readTime} min read
                          </span>
                        )}
                        {val.pdf && (
                          <span className="flex items-center gap-1 text-primary/70">
                            <FileText className="w-3 h-3" /> PDF Available
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>

                  <div className="flex items-center gap-2">
                    <BookmarkButton chapterId={val.id} />
                    <Link
                      href={`/ncert/${params.class}/${params.subject}/${val.id}`}
                      className="p-2 text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Hover / Chapter Context Preview Sidebar */}
        <aside className="hidden lg:flex lg:col-span-4 flex-col gap-4 p-5 bg-card/60 border border-border/60 rounded-xl sticky top-6">
          <div className="flex items-center gap-2 text-xs font-bold text-primary tracking-wider uppercase">
            <BookOpen className="w-4 h-4" /> Quick Preview
          </div>
          {hoveredChapter ? (
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary w-max">
                Chapter {hoveredChapter.order}
              </span>
              <h3 className="font-bold text-lg leading-snug">{hoveredChapter.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {hoveredChapter.summary ||
                  hoveredChapter.content?.slice(0, 160) ||
                  'No excerpt available. Click to view topics and sample questions.'}
                ...
              </p>
              <Link
                href={`/ncert/${params.class}/${params.subject}/${hoveredChapter.id}`}
                className="mt-3 w-full py-2 bg-primary text-primary-foreground rounded-lg text-xs font-bold text-center hover:bg-primary/90 transition-colors"
              >
                Open Chapter
              </Link>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground italic py-6 text-center">
              Hover over any chapter on the left to view preview notes and details.
            </p>
          )}
        </aside>
      </div>
    </main>
  );
}
