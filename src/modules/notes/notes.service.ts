import { writeFile, unlink } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { PDFParse } from 'pdf-parse';
import { createWorker } from 'tesseract.js';

import cloudinary from '@/lib/cloudinary';
import { generateStudyNotes } from '@/lib/content-validator';
import { NotesRepository } from './notes.repository';
import { NotesApiError } from './notes.types';
import type { UploadResult } from './notes.types';
import { ValidationStatus } from '@/generated/prisma/enums';

const isImage = (mimeType: string) =>
  ['image/png', 'image/jpeg', 'image/webp'].includes(mimeType);

const getFileExtension = (mimeType: string): string => {
  switch (mimeType) {
    case 'application/pdf':
      return '.pdf';
    case 'image/png':
      return '.png';
    case 'image/jpeg':
      return '.jpg';
    case 'image/webp':
      return '.webp';
    default:
      return '.bin';
  }
};

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

    const tempFilePath = join(
      tmpdir(),
      `${randomUUID()}${getFileExtension(file.type)}`
    );
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(tempFilePath, buffer);

    try {
      const extractedText =
        file.type === 'application/pdf'
          ? await extractPdfText(tempFilePath)
          : isImage(file.type)
            ? await extractImageText(tempFilePath)
            : null;

      const uploadResult = await cloudinary.uploader.upload(tempFilePath, {
        folder: 'notes',
        resource_type: 'auto',
      });

      const note = await NotesRepository.createNote({
        userId,
        title,
        content: null,
        fileUrl: uploadResult.secure_url ?? uploadResult.url ?? null,
        cloudinaryPublicId: uploadResult.public_id,
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

    if (note.cloudinaryPublicId) {
      try {
        await cloudinary.uploader.destroy(note.cloudinaryPublicId);
      } catch (error) {
        console.error(
          `Failed to delete Cloudinary asset ${note.cloudinaryPublicId}`,
          error
        );
      }
    }

    return { message: 'Note deleted successfully' };
  }

  static async generateAINote(
    userId: string,
    title: string,
    chapter: string,
    topic: string,
    sourceContent: string
  ) {
    const user = await NotesRepository.findUserById(userId);
    if (!user) {
      throw new NotesApiError('User not found', 404);
    }

    try {
      const { content, validationResult } = await generateStudyNotes(
        chapter,
        topic,
        sourceContent
      );

      const validationStatus: ValidationStatus = validationResult.isValid
        ? ValidationStatus.VALIDATED
        : validationResult.safetyFlags.length > 0 ||
          validationResult.factualityIssues.length > 0
          ? ValidationStatus.REQUIRES_REVIEW
          : ValidationStatus.VALIDATED;

      const safetyFlags =
        validationResult.safetyFlags.length > 0 ||
        validationResult.factualityIssues.length > 0
          ? JSON.stringify({
              safetyFlags: validationResult.safetyFlags,
              factualityIssues: validationResult.factualityIssues,
              recommendations: validationResult.recommendations,
            })
          : null;

      const note = await NotesRepository.createNote({
        userId,
        title,
        content,
        fileUrl: null,
        cloudinaryPublicId: null,
        extractedText: null,
        isAIGenerated: true,
        validationStatus,
        safetyFlags,
      });

      return {
        ...note,
        validationDetails: validationResult,
      };
    } catch (error) {
      throw new NotesApiError(
        `Failed to generate AI notes: ${error instanceof Error ? error.message : 'Unknown error'}`,
        500
      );
    }
  }
}
