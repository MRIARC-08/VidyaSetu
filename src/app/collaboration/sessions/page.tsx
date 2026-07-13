'use client';

import { useEffect, useState } from 'react';
import { fetchSessions, updateSession, createSession } from '@/lib/collaboration';
import type { TutoringSessionDTO } from '@/modules/collaboration/collaboration.types';

export default function SessionsPage() {
  const [sessions, setSessions] = useState<TutoringSessionDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [tutorId, setTutorId] = useState('');
  const [studentId, setStudentId] = useState('');
  const [scheduledAt, setScheduledAt] = useState('');
  const [duration, setDuration] = useState(60);
  const [creating, setCreating] = useState(false);

  const load = () => {
    setLoading(true);
    fetchSessions().then(setSessions).catch(() => setError('Failed to load')).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tutorId.trim() || !studentId.trim() || !scheduledAt) return;
    setCreating(true);
    try {
      await createSession({ tutorId: tutorId.trim(), studentId: studentId.trim(), scheduledAt: new Date(scheduledAt).toISOString(), duration });
      setTutorId(''); setStudentId(''); setScheduledAt(''); setDuration(60);
      setShowCreate(false);
      load();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const handleUpdate = async (sessionId: string, status: 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED', rating?: number) => {
    try {
      await updateSession(sessionId, { status, ...(rating ? { rating } : {}) });
      load();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const statusColors: Record<string, string> = {
    SCHEDULED: 'bg-blue-100 text-blue-700',
    IN_PROGRESS: 'bg-yellow-100 text-yellow-700',
    COMPLETED: 'bg-green-100 text-green-700',
    CANCELLED: 'bg-gray-100 text-gray-500',
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Sessions</h1>
        <button onClick={() => setShowCreate(!showCreate)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {showCreate ? 'Cancel' : 'Schedule Session'}
        </button>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">{error}</div>}

      {showCreate && (
        <form onSubmit={handleCreate} className="border rounded-lg p-4 mb-6 space-y-3">
          <h2 className="font-semibold">Schedule a Tutoring Session</h2>
          <input value={tutorId} onChange={e => setTutorId(e.target.value)} placeholder="Tutor ID" required className="w-full p-2 border rounded" />
          <input value={studentId} onChange={e => setStudentId(e.target.value)} placeholder="Student ID" required className="w-full p-2 border rounded" />
          <input type="datetime-local" value={scheduledAt} onChange={e => setScheduledAt(e.target.value)} required className="w-full p-2 border rounded" />
          <div><label className="text-sm text-gray-600">Duration (min): {duration}</label>
          <input type="range" min={15} max={180} step={15} value={duration} onChange={e => setDuration(Number(e.target.value))} className="w-full" /></div>
          <button type="submit" disabled={creating} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50">
            {creating ? 'Scheduling...' : 'Schedule'}
          </button>
        </form>
      )}

      {loading ? (
        <div className="flex justify-center p-8"><div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" /></div>
      ) : sessions.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No sessions yet</p>
      ) : (
        <div className="space-y-3">
          {sessions.map(s => (
            <div key={s.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{s.tutorName || s.tutorId} → {s.studentName || s.studentId}</p>
                  <p className="text-sm text-gray-500">{new Date(s.scheduledAt).toLocaleString()} · {s.duration} min</p>
                  {s.notes && <p className="text-sm text-gray-600 mt-1">{s.notes}</p>}
                  {s.rating && <p className="text-sm text-yellow-600 mt-1">Rating: {s.rating}/5</p>}
                </div>
                <span className={`text-xs px-2 py-1 rounded ${statusColors[s.status] || 'bg-gray-100'}`}>{s.status}</span>
              </div>
              {s.status === 'SCHEDULED' && (
                <div className="flex gap-2 mt-3">
                  <button onClick={() => handleUpdate(s.id, 'IN_PROGRESS')} className="px-3 py-1 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700">Start</button>
                  <button onClick={() => handleUpdate(s.id, 'CANCELLED')} className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50">Cancel</button>
                </div>
              )}
              {s.status === 'IN_PROGRESS' && (
                <div className="flex gap-2 mt-3">
                  <button onClick={() => handleUpdate(s.id, 'COMPLETED')} className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">Complete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
