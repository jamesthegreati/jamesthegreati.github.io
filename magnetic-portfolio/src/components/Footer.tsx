'use client';

import { useSound } from './SoundProvider';

const Footer = () => {
  const { isSoundEnabled, toggleSound } = useSound();

  return (
    <footer className="bg-midnight-blue text-white p-4 text-center">
      <div>
        <button onClick={toggleSound} className="hover:text-coral-accent">
          {isSoundEnabled ? 'Sound Off' : 'Sound On'}
        </button>
      </div>
      <p>&copy; {new Date().getFullYear()} Jules</p>
    </footer>
  );
};

export default Footer;
