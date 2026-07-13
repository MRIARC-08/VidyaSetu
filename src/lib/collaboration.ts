import authFetch from '@/lib/auth/authFetch';
import type {
  StudyGroupDTO,
  StudyGroupDetailDTO,
  TutoringRequestDTO,
  TutoringSessionDTO,
  CollaborationSummary,
} from '@/modules/collaboration/collaboration.types';

export async function fetchGroups(mine = false): Promise<StudyGroupDTO[]> {
  const res = await authFetch({ url: `/api/collaboration/groups${mine ? '?mine=true' : ''}`, options: { method: 'GET' } });
  if (!res.data) throw new Error(res.message || 'Failed to load groups');
  return res.data;
}

export async function fetchGroup(groupId: string): Promise<StudyGroupDetailDTO> {
  const res = await authFetch({ url: `/api/collaboration/groups?groupId=${encodeURIComponent(groupId)}`, options: { method: 'GET' } });
  if (!res.data) throw new Error(res.message || 'Failed to load group');
  return res.data;
}

export async function createGroup(data: { name: string; description?: string; subjectId?: string }): Promise<StudyGroupDetailDTO> {
  const res = await authFetch({ url: '/api/collaboration/groups', options: { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) } });
  if (!res.data) throw new Error(res.message || 'Failed to create group');
  return res.data;
}

export async function joinGroup(groupId: string): Promise<void> {
  const res = await authFetch({ url: '/api/collaboration/groups/join', options: { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ groupId }) } });
  if (res.message && !res.data) throw new Error(res.message);
}

export async function leaveGroup(groupId: string): Promise<void> {
  const res = await authFetch({ url: `/api/collaboration/groups?groupId=${encodeURIComponent(groupId)}`, options: { method: 'DELETE' } });
  if (res.message && !res.data) throw new Error(res.message);
}

export async function fetchTutoringRequests(): Promise<TutoringRequestDTO[]> {
  const res = await authFetch({ url: '/api/collaboration/requests', options: { method: 'GET' } });
  if (!res.data) throw new Error(res.message || 'Failed to load requests');
  return res.data;
}

export async function createTutoringRequest(data: { tutorId: string; subjectId?: string; message?: string }): Promise<TutoringRequestDTO> {
  const res = await authFetch({ url: '/api/collaboration/requests', options: { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) } });
  if (!res.data) throw new Error(res.message || 'Failed to create request');
  return res.data;
}

export async function updateTutoringRequest(requestId: string, status: 'ACCEPTED' | 'CANCELLED'): Promise<TutoringRequestDTO> {
  const res = await authFetch({ url: `/api/collaboration/requests/${requestId}`, options: { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ requestId, status }) } });
  if (!res.data) throw new Error(res.message || 'Failed to update request');
  return res.data;
}

export async function fetchSessions(): Promise<TutoringSessionDTO[]> {
  const res = await authFetch({ url: '/api/collaboration/sessions', options: { method: 'GET' } });
  if (!res.data) throw new Error(res.message || 'Failed to load sessions');
  return res.data;
}

export async function createSession(data: { tutorId: string; studentId: string; scheduledAt: string; duration?: number }): Promise<TutoringSessionDTO> {
  const res = await authFetch({ url: '/api/collaboration/sessions', options: { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) } });
  if (!res.data) throw new Error(res.message || 'Failed to create session');
  return res.data;
}

export async function updateSession(sessionId: string, data: { status: 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'; notes?: string; rating?: number }): Promise<TutoringSessionDTO> {
  const res = await authFetch({ url: `/api/collaboration/sessions/${sessionId}`, options: { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sessionId, ...data }) } });
  if (!res.data) throw new Error(res.message || 'Failed to update session');
  return res.data;
}

export async function fetchCollaborationSummary(): Promise<CollaborationSummary> {
  const res = await authFetch({ url: '/api/collaboration/summary', options: { method: 'GET' } });
  if (!res.data) throw new Error(res.message || 'Failed to load summary');
  return res.data;
}
