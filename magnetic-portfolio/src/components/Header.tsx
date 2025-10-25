'use client';

import Link from 'next/link';
import { useState } from 'react';
import VisionScoper from './VisionScoper';

const Header = () => {
  const [isScoperOpen, setIsScoperOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-midnight-blue text-white p-4 flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-xl font-bold">
            Jules
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/web" className="hover:text-coral-accent" aria-label="Navigate to the Web world">
                Web
              </Link>
            </li>
            <li>
              <Link href="/cloud" className="hover:text-coral-accent" aria-label="Navigate to the Cloud world">
                Cloud
              </Link>
            </li>
            <li>
              <Link href="/ai" className="hover:text-coral-accent" aria-label="Navigate to the AI world">
                AI
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-coral-accent" aria-label="Navigate to the About page">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button
            onClick={() => setIsScoperOpen(true)}
            className="bg-coral-accent text-white px-4 py-2 rounded"
          >
            Chart Your Course
          </button>
        </div>
      </header>
      <VisionScoper isOpen={isScoperOpen} onClose={() => setIsScoperOpen(false)} />
    </>
  );
};

export default Header;
