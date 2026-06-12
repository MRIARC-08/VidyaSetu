export const roundToTwoDecimals = (value: number): number => {
  return Number((Math.round(value * 100) / 100).toFixed(2));
};

export const calculatePercentage = (correct: number, total: number): number => {
  if (total === 0) {
    return 0;
  }
  return roundToTwoDecimals((correct / total) * 100);
};
