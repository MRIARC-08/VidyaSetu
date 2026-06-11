import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  getSubjects: vi.fn(),
  getChapters: vi.fn(),
  getChapter: vi.fn(),
}));

vi.mock('./ncert.service', () => ({
  NcertServices: {
    getSubjects: mocks.getSubjects,
    getChapters: mocks.getChapters,
    getChapter: mocks.getChapter,
  },
}));

import { NcertController } from './ncert.controller';
import { NcertApiError } from './ncert.types';

describe('NcertController', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 200 for a successful subjects response', async () => {
    mocks.getSubjects.mockResolvedValue([{ id: 'subject-1' }]);

    const response = await NcertController.getSubjects(
      new Request('http://localhost/api/ncert/subjects')
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      status: 200,
      message: [{ id: 'subject-1' }],
    });
  });

  it('returns the service status code for NCERT errors', async () => {
    mocks.getChapters.mockRejectedValue(
      new NcertApiError('Subject not found', 404)
    );

    const response = await NcertController.getChapters(
      new Request('http://localhost/api/ncert/chapters?subject=missing')
    );

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({
      status: 404,
      message: 'Subject not found',
    });
  });

  it('falls back to 500 for unexpected errors', async () => {
    mocks.getChapter.mockRejectedValue(new Error('database failure'));

    const response = await NcertController.getChapter(
      new Request('http://localhost/api/ncert/chapter?chapter=chapter-1')
    );

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({
      status: 500,
      message: 'Failed to load NCERT chapter',
    });
  });
});
