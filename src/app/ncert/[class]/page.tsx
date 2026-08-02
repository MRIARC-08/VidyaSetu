'use client';
import { log } from '@/lib/logger';
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

  return res.(message ?? []).map((subject: Subjects) => ({
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

  const [completedChapterIds, setCompletedChapterIds] = useState<Set<string>>(
    new Set()
  );

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
          res.data.sessions.forEach((s: { completedAt?: string; quiz?: { chapterId?: string } }) => {
            if (s.completedAt && s.quiz && s.quiz.chapterId) {
              completed.add(s.quiz.chapterId);
            }
          });
          return completed;
        }
      } catch (err) {
        log.error('Failed to fetch quiz history', err);
      }
      return new Set<string>();
    };

    Promise.all([fetchUser(), fetchSubjects(params.class), fetchQuizHistory()])
      .then(([nextUser, subjects, completedChapters]) => {
      .catch(err => console.error(err))