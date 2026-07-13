'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchCollaborationSummary, fetchGroups } from '@/lib/collaboration';
import type { CollaborationSummary, StudyGroupDTO } from '@/modules/collaboration/collaboration.types';

export default function CollaborationPage() {
  const [summary, setSummary] = useState<CollaborationSummary | null>(null);
  const [groups, setGroups] = useState<StudyGroupDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([
      fetchCollaborationSummary().then(setSummary).catch(() => {}),
      fetchGroups(true).then(setGroups).catch(() => {}),
    ]).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center p-8"><div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" /></div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Collaborative Learning</h1>

      {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">{error}</div>}

      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{summary.activeGroups}</div>
            <div className="text-sm text-gray-600">Active Groups</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">{summary.pendingRequests}</div>
            <div className="text-sm text-gray-600">Pending Requests</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">{summary.upcomingSessions}</div>
            <div className="text-sm text-gray-600">Upcoming Sessions</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">{summary.completedSessions}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Link href="/collaboration/groups" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Study Groups</h2>
          <p className="text-gray-600 text-sm">Create or join study groups to learn together</p>
        </Link>
        <Link href="/collaboration/tutoring" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Peer Tutoring</h2>
          <p className="text-gray-600 text-sm">Request tutoring or help peers with subjects</p>
        </Link>
        <Link href="/collaboration/sessions" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Sessions</h2>
          <p className="text-gray-600 text-sm">Manage your scheduled tutoring sessions</p>
        </Link>
      </div>

      <div className="border rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Groups</h2>
          <Link href="/collaboration/groups" className="text-sm text-blue-600 hover:underline">View All</Link>
        </div>
        {groups.length === 0 ? (
          <p className="text-gray-500 text-center py-4">You haven&apos;t joined any groups yet</p>
        ) : (
          <div className="space-y-3">
            {groups.map(g => (
              <Link key={g.id} href={`/collaboration/groups/${g.id}`} className="block p-3 border rounded hover:bg-gray-50">
                <div className="font-medium">{g.name}</div>
                <div className="text-sm text-gray-500">{g.memberCount} member{g.memberCount !== 1 ? 's' : ''}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
