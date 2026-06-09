import { writeFile, unlink } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { PDFParse } from 'pdf-parse';
import { createWorker } from 'tesseract.js';

import { NotesRepository } from './notes.repository';
import { NotesApiError } from './notes.types';
import type { UploadResult } from './notes.types';

const isImage = (mimeType: string) =>
  ['image/png', 'image/jpeg', 'image/webp'].includes(mimeType);

const extractPdfText = async (filePath: string): Promise<string> => {
  const buffer = readFileSync(filePath);
  const pdf = new PDFParse({ data: buffer });
  const textResult = await pdf.getText();
  await pdf.destroy();
  return textResult.text;
};

const extractImageText = async (filePath: string): Promise<string> => {
  const worker = await createWorker('eng');
  const { data } = await worker.recognize(filePath);
  await worker.terminate();
  return data.text;
};

export class NotesServices {
  // ── Upload (existing) ──

  static async uploadNote(
    userId: string,
    title: string,
    file: File
  ): Promise<UploadResult> {
    const user = await NotesRepository.findUserById(userId);
    if (!user) {
      throw new NotesApiError('User not found', 404);
    }

    const ext = file.name.split('.').pop() || 'bin';
    const tempFilePath = join(tmpdir(), `${randomUUID()}.${ext}`);
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(tempFilePath, buffer);

    try {
      const extractedText =
        file.type === 'application/pdf'
          ? await extractPdfText(tempFilePath)
          : isImage(file.type)
            ? await extractImageText(tempFilePath)
            : null;

      const note = await NotesRepository.createNote({
        userId,
        title,
        content: null,
        fileUrl: null,
        extractedText,
      });

      return note;
    } finally {
      await unlink(tempFilePath).catch(() => {});
    }
  }

  // ── NEW METHODS ──

  static async getUserNotes(userId: string) {
    const user = await NotesRepository.findUserById(userId);
    if (!user) {
      throw new NotesApiError('User not found', 404);
    }

    return NotesRepository.findNotesByUser(userId);
  }

  static async getNoteById(userId: string, noteId: string) {
    const user = await NotesRepository.findUserById(userId);
    if (!user) {
      throw new NotesApiError('User not found', 404);
    }

    const note = await NotesRepository.findNoteById(noteId, userId);
    if (!note) {
      throw new NotesApiError('Note not found', 404);
    }

    return note;
  }

  static async deleteNote(userId: string, noteId: string) {
    const user = await NotesRepository.findUserById(userId);
    if (!user) {
      throw new NotesApiError('User not found', 404);
    }

    const note = await NotesRepository.findNoteById(noteId, userId);
    if (!note) {
      throw new NotesApiError('Note not found', 404);
    }

    await NotesRepository.deleteNote(noteId, userId);

    return { message: 'Note deleted successfully' };
  }
}