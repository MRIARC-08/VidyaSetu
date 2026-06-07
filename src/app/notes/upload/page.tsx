'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UploadCloud, FileText, Loader2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { showSuccess, showError, showLoading, dismissToast } from '@/lib/toast';

export default function NotesUploadPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('/api/user/getUser');
        const data = await res.json();
        if (data.user?.id) {
          setUserId(data.user.id);
        }
      } catch (err) {
        console.error('Failed to get user profile', err);
      }
    }
    fetchUser();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      if (!title) {
        // Auto-fill title with filename (without extension)
        const nameWithoutExt = selectedFile.name.replace(/\.[^/.]+$/, '');
        setTitle(nameWithoutExt);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      showError('Please select a file to upload');
      return;
    }
    if (!title.trim()) {
      showError('Please enter a title for your notes');
      return;
    }
    if (!userId) {
      showError('User profile not loaded. Please try again.');
      return;
    }

    setIsSubmitting(true);
    const loadingId = showLoading('Uploading notes...');

    try {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('title', title);
      formData.append('file', file);

      const response = await fetch('/api/notes/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Upload failed');
      }

      dismissToast(loadingId);
      showSuccess('Notes uploaded successfully!');
      router.push('/dashboard');
    } catch (error: any) {
      dismissToast(loadingId);
      showError(error?.message || 'Upload failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-accent/10 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-xl">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back
        </button>

        <Card className="shadow-lg border border-border bg-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              <UploadCloud className="size-6 text-primary" />
              Upload Notes
            </CardTitle>
            <CardDescription>
              Upload PDF or image study materials. Our AI will extract text and help you learn.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium text-foreground">
                  Notes Title
                </label>
                <Input
                  id="title"
                  type="text"
                  placeholder="e.g. Quantum Mechanics Chapter 1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Select File
                </label>
                <div className="flex justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 px-6 py-10 bg-accent/5 hover:bg-accent/10 transition-colors relative cursor-pointer group">
                  <input
                    type="file"
                    accept="application/pdf,image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={isSubmitting}
                  />
                  <div className="text-center space-y-2 pointer-events-none">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      {file ? <FileText className="size-6" /> : <UploadCloud className="size-6" />}
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                    </div>
                    <p className="text-xs text-muted-foreground">PDF, PNG, JPG up to 10MB</p>
                    {file && (
                      <div className="mt-4 p-2 bg-background border rounded-md text-xs font-medium text-foreground max-w-xs truncate mx-auto">
                        Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full font-bold"
                size="lg"
                disabled={isSubmitting || !file}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin mr-2" />
                    Uploading...
                  </>
                ) : (
                  'Upload Study Material'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
