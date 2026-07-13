import { prisma } from '@/lib/prisma';
import type { Prisma } from '@/generated/prisma/client';

export class CollaborationRepository {
  static findUserById(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true },
    });
  }

  static findGroupById(groupId: string) {
    return prisma.studyGroup.findUnique({
      where: { id: groupId },
      include: {
        creator: { select: { id: true, name: true } },
        members: {
          include: {
            user: { select: { id: true, name: true, email: true } },
          },
        },
      },
    });
  }

  static findMembership(groupId: string, userId: string) {
    return prisma.groupMember.findUnique({
      where: { groupId_userId: { groupId, userId } },
    });
  }

  static listGroups() {
    return prisma.studyGroup.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        creator: { select: { id: true, name: true } },
        _count: { select: { members: true } },
      },
    });
  }

  static listGroupsByUser(userId: string) {
    return prisma.studyGroup.findMany({
      where: {
        members: { some: { userId } },
      },
      orderBy: { updatedAt: 'desc' },
      include: {
        creator: { select: { id: true, name: true } },
        _count: { select: { members: true } },
      },
    });
  }

  static createGroup(data: Prisma.StudyGroupUncheckedCreateInput) {
    return prisma.studyGroup.create({ data });
  }

  static addMember(data: Prisma.GroupMemberUncheckedCreateInput) {
    return prisma.groupMember.create({ data });
  }

  static removeMember(groupId: string, userId: string) {
    return prisma.groupMember.delete({
      where: { groupId_userId: { groupId, userId } },
    });
  }

  static countMembers(groupId: string) {
    return prisma.groupMember.count({ where: { groupId } });
  }

  static findTutoringRequestById(requestId: string) {
    return prisma.tutoringRequest.findUnique({
      where: { id: requestId },
      include: {
        tutor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
    });
  }

  static listTutoringRequests(userId: string) {
    return prisma.tutoringRequest.findMany({
      where: {
        OR: [{ tutorId: userId }, { studentId: userId }],
      },
      orderBy: { updatedAt: 'desc' },
      include: {
        tutor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
    });
  }

  static createTutoringRequest(data: Prisma.TutoringRequestUncheckedCreateInput) {
    return prisma.tutoringRequest.create({ data });
  }

  static updateTutoringRequest(id: string, data: Prisma.TutoringRequestUncheckedUpdateInput) {
    return prisma.tutoringRequest.update({ where: { id }, data });
  }

  static findSessionById(sessionId: string) {
    return prisma.tutoringSession.findUnique({
      where: { id: sessionId },
      include: {
        tutor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
    });
  }

  static listSessions(userId: string) {
    return prisma.tutoringSession.findMany({
      where: {
        OR: [{ tutorId: userId }, { studentId: userId }],
      },
      orderBy: { scheduledAt: 'desc' },
      include: {
        tutor: { select: { id: true, name: true, email: true } },
        student: { select: { id: true, name: true, email: true } },
      },
    });
  }

  static createSession(data: Prisma.TutoringSessionUncheckedCreateInput) {
    return prisma.tutoringSession.create({ data });
  }

  static updateSession(id: string, data: Prisma.TutoringSessionUncheckedUpdateInput) {
    return prisma.tutoringSession.update({ where: { id }, data });
  }

  static getSummary(userId: string) {
    return prisma.$transaction([
      prisma.groupMember.count({ where: { userId } }),
      prisma.tutoringRequest.count({
        where: {
          OR: [{ tutorId: userId }, { studentId: userId }],
          status: 'PENDING',
        },
      }),
      prisma.tutoringSession.count({
        where: {
          OR: [{ tutorId: userId }, { studentId: userId }],
          status: 'SCHEDULED',
        },
      }),
      prisma.tutoringSession.count({
        where: {
          OR: [{ tutorId: userId }, { studentId: userId }],
          status: 'COMPLETED',
        },
      }),
    ]);
  }
}
