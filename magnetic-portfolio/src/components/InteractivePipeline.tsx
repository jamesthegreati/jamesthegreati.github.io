'use client';

import { useState } from 'react';

interface PipelineStage {
  name: string;
  description: string;
}

const stages: PipelineStage[] = [
  { name: 'Source', description: 'Code is committed to a version control system.' },
  { name: 'Build', description: 'The application is compiled and packaged.' },
  { name: 'Test', description: 'Automated tests are run to ensure quality.' },
  { name: 'Deploy', description: 'The application is deployed to a staging environment.' },
  { name: 'Monitor', description: 'The application is monitored for performance and errors.' },
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
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-center">
            {stage.name}
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
