'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchGroup, leaveGroup } from '@/lib/collaboration';
import type { StudyGroupDetailDTO } from '@/modules/collaboration/collaboration.types';

export default function GroupDetailPage({ params }: { params: { groupId: string } }) {
  const [group, setGroup] = useState<StudyGroupDetailDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGroup(params.groupId).then(setGroup).catch(() => setError('Group not found')).finally(() => setLoading(false));
  }, [params.groupId]);

  const handleLeave = async () => {
    try {
      await leaveGroup(params.groupId);
      setGroup(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) return <div className="flex justify-center p-8"><div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" /></div>;
  if (!group) return <div className="max-w-2xl mx-auto p-6"><p className="text-center text-gray-500">{error || 'Group not found'}</p><Link href="/collaboration/groups" className="block text-center text-blue-600 mt-4">← Back to groups</Link></div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link href="/collaboration/groups" className="text-blue-600 hover:underline text-sm">← Back to groups</Link>
      <h1 className="text-3xl font-bold mt-2 mb-2">{group.name}</h1>
      {group.description && <p className="text-gray-600 mb-4">{group.description}</p>}
      <p className="text-sm text-gray-400 mb-6">{group.memberCount} member{group.memberCount !== 1 ? 's' : ''}</p>

      <div className="border rounded-lg p-4 mb-6">
        <h2 className="font-semibold mb-3">Members ({group.members.length})</h2>
        <div className="space-y-2">
          {group.members.map(m => (
            <div key={m.id} className="flex justify-between items-center">
              <span>{m.name || m.email}</span>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">{m.role}</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleLeave} className="px-4 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50">Leave Group</button>
    </div>
  );
}
