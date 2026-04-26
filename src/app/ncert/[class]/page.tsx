'use client';
import authFetch from '@/lib/auth/authFetch';
import { get, METHODS } from 'http';
import { use, useEffect, useState } from 'react';
import { object } from 'zod';
import { SubjectCatalogSkeleton } from '@/components/Skeletons';

import { ReactNode } from 'react';
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

export default function page() {
  const [user, setUser] = useState<any>();
  const [subs, setSubs] = useState<Subjects[]>([]);
  const [chapter, setChapters] = useState(null);
  const [focusSubject, setFocusSubject] = useState<Subjects>();
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    const url = '/api/user/getUser';
    const options = {
      method: 'GET',
    };
    const user = await authFetch({ url, options });
    setUser(user);
  };

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

  const getSubjects = async () => {
    const url = '/api/ncert/subjects';
    const options = {
      method: 'GET',
    };
    const res = await authFetch({ url, options });

    if (res.message.length > 0) {
      const arr = Object.values(res.message) as Subjects[];
      const data = arr.map((val) => {
        return { ...val, chaptersLength: val.chapters.length };
      });

      setSubs(data);
      console.log(data);
      setFocusSubject(arr[0]);
    }
  };

  useEffect(() => {
    Promise.all([getUser(), getSubjects()]).finally(() => {
      setIsLoading(false);
    });
  }, []);

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
                  href={`/ncert/${user?.user?.class}/${val.id}`}
                >
                  VIER CURRICULAM
                </a>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
