import { prisma } from '@/lib/prisma';

export class NotesRepository {
  static findUserById(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });
  }

  static createNote(data: {
    userId: string;
    title: string;
    content: string | null;
    fileUrl: string | null;
    extractedText: string | null;
  }) {
    return prisma.note.create({
      data,
      select: {
        id: true,
        title: true,
        content: true,
        fileUrl: true,
        extractedText: true,
        createdAt: true,
      },
    });
  }


  static findNotesByUser(userId: string) {
    return prisma.note.findMany({
      where: { userId, deletedAt: null },
      select: {
        id: true,
        title: true,
        content: true,
        fileUrl: true,
        extractedText: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: 'desc' },
    });
  }

  static findNoteById(noteId: string, userId: string) {
    return prisma.note.findFirst({
      where: { id: noteId, userId, deletedAt: null },
      select: {
        id: true,
        title: true,
        content: true,
        fileUrl: true,
        extractedText: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  static deleteNote(noteId: string, userId: string) {
    return prisma.note.updateMany({
      where: { id: noteId, userId, deletedAt: null },
      data: { deletedAt: new Date() },
    });
  }
}