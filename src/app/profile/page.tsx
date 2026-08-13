import React, { useState, useEffect } from 'react';
import authFetch from '@/lib/auth/authFetch';
import UserProfile from '@/components/UserProfile';
import ProfileEditForm from '@/components/ProfileEditForm';
import PasswordChangeForm from '@/components/PasswordChangeForm';
import ProfilePhoto from '@/components/ProfilePhoto';
import { Card, CardContent } from '@/components/ui/card';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  const fetchUser = async () => {
    setLoading(true);
    const res = await authFetch({ url: '/api/user/getUser', options: { method: 'GET' } });
    if (res.user) {
      setUser(res.user);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div className="flex justify-center p-8">Loading profile...</div>;
  }

  if (!user) {
    return <div className="text-center text-red-500 mt-8">Failed to load profile data.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-1/4 h-fit">
          <CardContent className="p-0">
            <nav className="flex flex-col">
              <button 
                onClick={() => setActiveTab('profile')} 
                className={`text-left px-4 py-3 border-b ${activeTab === 'profile' ? 'bg-primary/10 font-medium text-primary' : 'hover:bg-slate-50'}`}
              >
                Profile Overview
              </button>
              <button 
                onClick={() => setActiveTab('edit')} 
                className={`text-left px-4 py-3 border-b ${activeTab === 'edit' ? 'bg-primary/10 font-medium text-primary' : 'hover:bg-slate-50'}`}
              >
                Edit Profile
              </button>
              <button 
                onClick={() => setActiveTab('photo')} 
                className={`text-left px-4 py-3 border-b ${activeTab === 'photo' ? 'bg-primary/10 font-medium text-primary' : 'hover:bg-slate-50'}`}
              >
                Profile Photo
              </button>
              <button 
                onClick={() => setActiveTab('security')} 
                className={`text-left px-4 py-3 ${activeTab === 'security' ? 'bg-primary/10 font-medium text-primary' : 'hover:bg-slate-50'}`}
              >
                Security
              </button>
            </nav>
          </CardContent>
        </Card>
        
        <div className="w-full md:w-3/4">
          {activeTab === 'profile' && <UserProfile user={user} />}
          {activeTab === 'edit' && <ProfileEditForm user={user} onUpdate={fetchUser} />}
          {activeTab === 'photo' && <ProfilePhoto user={user} onUpdate={fetchUser} />}
          {activeTab === 'security' && <PasswordChangeForm />}
        </div>
      </div>
    </div>
  );
}
