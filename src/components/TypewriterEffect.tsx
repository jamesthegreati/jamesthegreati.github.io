'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypewriterText({ text, className = '', delay = 0, speed = 50 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex >= text.length) return;
    
    const startTimeout = setTimeout(() => {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, delay, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className={`inline-block w-0.5 h-full bg-current ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
          |
        </span>
      )}
    </span>
  );
}

// Award Badge Component
export function AwardBadge({ icon, text, color }: { icon: string; text: string; color: string }) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 backdrop-blur-sm"
      style={{ borderColor: color, backgroundColor: `${color}10` }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <motion.span
        className="text-2xl"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {icon}
      </motion.span>
      <span className="font-display font-bold text-sm">{text}</span>
    </motion.div>
  );
}
