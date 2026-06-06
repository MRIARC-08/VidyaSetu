import React from "react";

interface PerformanceChartProps {
  correct: number;
  incorrect: number;
  total: number;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({
  correct,
  incorrect,
  total,
}) => {
  const correctPercent = (correct / total) * 100;
  const incorrectPercent = (incorrect / total) * 100;

  return (
    <div className="p-6 rounded-xl shadow bg-white mt-6">
      <h2 className="text-xl font-bold mb-4">Performance Breakdown</h2>

      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden flex">
        <div
          style={{ width: `${correctPercent}%` }}
          className="bg-green-500 h-full"
        />
        <div
          style={{ width: `${incorrectPercent}%` }}
          className="bg-red-500 h-full"
        />
      </div>

      <div className="flex justify-between mt-3 text-sm">
        <span className="text-green-600">
          Correct: {correct} ({Math.round(correctPercent)}%)
        </span>

        <span className="text-red-600">
          Incorrect: {incorrect} ({Math.round(incorrectPercent)}%)
        </span>
      </div>
    </div>
  );
};

export default PerformanceChart;