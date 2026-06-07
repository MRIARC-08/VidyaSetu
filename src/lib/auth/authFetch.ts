import { showError } from '@/lib/toast';

let refreshPromise: Promise<boolean> | null = null;

const refresh = async (): Promise<boolean> => {
  const res = await fetch('/api/auth/refresh', {
    method: 'GET',
    credentials: 'include',
  });

  return res.ok;
};

const authFetch = async ({
  url,
  options,
}: {
  url: string;
  options: RequestInit;
}) => {
  try {
    let res = await fetch(url, { ...options, credentials: 'include' });

    if (res.status === 401) {
      if (!refreshPromise) {
        refreshPromise = refresh().finally(() => {
          refreshPromise = null;
        });
      }

      const refreshed = await refreshPromise;

      if (refreshed) {
        res = await fetch(url, { ...options, credentials: 'include' });
      }
    }

    const result = await res.json().catch(() => ({}));

    if (!res.ok) {
      const errorMessage = result?.message || result?.error || 'Something went wrong';
      showError(errorMessage);
      throw new Error(errorMessage);
    }

    return result;
  } catch (error: any) {
    if (error instanceof Error) {
      if (error.message === 'Failed to fetch') {
        showError('Network error. Please check your connection.');
      }
    } else {
      showError(error?.message || 'Something went wrong');
    }
    throw error;
  }
};

export default authFetch;
