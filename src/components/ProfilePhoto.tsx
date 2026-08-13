import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import authFetch from '@/lib/auth/authFetch';

const sanitizeUrl = (url: string) => {
  if (!url) return '';
  try {
    const parsed = new URL(url.trim());
    if (['http:', 'https:'].includes(parsed.protocol)) {
      return parsed.href;
    }
    if (parsed.protocol === 'data:' && parsed.pathname.startsWith('image/')) {
      return parsed.href;
    }
  } catch (e) {
    // Invalid URL
  }
  return '';
};

export default function ProfilePhoto({ user, onUpdate }: { user: any, onUpdate: () => void }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState(user?.image || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) return;

    setLoading(true);
    setMessage('');
    setError('');

    const res = await authFetch({
      url: '/api/user/updateUser',
      options: {
        method: 'PUT',
        body: JSON.stringify({ image: imageUrl }),
      }
    });

    setLoading(false);
    if (res.message && !res.error && res.status !== 400 && res.status !== 500) {
      setMessage('Profile photo updated successfully');
      onUpdate();
    } else {
      setError(res.message?.message || res.message || 'Failed to update photo');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Photo</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {message && <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm">{message}</div>}
          {error && <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}
          
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden mb-4 border-4 border-white shadow-lg">
              {imageUrl ? (
                <img src={sanitizeUrl(imageUrl)} alt="Profile preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 text-4xl font-bold">
                  {(user?.name || user?.email || 'U').charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Image URL</label>
            <input 
              type="url" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
              placeholder="https://example.com/photo.jpg"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
            <p className="text-xs text-gray-500">Provide a direct URL to your profile photo.</p>
          </div>
          
          <Button type="submit" disabled={loading || !imageUrl} className="w-full">
            {loading ? 'Updating...' : 'Update Photo'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
