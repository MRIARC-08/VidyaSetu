import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ZodError } from 'zod';

const mocks = vi.hoisted(() => ({
  updateUser: vi.fn(),
}));

vi.mock('./user.repository', () => ({
  default: {
    updateUser: mocks.updateUser,
  },
}));

import UserServices from './user.service';

describe('UserServices', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('validates user updates and forwards normalized data', async () => {
    mocks.updateUser.mockResolvedValue('updated');

    const result = await UserServices.updateUser('user-1', {
      name: 'Student User',
      class: '10',
      lastActiveDate: '2026-06-11T00:00:00.000Z',
    });

    expect(mocks.updateUser).toHaveBeenCalledWith({
      userId: 'user-1',
      data: {
        name: 'Student User',
        class: '10',
        lastActiveDate: new Date('2026-06-11T00:00:00.000Z'),
      },
    });
    expect(result).toBe('updated');
  });

  it('rejects invalid class values before touching the repository', async () => {
    await expect(
      UserServices.updateUser('user-1', {
        class: 'Select a class',
      } as never)
    ).rejects.toBeInstanceOf(ZodError);

    expect(mocks.updateUser).not.toHaveBeenCalled();
  });

  it('rejects empty update payloads', async () => {
    await expect(
      UserServices.updateUser('user-1', {} as never)
    ).rejects.toBeInstanceOf(ZodError);

    expect(mocks.updateUser).not.toHaveBeenCalled();
  });

  it('rejects unknown user fields', async () => {
    await expect(
      UserServices.updateUser('user-1', {
        nickname: 'New Name',
      } as never)
    ).rejects.toBeInstanceOf(ZodError);

    expect(mocks.updateUser).not.toHaveBeenCalled();
  });
});
