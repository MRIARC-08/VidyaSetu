export class NcertApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'NcertApiError';
    this.statusCode = statusCode;
  }
}

export type NcertSubject = {
  id: string;
  academicClassId: string;
  name: string;
};

export type NcertChapter = {
  id: string;
  subjectId: string;
  order: number;
  pdf: string;
  title: string;
};
