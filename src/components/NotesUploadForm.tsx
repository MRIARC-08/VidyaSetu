'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FileDropZone from './FileDropZone';
import UploadProgress, { UploadStatus } from './UploadProgress';
import authFetch from '@/lib/auth/authFetch';
import { NotesApiError } from '@/lib/errors';

interface NotePreview {
  id: string;
  title: string;
  extractedText: string;
}

export default function NotesUploadForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [preview, setPreview] = useState<NotePreview | null>(null);

  const handleFileChange = (f: File | null) => {
    setFile(f);
    setFileError('');
    setStatus('idle');
  };

  const handleFileValidationError = (e: Event) => {
    const detail = (e as CustomEvent).detail;
    setFileError(detail);
    setFile(null);
  };

  const validate = (): boolean => {
    let valid = true;
    if (!title.trim()) {
      setTitleError('Title is required.');
      valid = false;
    } else {
      setTitleError('');
    }
    if (!file) {
      setFileError('Please select a file to upload.');
      valid = false;
    } else {
      setFileError('');
    }
    return valid;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setStatus('uploading');
    setProgress(10);
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('file', file!);
      formData.append('title', title.trim());

      // Simulate progress ticks while waiting for the server
      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev < 85 ? prev + 10 : prev));
      }, 400);

      const result = await authFetch({
        url: '/api/notes/upload',
        options: {
          method: 'POST',
          body: formData,
        },
      });

      clearInterval(progressInterval);

      if (result?.error) {
        throw new NotesApiError(result.error || 'Upload failed.', result.statusCode);
      }

      setProgress(100);
      setStatus('success');
      setPreview(result?.note ?? null);

      // Redirect to notes page after a short delay
      setTimeout(() => {
        router.push('/notes');
      }, 2500);
    } catch (err: unknown) {
      setStatus('error');
      setProgress(0);
      if (err instanceof NotesApiError) {
        setErrorMessage(`Error ${err.statusCode ?? ''}: ${err.message}`.trim());
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Upload failed. Please try again.');
      }
    }
  };

  const handleReset = () => {
    setTitle('');
    setFile(null);
    setFileError('');
    setTitleError('');
    setStatus('idle');
    setProgress(0);
    setErrorMessage('');
    setPreview(null);
  };

  const isSubmitting = status === 'uploading';

  return (
    <div
      className="flex flex-col gap-6 w-full"
      onFileValidationError={handleFileValidationError as unknown as React.FormEventHandler}
    >
      {/* Title field */}
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-wider font-medium text-secondary">
          Note Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (titleError) setTitleError('');
          }}
          placeholder="e.g. Chapter 3 — Chemical Reactions"
          disabled={isSubmitting || status === 'success'}
          className={`w-full border px-4 py-3 text-sm bg-white rounded-none outline-none
            focus:border-primary transition-colors placeholder:text-secondary/50
            disabled:opacity-50 disabled:cursor-not-allowed
            ${titleError ? 'border-red-400' : 'border-gray-300'}`}
        />
        {titleError && (
          <p className="text-xs text-red-500 uppercase tracking-wider">{titleError}</p>
        )}
      </div>

      {/* File drop zone */}
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-wider font-medium text-secondary">
          Upload File
        </label>
        <FileDropZone
          file={file}
          onFileChange={handleFileChange}
          error={fileError}
        />
      </div>

      {/* Progress / status */}
      <UploadProgress
        status={status}
        progress={progress}
        errorMessage={errorMessage}
        fileName={file?.name}
      />

      {/* Note preview on success */}
      {status === 'success' && preview && (
        <div className="border border-gray-200 bg-white shadow-xs p-6 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-wider font-medium text-secondary">Extracted Preview</p>
          <p className="font-bold text-lg">{preview.title}</p>
          <p className="text-sm text-secondary leading-relaxed line-clamp-4">
            {preview.extractedText}
          </p>
          <p className="text-xs text-secondary/60 uppercase tracking-wider">
            Redirecting to notes...
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        {status !== 'success' && (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`flex-1 py-3 text-sm uppercase tracking-wider font-bold transition-opacity
              bg-primary text-white hover:opacity-85
              disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? 'Uploading...' : 'Upload Note'}
          </button>
        )}
        {(status === 'error' || status === 'success') && (
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 text-sm uppercase tracking-wider font-bold border border-gray-300
              text-secondary hover:border-primary hover:text-primary transition-colors"
          >
            {status === 'error' ? 'Try Again' : 'Upload Another'}
          </button>
        )}
      </div>
    </div>
  );
}