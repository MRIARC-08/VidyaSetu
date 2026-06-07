import { showError } from '@/lib/toast';

export async function apiRequest<T = any>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const errorMessage = data?.message || data?.error || 'Something went wrong';
      showError(errorMessage);
      throw new Error(errorMessage);
    }

    return data as T;
  } catch (error: any) {
    const message = error?.message || 'Something went wrong';
    // Only show toast here if we didn't throw an Error with a custom message that was already toasted
    if (!(error instanceof Error)) {
      showError(message);
    }
    throw error;
  }
}
