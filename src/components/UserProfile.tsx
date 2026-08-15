import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function UserProfile({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden">
              {user?.image ? (
                <img src={user.image} alt={user.name || 'User'} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 text-2xl font-bold">
                  {(user?.name || user?.email || 'U').charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user?.name || 'User'}</h2>
              <p className="text-gray-500">{user?.email}</p>
              {user?.class && <p className="text-sm text-gray-400 mt-1">Class: {user.class}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Account Status</p>
              <p className="font-medium">{user?.isEmailVerified ? 'Verified' : 'Unverified'}</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Current Streak</p>
              <p className="font-medium">{user?.stats?.currentStreak || user?.streakCount || 0} days</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {user?.stats && (
        <Card>
          <CardHeader>
            <CardTitle>Learning Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-2xl font-bold text-primary">{user.stats.totalSessions}</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Sessions</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-2xl font-bold text-primary">{user.stats.totalQuestions}</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Questions</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{user.stats.totalCorrect}</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Correct</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{Math.round(user.stats.overallAccuracy || 0)}%</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
