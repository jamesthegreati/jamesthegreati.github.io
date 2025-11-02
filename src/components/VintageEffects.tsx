'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface VintagePageWrapperProps {
  children: ReactNode;
  intensity?: 'light' | 'medium' | 'heavy';
}

export function VintagePageWrapper({ children, intensity = 'medium' }: VintagePageWrapperProps) {
  const opacityMap = {
    light: 0.03,
    medium: 0.05,
    heavy: 0.08,
  };

  return (
    <div className="relative">
      {/* Aged paper texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(139, 69, 19, ${opacityMap[intensity]}) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(160, 82, 45, ${opacityMap[intensity]}) 0%, transparent 50%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(210, 180, 140, ${opacityMap[intensity] * 0.5}) 2px,
              rgba(210, 180, 140, ${opacityMap[intensity] * 0.5}) 4px
            )
          `,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Ink splatter decorations */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              background: `radial-gradient(circle, rgba(0, 0, 0, ${0.02 + i * 0.01}) 0%, transparent 70%)`,
              filter: 'blur(1px)',
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Film grain effect */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='4' seed='15' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />

      {children}
    </div>
  );
}

// VHS Glitch Effect Component
export function VHSGlitch({ trigger = false }: { trigger?: boolean }) {
  if (!trigger) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 0.3 }}
    >
      {/* RGB split effect */}
      <div className="absolute inset-0 bg-red-500 opacity-20 translate-x-2" />
      <div className="absolute inset-0 bg-blue-500 opacity-20 -translate-x-2" />
      
      {/* Scan lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        }}
      />
    </motion.div>
  );
}

// Film Reel Transition
export function FilmReelTransition({ isTransitioning }: { isTransitioning: boolean }) {
  if (!isTransitioning) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Film sprocket holes */}
      <div className="absolute top-0 left-0 right-0 h-full flex justify-between px-4">
        <div className="flex flex-col justify-around">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`left-${i}`}
              className="w-4 h-4 bg-white rounded-sm"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.5, delay: i * 0.05, repeat: Infinity }}
            />
          ))}
        </div>
        <div className="flex flex-col justify-around">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`right-${i}`}
              className="w-4 h-4 bg-white rounded-sm"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.5, delay: i * 0.05, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      {/* Countdown circle */}
      <motion.div
        className="text-white text-9xl font-display"
        animate={{ scale: [1, 1.2, 0], opacity: [1, 1, 0] }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-48 h-48 border-8 border-white rounded-full flex items-center justify-center">
          3
        </div>
      </motion.div>
    </motion.div>
  );
}

// Steampunk Gears
export function SteampunkGears({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-web-mustard opacity-20">
          <path d="M12,2L11,5.5L9,3L8.5,6.5L6,4L6,7.5L3.5,6L4.5,9L2,8.5L3.5,11L1,11.5L3,13L1.5,14L4,15L3,17.5L5.5,17L5,19.5L7.5,18.5L8,21L10,19.5L11,22L12,19L13,22L14,19.5L16,21L16.5,18.5L19,19.5L18,17.5L20.5,17L20,15L22.5,14L21,13L23,11.5L20.5,11L22,9L19.5,8.5L20.5,6L18,7.5L18,4L15.5,6.5L15,3L13,5.5L12,2M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute left-8 top-8"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-cloud-electric opacity-15">
          <path d="M12,2L11,5.5L9,3L8.5,6.5L6,4L6,7.5L3.5,6L4.5,9L2,8.5L3.5,11L1,11.5L3,13L1.5,14L4,15L3,17.5L5.5,17L5,19.5L7.5,18.5L8,21L10,19.5L11,22L12,19L13,22L14,19.5L16,21L16.5,18.5L19,19.5L18,17.5L20.5,17L20,15L22.5,14L21,13L23,11.5L20.5,11L22,9L19.5,8.5L20.5,6L18,7.5L18,4L15.5,6.5L15,3L13,5.5L12,2M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
        </svg>
      </motion.div>
    </div>
  );
}
