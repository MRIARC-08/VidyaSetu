// TODO: Define NCERT types
export interface AcademicClassDTO {
  id: string;
  level: number;
  subjects?: SubjectDTO[];
}

export interface SubjectDTO {
  id: string;
  name: string;
  academicClassId: string;
  chapters?: ChapterDTO[];
}

export interface ChapterDTO {
  id: string;
  title: string;
  order: number;
  subjectId: string;
  pdf?: string | null;
  content?: string | null;
  contentFormat?: string | null;
  contentSource?: string | null;
  topics?: TopicDTO[];
}

export interface TopicDTO {
  id: string;
  title: string;
  order: number;
  content?: string | null;
  chapterId: string;
  questionCount?: number;
}

/* Request DTOs */

export interface GetSubjectsRequestDTO {
  classId: string;
}

export interface GetChaptersRequestDTO {
  subjectId: string;
}

export interface GetChapterRequestDTO {
  chapterId: string;
}

/* Response DTOs */

export interface SubjectsResponseDTO {
  status: number;
  message: SubjectDTO[];
}

export interface ChaptersResponseDTO {
  status: number;
  message: SubjectDTO | null;
}

export interface ChapterResponseDTO {
  status: number;
  message: ChapterDTO | null;
}
export interface NcertPaginationDTO {
  page?: number;
  limit?: number;
}

export interface NcertFilterDTO {
  classId?: string;
  subjectId?: string;
  chapterId?: string;
}