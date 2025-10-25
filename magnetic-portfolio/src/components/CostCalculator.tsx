'use client';

import { useState } from 'react';

const CostCalculator = () => {
  const [cost, setCost] = useState(1000);
  const [savings, setSavings] = useState(0);

  const calculateSavings = (currentCost: number) => {
    // A simple calculation for demonstration purposes
    const potentialSavings = currentCost * 0.15;
    setSavings(potentialSavings);
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCost = parseInt(e.target.value);
    setCost(newCost);
    calculateSavings(newCost);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold font-serif mb-4 text-center">
        Find Your Cloud Savings
      </h2>
      <div className="flex flex-col items-center">
        <label htmlFor="cost" className="mb-2">
          Current Monthly Cloud Spend ($)
        </label>
        <input
          type="range"
          id="cost"
          min="100"
          max="10000"
          value={cost}
          onChange={handleCostChange}
          className="w-full max-w-md"
        />
        <div className="text-2xl font-bold mt-4">${cost}</div>
      </div>
      <div className="text-center mt-8">
        <p className="text-lg">Potential Monthly Savings</p>
        <p className="text-4xl font-bold text-coral-accent">${savings.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CostCalculator;
