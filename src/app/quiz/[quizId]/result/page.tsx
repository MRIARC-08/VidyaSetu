"use client";

import React from "react";
import QuizResults from "@/components/quiz/QuizResults";
import QuizReview from "@/components/quiz/QuizReview";
import PerformanceChart from "@/components/quiz/PerformanceChart";

const ResultPage = () => {
  // 🔥 TEMP MOCK DATA (replace later with API/session data)
  const data = {
    score: 8,
    total: 10,
    accuracy: 80,
    timeTaken: "4m 32s",
    correct: 8,
    incorrect: 2,
    questions: [
      {
        question: "What is React?",
        options: ["Library", "Framework", "Language"],
        correctAnswer: "Library",
        userAnswer: "Library",
        explanation: "React is a JS library for UI.",
      },
      {
        question: "Next.js is built on?",
        options: ["React", "Vue", "Angular"],
        correctAnswer: "React",
        userAnswer: "Vue",
        explanation: "Next.js uses React as base.",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>

      {/* Top Summary */}
      <QuizResults
        score={data.score}
        total={data.total}
        accuracy={data.accuracy}
        timeTaken={data.timeTaken}
      />

      {/* Performance Chart */}
      <PerformanceChart
        correct={data.correct}
        incorrect={data.incorrect}
        total={data.total}
      />

      {/* Detailed Review */}
      <QuizReview questions={data.questions} />
    </div>
  );
};

export default ResultPage;