'use client';

import { useState } from 'react';

const SentimentAnalyzer = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState<{ score: number; label: string } | null>(null);

  const analyzeSentiment = () => {
    // In a real application, you would use a pre-trained model for sentiment analysis.
    // For now, we'll use a simple keyword-based approach.
    const positiveKeywords = ['good', 'great', 'awesome', 'happy', 'love'];
    const negativeKeywords = ['bad', 'terrible', 'awful', 'sad', 'hate'];

    const words = text.toLowerCase().split(' ');
    let score = 0;
    for (const word of words) {
      if (positiveKeywords.includes(word)) {
        score++;
      } else if (negativeKeywords.includes(word)) {
        score--;
      }
    }

    let label = 'Neutral';
    if (score > 0) {
      label = 'Positive';
    } else if (score < 0) {
      label = 'Negative';
    }

    setSentiment({ score, label });
  };

  return (
    <div className="bg-gray-800 rounded-lg h-96 flex flex-col items-center justify-center p-4">
      <h3 className="text-2xl font-bold font-serif mb-4 text-center">Sentiment Analyzer</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-32 bg-gray-700 text-white p-2 rounded-lg"
        placeholder="Enter some text to analyze..."
      ></textarea>
      <button
        onClick={analyzeSentiment}
        className="mt-4 bg-coral-accent text-white px-4 py-2 rounded"
      >
        Analyze
      </button>
      {sentiment && (
        <div className="mt-4 text-center">
          <p className="text-lg">
            Sentiment: <span className="font-bold">{sentiment.label}</span>
          </p>
          <p className="text-sm">Score: {sentiment.score}</p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalyzer;
