export class NotesApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'NotesApiError';
    this.statusCode = statusCode;
  }
}

export type UploadResult = {
  id: string;
  title: string;
  content: string | null;
  fileUrl: string | null;
  cloudinaryPublicId: string | null;
  extractedText: string | null;
  createdAt: Date;
};
