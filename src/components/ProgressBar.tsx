'use client';

import { motion, useScroll } from 'framer-motion';

export function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #D4A574 0%, #3498DB 50%, #00D9FF 100%)',
        boxShadow: '0 0 10px rgba(212, 165, 116, 0.5)',
      }}
    />
  );
}
