'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PortalTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ 
        duration: 1, 
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export function SlideIn({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 0.6 
}: SlideInProps) {
  const directions = {
    up: { initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -30, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: 30, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: -30, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  };

  return (
    <motion.div
      initial={directions[direction].initial}
      animate={directions[direction].animate}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
}

export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1 
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
