# Offline Content Strategy

## Overview
VidyaSetu supports offline learning for students in low-connectivity areas through progressive content bundling and automatic sync on reconnection.

## Key Features

### 1. Content Download
- Users can download chapters with all content and questions
- Bundles stored locally for offline access
- Minimal storage footprint with efficient JSON compression
- Download API: `POST /api/content/download-chapter`

### 2. Offline Progress Tracking
- Quiz attempts recorded in local storage during offline
- Progress includes:
  - Questions answered
  - Correct answers
  - Completion timestamps
  - Topic completion status
- No data loss during offline session

### 3. Automatic Sync
- When connection restored, progress automatically syncs
- Quiz sessions updated with final scores
- Analytics updated with offline activity
- Sync API: `POST /api/content/sync-offline-progress`

### 4. Storage Management
- Client-side cleanup of old downloaded content
- Recommended storage limit: 100MB per user
- Auto-delete oldest content when limit exceeded

## Implementation Guide

### For Frontend Development

#### 1. Service Worker Registration
```typescript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/offline-worker.js');
}
```

#### 2. Download Chapter
```typescript
const response = await fetch('/api/content/download-chapter', {
  method: 'POST',
  body: JSON.stringify({ chapterId: '...' }),
});
const { data } = await response.json();
// Store data.bundleId and download URL locally
```

#### 3. Track Offline Progress
```typescript
const offlineProgress = {
  chapterId: '...',
  completedTopics: [],
  questionsAnswered: 5,
  correctAnswers: 4,
  timestamp: new Date().toISOString(),
};
// Save to localStorage during offline session
```

#### 4. Sync When Online
```typescript
window.addEventListener('online', async () => {
  const offlineProgress = JSON.parse(localStorage.getItem('offlineProgress'));
  await fetch('/api/content/sync-offline-progress', {
    method: 'POST',
    body: JSON.stringify({ offlineProgress }),
  });
  localStorage.removeItem('offlineProgress');
});
```

## Data Structure

### Content Bundle
```typescript
{
  chapter: { id, title, order, content, subject },
  topics: [{ id, title, order, content, questionCount }],
  questions: [{ id, type, difficulty, questionText, options }],
  metadata: { version, timestamp, totalQuestions, size }
}
```

### Offline Progress
```typescript
{
  chapterId: string,
  completedTopics: string[],
  questionsAnswered: number,
  correctAnswers: number,
  timestamp: ISO8601,
  quizSessionId?: string
}
```

## Limitations & Considerations

1. **Storage Limits**: Browsers limit local storage to 5-10MB
2. **Media Content**: PDFs and images should be downloaded separately
3. **Sync Conflicts**: Server is authoritative; local changes are additive only
4. **Expiration**: Downloaded content doesn't expire; users can manually delete

## Future Enhancements

1. Adaptive bitrate for video content
2. Progressive download with pause/resume
3. Peer-to-peer content sharing in areas with multiple users
4. Differential sync (only upload changes)
5. Offline quiz generation from learned topics
