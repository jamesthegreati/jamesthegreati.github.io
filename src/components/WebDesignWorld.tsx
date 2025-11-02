'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PageTransition, SlideIn, StaggerContainer } from '@/components/animations/Transitions';
import { ProgressBar } from './ProgressBar';
import { VintagePageWrapper, VHSGlitch, SteampunkGears } from './VintageEffects';
import { TypewriterText, AwardBadge } from './TypewriterEffect';

interface ProjectCardProps {
  title: string;
  description: string;
  metrics?: string;
  image?: string;
  tags: string[];
  delay?: number;
}

function EnhancedProjectCard({ title, description, metrics, tags, delay = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SlideIn delay={delay}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -12 }}
        className="relative group cursor-pointer overflow-hidden"
      >
        <div className="border-4 border-web-navy bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all relative">
          {/* Animated background on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-web-cream/50 to-web-coral/20 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Content */}
          <div className="relative z-10 space-y-4">
            {/* Title */}
            <h4 className="text-3xl font-display font-bold text-web-navy">
              {title}
            </h4>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>

            {/* Metrics if provided */}
            {metrics && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="p-3 bg-web-mustard/20 rounded border-2 border-web-mustard"
              >
                <p className="text-sm font-body text-web-navy font-semibold">
                  {metrics}
                </p>
              </motion.div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-web-mustard text-web-navy text-xs font-bold rounded-full hover:bg-web-navy hover:text-web-cream transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SlideIn>
  );
}

export function WebDesignWorld() {
  const [showGlitch, setShowGlitch] = useState(false);

  return (
    <PageTransition>
      <VintagePageWrapper intensity="medium">
  <ProgressBar />
        <VHSGlitch trigger={showGlitch} />
        
        {/* Hero Section */}
        <section className="min-h-screen bg-web-cream text-web-navy pt-20 pb-20 relative overflow-hidden">
        {/* Grainy texture overlay */}
        <div 
          className="fixed inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%231A3A52' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 relative"
          >
            <SteampunkGears className="absolute -left-16 top-0" />
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-4">
              <TypewriterText text="Web Design" speed={100} />
            </h1>
            <p className="text-2xl font-retro text-web-mustard mb-4">
              The Creative Builder
            </p>
            <div className="w-32 h-1 bg-web-mustard rounded-full" />
          </motion.div>

          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Design Philosophy
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Creating beautiful, functional websites that blend timeless vintage aesthetics
                with modern web standards. Every pixel is crafted with intention.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                From concept to launch, I deliver immersive digital experiences that engage users
                and drive results.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-4 border-web-mustard rounded-lg" />
              <div className="bg-white p-8 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-web-mustard rounded-full" />
                    <span className="font-body">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-web-mustard rounded-full" />
                    <span className="font-body">Modern Interactions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-web-mustard rounded-full" />
                    <span className="font-body">Brand Strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-web-mustard rounded-full" />
                    <span className="font-body">Animation & Motion</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              Services Offered
            </h2>
            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'UI/UX Design',
                    description: 'User-centered design with beautiful interfaces and intuitive experiences'
                  },
                  {
                    title: 'Responsive Web',
                    description: 'Mobile-first designs that work perfectly across all devices and screen sizes'
                  },
                  {
                    title: 'Brand Integration',
                    description: 'Cohesive visual identity that communicates your brand story effectively'
                  },
                  {
                    title: 'Animation & Motion',
                    description: 'Smooth, engaging animations that enhance user engagement and delight'
                  },
                ].map((service, idx) => (
                  <SlideIn key={service.title} delay={idx * 0.1}>
                    <div className="border-4 border-web-navy p-8 bg-white rounded-lg">
                      <h3 className="text-2xl font-display font-bold mb-3 text-web-mustard">
                        {service.title}
                      </h3>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </SlideIn>
                ))}
              </div>
            </StaggerContainer>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                <EnhancedProjectCard
                  title="E-Commerce Platform Redesign"
                  description="Complete overhaul of a luxury brand's online store. Implemented a sophisticated design system with micro-interactions, resulting in a 40% increase in conversion rates and improved user satisfaction."
                  metrics="📊 40% conversion uplift • 85% user satisfaction • Design system of 50+ components"
                  tags={['UI/UX', 'React', 'Figma', 'Conversion']}
                  delay={0}
                />
                <EnhancedProjectCard
                  title="SaaS Dashboard Redesign"
                  description="Redesigned a complex B2B SaaS dashboard focusing on user onboarding and retention. Created an intuitive information hierarchy and interactive data visualizations for better user engagement."
                  metrics="📈 Improved onboarding by 65% • Reduced support tickets by 35%"
                  tags={['Web Design', 'UX Research', 'Dashboard', 'Analytics']}
                  delay={0.1}
                />
                <EnhancedProjectCard
                  title="Brand Storytelling Campaign"
                  description="Designed an immersive brand experience website showcasing premium products through parallax scrolling, video backgrounds, and engaging animations. Created a cohesive visual narrative across all pages."
                  metrics="🎬 60+ animated sections • 100% mobile responsive • Lighthouse: 96/100"
                  tags={['Animation', 'Branding', 'Web Design', 'Performance']}
                  delay={0.2}
                />
                <EnhancedProjectCard
                  title="Mobile-First Web App"
                  description="Built a progressive web app focused on mobile experiences. Implemented touch-optimized interactions, offline functionality, and a custom design system that works seamlessly across all device sizes."
                  metrics="📱 97% mobile speed score • 2.1MB total size • PWA features"
                  tags={['Mobile Design', 'PWA', 'React', 'Performance']}
                  delay={0.3}
                />
              </div>
            </StaggerContainer>
          </motion.div>
        </div>
      </section>

      {/* Award Badges Section */}
      <section className="bg-web-mustard/10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-display font-bold text-center mb-12 text-web-navy"
          >
            <TypewriterText text="Recognition & Awards" delay={200} />
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            <AwardBadge icon="🏆" text="Best Portfolio 2024" color="#D4A574" />
            <AwardBadge icon="⭐" text="Top Designer" color="#1A3A52" />
            <AwardBadge icon="🎨" text="Creative Excellence" color="#E8897B" />
            <AwardBadge icon="💎" text="Innovation Award" color="#7A9D7F" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-web-navy text-web-cream py-20 relative overflow-hidden">
        <SteampunkGears className="absolute right-10 top-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-display font-bold mb-6"
          >
            Ready to Create Something Amazing?
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowGlitch(true);
              setTimeout(() => setShowGlitch(false), 300);
            }}
            className="px-12 py-4 bg-web-mustard text-web-navy font-display text-xl rounded-lg hover:shadow-xl transition-shadow"
          >
            Start Your Project
          </motion.button>
        </div>
      </section>
      </VintagePageWrapper>
    </PageTransition>
  );
}
