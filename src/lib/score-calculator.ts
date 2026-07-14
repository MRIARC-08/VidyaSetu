export function calculateAccuracy(
  correctCount: number,
  totalQuestions: number
): number {
  if (totalQuestions === 0) {
    return 0;
  }

  return Math.round((correctCount / totalQuestions) * 10000) / 100;
}

export function calculateScore(
  correctCount: number,
  totalQuestions: number
): number {
  if (totalQuestions === 0) {
    return 0;
  }

  const percentage = (correctCount / totalQuestions) * 100;
  return Math.round(percentage * 100) / 100;
}

export function calculateWeightedAccuracy(
  correctAnswers: number,
  attempts: number
): number {
  if (attempts === 0) {
    return 0;
  }

  return Math.round((correctAnswers / attempts) * 1000) / 10;
}
