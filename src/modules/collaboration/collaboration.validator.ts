import { z } from 'zod';

export const createGroupSchema = z.object({
  userId: z.string().uuid(),
  name: z.string().trim().min(1).max(100),
  description: z.string().trim().max(500).optional(),
  subjectId: z.string().uuid().optional(),
});

export const joinGroupSchema = z.object({
  userId: z.string().uuid(),
  groupId: z.string().uuid(),
});

export const createTutoringRequestSchema = z.object({
  userId: z.string().uuid(),
  tutorId: z.string().uuid(),
  subjectId: z.string().uuid().optional(),
  message: z.string().trim().max(500).optional(),
});

export const updateTutoringRequestSchema = z.object({
  userId: z.string().uuid(),
  requestId: z.string().uuid(),
  status: z.enum(['ACCEPTED', 'CANCELLED']),
});

export const createSessionSchema = z.object({
  userId: z.string().uuid(),
  tutorId: z.string().uuid(),
  studentId: z.string().uuid(),
  scheduledAt: z.string().datetime(),
  duration: z.number().int().min(15).max(180).default(60),
  groupId: z.string().uuid().optional(),
  requestId: z.string().uuid().optional(),
});

export const updateSessionSchema = z.object({
  userId: z.string().uuid(),
  sessionId: z.string().uuid(),
  status: z.enum(['IN_PROGRESS', 'COMPLETED', 'CANCELLED']),
  notes: z.string().trim().max(2000).optional(),
  rating: z.number().int().min(1).max(5).optional(),
});
