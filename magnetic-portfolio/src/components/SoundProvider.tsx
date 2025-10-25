'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

const sounds = {
  whoosh: new Howl({ src: ['/sounds/whoosh.mp3'], preload: true }),
  click: new Howl({ src: ['/sounds/click.mp3'], preload: true }),
  hum: new Howl({ src: ['/sounds/hum.mp3'], preload: true, loop: true }),
};

const SoundContext = createContext({
  isSoundEnabled: true,
  toggleSound: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  playSound: (_sound: 'whoosh' | 'click' | 'hum') => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stopSound: (_sound: 'hum') => {},
});

export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  const playSound = (sound: 'whoosh' | 'click' | 'hum') => {
    if (isSoundEnabled) {
      sounds[sound].play();
    }
  };

  const stopSound = (sound: 'hum') => {
    sounds[sound].stop();
  };

  useEffect(() => {
    // This is not an ideal way to handle sounds, but it will work for this demo
    if (!isSoundEnabled) {
      sounds.hum.stop();
    }
  }, [isSoundEnabled]);


  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSound, playSound, stopSound }}>
      {children}
    </SoundContext.Provider>
  );
};
