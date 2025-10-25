'use client';

import { motion } from 'framer-motion';
import { useSound } from './SoundProvider';
import { useEffect } from 'react';

type TransitionType = 'web' | 'cloud' | 'ai';

const transitionStyles = {
  web: { ease: [0.22, 1, 0.36, 1] }, // ease-out-expo
  cloud: { ease: [0.25, 1, 0.5, 1] }, // ease-in-out-quad
  ai: { ease: 'linear' },
};

const PortalTransition = ({
  children,
  transitionType = 'web',
}: {
  children: React.ReactNode;
  transitionType?: TransitionType;
}) => {
  const { playSound } = useSound();

  useEffect(() => {
    playSound('whoosh');
  }, [playSound]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ...transitionStyles[transitionType] }}
    >
      {children}
    </motion.div>
  );
};

export default PortalTransition;
