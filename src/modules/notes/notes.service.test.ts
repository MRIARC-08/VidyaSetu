import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  findUserById: vi.fn(),
  createNote: vi.fn(),
  writeFile: vi.fn(),
  unlink: vi.fn(),
  readFileSync: vi.fn(),
  upload: vi.fn(),
  pdfGetText: vi.fn(),
  pdfDestroy: vi.fn(),
  createWorker: vi.fn(),
  recognize: vi.fn(),
  terminate: vi.fn(),
}));

vi.mock('@/lib/cloudinary', () => ({
  default: {
    uploader: {
      upload: mocks.upload,
    },
  },
}));

vi.mock('./notes.repository', () => ({
  NotesRepository: {
    findUserById: mocks.findUserById,
    createNote: mocks.createNote,
  },
}));

vi.mock('node:fs/promises', () => ({
  writeFile: mocks.writeFile,
  unlink: mocks.unlink,
}));

vi.mock('node:fs', () => ({
  readFileSync: mocks.readFileSync,
}));

vi.mock('pdf-parse', () => ({
  PDFParse: class {
    getText = mocks.pdfGetText;
    destroy = mocks.pdfDestroy;
  },
}));

vi.mock('tesseract.js', () => ({
  createWorker: mocks.createWorker,
}));

import { NotesServices } from './notes.service';

describe('NotesServices', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mocks.findUserById.mockResolvedValue({ id: 'user-1' });
    mocks.createNote.mockResolvedValue({
      id: 'note-1',
      title: 'My note',
      content: null,
      fileUrl: 'https://res.cloudinary.com/demo/raw/upload/v1/notes/file.png',
      extractedText: 'Extracted text',
      createdAt: new Date('2026-06-11T00:00:00.000Z'),
    });
    mocks.writeFile.mockResolvedValue(undefined);
    mocks.unlink.mockResolvedValue(undefined);
    mocks.readFileSync.mockReturnValue(Buffer.from('pdf-data'));
    mocks.upload.mockResolvedValue({
      secure_url:
        'https://res.cloudinary.com/demo/raw/upload/v1/notes/file.png',
      url: 'http://res.cloudinary.com/demo/raw/upload/v1/notes/file.png',
    });
    mocks.pdfGetText.mockResolvedValue({ text: 'Extracted text' });
    mocks.pdfDestroy.mockResolvedValue(undefined);
    mocks.createWorker.mockResolvedValue({
      recognize: mocks.recognize,
      terminate: mocks.terminate,
    });
    mocks.recognize.mockResolvedValue({
      data: { text: 'Extracted text' },
    });
    mocks.terminate.mockResolvedValue(undefined);
  });

  it('uploads a note with a durable file URL', async () => {
    const file = new File([new Uint8Array([1, 2, 3])], 'lesson.png', {
      type: 'image/png',
    });

    const result = await NotesServices.uploadNote(
      'user-1',
      'Lesson note',
      file
    );

    expect(mocks.findUserById).toHaveBeenCalledWith('user-1');
    expect(mocks.writeFile).toHaveBeenCalledTimes(1);
    expect(mocks.writeFile.mock.calls[0]?.[0]).toMatch(/\.png$/);
    expect(mocks.upload).toHaveBeenCalledWith(expect.any(String), {
      folder: 'notes',
      resource_type: 'auto',
    });
    expect(mocks.createNote).toHaveBeenCalledWith({
      userId: 'user-1',
      title: 'Lesson note',
      content: null,
      fileUrl: 'https://res.cloudinary.com/demo/raw/upload/v1/notes/file.png',
      extractedText: 'Extracted text',
    });
    expect(mocks.unlink).toHaveBeenCalledTimes(1);
    expect(result.fileUrl).toBe(
      'https://res.cloudinary.com/demo/raw/upload/v1/notes/file.png'
    );
  });

  it('uses the validated MIME type for the temporary file extension', async () => {
    const file = new File([new Uint8Array([1, 2, 3])], 'misleading.png', {
      type: 'application/pdf',
    });

    await NotesServices.uploadNote('user-1', 'Lesson note', file);

    expect(mocks.writeFile.mock.calls[0]?.[0]).toMatch(/\.pdf$/);
    expect(mocks.pdfGetText).toHaveBeenCalledTimes(1);
  });

  it('still cleans up the temp file when extraction fails', async () => {
    mocks.upload.mockRejectedValue(new Error('upload failed'));

    const file = new File([new Uint8Array([1, 2, 3])], 'lesson.png', {
      type: 'image/png',
    });

    await expect(
      NotesServices.uploadNote('user-1', 'Lesson note', file)
    ).rejects.toThrow('upload failed');

    expect(mocks.unlink).toHaveBeenCalledTimes(1);
  });
});
