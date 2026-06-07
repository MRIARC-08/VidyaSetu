'use client';

import * as React from 'react';
import EmptyState from '../../../components/EmptyState';

export default function DashboardAnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 p-8 h-full">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">
          Track your learning progress and performance
        </p>
      </div>
      
      {/* Empty State Wrapper */}
      <div className="flex-1 flex items-center justify-center mt-8">
        <EmptyState 
          icon={
            <svg width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          }
          title="No Analytics Available"
          description="You haven't generated any data yet. Complete your first module to see your stats!"
          ctaText="Complete a quiz"
          ctaHref="/quiz" 
        />
      </div>
    </div>
  );
}