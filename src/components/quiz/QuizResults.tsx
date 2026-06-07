import React from "react";

interface QuizResultsProps {
  score: number;
  total: number;
  accuracy: number;
  timeTaken: string;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  total,
  accuracy,
  timeTaken,
}) => {
  return (
    <div className="p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Quiz Summary</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500">Score</p>
          <p className="text-2xl font-bold">
            {score}/{total}
          </p>
        </div>

        <div>
          <p className="text-gray-500">Accuracy</p>
          <p className="text-2xl font-bold">{accuracy}%</p>
        </div>

        <div>
          <p className="text-gray-500">Time Taken</p>
          <p className="text-2xl font-bold">{timeTaken}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;