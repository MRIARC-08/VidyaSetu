
'use client';

import React from 'react';


export function Skeleton({ className = '', style }: { className?: string, style?: React.CSSProperties }) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-gray-200 ${className}`}
      style={{ isolation: 'isolate', ...style }}
    >
      <span
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
          animation: 'shimmer 1.4s infinite',
          backgroundSize: '200% 100%',
        }}
      />
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>
    </div>
  );
}


export function SubjectCatalogSkeleton() {
  return (
    <div className="bg-background min-h-screen flex flex-col p-8 gap-8">

      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-36" />
        <Skeleton className="h-8 w-52" />
        <Skeleton className="h-5 w-20 mt-1" />
      </div>


      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-accent/8 p-4 flex flex-col gap-3">
    
            <Skeleton className="h-6 w-6" />
          
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-28" />
              <div className="flex flex-col items-end gap-1">
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          
            <Skeleton className="h-2 w-full" />
   
            <Skeleton className="h-10 w-full mt-2" />
          </div>
        ))}
      </div>


      <div className="flex flex-col gap-2">
        <Skeleton className="h-7 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>
    </div>
  );
}

export function SubjectPageSkeleton() {
  return (
    <main className="p-8 flex flex-col gap-16 bg-background min-h-screen">

      <div className="flex flex-col gap-3">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-80" />
      </div>


      <div className="border-t border-t-primary/40">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`flex items-center gap-8 p-8 border-b border-primary/40 ${
              i % 2 === 0 ? 'bg-accent/40' : 'bg-accent/10'
            }`}
          >
     
            <Skeleton className="h-10 w-12" />

            <Skeleton className={`h-5 ${i % 3 === 0 ? 'w-72' : i % 3 === 1 ? 'w-56' : 'w-80'}`} />
          </div>
        ))}
      </div>
    </main>
  );
}

export function ChapterPageSkeleton() {
  return (
    <main className="flex">
  
      <div className="flex-1 relative overflow-hidden" style={{ height: '100vh' }}>
        <Skeleton className="w-full h-full rounded-none" />


        <div
          className="absolute top-0 left-0 right-0 flex items-center gap-3 px-4"
          style={{
            height: 48,
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-12 ml-auto" />
        </div>

    
        <div className="absolute inset-x-12 top-16 flex flex-col gap-4 px-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-3"
              style={{ width: `${65 + Math.sin(i * 1.7) * 25}%` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col gap-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72" />
        <div className="flex flex-col gap-3 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className={`h-4 ${i % 2 === 0 ? 'w-48' : 'w-36'}`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
