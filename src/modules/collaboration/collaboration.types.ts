import type { z } from 'zod';
import type {
  createGroupSchema,
  joinGroupSchema,
  createTutoringRequestSchema,
  updateTutoringRequestSchema,
  createSessionSchema,
  updateSessionSchema,
} from './collaboration.validator';

export class CollaborationApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'CollaborationApiError';
    this.statusCode = statusCode;
  }
}

export type CreateGroupInput = z.infer<typeof createGroupSchema>;
export type JoinGroupInput = z.infer<typeof joinGroupSchema>;
export type CreateTutoringRequestInput = z.infer<typeof createTutoringRequestSchema>;
export type UpdateTutoringRequestInput = z.infer<typeof updateTutoringRequestSchema>;
export type CreateSessionInput = z.infer<typeof createSessionSchema>;
export type UpdateSessionInput = z.infer<typeof updateSessionSchema>;

export type GroupMemberDTO = {
  id: string;
  userId: string;
  name: string | null;
  email: string;
  role: string;
  joinedAt: string;
};

export type StudyGroupDTO = {
  id: string;
  name: string;
  description: string | null;
  subjectId: string | null;
  createdBy: string;
  creatorName: string | null;
  memberCount: number;
  createdAt: string;
};

export type StudyGroupDetailDTO = StudyGroupDTO & {
  members: GroupMemberDTO[];
};

export type TutoringRequestDTO = {
  id: string;
  tutorId: string;
  tutorName: string | null;
  studentId: string;
  studentName: string | null;
  subjectId: string | null;
  status: string;
  message: string | null;
  createdAt: string;
};

export type TutoringSessionDTO = {
  id: string;
  tutorId: string;
  tutorName: string | null;
  studentId: string;
  studentName: string | null;
  scheduledAt: string;
  duration: number;
  status: string;
  notes: string | null;
  rating: number | null;
  completedAt: string | null;
};

export type CollaborationSummary = {
  activeGroups: number;
  pendingRequests: number;
  upcomingSessions: number;
  completedSessions: number;
};
