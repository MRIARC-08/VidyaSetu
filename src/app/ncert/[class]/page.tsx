'use client';
import authFetch from '@/lib/auth/authFetch';
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
} from 'lucide-react';

interface Subjects {
  academicClassId: string;
  id: string;
  name: string;
  chapters: {
    id: string;
    order: number;
    pdf: string;
    subjectId: string;
    title: string;
  }[];
}

interface UserResponse {
  user?: {
    class?: string | number | null;
  };
}

async function fetchUser() {
  return authFetch({
    url: '/api/user/getUser',
    options: {
      method: 'GET',
    },
  }) as Promise<UserResponse>;
}

async function fetchSubjects(classId: string) {
  const res = await authFetch({
    url: `/api/ncert/subjects?classId=${encodeURIComponent(classId)}`,
    options: {
      method: 'GET',
    },
  });

  if (!Array.isArray(res.message) || res.message.length === 0) {
    return [];
  }

  return res.message.map((subject: Subjects) => ({
    ...subject,
    chaptersLength: subject.chapters.length,
  }));
}

export default function Page() {
  const params = useParams<{ class: string }>();
  const [user, setUser] = useState<UserResponse>();
  const [subs, setSubs] = useState<Subjects[]>([]);
  const [focusSubject, setFocusSubject] = useState<Subjects>();
  const [isLoading, setIsLoading] = useState(true);

  const subjectIcons: Record<string, ReactNode> = {
    Mathematics: <Book />,
    Physics: <Zap />,
    Chemistry: <FlaskConical />,
    Biology: <Microscope />,
    Accountancy: <Scale />,
    'Business Studies': <Landmark />,
    Economics: <Landmark />,
    History: <Book />,
    Geography: <Globe />,
    'Political Science': <Scale />,
    Sociology: <Brain />,
    Psychology: <Brain />,
    English: <Book />,
    Hindi: <Book />,
  };

  const [completedChapterIds, setCompletedChapterIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    let isMounted = true;

    const fetchQuizHistory = async () => {
      try {
        const res = await authFetch({
          url: '/api/quiz/history?limit=100',
          options: { method: 'GET' },
        });
        if (res && res.data && Array.isArray(res.data.sessions)) {
          const completed = new Set<string>();
          res.data.sessions.forEach((s: any) => {
            if (s.completedAt && s.quiz && s.quiz.chapterId) {
              completed.add(s.quiz.chapterId);
            }
          });
          return completed;
        }
      } catch (err) {
        console.error('Failed to fetch quiz history:', err);
      }
      return new Set<string>();
    };

    Promise.all([fetchUser(), fetchSubjects(params.class), fetchQuizHistory()])
      .then(([nextUser, subjects, completedChapters]) => {
        if (!isMounted) return;

        setUser(nextUser);
        setSubs(subjects);
        setFocusSubject(subjects[0]);
        setCompletedChapterIds(completedChapters);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [params.class]);

  if (isLoading) {
    return <SubjectCatalogSkeleton />;
  }

  return (
    <div className="bg-background min-h-screen flex flex-col p-8 gap-8">
      <div>
        <p className="text-[12px] text-primary/70 font-semibold">
          ACADEMIC YEAR 2024-25
        </p>
        <p className="text-3xl font-bold">Subject Catalog</p>
        <p className="mt-2 pl-4 pr-4 bg-primary w-max text-white font-medium text-[12px] uppercase">
          {`class 
        ${user?.user?.class || ''}`}
        </p>
      </div>

      <div className="flex flex-col gap-2 ">
        <div className="flex justify-end font-semibold"></div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 transition-all duration-300 ">
          {subs.map((val: Subjects) => {
            const chapters = val.chapters || [];
            const completedCount = chapters.filter((ch: any) => completedChapterIds.has(ch.id)).length;
            const totalCount = chapters.length;
            const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

            return (
              <div
                key={val.id}
                className={`${val === focusSubject ? '' : ''} bg-accent/8 p-4 flex flex-col justify-between`}
                onClick={() => setFocusSubject(val)}
              >
                <div>
                  <div>{subjectIcons[val.name.split(' ')[0]]}</div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold">{val.name}</p>
                    <div className="flex flex-col justify-center items-end">
                      <p className="text-sm font-bold">{progressPercentage}%</p>
                      <p className="text-[10px] text-muted-foreground whitespace-nowrap">{completedCount} of {totalCount} practiced</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-accent/14 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                  </div>
                </div>

                <a
                  className="bg-white text-[14px] font-bold p-3 mt-4 text-center hover:bg-primary cursor-pointer hover:text-white transition-all duration-300"
                  href={`/ncert/${params.class}/${val.id}`}
                >
                  VIEW CURRICULUM
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
