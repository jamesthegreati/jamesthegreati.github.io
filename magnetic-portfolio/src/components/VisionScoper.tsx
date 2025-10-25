'use client';

import { useState } from 'react';

interface VisionScoperProps {
  isOpen: boolean;
  onClose: () => void;
}

const VisionScoper = ({ isOpen, onClose }: VisionScoperProps) => {
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState('');
  const [challenge, setChallenge] = useState('');

  const handleObjectiveSelect = (selectedObjective: string) => {
    setObjective(selectedObjective);
    setStep(2);
  };

  const handleChallengeSelect = (selectedChallenge: string) => {
    setChallenge(selectedChallenge);
    setStep(3);
  };

  const getResult = () => {
    if (objective === 'Engage My Users' && challenge === 'Outdated Design') {
      return 'Based on your goals, you need a Creative Builder who understands the mind of a Reliable Architect. I recommend starting with the [Project Name] story, where we revitalized a user experience while cutting server costs by 30%.';
    }
    // Add more personalized narratives here based on other combinations
    return 'Thank you for your input! I recommend exploring the Web World to see how I can help you achieve your goals.';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-midnight-blue p-8 rounded-lg max-w-lg w-full">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4">What is your primary objective?</h2>
            <div className="grid grid-cols-1 gap-4">
              <button onClick={() => handleObjectiveSelect('Engage My Users')} className="bg-gray-700 text-white p-4 rounded-lg hover:bg-coral-accent">Engage My Users</button>
              <button onClick={() => handleObjectiveSelect('Fortify My Infrastructure')} className="bg-gray-700 text-white p-4 rounded-lg hover:bg-coral-accent">Fortify My Infrastructure</button>
              <button onClick={() => handleObjectiveSelect('Unlock My Data')} className="bg-gray-700 text-white p-4 rounded-lg hover:bg-coral-accent">Unlock My Data</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4">What&apos;s your biggest challenge right now?</h2>
            <div className="grid grid-cols-1 gap-4">
              <button onClick={() => handleChallengeSelect('Outdated Design')} className="bg-gray-700 text-white p-4 rounded-lg hover:bg-coral-accent">Outdated Design</button>
              <button onClick={() => handleChallengeSelect('High Operating Costs')} className="bg-gray-700 text-white p-4 rounded-lg hover:bg-coral-accent">High Operating Costs</button>
              <button onClick={() => handleChallengeSelect('Untapped Potential')} className="bg-gray-700 text-white p-4 rounded-lg hover:bg-coral-accent">Untapped Potential</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="text-center">
            <p className="text-lg">{getResult()}</p>
          </div>
        )}
        <button onClick={onClose} className="absolute top-4 right-4">Close</button>
      </div>
    </div>
  );
};

export default VisionScoper;
