import path from 'path';

const ALLOWED_DIRECTORIES = {
  notes: process.env.NOTES_UPLOAD_DIR || './uploads/notes',
  pdfs: process.env.PDF_DIR || './public/pdfs',
  exports: process.env.EXPORT_DIR || './exports',
} as const;

type AllowedDir = keyof typeof ALLOWED_DIRECTORIES;

export class FileSecurityError extends Error {
  constructor(message: string, public statusCode: number = 403) {
    super(message);
    this.name = 'FileSecurityError';
  }
}

export function validateFilePath(
  filename: string,
  directory: AllowedDir
): string {
  if (!filename || filename.trim().length === 0) {
    throw new FileSecurityError('Filename cannot be empty', 400);
  }

  if (!directory || !(directory in ALLOWED_DIRECTORIES)) {
    throw new FileSecurityError('Invalid directory', 400);
  }

  const basename = path.basename(filename);

  if (basename !== filename) {
    throw new FileSecurityError(
      'Path traversal detected: relative paths not allowed',
      403
    );
  }

  if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    throw new FileSecurityError(
      'Invalid filename: contains prohibited characters',
      403
    );
  }

  const allowedDir = ALLOWED_DIRECTORIES[directory];
  const fullPath = path.resolve(path.join(allowedDir, basename));
  const resolvedAllowedDir = path.resolve(allowedDir);

  if (!fullPath.startsWith(resolvedAllowedDir)) {
    throw new FileSecurityError(
      'File not in allowed directory',
      403
    );
  }

  return fullPath;
}

export const ALLOWED_MIME_TYPES = {
  pdf: 'application/pdf',
  csv: 'text/csv',
  json: 'application/json',
  zip: 'application/zip',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xls: 'application/vnd.ms-excel',
} as const;

export function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase().slice(1);
  return ALLOWED_MIME_TYPES[ext as keyof typeof ALLOWED_MIME_TYPES] || 'application/octet-stream';
}

export function isAllowedExtension(filename: string): boolean {
  const ext = path.extname(filename).toLowerCase().slice(1);
  return Object.keys(ALLOWED_MIME_TYPES).includes(ext);
}
