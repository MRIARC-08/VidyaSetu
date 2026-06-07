'use client';

import { useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PhotoUploadProps {
  photo: string | null;
  onPhotoChange: (photo: string | null) => void;
}

export default function PhotoUpload({ photo, onPhotoChange }: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      onPhotoChange(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Add a profile photo to personalize your account
        </p>
      </div>

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={cn(
          'relative w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer transition-all overflow-hidden',
          dragOver ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50',
          photo && 'border-solid border-primary'
        )}
      >
        {photo ? (
          <img
            src={photo}
            alt="Profile preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center text-muted-foreground">
            <Camera className="w-8 h-8 mb-1" />
            <span className="text-xs">Upload Photo</span>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />

      {photo && (
        <button
          type="button"
          onClick={() => onPhotoChange(null)}
          className="text-xs text-muted-foreground hover:text-destructive transition-colors"
        >
          Remove photo
        </button>
      )}
    </div>
  );
}
