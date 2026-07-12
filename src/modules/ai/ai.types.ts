export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface StudentProfile {
  userId: string;
  quizScores: number[];
  completedTopics: string[];
  learningStyle?: 'visual' | 'reading' | 'practice';
}

export interface AdaptiveLearningPath {
  recommendedDifficulty: DifficultyLevel;
  nextTopics: string[];
  learningStyle: string;
  progressScore: number;
}

export interface AdaptiveLearningResponse {
  success: boolean;
  data?: AdaptiveLearningPath;
  message?: string;
}

export class AdaptiveLearningError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'AdaptiveLearningError';
    this.statusCode = statusCode;
  }
}
export type LogStatus = 'success' | 'error' | 'partial';

export interface StageLatency {
  retrieval?: number;
  embedding?: number;
  generation?: number;
  total?: number;
}

export interface CreateGenerationLogInput {
  userId: string;
  quizId?: string;
  runId?: string;
  workflow?: string;
  promptVersion?: string;
  provider?: string;
  modelUsed: string;
  embeddingModel?: string;
  promptTokens?: number;
  completionTokens?: number;
  costEstimate?: number;
  retrievedChunkIds?: string[];
  stageLatencyMs?: StageLatency;
  retryCount?: number;
  errorCode?: string;
  status: LogStatus;
}
