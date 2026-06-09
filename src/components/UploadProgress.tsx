'use client';

export type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

interface UploadProgressProps {
  status: UploadStatus;
  progress: number; // 0–100
  errorMessage?: string;
  fileName?: string;
}

export default function UploadProgress({ status, progress, errorMessage, fileName }: UploadProgressProps) {
  if (status === 'idle') return null;

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Status label */}
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wider font-medium text-secondary">
          {status === 'uploading' && 'Uploading...'}
          {status === 'success' && 'Upload Complete'}
          {status === 'error' && 'Upload Failed'}
        </p>
        {status === 'uploading' && (
          <p className="text-xs text-secondary">{progress}%</p>
        )}
      </div>

      {/* Progress bar */}
      {status === 'uploading' && (
        <div className="w-full h-1.5 bg-accent/40">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Success state */}
      {status === 'success' && (
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="text-xs text-green-700 font-medium uppercase tracking-wider">
            {fileName ? `"${fileName}" uploaded successfully` : 'File uploaded successfully'}
          </p>
        </div>
      )}

      {/* Error state */}
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#dc2626" strokeWidth="1.5"/>
            <path d="M12 8V12M12 16H12.01" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p className="text-xs text-red-600 font-medium uppercase tracking-wider">
            {errorMessage || 'Something went wrong. Please try again.'}
          </p>
        </div>
      )}
    </div>
  );
}