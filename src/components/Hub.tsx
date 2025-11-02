'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { ProgressBar } from './ProgressBar';
import { VintagePageWrapper } from './VintageEffects';
import { DeveloperProfile } from './DeveloperProfile';

interface PortalCardProps {
  worldName: string;
  subtitle: string;
  description: string;
  href: string;
  color: string;
  accentColor: string;
  icon: React.ReactNode;
}

export function PortalCard({
  worldName,
  subtitle,
  description,
  href,
  color,
  accentColor,
}: PortalCardProps) {
  const ref = useRef(null);

  return (
      <Link href={href}>
        <motion.div
          ref={ref}
          whileHover={{ scale: 1.05, y: -10 }}
          whileTap={{ scale: 0.95 }}
    className="relative group cursor-pointer h-[420px] sm:h-[460px] md:h-[500px]"
        >
          {/* Cinema Card with film strip borders */}
          <div
            className="relative h-full overflow-hidden cinema-card border-4"
            style={{ 
              borderColor: color,
              backgroundColor: `${accentColor}05`
            }}
          >
            {/* Film sprocket holes on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-6 md:flex hidden flex-col justify-around items-center py-4 z-20"
              style={{ backgroundColor: color }}>
              {[...Array(12)].map((_, i) => (
                <div key={`left-${i}`} className="w-3 h-3 rounded-sm bg-[#f4e9d9]" />
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-6 md:flex hidden flex-col justify-around items-center py-4 z-20"
              style={{ backgroundColor: color }}>
              {[...Array(12)].map((_, i) => (
                <div key={`right-${i}`} className="w-3 h-3 rounded-sm bg-[#f4e9d9]" />
              ))}
            </div>

            {/* Projector light effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-5"
              style={{
                background: `linear-gradient(135deg, transparent 0%, ${accentColor}10 50%, transparent 100%)`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:px-8 md:px-12 relative z-10">
              {/* Text content with cinema poster styling */}
              <div className="space-y-3 text-center">
                <div>
                  <motion.h3 
                    className="text-4xl md:text-5xl font-poster font-bold mb-3 tracking-wide"
                    style={{ 
                      color,
                      textShadow: `2px 2px 0 ${accentColor}, 4px 4px 0 rgba(0,0,0,0.1)`
                    }}
                    whileHover={{
                      textShadow: `3px 3px 0 ${accentColor}, 6px 6px 0 rgba(0,0,0,0.15)`
                    }}
                  >
                    {worldName}
                  </motion.h3>
                
                  {/* Decorative line */}
                  <motion.div 
                    className="w-24 h-1 mx-auto mb-3"
                    style={{ backgroundColor: accentColor }}
                    animate={{ width: ["80px", "100px", "80px"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              
                {/* Subtitle with vintage ticket style */}
                <div 
                  className="inline-block px-6 py-2 border-2 border-dashed relative"
                  style={{ 
                    borderColor: accentColor,
                    backgroundColor: `${accentColor}15`
                  }}
                >
                  <p 
                    className="text-lg font-handwritten font-bold tracking-wide"
                    style={{ color: color }}
                  >
                    {subtitle}
                  </p>
                </div>
              
                <p className="text-base sm:text-lg leading-relaxed font-serif text-[#1A3A52] px-2">
                  {description}
                </p>
              </div>

              {/* Admission ticket CTA */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="text-center px-6 py-3 border-3 relative overflow-hidden"
                  style={{ 
                    backgroundColor: color,
                    borderColor: accentColor,
                  }}
                >
                  <motion.span 
                    className="text-base font-marquee font-bold uppercase tracking-widest text-[#f4e9d9] relative z-10"
                    animate={{ 
                      textShadow: [
                        `0 0 10px ${accentColor}`,
                        `0 0 20px ${accentColor}`,
                        `0 0 10px ${accentColor}`
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🎟️ ENTER NOW 🎟️
                  </motion.span>
                
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1"
                    style={{ backgroundColor: accentColor }}
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Film grain overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply z-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='4' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }}
            />
          </div>
        </motion.div>
      </Link>
  );
}

export function Hub() {
  return (
    <VintagePageWrapper intensity="light">
  <ProgressBar />
      
      <div className="min-h-screen aged-paper overflow-hidden relative">
      {/* Fixed Header with Sound Toggle and Social Links */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-sm bg-[#f4e9d9]/95 border-b-4 border-[#D4A574] shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo/Name with vintage styling */}
          <Link href="/">
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-4xl">⚜️</span>
              <span className="text-3xl font-elegant text-[#1A3A52]">
                James Barnes
              </span>
            </motion.div>
          </Link>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/jamesthegreati"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-[#1A3A52] hover:text-[#D4A574] transition-colors"
                aria-label="Visit GitHub Profile"
                title="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/jamesthegreati"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-[#1A3A52] hover:text-[#D4A574] transition-colors"
                aria-label="Visit LinkedIn Profile"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>

              <motion.a
                href="mailto:hello@jamesdesign.me"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-[#1A3A52] hover:text-[#D4A574] transition-colors"
                aria-label="Send Email to hello@jamesdesign.me"
                title="Email: hello@jamesdesign.me"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Vintage decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Ink splatters */}
        <div className="ink-splatter" style={{ width: '150px', height: '150px', top: '10%', left: '5%', opacity: 0.15 }} />
        <div className="ink-splatter" style={{ width: '120px', height: '120px', top: '30%', right: '8%', opacity: 0.1 }} />
        <div className="ink-splatter" style={{ width: '100px', height: '100px', bottom: '15%', left: '10%', opacity: 0.12 }} />
        <div className="ink-splatter" style={{ width: '180px', height: '180px', bottom: '20%', right: '12%', opacity: 0.08 }} />
        
        {/* Floating vintage ornaments */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-5"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {['⚜️', '❖', '✤', '⚙️', '✦'][i]}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
          {/* Animated intro text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 max-w-4xl"
          >
            {/* Vintage ornamental divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <span className="text-4xl text-[#D4A574]">✤</span>
              <span className="text-4xl text-[#D4A574]">✦</span>
              <span className="text-4xl text-[#D4A574]">✤</span>
            </motion.div>

            {/* Main heading with vintage styling */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-vintage font-black leading-tight text-[#1A3A52] mb-6"
            >
              James Barnes
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-typewriter text-[#D4A574]">
                Digital Craftsman
              </span>
            </motion.h1>

            {/* Vintage subtitle banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block px-8 py-3 bg-[#1A3A52] border-4 border-[#D4A574] text-[#f4e9d9] font-typewriter tracking-widest uppercase shadow-xl relative"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#D4A574] rounded-full" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#D4A574] rounded-full" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#D4A574] rounded-full" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#D4A574] rounded-full" />
              Est. 2018 • Excellence in Digital Craft
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-[#1A3A52] font-serif max-w-3xl mx-auto leading-relaxed mt-8"
            >
              <span className="font-bold italic">"Crafting exceptional digital experiences</span> through the art of{' '}
              <span className="font-bold text-[#D4A574]">design</span>,{' '}
              the science of{' '}
              <span className="font-bold text-[#D4A574]">infrastructure</span>, and{' '}
              the vision of{' '}
              <span className="font-bold text-[#D4A574]">innovation</span>.<span className="font-bold italic">"</span>
            </motion.p>

            {/* Vintage CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#D4A574] border-4 border-[#1A3A52] text-[#1A3A52] font-elegant text-xl font-bold rounded shadow-2xl hover:bg-[#1A3A52] hover:text-[#f4e9d9] transition-colors relative"
              >
                <span className="relative z-10">⚜ Explore My Worlds ⚜</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator with vintage styling */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-typewriter text-sm text-[#1A3A52] tracking-wider">SCROLL</span>
            <svg
              className="w-6 h-6 text-[#D4A574]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>

        {/* Developer Profile Section */}
        <DeveloperProfile />

        {/* Portals Section */}
          <div className="px-4 py-20 relative overflow-hidden">
            {/* Film strip decoration at top */}
            <div className="absolute top-0 left-0 right-0 h-20 opacity-20 pointer-events-none hidden md:block">
              <div className="w-full h-full bg-repeat-x" style={{
                backgroundImage: `repeating-linear-gradient(90deg, #1A3A52 0px, #1A3A52 15px, transparent 15px, transparent 30px)`,
                backgroundSize: '30px 100%',
                borderTop: '4px solid #1A3A52',
                borderBottom: '4px solid #1A3A52'
              }} />
            </div>

            {/* Projector light beams */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
              <motion.div
                className="absolute top-0 left-1/4 w-64 h-full opacity-5"
                style={{
                  background: 'linear-gradient(180deg, rgba(212, 165, 116, 0.3) 0%, transparent 50%)',
                  transform: 'skewX(-15deg)'
                }}
                animate={{
                  opacity: [0.03, 0.08, 0.03],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-0 right-1/4 w-64 h-full opacity-5"
                style={{
                  background: 'linear-gradient(180deg, rgba(212, 165, 116, 0.3) 0%, transparent 50%)',
                  transform: 'skewX(15deg)'
                }}
                animate={{
                  opacity: [0.05, 0.08, 0.05],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>

          <div className="max-w-7xl mx-auto">
              {/* Section title with cinema marquee styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
                className="text-center mb-20 relative"
            >
                {/* Film reels decoration */}
                <div className="flex justify-center items-center gap-8 mb-8">
                  <motion.div 
                    className="film-reel text-[#D4A574]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-2xl">🎬</span>
                  </motion.div>
                
                  <div className="relative">
                    <motion.div 
                      animate={{ 
                        rotate: [0, -5, 5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-8xl">🎞️</span>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="film-reel text-[#D4A574]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-2xl">📽️</span>
                  </motion.div>
              </div>

                {/* Vintage Cinema Title */}
                <motion.div
                  className="relative inline-block"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.h2 
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-poster font-bold mb-6 text-[#1A3A52] relative z-10 tracking-wider"
                    style={{
                      textShadow: `
                        3px 3px 0 #D4A574,
                        6px 6px 0 rgba(26, 58, 82, 0.3),
                        0 0 40px rgba(212, 165, 116, 0.2)
                      `,
                      letterSpacing: '0.05em'
                    }}
                    animate={{
                      textShadow: [
                        '3px 3px 0 #D4A574, 6px 6px 0 rgba(26, 58, 82, 0.3), 0 0 40px rgba(212, 165, 116, 0.2)',
                        '3px 3px 0 #D4A574, 6px 6px 0 rgba(26, 58, 82, 0.3), 0 0 50px rgba(212, 165, 116, 0.3)',
                        '3px 3px 0 #D4A574, 6px 6px 0 rgba(26, 58, 82, 0.3), 0 0 40px rgba(212, 165, 116, 0.2)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    CHART YOUR COURSE
                  </motion.h2>
                
                  {/* Marquee light bulbs effect */}
                  <div className="absolute -inset-4 -z-10">
                    <div className="absolute top-0 left-0 w-3 h-3 bg-[#D4A574] rounded-full" 
                      style={{ animation: 'marquee-lights 1.5s ease-in-out infinite' }} />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-[#D4A574] rounded-full" 
                      style={{ animation: 'marquee-lights 1.5s ease-in-out infinite 0.3s' }} />
                    <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#D4A574] rounded-full" 
                      style={{ animation: 'marquee-lights 1.5s ease-in-out infinite 0.6s' }} />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D4A574] rounded-full" 
                      style={{ animation: 'marquee-lights 1.5s ease-in-out infinite 0.9s' }} />
                  </div>
                </motion.div>

                {/* Vintage ticket-style subtitle */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-block px-12 py-4 bg-[#1A3A52] border-4 border-dashed border-[#D4A574] mt-8 relative"
                  style={{ transform: 'rotate(-1deg)' }}
                >
                  {/* Ticket perforations */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-[#f4e9d9] rounded-full border-2 border-[#D4A574]" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-[#f4e9d9] rounded-full border-2 border-[#D4A574]" />
                
                  <p className="text-2xl md:text-3xl font-marquee text-[#D4A574] tracking-widest uppercase">
                    ★ Three Exclusive Features ★
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl md:text-2xl font-carnival text-[#1A3A52] max-w-3xl mx-auto leading-relaxed mt-8"
                  style={{ textShadow: '1px 1px 2px rgba(212, 165, 116, 0.3)' }}
                >
                  Step right up! Experience three magnificent exhibitions,
                <br />
                  each presenting <span className="font-bold text-[#D4A574] italic">a spectacular showcase</span> of digital mastery
                  </motion.p>
            </motion.div>

              {/* Portal Cards with Film Roll Animation */}
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto">
                  {/* Web Design Portal */}
                  <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                <PortalCard
                  worldName="🌐 Web World"
                  subtitle="The Creative Builder"
                  description="Modern UI/UX design with retro aesthetics, engaging interactions, and stunning visual storytelling"
                  href="/web-design"
                  color="#1A3A52"
                  accentColor="#D4A574"
                  icon="🎨"
                />
                </motion.div>

                {/* Cloud Engineering Portal */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                <PortalCard
                  worldName="☁️ Cloud World"
                  subtitle="The Reliable Architect"
                  description="Infrastructure design, DevOps automation, and scalable cloud architecture in a retro-tech environment"
                  href="/cloud-engineering"
                  color="#2C3E50"
                  accentColor="#3498DB"
                  icon="⚙️"
                />
                </motion.div>

                {/* AI Expert Portal */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                <PortalCard
                  worldName="🤖 AI World"
                  subtitle="The Visionary Innovator"
                  description="Machine learning, neural networks, and cutting-edge AI solutions with a futuristic vintage twist"
                  href="/ai-expert"
                  color="#3D1A5C"
                  accentColor="#00D9FF"
                  icon="�"
                />
                </motion.div>
              </div>
          </div>

            {/* Film strip decoration at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 opacity-20 pointer-events-none hidden md:block">
              <div className="w-full h-full bg-repeat-x" style={{
                backgroundImage: `repeating-linear-gradient(90deg, #1A3A52 0px, #1A3A52 15px, transparent 15px, transparent 30px)`,
                backgroundSize: '30px 100%',
                borderTop: '4px solid #1A3A52',
                borderBottom: '4px solid #1A3A52'
              }} />
            </div>
        </div>

        {/* Vintage Footer section */}
        <div className="px-4 py-16 border-t-4 border-[#D4A574] bg-[#1A3A52] relative overflow-hidden">
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`
            }} />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              {/* Decorative element */}
              <div className="flex justify-center items-center gap-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block text-6xl"
                >
                  ⚜️
                </motion.div>
              </div>

              {/* Contact CTA */}
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-4xl font-vintage text-[#f4e9d9] mb-4">
                  Let's Create Something Extraordinary
                </h3>
                <p className="text-lg font-serif text-[#D4A574] leading-relaxed">
                  Whether you need a stunning website, robust cloud infrastructure, or innovative AI solutions,
                  <br />
                  <span className="italic">I'm here to bring your vision to life.</span>
                </p>
                <motion.a
                  href="mailto:hello@jamesdesign.me"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-6 px-8 py-3 bg-[#D4A574] border-4 border-[#f4e9d9] text-[#1A3A52] font-elegant text-lg font-bold rounded shadow-xl hover:bg-[#f4e9d9] transition-colors"
                  aria-label="Send email to hello@jamesdesign.me"
                >
                  📧 Get In Touch
                </motion.a>
              </div>

              {/* Divider */}
              <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent mx-auto my-8" />

              {/* Social Links Footer */}
              <div className="flex justify-center items-center gap-8 pt-4">
                <a
                  href="https://github.com/jamesthegreati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4A574] hover:text-[#f4e9d9] transition-colors font-typewriter"
                >
                  GitHub
                </a>
                <span className="text-[#D4A574]">✦</span>
                <a
                  href="https://linkedin.com/in/jamesthegreati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4A574] hover:text-[#f4e9d9] transition-colors font-typewriter"
                >
                  LinkedIn
                </a>
                <span className="text-[#D4A574]">✦</span>
                <a
                  href="mailto:hello@jamesdesign.me"
                  className="text-[#D4A574] hover:text-[#f4e9d9] transition-colors font-typewriter"
                >
                  Email
                </a>
              </div>

              <p className="text-lg text-[#f4e9d9] font-typewriter mt-8">
                © 2024 James Barnes • Crafted with passion and precision
              </p>
              
              <p className="text-sm text-[#D4A574]/70 font-typewriter">
                Built with Next.js, React & Framer Motion • Designed with vintage aesthetics
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </VintagePageWrapper>
  );
}
