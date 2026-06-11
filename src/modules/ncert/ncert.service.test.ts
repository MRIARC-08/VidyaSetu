import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  getUser: vi.fn(),
  getAcadmicClass: vi.fn(),
  getSubjects: vi.fn(),
  getChapters: vi.fn(),
  getChapter: vi.fn(),
}));

vi.mock('../user/user.service', () => ({
  default: {
    getUser: mocks.getUser,
  },
}));

vi.mock('./ncert.repository', () => ({
  NcertRepository: {
    getAcadmicClass: mocks.getAcadmicClass,
    getSubjects: mocks.getSubjects,
    getChapters: mocks.getChapters,
    getChapter: mocks.getChapter,
  },
}));

import { NcertServices } from './ncert.service';

describe('NcertServices', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns subjects for a valid academic class', async () => {
    mocks.getUser.mockResolvedValue({ class: '9' });
    mocks.getAcadmicClass.mockResolvedValue({ id: 'class-9' });
    mocks.getSubjects.mockResolvedValue([{ id: 'subject-1' }]);

    const result = await NcertServices.getSubjects();

    expect(mocks.getUser).toHaveBeenCalled();
    expect(mocks.getAcadmicClass).toHaveBeenCalledWith(9);
    expect(mocks.getSubjects).toHaveBeenCalledWith('class-9');
    expect(result).toEqual([{ id: 'subject-1' }]);
  });

  it('throws a 400 error when the user class is invalid', async () => {
    mocks.getUser.mockResolvedValue({ class: 'not-a-number' });

    await expect(NcertServices.getSubjects()).rejects.toMatchObject({
      message: 'Invalid academic class',
      statusCode: 400,
    });

    expect(mocks.getAcadmicClass).not.toHaveBeenCalled();
    expect(mocks.getSubjects).not.toHaveBeenCalled();
  });

  it('throws a 404 error when the subject does not exist', async () => {
    mocks.getUser.mockResolvedValue({ class: '9' });
    mocks.getAcadmicClass.mockResolvedValue(null);

    await expect(NcertServices.getSubjects()).rejects.toMatchObject({
      message: 'Academic class not found',
      statusCode: 404,
    });

    expect(mocks.getSubjects).not.toHaveBeenCalled();
  });

  it('throws a 404 error when a chapter is missing', async () => {
    mocks.getChapter.mockResolvedValue(null);

    await expect(NcertServices.getChapter('chapter-1')).rejects.toMatchObject({
      message: 'Chapter not found',
      statusCode: 404,
    });
  });
});
