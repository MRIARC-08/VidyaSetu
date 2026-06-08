export interface AcademicClassDTO {
    id: string;
    name: string;
    subjects?: SubjectDTO[];
}

export interface SubjectDTO {
    id: string;
    name: string;
    classId: string;
    chapters?: ChapterDTO[];
}

export interface ChapterDTO {
    id: string;
    name: string;
    subjectId: string;

    pdf?: string | null;
    content?: string | null;

    topics?: TopicDTO[];
}

export interface TopicDTO {
    id: string;
    name: string;
    chapterId: string;

    content?: string | null;
    questionCount?: number;
}


export interface ApiResponseDTO<T> {
    status: number;
    message: T; // matches controller
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
    search?: string;
}

export interface NcertQueryDTO
    extends NcertPaginationDTO,
        NcertFilterDTO {}