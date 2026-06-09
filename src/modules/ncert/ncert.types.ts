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

export type AcademicClassResponseDTO =
    ApiResponseDTO<AcademicClassDTO | null>;

export type SubjectResponseDTO =
    ApiResponseDTO<SubjectDTO | null>;

export type SubjectsResponseDTO =
    ApiResponseDTO<SubjectDTO[]>;

export type ChapterResponseDTO =
    ApiResponseDTO<ChapterDTO | null>;

export type ChaptersResponseDTO =
    ApiResponseDTO<ChapterDTO[]>;

export type TopicResponseDTO =
    ApiResponseDTO<TopicDTO | null>;

export type TopicsResponseDTO =
    ApiResponseDTO<TopicDTO[]>;