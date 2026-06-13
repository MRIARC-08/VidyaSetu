'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Button } from '@/components/ui/button';


  export default function ChapterEditorPage() {
  const [content, setContent] = useState(`# Chapter Title

Start writing your chapter content here...
`);

  const [error, setError] = useState('');
  const [contentSource, setContentSource] = useState('Manual');
  const [lastSaved, setLastSaved] = useState('');
  const [loading, setLoading] = useState(true);
  const [originalContent, setOriginalContent] = useState('');
  const params = useParams();
  const chapterId = params.chapterId as string;
  const DRAFT_KEY = `chapter-editor-draft-${chapterId}`;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Restore draft on page load
  useEffect(() => {
    const savedDraft = localStorage.getItem(DRAFT_KEY);

    if (savedDraft) {
      setContent(savedDraft);
      setContentSource('Draft');
    }
  }, []);

  useEffect(() => {
    async function fetchChapter() {
      try {
        const res = await fetch(
          `/api/ncert/chapter?chapterId=${chapterId}`
        );
        const data = await res.json();
        console.log(data);
        if (data.message) {
          setContent(data.message.content || '');
          setOriginalContent(data.message.content || '');
          setContentSource(
            data.message.contentSource || 'Database'
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    if (chapterId) {
      fetchChapter();
    }
  }, [chapterId]);

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(DRAFT_KEY, content);
      setLastSaved(new Date().toLocaleTimeString());
    }, 30000);

    return () => clearInterval(interval);
  }, [content]);

  return (
    <main className="min-h-screen p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Chapter Content Editor
          </h1>

          <p>Chapter ID: {chapterId}</p>

          <p className="mt-2 text-sm text-gray-500">
            Content Source: {contentSource}
          </p>

          {lastSaved && (
            <p className="text-sm text-green-600">
              Draft auto-saved at {lastSaved}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <Button
          variant="outline"
          onClick={() => {
            setContent(originalContent);
            setError('');
            }}>
              Cancel
          </Button>

          <Button
          onClick={async () => {
            
            if (!content.trim()) {
              setError('Content cannot be empty.');
              return;
            }
            if (content.trim().length < 50) {
              setError('Content must be at least 50 characters.');
              return;
            }
            try {
              const res = await fetch('/api/ncert/chapter', {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  chapterId,
                  content,
                }),
              });
              const data = await res.json();
              console.log('SAVE RESPONSE:', data);
              alert('Chapter saved successfully!');
            } catch (error) {
              console.error(error);
              alert('Failed to save chapter');
            }
            }}>
              Save
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              if (
                content.trim() &&
                !confirm(
                  'Uploading a file will overwrite the current content. Continue?'
                )
              ) {
                return;
              }

              fileInputRef.current?.click();
            }}
          >
            Upload .md
          </Button>

          <Button
            variant="destructive"
            onClick={() => {
              if (confirm('Clear all content?')) {
                setContent('');
                setError('Content cannot be empty.');
              }
            }}
          >
            Clear
          </Button>
        </div>

        <input
          type="file"
          accept=".md,.txt"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = (event) => {
              const text = event.target?.result as string;

              setContent(text);
              setError('');
              setContentSource('Uploaded');
            };

            reader.readAsText(file);
          }}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-2 text-lg font-semibold">
            Markdown Input
          </h2>

          <textarea
            value={content}
            onChange={(e) => {
              const value = e.target.value;
              
              setContent(value);
              if (!value.trim()) {
                setError('Content cannot be empty.');
              } else if (value.trim().length < 50) {
                setError('Content must be at least 50 characters.');
              } else {
                setError('');
              }
            }}
            className="min-h-[600px] w-full border p-4"
          />

          {error && (
            <p className="mt-2 text-sm text-red-500">
              {error}
            </p>
          )}
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold">
            Live Preview
          </h2>

          <div className="min-h-[600px] border p-4">
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </div>
    </main>
  );
}