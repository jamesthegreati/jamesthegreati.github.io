'use client';

import { createContext, useContext, useState } from 'react';

const SoundContext = createContext({
  isSoundEnabled: true,
  toggleSound: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  playSound: (_sound: 'whoosh' | 'click' | 'hum') => {},
});

export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  const playSound = (sound: 'whoosh' | 'click' | 'hum') => {
    if (isSoundEnabled) {
      // In a real application, you would use a library like howler.js to play the sounds.
      // For now, we'll just log to the console to acknowledge the sound event.
      console.log(`Sound event: ${sound}`);
    }
  };

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};
