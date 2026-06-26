import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  getChapter: vi.fn(),
}));

vi.mock('./ncert.service', () => ({
  NcertServices: {
    getChapter: mocks.getChapter,
  },
}));

import { NcertController } from './ncert.controller';

describe('NcertController.getChapter', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('loads a chapter when class, subject, and chapter route params are present', async () => {
    mocks.getChapter.mockResolvedValue({
      id: 'chap_1',
      title: 'Algebra Basics',
    });

    const request = new Request(
      'http://localhost/api/ncert/chapter?class=10&subject=sub_1&chapter=chap_1'
    );

    const response = await NcertController.getChapter(request);
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(mocks.getChapter).toHaveBeenCalledWith('chap_1');
    expect(payload).toEqual({
      status: 200,
      message: {
        id: 'chap_1',
        title: 'Algebra Basics',
      },
    });
  });

  it('rejects chapter requests that omit the parent class or subject context', async () => {
    const request = new Request(
      'http://localhost/api/ncert/chapter?chapter=chap_1'
    );

    const response = await NcertController.getChapter(request);
    const payload = await response.json();

    expect(response.status).toBe(400);
    expect(payload.message).toBe('Invalid NCERT request parameters');
    expect(payload.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          path: ['classId'],
          message: 'classId is required',
        }),
      ])
    );
    expect(mocks.getChapter).not.toHaveBeenCalled();
  });
});
