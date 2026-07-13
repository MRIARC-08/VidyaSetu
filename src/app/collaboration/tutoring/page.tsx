'use client';

import { useEffect, useState } from 'react';
import { fetchTutoringRequests, createTutoringRequest, updateTutoringRequest } from '@/lib/collaboration';
import type { TutoringRequestDTO } from '@/modules/collaboration/collaboration.types';

export default function TutoringPage() {
  const [requests, setRequests] = useState<TutoringRequestDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tutorId, setTutorId] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const load = () => {
    setLoading(true);
    fetchTutoringRequests().then(setRequests).catch(() => setError('Failed to load')).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tutorId.trim()) return;
    setSending(true);
    try {
      await createTutoringRequest({ tutorId: tutorId.trim(), message: message.trim() || undefined });
      setTutorId('');
      setMessage('');
      load();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  const handleUpdate = async (requestId: string, status: 'ACCEPTED' | 'CANCELLED') => {
    try {
      await updateTutoringRequest(requestId, status);
      load();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Peer Tutoring</h1>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">{error}</div>}

      <form onSubmit={handleRequest} className="border rounded-lg p-4 mb-6 space-y-3">
        <h2 className="font-semibold">Request Tutoring</h2>
        <input value={tutorId} onChange={e => setTutorId(e.target.value)} placeholder="Tutor user ID" required className="w-full p-2 border rounded" />
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="What do you need help with?" className="w-full p-2 border rounded" rows={3} />
        <button type="submit" disabled={sending} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">
          {sending ? 'Sending...' : 'Send Request'}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-3">Your Requests</h2>
      {loading ? (
        <div className="flex justify-center p-8"><div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" /></div>
      ) : requests.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No tutoring requests yet</p>
      ) : (
        <div className="space-y-3">
          {requests.map(r => (
            <div key={r.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{r.tutorName || r.tutorId}</p>
                  <p className="text-sm text-gray-500">With: {r.studentName || r.studentId}</p>
                  {r.message && <p className="text-sm text-gray-600 mt-1">{r.message}</p>}
                </div>
                <span className={`text-xs px-2 py-1 rounded ${r.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : r.status === 'ACCEPTED' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {r.status}
                </span>
              </div>
              {r.status === 'PENDING' && (
                <div className="flex gap-2 mt-3">
                  <button onClick={() => handleUpdate(r.id, 'ACCEPTED')} className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">Accept</button>
                  <button onClick={() => handleUpdate(r.id, 'CANCELLED')} className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50">Decline</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
