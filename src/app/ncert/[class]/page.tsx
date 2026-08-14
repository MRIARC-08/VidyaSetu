'use client';
import { log } from '@/lib/logger';
import authFetch from '@/lib/auth/authFetch';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { SubjectCatalogSkeleton } from '@/components/Skeletons';

import {
  Book,
  Zap,
  FlaskConical,
  Microscope,
  Landmark,
  Globe,
  Scale,
  Brain,
  Search,
  LayoutGrid,
  List,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface Chapter {
  id: string;
  order: number;
  pdf: string;
  subjectId: string;
  title: string;
}

interface Subjects {
  academicClassId: string;
  id: string;
  name: string;
  chapters: Chapter[];
  chaptersLength?: number;
}

interface UserResponse {
  user?: {
    class?: string | number | null;
  };
}

const SUBJECT_ICONS: Record<string, ReactNode> = {
  Mathematics: <Book className="w-5 h-5 text-blue-500" />,
  Physics: <Zap className="w-5 h-5 text-amber-500" />,
  Chemistry: <FlaskConical className="w-5 h-5 text-emerald-500" />,
  Biology: <Microscope className="w-5 h-5 text-green-500" />,
  Accountancy: <Scale className="w-5 h-5 text-purple-500" />,
  'Business Studies': <Landmark className="w-5 h-5 text-indigo-500" />,
  Economics: <Landmark className="w-5 h-5 text-rose-500" />,
  History: <Book className="w-5 h-5 text-amber-700" />,
  Geography: <Globe className="w-5 h-5 text-teal-500" />,
  'Political Science': <Scale className="w-5 h-5 text-orange-500" />,
  Sociology: <Brain className="w-5 h-5 text-pink-500" />,
  Psychology: <Brain className="w-5 h-5 text-violet-500" />,
  English: <Book className="w-5 h-5 text-cyan-500" />,
  Hindi: <Book className="w-5 h-5 text-yellow-600" />,
};

export default function SubjectCatalogPage() {
  const params = useParams<{ class: string }>();
  const [user, setUser] = useState<UserResponse>();
  const [subs, setSubs] = useState<Subjects[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  const [completedChapterIds, setCompletedChapterIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    let isMounted = true;

    const fetchAll = async () => {
      try {
        const [userData, subjectsRes, quizRes] = await Promise.all([
          authFetch({ url: '/api/user/getUser', options: { method: 'GET' } }) as Promise<UserResponse>,
          authFetch({ url: `/api/ncert/subjects?classId=${encodeURIComponent(params.class)}`, options: { method: 'GET' } }),
          authFetch({ url: '/api/quiz/history?limit=100', options: { method: 'GET' } }).catch(() => null),
        ]);

        if (!isMounted) return;

        setUser(userData);
        if (Array.isArray(subjectsRes?.message)) {
          setSubs(
            subjectsRes.message.map((subject: Subjects) => ({
              ...subject,
              chaptersLength: subject.chapters?.length || 0,
            }))
          );
        }

        if (quizRes?.data && Array.isArray(quizRes.data.sessions)) {
          const completed = new Set<string>();
          quizRes.data.sessions.forEach((s: { completedAt?: string; quiz?: { chapterId?: string } }) => {
            if (s.completedAt && s.quiz?.chapterId) completed.add(s.quiz.chapterId);
          });
          setCompletedChapterIds(completed);
        }
      } catch (err) {
        log.error('Failed to load subjects', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchAll();

    return () => {
      isMounted = false;
    };
  }, [params.class]);

  const filteredSubjects = subs.filter((sub) =>
    sub.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <SubjectCatalogSkeleton />;
  }

  return (
    <div className="bg-background min-h-screen flex flex-col p-6 md:p-10 gap-8">
      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-primary/60">
        <Link href="/ncert" className="hover:text-primary transition-colors">Curriculum</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-primary font-bold">Class {params.class}</span>
      </nav>

      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/40">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground font-semibold text-[11px]">
              CLASS {params.class}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Syllabus Catalog
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mt-2">Subject Directory</h1>
        </div>

        {/* Search and Grid/List Switcher */}
        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-accent/10 border border-border/60 pl-9 pr-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <div className="flex items-center border border-border/60 rounded-lg p-1 bg-accent/5">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-all ${
                viewMode === 'grid' ? 'bg-background shadow text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-all ${
                viewMode === 'list' ? 'bg-background shadow text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {filteredSubjects.length === 0 ? (
        <div className="text-center py-16 border border-dashed rounded-xl">
          <p className="text-muted-foreground text-sm">No subjects found matching "{searchQuery}".</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSubjects.map((val) => {
            const chapters = val.chapters || [];
            const completedCount = chapters.filter((ch) => completedChapterIds.has(ch.id)).length;
            const totalCount = chapters.length;
            const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
            const iconKey = val.name.split(' ')[0];

            return (
              <div
                key={val.id}
                className="bg-card border border-border/60 rounded-xl p-5 flex flex-col justify-between hover:shadow-md hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 bg-accent/20 rounded-lg">
                      {SUBJECT_ICONS[iconKey] || <Book className="w-5 h-5 text-primary" />}
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-accent/20">
                      {totalCount} Chapters
                    </span>
                  </div>

                  <div>
                    <h2 className="font-bold text-lg">{val.name}</h2>
                    <div className="flex justify-between items-center text-xs text-muted-foreground mt-3 mb-1">
                      <span>Progress</span>
                      <span className="font-semibold text-foreground">{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-accent/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                </div>

                <Link
                  href={`/ncert/${params.class}/${val.id}`}
                  className="mt-6 w-full py-2.5 bg-accent/20 hover:bg-primary hover:text-primary-foreground text-xs font-bold rounded-lg text-center transition-colors flex items-center justify-center gap-1"
                >
                  View Chapters <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredSubjects.map((val) => {
            const chapters = val.chapters || [];
            const completedCount = chapters.filter((ch) => completedChapterIds.has(ch.id)).length;
            const totalCount = chapters.length;
            const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
            const iconKey = val.name.split(' ')[0];

            return (
              <Link
                key={val.id}
                href={`/ncert/${params.class}/${val.id}`}
                className="bg-card border border-border/60 hover:border-primary/40 rounded-xl p-4 flex items-center justify-between gap-4 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    {SUBJECT_ICONS[iconKey] || <Book className="w-5 h-5" />}
                  </div>
                  <div>
                    <h2 className="font-bold text-sm sm:text-base">{val.name}</h2>
                    <p className="text-xs text-muted-foreground">{totalCount} total chapters</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="hidden sm:flex flex-col items-end w-28">
                    <span className="text-xs font-semibold">{progress}% Done</span>
                    <div className="w-full h-1.5 bg-accent/20 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
