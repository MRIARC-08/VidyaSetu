import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  updateUser: vi.fn(),
}));

vi.mock('@/lib/middleware/auth.middleware', () => ({
  withAuth:
    (handler: (req: Request, auth: { userId: string }) => Promise<Response>) =>
    async (req: Request) =>
      handler(req, {
        userId: 'user-1',
        role: 'STUDENT',
        isProfileCompleted: true,
      }),
}));

vi.mock('./user.repository', () => ({
  default: {
    updateUser: mocks.updateUser,
  },
}));

import UserController from './user.controller';

describe('UserController', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 400 for invalid user updates', async () => {
    const request = new Request('http://localhost/api/user/updateUser', {
      method: 'POST',
      body: JSON.stringify({ class: 'Select a class' }),
    });

    const response = await UserController.updateUser(request);
    const payload = await response.json();

    expect(response.status).toBe(400);
    expect(payload.message).toBe('Invalid request');
    expect(mocks.updateUser).not.toHaveBeenCalled();
  });
});
