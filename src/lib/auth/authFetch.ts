
let refreshPromise: Promise<boolean> | null = null;

const refresh = async (): Promise<boolean> => {
    const res = await fetch('/api/auth/refresh', {
      method: 'GET',
      credentials: 'include',
    });

    console.log(res, "=====")

    return res.ok;
};

const authFetch = async ({
  url,
  options,
}: {
  url: string;
  options: RequestInit;
}) => {
  let res = await fetch(url, { ...options, credentials: 'include' });

  if (res.status === 401) {
    
    if (!refreshPromise) {
      refreshPromise = refresh().finally(() => {
        refreshPromise = null;
      });
    }

    const refreshed = await refreshPromise;
    console.log(refreshed);

    if (refreshed) {
      res = await fetch(url, { ...options, credentials: 'include' });
    }
  }

  const result = await res.json();

  return result;
};

export default authFetch;
