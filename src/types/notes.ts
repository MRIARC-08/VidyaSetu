export interface Note {
  id: string;
  title: string;
  content?: string | null;
  extractedText?: string | null;
  fileUrl?: string | null;
  createdAt: string;
  updatedAt?: string;
}
