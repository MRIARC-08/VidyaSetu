import React from "react";

interface QuizResultsProps {
  score: number;
  total: number;
  accuracy: number;
  timeTaken: string;
}

const QuizResults = ({
  score,
  total,
  accuracy,
  timeTaken,
}: QuizResultsProps) => {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Quiz Results</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Score</p>
          <p className="text-lg font-semibold">
            {score} / {total}
          </p>
        </div>

        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Accuracy</p>
          <p className="text-lg font-semibold">{accuracy}%</p>
        </div>

        <div className="p-4 border rounded col-span-2">
          <p className="text-sm text-gray-500">Time Taken</p>
          <p className="text-lg font-semibold">{timeTaken}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;