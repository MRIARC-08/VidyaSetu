import { getAdaptiveLearningPath, adjustDifficulty } from './ai.service';
import type { StudentProfile, DifficultyLevel } from './ai.types';

export function handleGetLearningPath(profile: StudentProfile) {
  try {
    const data = getAdaptiveLearningPath(profile);
    return { success: true, data };
  } catch (error) {
    return { success: false, message: 'Failed to generate learning path' };
  }
}

export function handleAdjustDifficulty(
  current: DifficultyLevel,
  lastAnswerCorrect: boolean
) {
  try {
    const newDifficulty = adjustDifficulty(current, lastAnswerCorrect);
    return { success: true, data: { difficulty: newDifficulty } };
  } catch (error) {
    return { success: false, message: 'Failed to adjust difficulty' };
  }
}
