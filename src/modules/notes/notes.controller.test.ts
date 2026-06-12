import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  verifyCookies: vi.fn(),
  uploadNote: vi.fn(),
}));

vi.mock('@/lib/auth/cookies', () => ({
  SetCookies: {
    verifyCookies: mocks.verifyCookies,
  },
}));

vi.mock('./notes.service', () => ({
  NotesServices: {
    uploadNote: mocks.uploadNote,
  },
}));

import { NotesControllers } from './notes.controller';

describe('NotesControllers', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('rejects uploads without an authenticated user', async () => {
    mocks.verifyCookies.mockResolvedValue(null);

    const request = new Request('http://localhost/api/notes/upload', {
      method: 'POST',
      body: new FormData(),
    });

    const response = await NotesControllers.upload(request);
    const payload = await response.json();

    expect(response.status).toBe(401);
    expect(payload.message).toBe('Authentication required');
    expect(mocks.uploadNote).not.toHaveBeenCalled();
  });

  it('ignores client-supplied userId and uses the auth session instead', async () => {
    mocks.verifyCookies.mockResolvedValue({ sub: 'user-1' });
    mocks.uploadNote.mockResolvedValue({
      id: 'note-1',
      title: 'Lesson note',
      content: null,
      fileUrl: 'https://example.com/note.png',
      extractedText: 'Extracted text',
      createdAt: new Date('2026-06-11T00:00:00.000Z'),
    });

    const formData = new FormData();
    formData.append('userId', 'user-2');
    formData.append('title', 'Lesson note');
    formData.append(
      'file',
      new File([new Uint8Array([1, 2, 3])], 'lesson.png', {
        type: 'image/png',
      })
    );

    const request = new Request('http://localhost/api/notes/upload', {
      method: 'POST',
      body: formData,
    });

    const response = await NotesControllers.upload(request);
    const payload = await response.json();

    expect(response.status).toBe(201);
    expect(mocks.uploadNote).toHaveBeenCalledWith(
      'user-1',
      'Lesson note',
      expect.any(File)
    );
    expect(payload.data.fileUrl).toBe('https://example.com/note.png');
  });
});
