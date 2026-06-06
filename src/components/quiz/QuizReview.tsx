import React from "react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer: string;
  explanation?: string;
}

interface QuizReviewProps {
  questions: Question[];
}

const QuizReview: React.FC<QuizReviewProps> = ({ questions }) => {
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-bold">Review Answers</h2>

      {questions.map((q, index) => {
        const isCorrect = q.userAnswer === q.correctAnswer;

        return (
          <div
            key={index}
            className={`p-4 rounded-xl border ${
              isCorrect ? "border-green-400" : "border-red-400"
            }`}
          >
            <h3 className="font-semibold mb-2">
              Q{index + 1}. {q.question}
            </h3>

            <div className="space-y-1">
              <p>
                <span className="text-gray-500">Your Answer:</span>{" "}
                <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                  {q.userAnswer}
                </span>
              </p>

              <p>
                <span className="text-gray-500">Correct Answer:</span>{" "}
                <span className="text-green-600">{q.correctAnswer}</span>
              </p>
            </div>

            {q.explanation && (
              <p className="mt-2 text-sm text-gray-600">
                💡 {q.explanation}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuizReview;