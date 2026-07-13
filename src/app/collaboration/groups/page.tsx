'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchGroups, createGroup, joinGroup } from '@/lib/collaboration';
import type { StudyGroupDTO } from '@/modules/collaboration/collaboration.types';

export default function GroupsPage() {
  const [groups, setGroups] = useState<StudyGroupDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [creating, setCreating] = useState(false);

  const load = () => {
    setLoading(true);
    fetchGroups().then(setGroups).catch(() => setError('Failed to load groups')).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setCreating(true);
    try {
      await createGroup({ name: name.trim(), description: description.trim() || undefined });
      setName('');
      setDescription('');
      setShowCreate(false);
      load();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const handleJoin = async (groupId: string) => {
    try {
      await joinGroup(groupId);
      load();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Study Groups</h1>
        <button onClick={() => setShowCreate(!showCreate)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {showCreate ? 'Cancel' : 'Create Group'}
        </button>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">{error}</div>}

      {showCreate && (
        <form onSubmit={handleCreate} className="border rounded-lg p-4 mb-6 space-y-3">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Group name" required className="w-full p-2 border rounded" />
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description (optional)" className="w-full p-2 border rounded" rows={3} />
          <button type="submit" disabled={creating} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50">
            {creating ? 'Creating...' : 'Create'}
          </button>
        </form>
      )}

      {loading ? (
        <div className="flex justify-center p-8"><div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" /></div>
      ) : groups.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No study groups yet. Create one to get started!</p>
      ) : (
        <div className="grid gap-4">
          {groups.map(g => (
            <div key={g.id} className="border rounded-lg p-4 flex justify-between items-center">
              <div>
                <Link href={`/collaboration/groups/${g.id}`} className="font-medium text-lg hover:text-blue-600">{g.name}</Link>
                {g.description && <p className="text-sm text-gray-500 mt-1">{g.description}</p>}
                <p className="text-xs text-gray-400 mt-1">{g.memberCount} member{g.memberCount !== 1 ? 's' : ''} · Created by {g.creatorName || 'Unknown'}</p>
              </div>
              <button onClick={() => handleJoin(g.id)} className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Join</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
