import { CollaborationRepository } from './collaboration.repository';
import { CollaborationApiError } from './collaboration.types';
import type {
  CreateGroupInput,
  JoinGroupInput,
  CreateTutoringRequestInput,
  UpdateTutoringRequestInput,
  CreateSessionInput,
  UpdateSessionInput,
  StudyGroupDTO,
  StudyGroupDetailDTO,
  GroupMemberDTO,
  TutoringRequestDTO,
  TutoringSessionDTO,
  CollaborationSummary,
} from './collaboration.types';

function toGroupDTO(group: any): StudyGroupDTO {
  return {
    id: group.id,
    name: group.name,
    description: group.description,
    subjectId: group.subjectId,
    createdBy: group.creator?.id ?? group.createdBy,
    creatorName: group.creator?.name ?? null,
    memberCount: group._count?.members ?? (group.members?.length ?? 0),
    createdAt: group.createdAt.toISOString(),
  };
}

function toGroupDetailDTO(group: any): StudyGroupDetailDTO {
  return {
    ...toGroupDTO(group),
    members: (group.members ?? []).map((m: any) => ({
      id: m.id,
      userId: m.userId,
      name: m.user?.name ?? null,
      email: m.user?.email ?? '',
      role: m.role,
      joinedAt: m.joinedAt.toISOString(),
    })),
  };
}

function toRequestDTO(req: any): TutoringRequestDTO {
  return {
    id: req.id,
    tutorId: req.tutorId,
    tutorName: req.tutor?.name ?? null,
    studentId: req.studentId,
    studentName: req.student?.name ?? null,
    subjectId: req.subjectId,
    status: req.status,
    message: req.message,
    createdAt: req.createdAt.toISOString(),
  };
}

function toSessionDTO(session: any): TutoringSessionDTO {
  return {
    id: session.id,
    tutorId: session.tutorId,
    tutorName: session.tutor?.name ?? null,
    studentId: session.studentId,
    studentName: session.student?.name ?? null,
    scheduledAt: session.scheduledAt.toISOString(),
    duration: session.duration,
    status: session.status,
    notes: session.notes,
    rating: session.rating,
    completedAt: session.completedAt?.toISOString() ?? null,
  };
}

export class CollaborationServices {
  static async createGroup(input: CreateGroupInput) {
    const user = await CollaborationRepository.findUserById(input.userId);
    if (!user) throw new CollaborationApiError('User not found', 404);

    const group = await CollaborationRepository.createGroup({
      name: input.name,
      description: input.description ?? null,
      subjectId: input.subjectId ?? null,
      createdBy: input.userId,
    });

    await CollaborationRepository.addMember({
      groupId: group.id,
      userId: input.userId,
      role: 'OWNER',
    });

    const full = await CollaborationRepository.findGroupById(group.id);
    return toGroupDetailDTO(full);
  }

  static async listGroups(userId?: string) {
    const groups = userId
      ? await CollaborationRepository.listGroupsByUser(userId)
      : await CollaborationRepository.listGroups();

    return groups.map(toGroupDTO);
  }

  static async getGroup(groupId: string, userId: string) {
    const group = await CollaborationRepository.findGroupById(groupId);
    if (!group) throw new CollaborationApiError('Study group not found', 404);

    return toGroupDetailDTO(group);
  }

  static async joinGroup(input: JoinGroupInput) {
    const group = await CollaborationRepository.findGroupById(input.groupId);
    if (!group) throw new CollaborationApiError('Study group not found', 404);

    const existing = await CollaborationRepository.findMembership(input.groupId, input.userId);
    if (existing) throw new CollaborationApiError('Already a member of this group', 409);

    await CollaborationRepository.addMember({
      groupId: input.groupId,
      userId: input.userId,
      role: 'MEMBER',
    });

    return { message: 'Joined group successfully' };
  }

  static async leaveGroup(groupId: string, userId: string) {
    const group = await CollaborationRepository.findGroupById(groupId);
    if (!group) throw new CollaborationApiError('Study group not found', 404);

    const membership = await CollaborationRepository.findMembership(groupId, userId);
    if (!membership) throw new CollaborationApiError('Not a member of this group', 404);

    if (membership.role === 'OWNER') {
      const count = await CollaborationRepository.countMembers(groupId);
      if (count > 1) {
        throw new CollaborationApiError('Transfer ownership before leaving', 400);
      }
    }

    await CollaborationRepository.removeMember(groupId, userId);
    return { message: 'Left group successfully' };
  }

  static async createTutoringRequest(input: CreateTutoringRequestInput) {
    const tutor = await CollaborationRepository.findUserById(input.tutorId);
    if (!tutor) throw new CollaborationApiError('Tutor not found', 404);

    if (input.userId === input.tutorId) {
      throw new CollaborationApiError('Cannot request tutoring from yourself', 400);
    }

    const request = await CollaborationRepository.createTutoringRequest({
      tutorId: input.tutorId,
      studentId: input.userId,
      subjectId: input.subjectId ?? null,
      message: input.message ?? null,
    });

    const full = await CollaborationRepository.findTutoringRequestById(request.id);
    return toRequestDTO(full!);
  }

  static async listTutoringRequests(userId: string) {
    const requests = await CollaborationRepository.listTutoringRequests(userId);
    return requests.map(toRequestDTO);
  }

  static async updateTutoringRequest(input: UpdateTutoringRequestInput) {
    const request = await CollaborationRepository.findTutoringRequestById(input.requestId);
    if (!request) throw new CollaborationApiError('Tutoring request not found', 404);

    if (request.tutorId !== input.userId) {
      throw new CollaborationApiError('Only the tutor can update this request', 403);
    }

    if (request.status !== 'PENDING') {
      throw new CollaborationApiError('Request has already been processed', 400);
    }

    const updated = await CollaborationRepository.updateTutoringRequest(input.requestId, {
      status: input.status,
    });

    return toRequestDTO(updated);
  }

  static async createSession(input: CreateSessionInput) {
    const session = await CollaborationRepository.createSession({
      groupId: input.groupId ?? null,
      requestId: input.requestId ?? null,
      tutorId: input.tutorId,
      studentId: input.studentId,
      scheduledAt: new Date(input.scheduledAt),
      duration: input.duration,
    });

    const full = await CollaborationRepository.findSessionById(session.id);
    return toSessionDTO(full!);
  }

  static async listSessions(userId: string) {
    const sessions = await CollaborationRepository.listSessions(userId);
    return sessions.map(toSessionDTO);
  }

  static async updateSession(input: UpdateSessionInput) {
    const session = await CollaborationRepository.findSessionById(input.sessionId);
    if (!session) throw new CollaborationApiError('Session not found', 404);

    if (session.tutorId !== input.userId && session.studentId !== input.userId) {
      throw new CollaborationApiError('Not authorized to update this session', 403);
    }

    const updateData: any = { status: input.status };
    if (input.notes !== undefined) updateData.notes = input.notes;
    if (input.rating !== undefined) updateData.rating = input.rating;
    if (input.status === 'COMPLETED') updateData.completedAt = new Date();

    const updated = await CollaborationRepository.updateSession(input.sessionId, updateData as any);
    return toSessionDTO(updated);
  }

  static async getSummary(userId: string) {
    const user = await CollaborationRepository.findUserById(userId);
    if (!user) throw new CollaborationApiError('User not found', 404);

    const [activeGroups, pendingRequests, upcomingSessions, completedSessions] =
      await CollaborationRepository.getSummary(userId);

    return { activeGroups, pendingRequests, upcomingSessions, completedSessions } satisfies CollaborationSummary;
  }
}
