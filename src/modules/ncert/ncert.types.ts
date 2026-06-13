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
  chapterId: string;

  content?: string | null;
  questionCount?: number;
}

export interface ApiResponseDTO<T> {
  status: number;
  message: T;
}

export interface GetSubjectsRequestDTO {
  classId?: string;
  class?: string;
}

export interface GetChaptersRequestDTO {
  subjectId?: string;
  subject?: string;
}

export interface GetChapterRequestDTO {
  chapterId?: string;
  chapter?: string;
}

export interface NcertPaginationDTO {
  page?: number;
  limit?: number;
}

export interface NcertFilterDTO {
  classId?: string;
  subjectId?: string;
  chapterId?: string;
  topicId?: string;
  search?: string;
}

export interface NcertQueryDTO
  extends NcertPaginationDTO,
    NcertFilterDTO {}

/**
 * Classes endpoint
 * Reviewer noted this endpoint returns:
 * { classes: AcademicClassDTO[] }
 * rather than { status, message }
 */
export interface ClassesResponseDTO {
  classes: AcademicClassDTO[];
}

/**
 * Single resource responses
 */
export type AcademicClassResponseDTO =
  ApiResponseDTO<AcademicClassDTO | null>;

export type SubjectResponseDTO =
  ApiResponseDTO<SubjectDTO | null>;

export type ChapterResponseDTO =
  ApiResponseDTO<ChapterDTO | null>;

export type TopicResponseDTO =
  ApiResponseDTO<TopicDTO | null>;

/**
 * Collection responses
 */
export type SubjectsResponseDTO =
  ApiResponseDTO<SubjectDTO[]>;

/**
 * getChapters() returns a Subject object
 * containing its chapters.
 */
export type ChaptersResponseDTO =
  ApiResponseDTO<SubjectDTO>;

export type TopicsResponseDTO =
  ApiResponseDTO<TopicDTO[]>;