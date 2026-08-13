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

  const contentType = res.headers.get('content-type') ?? '';
  const bodyText = await res.text();

  if (!bodyText.trim()) {
    return {
      status: res.status,
      message: res.statusText || 'No content',
    };
  }

  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(bodyText);
    } catch {
      return {
        status: res.status,
        message: res.statusText || 'Invalid JSON response',
      };
    }
  }

  return {
    status: res.status,
    message: bodyText.trim() || res.statusText || 'Request failed',
  };
};

export default authFetch;
