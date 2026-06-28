import { generateWithLLM } from './ai.provider';
import type { GenerateQuestionsRequest, GeneratedQuestion } from './ai.types';

function extractKeywords(text: string): string[] {
  const stopWords = new Set([
    'the', 'a', 'an', 'in', 'of', 'for', 'and', 'or', 'to', 'is',
    'are', 'was', 'were', 'this', 'that', 'it', 'with', 'on', 'at',
    'by', 'from', 'as', 'be', 'has', 'have', 'had', 'not', 'but',
    'what', 'which', 'who', 'whom', 'whose', 'when', 'where', 'why',
    'how', 'all', 'each', 'every', 'some', 'any', 'no', 'none',
    'class', 'chapter', 'subject', 'ncert', 'science', 'mathematics',
  ]);
  return text
    .toLowerCase()
    .split(/[\s,;:.!?()\[\]{}"']+/)
    .filter((w) => w.length > 2 && !stopWords.has(w));
}

function buildKeywords(chapterTitle: string, subjectName: string): string[] {
  const combined = `${chapterTitle} ${subjectName}`;
  const words = extractKeywords(combined);
  return [...new Set([...words, subjectName.toLowerCase(), chapterTitle.toLowerCase()])];
}

function isQuestionOnTopic(
  question: GeneratedQuestion,
  keywords: string[],
): boolean {
  const text = [
    question.questionText,
    question.explanation || '',
    ...question.options.map((o) => o.value),
  ]
    .join(' ')
    .toLowerCase();
  const matches = keywords.filter((kw) => text.includes(kw));
  return matches.length >= 1;
}

function buildPrompt(params: GenerateQuestionsRequest): string {
  return `You are an expert NCERT question generator. Generate exactly ${params.questionCount} multiple-choice questions strictly about "${params.chapterTitle}" from the subject "${params.subjectName}"${params.classLevel ? ` (Class ${params.classLevel})` : ''}${params.difficulty ? ` at ${params.difficulty} difficulty level` : ''}.

IMPORTANT:
- Every question must be directly about "${params.chapterTitle}".
- Do NOT include questions from other chapters or unrelated topics.
- Each question must have exactly 4 options with exactly one correct answer.

Respond with a valid JSON array only (no markdown, no code fences):
[
  {
    "questionText": "...",
    "options": [
      { "label": "A", "value": "...", "isCorrect": false },
      { "label": "B", "value": "...", "isCorrect": true },
      { "label": "C", "value": "...", "isCorrect": false },
      { "label": "D", "value": "...", "isCorrect": false }
    ],
    "explanation": "Optional explanation",
    "difficulty": "EASY" | "MEDIUM" | "HARD"
  }
]`;
}

function parseQuestions(raw: string, expectedCount: number): GeneratedQuestion[] {
  const cleaned = raw.replace(/```json\s*/gi, '').replace(/```\s*$/g, '').trim();
  const parsed = JSON.parse(cleaned);
  if (!Array.isArray(parsed)) {
    throw new Error('AI response is not an array');
  }
  return parsed.slice(0, expectedCount);
}

export interface RejectedLog {
  attempt: number;
  reason: string;
  questions: GeneratedQuestion[];
}

export const rejectionLog: RejectedLog[] = [];

export class AIService {
  static async generateQuestions(
    params: GenerateQuestionsRequest,
  ): Promise<GeneratedQuestion[]> {
    const maxRetries = 3;
    const keywords = buildKeywords(params.chapterTitle, params.subjectName);

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const prompt = buildPrompt(params);
      const raw = await generateWithLLM(prompt);
      const questions = parseQuestions(raw, params.questionCount);

      const valid = questions.filter((q) =>
        isQuestionOnTopic(q, keywords),
      );
      const rejected = questions.filter(
        (q) => !isQuestionOnTopic(q, keywords),
      );

      if (rejected.length > 0) {
        rejectionLog.push({
          attempt: attempt + 1,
          reason: `${rejected.length} question(s) had zero keyword overlap with "${params.chapterTitle}"`,
          questions: rejected,
        });
      }

      const threshold = Math.ceil(params.questionCount / 2);
      if (valid.length >= threshold) {
        return valid.slice(0, params.questionCount);
      }
    }

    throw new Error(
      `Failed to generate sufficient on-topic questions after ${maxRetries} attempts for "${params.chapterTitle}"`,
    );
  }

  static getRejectionLog(): RejectedLog[] {
    return rejectionLog;
  }
}
