'use client';

import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export function BackToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-web-mustard to-cloud-electric shadow-2xl flex items-center justify-center cursor-pointer group"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      style={{
        boxShadow: '0 0 30px rgba(212, 165, 116, 0.5)',
      }}
    >
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.div>

      {/* Vintage rocket flames */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2"
        animate={{ 
          scaleY: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 0.3, repeat: Infinity }}
      >
        <div className="w-6 h-8 bg-gradient-to-b from-orange-500 via-red-500 to-transparent rounded-b-full opacity-70" />
      </motion.div>
    </motion.button>
  );
}
