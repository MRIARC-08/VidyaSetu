import authFetch from '@/lib/auth/authFetch';
import type {
  CreateQuizInput,
  CreateQuizResponse,
  QuizApiSuccess,
  QuizApiErrorResponse,
  ChapterInfo,
} from '@/modules/quiz/quiz.types';

type SubjectsResponse = {
  id: string;
  name: string;
  chapters: ChapterInfo[];
}[];

export async function createQuiz(input: CreateQuizInput) {
  const res = await authFetch({
    url: '/api/quiz/create',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    },
  });

  if ((res as QuizApiErrorResponse).message && !(res as QuizApiSuccess<CreateQuizResponse>).data) {
    throw new Error((res as QuizApiErrorResponse).message);
  }

  return (res as QuizApiSuccess<CreateQuizResponse>).data;
}

export async function fetchSubjects() {
  const res = await authFetch({
    url: '/api/ncert/subjects',
    options: { method: 'GET' },
  });

  if (!Array.isArray(res.message)) {
    throw new Error(res.message || 'Failed to load subjects');
  }

  return res.message as SubjectsResponse;
}

export async function fetchUserProfile() {
  const res = await authFetch({
    url: '/api/user/getUser',
    options: { method: 'GET' },
  });

  if (!res.user) {
    throw new Error('Failed to load user profile');
  }

  return res.user as { class?: string | number | null };
}
