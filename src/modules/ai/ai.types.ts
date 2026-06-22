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
