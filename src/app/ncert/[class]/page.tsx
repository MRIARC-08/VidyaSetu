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
  progress?: {
    totalChapters: number;
    practicedChaptersCount: number;
  };
}

interface UserResponse {
  user?: {
    class?: string | number | null;
  };
}

interface SubjectProgressResponse {
  subjectId: string;
  subjectName: string;
  totalChapters: number;
  practicedChaptersCount: number;
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

  return res.message as Subjects[];
}

async function fetchSubjectProgress(classLevel: string) {
  const res = await authFetch({
    url: `/api/analytics/subject-progress?classLevel=${encodeURIComponent(classLevel)}`,
    options: {
      method: 'GET',
    },
  });

  if (!res.data || !Array.isArray(res.data)) {
    return [];
  }

  return res.data as SubjectProgressResponse[];
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

  useEffect(() => {
    let isMounted = true;

    Promise.all([
      fetchUser(),
      fetchSubjects(params.class),
      fetchSubjectProgress(params.class),
    ])
      .then(([nextUser, subjects, progress]) => {
        if (!isMounted) return;

        setUser(nextUser);

        const subjectsWithProgress = subjects.map((sub: Subjects) => {
          const subProgress = progress.find((p) => p.subjectId === sub.id);
          return {
            ...sub,
            progress: subProgress
              ? {
                  totalChapters: subProgress.totalChapters,
                  practicedChaptersCount: subProgress.practicedChaptersCount,
                }
              : { totalChapters: sub.chapters.length, practicedChaptersCount: 0 },
          };
        });

        setSubs(subjectsWithProgress);
        setFocusSubject(subjectsWithProgress[0]);
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
            const progressPercentage =
              val.progress && val.progress.totalChapters > 0
                ? Math.round(
                    (val.progress.practicedChaptersCount /
                      val.progress.totalChapters) *
                      100
                  )
                : 0;

            return (
              <div
                key={val.id}
                className={`${val === focusSubject ? '' : ''} bg-accent/8 p-4 flex flex-col justify-between`}
                onClick={() => setFocusSubject(val)}
              >
                <div>
                  <div>{subjectIcons[val.name.split(' ')[0]]}</div>
                  <div className="flex justify-between">
                    <p>{val.name}</p>
                    <div className="flex flex-col justify-center items-end">
                      <p>{progressPercentage}%</p>
                      <p className="text-[10px] text-primary/70">
                        {val.progress?.practicedChaptersCount || 0} of{' '}
                        {val.progress?.totalChapters || 0} chapters
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-accent/14 mt-2">
                    <div
                      className="h-full bg-black transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
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
