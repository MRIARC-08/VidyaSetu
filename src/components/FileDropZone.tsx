'use client';
import { useRef, useState, DragEvent, ChangeEvent } from 'react';

const ACCEPTED_TYPES = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp'];
const ACCEPTED_LABELS = 'PDF, PNG, JPEG, WEBP';

interface FileDropZoneProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  error?: string;
}

export default function FileDropZone({ file, onFileChange, error }: FileDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validate = (f: File): string | null => {
    if (!ACCEPTED_TYPES.includes(f.type)) return `File type not supported. Use ${ACCEPTED_LABELS}.`;
    if (f.size > 10 * 1024 * 1024) return 'File size must be under 10 MB.';
    return null;
  };

  const handleFile = (f: File) => {
    const err = validate(f);
    if (err) {
      onFileChange(null);
      // bubble validation error up via a custom event the parent can handle
      const event = new CustomEvent('filevalidationerror', { detail: err, bubbles: true });
      inputRef.current?.dispatchEvent(event);
      return;
    }
    onFileChange(f);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleFile(dropped);
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) handleFile(selected);
    e.target.value = '';
  };

  const removeFile = () => onFileChange(null);

  return (
    <div>
      {!file ? (
        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-none cursor-pointer transition-colors flex flex-col items-center justify-center gap-3 p-12
            ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary bg-white'}
            ${error ? 'border-red-400' : ''}`}
        >
          {/* Upload icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16V8M12 8L9 11M12 8L15 11" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#474747" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H12.5C13.8978 3 14.5967 3 15.1997 3.26756C15.8027 3.53512 16.2795 4.04126 17.2331 5.05353L19.7331 7.77988C20.5775 8.69187 21 9.14787 21 9.70711V15" stroke="#474747" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div className="text-center">
            <p className="text-sm font-medium text-primary">
              {isDragging ? 'Drop your file here' : 'Drag & drop or click to upload'}
            </p>
            <p className="text-xs text-secondary mt-1 uppercase tracking-wider">{ACCEPTED_LABELS} · Max 10 MB</p>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.webp"
            className="hidden"
            onChange={onInputChange}
          />
        </div>
      ) : (
        <div className="border border-gray-200 bg-white p-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            {/* File type icon */}
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#1A1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="14,2 14,8 20,8" stroke="#1A1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-primary truncate max-w-[240px]">{file.name}</p>
              <p className="text-xs text-secondary uppercase tracking-wider">{(file.size / 1024).toFixed(1)} KB</p>
            </div>
          </div>
          <button
            type="button"
            onClick={removeFile}
            className="text-secondary hover:text-primary transition-colors p-1"
            aria-label="Remove file"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}
      {error && <p className="text-xs text-red-500 mt-2 uppercase tracking-wider">{error}</p>}
    </div>
  );
}