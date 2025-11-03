'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const worlds = [
  { name: 'Hub', path: '/', icon: '🏠', color: '#D4A574', label: 'HOME' },
  { name: 'Web', path: '/web-design', icon: '🎨', color: '#D4A574', label: 'WEB' },
  { name: 'Cloud', path: '/cloud-engineering', icon: '☁️', color: '#3498DB', label: 'CLOUD' },
  { name: 'AI', path: '/ai-expert', icon: '🤖', color: '#00D9FF', label: 'A.I.' },
];

// Get current world theme based on pathname
const getWorldTheme = (pathname: string) => {
  if (pathname === '/') return 'hub';
  if (pathname === '/web-design') return 'web';
  if (pathname === '/cloud-engineering') return 'cloud';
  if (pathname === '/ai-expert') return 'ai';
  return 'hub';
};

// Mobile bottom navigation bar (shared across worlds, themed colors)
function MobileNav({ theme, pathname }: { theme: string; pathname: string }) {
  const themeStyles: Record<string, { bg: string; border: string; text: string; active: string }> = {
    hub:   { bg: '#1A3A52', border: '#D4A574', text: '#F5F1DE', active: '#D4A574' },
    web:   { bg: '#1A3A52', border: '#D4A574', text: '#F5F1DE', active: '#D4A574' },
    cloud: { bg: '#3E2723', border: '#8B6F47', text: '#F5F1DE', active: '#8B6F47' },
    ai:    { bg: '#1C1C1C', border: '#8B6F47', text: '#F2EDDE', active: '#8B6F47' },
  };

  const s = themeStyles[theme] ?? themeStyles.hub;

  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0.5rem)' }}
      aria-label="Primary navigation"
    >
      <div
        className="backdrop-blur-md rounded-2xl border-2 shadow-xl flex justify-around items-center gap-2 px-3 py-2"
        style={{ backgroundColor: `${s.bg}CC`, borderColor: s.border }}
      >
        {worlds.map((world) => {
          const isActive = pathname === world.path;
          return (
            <Link href={world.path} key={world.path} aria-label={world.name} className="flex-1">
              <motion.div
                className="flex flex-col items-center justify-center px-2 py-2 min-w-[60px]"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl mb-1" aria-hidden>
                  {world.icon}
                </span>
                <span
                  className="text-[10px] font-typewriter tracking-wider text-center leading-tight"
                  style={{ color: s.text, opacity: isActive ? 1 : 0.85 }}
                >
                  {world.label}
                </span>
                <motion.div
                  className="h-0.5 w-6 rounded-full mt-1.5"
                  style={{ backgroundColor: s.active, opacity: isActive ? 1 : 0 }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}

export function FloatingNav() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentTheme = getWorldTheme(pathname);

  // Hub: Cinema Ticket Stub Navigation
  if (currentTheme === 'hub') {
    return (
      <>
        <MobileNav theme={currentTheme} pathname={pathname} />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="space-y-3">
          {worlds.map((world, index) => {
            const isActive = pathname === world.path;
            
            return (
              <motion.div
                key={world.path}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link href={world.path}>
                  <motion.div
                    className="relative cursor-pointer group"
                    whileHover={{ x: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Cinema Ticket */}
                    <div className={`relative w-16 h-20 ${isActive ? 'bg-[#1A3A52]' : 'bg-[#f4e9d9]'} border-2 ${isActive ? 'border-[#D4A574]' : 'border-[#1A3A52]'} shadow-lg overflow-hidden`}
                         style={{ 
                           clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 88%, 80% 85%, 70% 88%, 60% 85%, 50% 88%, 40% 85%, 30% 88%, 20% 85%, 10% 88%, 0 85%)'
                         }}>
                      {/* Perforated edge at top */}
                      <div className="absolute top-0 left-0 right-0 h-2 flex justify-around">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#D4A574]' : 'bg-[#1A3A52]'}`} />
                        ))}
                      </div>
                      
                      {/* Ticket content */}
                      <div className="flex flex-col items-center justify-center h-full pt-2">
                        <span className="text-2xl mb-1">{world.icon}</span>
                        <span className={`text-[8px] font-vintage tracking-wider ${isActive ? 'text-[#D4A574]' : 'text-[#1A3A52]'}`}>
                          {world.label}
                        </span>
                      </div>

                      {/* Admit One text */}
                      {isActive && (
                        <div className="absolute bottom-2 left-0 right-0 text-center">
                          <span className="text-[6px] font-typewriter text-[#D4A574] tracking-widest">ACTIVE</span>
                        </div>
                      )}
                    </div>

                    {/* Extended label on hover */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, x: -10, width: 0 }}
                          animate={{ opacity: 1, x: 5, width: 'auto' }}
                          exit={{ opacity: 0, x: -10, width: 0 }}
                          className="absolute left-full top-1/2 -translate-y-1/2 ml-2"
                        >
                          <div className="px-4 py-2 bg-[#1A3A52] border-2 border-[#D4A574] text-[#f4e9d9] text-sm font-marquee tracking-wider whitespace-nowrap shadow-xl"
                               style={{ transform: 'rotate(-2deg)' }}>
                            {world.name.toUpperCase()}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Film reel decoration */}
        <motion.div
          className="absolute -right-8 top-1/2 -translate-y-1/2 text-4xl opacity-20 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          🎬
        </motion.div>
      </motion.div>
      </>
    );
  }

  // Web: Paint Palette/Color Swatch Navigation
  if (currentTheme === 'web') {
    return (
      <>
        <MobileNav theme={currentTheme} pathname={pathname} />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="space-y-2">
          {worlds.map((world, index) => {
            const isActive = pathname === world.path;
            
            return (
              <motion.div
                key={world.path}
                initial={{ x: -50, opacity: 0, rotate: -5 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link href={world.path}>
                  <motion.div
                    className="relative cursor-pointer"
                    whileHover={{ x: 8, rotate: 3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transformOrigin: 'left center' }}
                  >
                    {/* Paint swatch card */}
                    <div className={`relative w-20 h-16 bg-web-cream border-3 ${isActive ? 'border-web-navy' : 'border-web-mustard'} shadow-lg overflow-hidden`}
                         style={{ 
                           transform: `rotate(${index * -2}deg)`,
                           boxShadow: isActive ? '0 6px 20px rgba(26, 58, 82, 0.3)' : '0 4px 12px rgba(0,0,0,0.15)'
                         }}>
                      
                      {/* Color blob */}
                      <div className="absolute top-2 left-2 right-2 h-8 rounded-lg border-2 border-web-mustard flex items-center justify-center"
                           style={{ backgroundColor: world.color }}>
                        <span className="text-xl">{world.icon}</span>
                      </div>

                      {/* Label */}
                      <div className="absolute bottom-1 left-0 right-0 text-center">
                        <span className={`text-[9px] font-handwritten ${isActive ? 'text-web-navy font-bold' : 'text-web-navy/70'}`}>
                          {world.label}
                        </span>
                      </div>

                      {/* Paint drip effect for active */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-3 bg-web-mustard rounded-b-full"
                          animate={{ scaleY: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}

                      {/* Vintage paper texture */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    {/* Extended label */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 8 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="absolute left-full top-1/2 -translate-y-1/2 ml-2"
                        >
                          <div className="px-3 py-1.5 bg-web-navy text-web-cream text-xs font-handwritten whitespace-nowrap border-2 border-web-mustard shadow-lg"
                               style={{ transform: 'rotate(-1deg)' }}>
                            {world.name}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Paintbrush decoration */}
        <motion.div
          className="absolute -right-10 bottom-0 text-4xl opacity-15 pointer-events-none"
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🖌️
        </motion.div>
      </motion.div>
      </>
    );
  }

  // Cloud: Weather Vane/Barometer Navigation
  if (currentTheme === 'cloud') {
    return (
      <>
        <MobileNav theme={currentTheme} pathname={pathname} />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Barometer frame */}
        <div className="relative">
          {/* Wooden frame */}
          <div className="bg-[#5D4037] p-3 rounded-lg border-4 border-[#8B6F47] shadow-2xl">
            <div className="bg-[#F5F1DE] p-2 rounded border-2 border-[#8B6F47]">
              <div className="space-y-1.5">
                {worlds.map((world, index) => {
                  const isActive = pathname === world.path;
                  
                  return (
                    <motion.div
                      key={world.path}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    >
                      <Link href={world.path}>
                        <motion.div
                          className="relative cursor-pointer"
                          whileHover={{ x: 5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Brass gauge indicator */}
                          <div className={`flex items-center gap-2 px-2 py-1.5 rounded ${isActive ? 'bg-[#8B6F47]' : 'bg-[#D7CCC8]'} border border-[#8B6F47] transition-colors`}>
                            {/* Indicator needle */}
                            <motion.div 
                              className="w-6 h-6 rounded-full bg-[#3E2723] border-2 border-[#8B6F47] flex items-center justify-center relative"
                              animate={isActive ? { rotate: 360 } : {}}
                              transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: 'linear' }}
                            >
                              <span className="text-xs">{world.icon}</span>
                              {/* Pointer */}
                              {isActive && (
                                <div className="absolute left-full w-2 h-0.5 bg-[#8B6F47] origin-left" 
                                     style={{ transform: 'rotate(0deg)' }} />
                              )}
                            </motion.div>

                            {/* Label */}
                            <span className={`text-[10px] font-typewriter tracking-wider ${isActive ? 'text-[#F5F1DE] font-bold' : 'text-[#5D4037]'}`}>
                              {world.label}
                            </span>
                          </div>

                          {/* Extended reading on hover */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 8 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute left-full top-1/2 -translate-y-1/2 ml-2"
                              >
                                <div className="px-3 py-1.5 bg-[#3E2723] text-[#F5F1DE] text-xs font-typewriter whitespace-nowrap border-2 border-[#8B6F47] shadow-lg">
                                  {world.name.toUpperCase()}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Barometer label */}
              <div className="text-center mt-2 pt-2 border-t border-[#8B6F47]">
                <span className="text-[8px] font-vintage text-[#5D4037] tracking-widest">NAVIGATOR</span>
              </div>
            </div>
          </div>

          {/* Brass corner bolts */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#B87333] rounded-full border border-[#8B6F47]" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#B87333] rounded-full border border-[#8B6F47]" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#B87333] rounded-full border border-[#8B6F47]" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#B87333] rounded-full border border-[#8B6F47]" />

          {/* Weather vane decoration */}
          <motion.div
            className="absolute -right-12 -top-8 text-5xl opacity-20 pointer-events-none"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            🧭
          </motion.div>
        </div>
      </motion.div>
      </>
    );
  }

  // AI: Punch Card/Lab Specimen Navigation
  if (currentTheme === 'ai') {
    return (
      <>
        <MobileNav theme={currentTheme} pathname={pathname} />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="space-y-2">
          {worlds.map((world, index) => {
            const isActive = pathname === world.path;
            
            return (
              <motion.div
                key={world.path}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link href={world.path}>
                  <motion.div
                    className="relative cursor-pointer"
                    whileHover={{ x: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Punch card */}
                    <div className={`relative w-24 h-16 ${isActive ? 'bg-ai-navy' : 'bg-ai-parchment'} border-2 ${isActive ? 'border-ai-brass' : 'border-ai-charcoal/30'} shadow-lg`}>
                      {/* Punch card holes on left */}
                      <div className="absolute left-1 top-0 bottom-0 flex flex-col justify-around py-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-ai-brass' : 'bg-ai-charcoal/20'}`} />
                        ))}
                      </div>

                      {/* Punch card holes on right */}
                      <div className="absolute right-1 top-0 bottom-0 flex flex-col justify-around py-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-ai-brass' : 'bg-ai-charcoal/20'}`} />
                        ))}
                      </div>

                      {/* Card content */}
                      <div className="flex flex-col items-center justify-center h-full px-4">
                        <span className="text-xl mb-1">{world.icon}</span>
                        <span className={`text-[9px] font-typewriter tracking-widest ${isActive ? 'text-ai-brass' : 'text-ai-charcoal'}`}>
                          {world.label}
                        </span>

                        {/* Circuit line decoration */}
                        {isActive && (
                          <motion.div 
                            className="absolute bottom-1 left-4 right-4 h-px bg-ai-brass"
                            initial={{ width: 0 }}
                            animate={{ width: 'calc(100% - 2rem)' }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                          />
                        )}
                      </div>

                      {/* Classification stamp for active */}
                      {isActive && (
                        <motion.div
                          className="absolute -top-2 -right-2 bg-ai-brass text-ai-navy text-[7px] font-vintage px-1.5 py-0.5 border border-ai-charcoal rotate-12 shadow-md"
                          animate={{ rotate: [12, 15, 12] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ACTIVE
                        </motion.div>
                      )}

                      {/* Vintage paper texture */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    {/* Extended label */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 8 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="absolute left-full top-1/2 -translate-y-1/2 ml-2"
                        >
                          <div className="px-4 py-2 bg-ai-charcoal text-ai-parchment text-xs font-typewriter whitespace-nowrap border-2 border-ai-brass shadow-xl"
                               style={{ transform: 'skew(-2deg)' }}>
                            <span className="tracking-widest">{world.name.toUpperCase()}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Vacuum tube glow decoration */}
        <motion.div
          className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <motion.div
            className="w-8 h-12 bg-ai-brass/20 rounded-full border-2 border-ai-brass/40"
            animate={{ 
              boxShadow: [
                '0 0 10px rgba(139, 111, 71, 0.3)',
                '0 0 20px rgba(139, 111, 71, 0.5)',
                '0 0 10px rgba(139, 111, 71, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      </>
    );
  }

  return null;
}
