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

  useEffect(() => {
    let isMounted = true;

    Promise.all([fetchUser(), fetchSubjects(params.class)])
      .then(([nextUser, subjects]) => {
        if (!isMounted) return;

        setUser(nextUser);
        setSubs(subjects);
        setFocusSubject(subjects[0]);
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
                    <div className="flex flex-col justify-center items-center">
                      <p>70%</p>
                      <p className="text-[12px]">Completed</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-accent/14">
                    <div className="w-[70%] h-full bg-black"></div>
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
