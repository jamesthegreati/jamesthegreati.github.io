'use client';

import { useState } from 'react';

interface PipelineStage {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const stages: PipelineStage[] = [
  {
    name: 'Source',
    description: 'Code is committed to a version control system.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>,
  },
  {
    name: 'Build',
    description: 'The application is compiled and packaged.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>,
  },
  {
    name: 'Test',
    description: 'Automated tests are run to ensure quality.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    name: 'Deploy',
    description: 'The application is deployed to a staging environment.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
  },
  {
    name: 'Monitor',
    description: 'The application is monitored for performance and errors.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m6 2v-2m-6-4v-2m6 2V9" /></svg>,
  },
];

const InteractivePipeline = () => {
  const [hoveredStage, setHoveredStage] = useState<PipelineStage | null>(null);

  return (
    <div className="flex justify-between items-center bg-gray-800 p-8 rounded-lg">
      {stages.map((stage, index) => (
        <div
          key={stage.name}
          className="relative"
          onMouseEnter={() => setHoveredStage(stage)}
          onMouseLeave={() => setHoveredStage(null)}
        >
          <div className="w-24 h-24 bg-gray-700 rounded-full flex flex-col items-center justify-center text-center">
            {stage.icon}
            <span className="mt-2 text-sm">{stage.name}</span>
          </div>
          {hoveredStage === stage && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-gray-900 text-white text-sm rounded-lg p-2 text-center">
              {stage.description}
            </div>
          )}
          {index < stages.length - 1 && (
            <div className="absolute top-1/2 left-full w-16 h-1 bg-gray-700"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InteractivePipeline;
