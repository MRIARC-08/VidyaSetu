import { beforeEach, describe, expect, it, vi } from 'vitest';

import authFetch from './authFetch';

describe('authFetch', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('returns parsed JSON responses unchanged', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ user: { id: 'user-1' } }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      })
    );

    vi.stubGlobal('fetch', fetchMock);

    const result = await authFetch({
      url: '/api/user/getUser',
      options: { method: 'GET' },
    });

    expect(fetchMock).toHaveBeenCalledWith('/api/user/getUser', {
      method: 'GET',
      credentials: 'include',
    });
    expect(result).toEqual({ user: { id: 'user-1' } });
  });

  it('returns a fallback object for 204 responses', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(null, {
        status: 204,
      })
    );

    vi.stubGlobal('fetch', fetchMock);

    const result = await authFetch({
      url: '/api/user/updateUser',
      options: { method: 'POST' },
    });

    expect(result).toEqual({
      status: 204,
      message: 'No content',
    });
  });

  it('returns a structured fallback for non-JSON responses', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response('<html>Server error</html>', {
        status: 500,
        headers: {
          'content-type': 'text/html',
        },
      })
    );

    vi.stubGlobal('fetch', fetchMock);

    const result = await authFetch({
      url: '/api/user/updateUser',
      options: { method: 'POST' },
    });

    expect(result).toEqual({
      status: 500,
      message: '<html>Server error</html>',
    });
  });
});
