'use client';

import * as React from 'react';
import { ProgressDashboard } from '@/components/ProgressDashboard';
import { WeakTopicsList } from '@/components/WeakTopicsList';
import { StudyRecommendation } from '@/components/StudyRecommendation';

export default function DashboardAnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">
          Track your learning progress and performance
        </p>
      </div>
      <ProgressDashboard />
      <div className="grid gap-6 lg:grid-cols-2">
        <WeakTopicsList />
        <StudyRecommendation />
      </div>
    </div>
  );
}
