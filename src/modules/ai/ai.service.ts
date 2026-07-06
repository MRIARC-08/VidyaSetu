import type { StudentProfile, AdaptiveLearningPath, DifficultyLevel } from './ai.types';

const topicMap: Record<DifficultyLevel, string[]> = {
  beginner: ['Introduction', 'Basic Concepts', 'Guided Practice'],
  intermediate: ['Applied Problems', 'Case Studies', 'Group Projects'],
  advanced: ['Research Topics', 'Peer Teaching', 'Open-ended Challenges'],
};

function calculateAverage(scores: number[]): number {
  if (!scores.length) return 50;
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

function getDifficulty(avg: number): DifficultyLevel {
  if (avg >= 80) return 'advanced';
  if (avg >= 50) return 'intermediate';
  return 'beginner';
}

export function getAdaptiveLearningPath(profile: StudentProfile): AdaptiveLearningPath {
  const avg = calculateAverage(profile.quizScores);
  const difficulty = getDifficulty(avg);
  const nextTopics = topicMap[difficulty].filter(
    (t) => !profile.completedTopics.includes(t)
  );
  return {
    recommendedDifficulty: difficulty,
    nextTopics,
    learningStyle: profile.learningStyle ?? 'visual',
    progressScore: Math.round(avg),
  };
}

export function adjustDifficulty(
  current: DifficultyLevel,
  lastAnswerCorrect: boolean
): DifficultyLevel {
  if (lastAnswerCorrect && current === 'beginner') return 'intermediate';
  if (lastAnswerCorrect && current === 'intermediate') return 'advanced';
  if (!lastAnswerCorrect && current === 'advanced') return 'intermediate';
  if (!lastAnswerCorrect && current === 'intermediate') return 'beginner';
  return current;
}
