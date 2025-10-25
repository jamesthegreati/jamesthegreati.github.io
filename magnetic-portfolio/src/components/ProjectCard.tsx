'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative border border-gray-700 rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{description}</p>
          <button className="mt-4 bg-coral-accent text-white px-4 py-2 rounded">
            Play
          </button>
        </div>
      </div>
      <div
        className={`absolute inset-0 border-2 border-coral-accent rounded-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default ProjectCard;
