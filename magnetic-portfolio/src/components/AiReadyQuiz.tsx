'use client';

import { useState } from 'react';

const questions = [
  {
    question: 'How would you describe your data infrastructure?',
    answers: [
      { text: 'Non-existent or siloed', score: 1 },
      { text: 'Centralized but not optimized', score: 2 },
      { text: 'Modern, cloud-based, and accessible', score: 3 },
    ],
  },
  {
    question: 'What is the state of your data quality?',
    answers: [
      { text: 'Inconsistent and unreliable', score: 1 },
      { text: 'Generally good, but with some gaps', score: 2 },
      { text: 'Clean, well-documented, and trusted', score: 3 },
    ],
  },
  {
    question: 'How does your organization make decisions?',
    answers: [
      { text: 'Based on gut feeling and intuition', score: 1 },
      { text: 'A mix of data and experience', score: 2 },
      { text: 'Primarily data-driven', score: 3 },
    ],
  },
];

const AiReadyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerScore: number) => {
    setScore(score + answerScore);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    if (score <= 3) {
      return 'You are at the beginning of your AI journey. Focus on building a solid data foundation.';
    } else if (score <= 6) {
      return 'You are on the right track. Continue to invest in data quality and infrastructure.';
    } else {
      return 'You are well-prepared for AI. It\'s time to start experimenting with models and applications.';
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold font-serif mb-4 text-center">
        Is Your Business AI-Ready?
      </h2>
      {!showResult ? (
        <div>
          <h3 className="text-xl mb-4">{questions[currentQuestion].question}</h3>
          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].answers.map((answer) => (
              <button
                key={answer.text}
                onClick={() => handleAnswer(answer.score)}
                className="bg-gray-700 text-white p-4 rounded-lg hover:bg-coral-accent"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-2xl font-bold">Your AI-Ready Score: {score}</p>
          <p className="text-lg mt-4">{getResult()}</p>
        </div>
      )}
    </div>
  );
};

export default AiReadyQuiz;
