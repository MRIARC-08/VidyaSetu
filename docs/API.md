# API Documentation

VidyaSetu exposes REST-style API endpoints through the Next.js App Router.

Base Path:

```txt
/api/*
```

## Authentication APIs

### Login

```http
POST /api/auth/login
```

Request:

```json
{
  "email": "student@example.com",
  "password": "password"
}
```

Response:

```json
{
  "success": true,
  "user": {}
}
```

### Register

```http
POST /api/auth/register
```

### Refresh Token

```http
POST /api/auth/refresh
```

### Server Refresh

```http
GET /api/auth/server-refresh
```

### Google OAuth

```http
GET /api/auth/oauth/google
```

---

## User APIs

### Get User

```http
GET /api/user/getUser
```

### Update User

```http
PUT /api/user/updateUser
```

---

## Quiz APIs

### Create Quiz

```http
POST /api/quiz/create
```

### Start Quiz

```http
POST /api/quiz/start
```

### Quiz Session

```http
GET /api/quiz/session
```

### Submit Quiz

```http
POST /api/quiz/submit
```

### Quiz History

```http
GET /api/quiz/history
```

---

## Notes APIs

### Upload Notes

```http
POST /api/notes/upload
```

### Extract Notes Content

```http
POST /api/notes/extract
```

### Get Notes

```http
GET /api/notes
```

### Get Note

```http
GET /api/notes/[noteId]
```

---

## NCERT APIs

### Classes

```http
GET /api/ncert/classes
```

### Subjects

```http
GET /api/ncert/subjects
```

### Chapters

```http
GET /api/ncert/chapters
```

### Chapter

```http
GET /api/ncert/chapter
```

### Topics

```http
GET /api/ncert/topics
```

---

## Analytics APIs

### Overview

```http
GET /api/analytics/overview
```

### Streak

```http
GET /api/analytics/streak
```

### Weak Topics

```http
GET /api/analytics/weak-topics
```

---

## AI APIs

### Generate Questions

```http
POST /api/ai/generate-questions
```

### Evaluate Subjective Answers

```http
POST /api/ai/evaluate-subjective
```

---

## Admin APIs

### Add Question

```http
POST /api/admin/add-question
```

### Questions

```http
GET /api/admin/questions
```

### Update Question

```http
PUT /api/admin/questions/[id]
```

### Delete Question

```http
DELETE /api/admin/questions/[id]
```

### Seed NCERT Content

```http
POST /api/admin/seed-ncert
```

## Error Responses

Example:

```json
{
  "success": false,
  "error": {
    "message": "Invalid request",
    "statusCode": 400
  }
}
```
