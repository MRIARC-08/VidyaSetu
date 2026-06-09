'use client';

import { useState } from 'react';
import { AdminQuestionList } from '@/components/AdminQuestionList';
import { AdminQuestionForm } from '@/components/AdminQuestionForm';

export default function AdminQuestionsPage() {
  const [mode, setMode] = useState<'list' | 'create'>('list');
  const [refreshKey, setRefreshKey] = useState(0);

  function handleSuccess() {
    setRefreshKey((k) => k + 1);
    setMode('list');
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Question Management</h1>
        <p className="text-sm text-muted-foreground">
          Add, view, and delete questions in the question bank
        </p>
      </div>

      {mode === 'create' ? (
        <AdminQuestionForm
          onSuccess={handleSuccess}
          onCancel={() => setMode('list')}
        />
      ) : (
        <AdminQuestionList
          onAddClick={() => setMode('create')}
          refreshKey={refreshKey}
        />
      )}
    </div>
  );
}
