'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PageTransition, SlideIn, StaggerContainer } from '@/components/animations/Transitions';
import { ProgressBar } from './ProgressBar';
import { VintagePageWrapper } from './VintageEffects';

interface WeatherInstrumentProps {
  title: string;
  description: string;
  metrics: string[];
  cloudType: string;
  delay?: number;
}

function WeatherInstrument({
  title,
  description,
  metrics,
  cloudType,
  delay = 0,
}: WeatherInstrumentProps) {
  const [isReading, setIsReading] = useState(false);

  return (
    <SlideIn delay={delay}>
      <motion.div
        onMouseEnter={() => setIsReading(true)}
        onMouseLeave={() => setIsReading(false)}
        whileHover={{ y: -10, scale: 1.02 }}
        className="relative border-4 bg-[#F5F1DE] p-6 rounded-lg cursor-pointer group overflow-hidden"
        style={{
          borderColor: '#8B6F47',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2), inset 0 0 20px rgba(139, 111, 71, 0.1)',
        }}
      >
        {/* Vintage paper texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%238B6F47' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10">
          {/* Cloud Type Badge */}
          <div className="flex items-center justify-between mb-4">
            <motion.div 
              className="px-3 py-1 bg-[#8B6F47] text-[#F5F1DE] text-xs font-vintage uppercase tracking-wider rounded"
              animate={{ opacity: isReading ? 1 : 0.7 }}
            >
              {cloudType}
            </motion.div>
            <motion.div
              animate={{ rotate: isReading ? 360 : 0 }}
              transition={{ duration: 2 }}
              className="text-3xl"
            >
              ☁️
            </motion.div>
          </div>

          {/* Title */}
          <h4 className="text-2xl font-vintage font-bold text-[#3E2723] mb-3 border-b-2 border-[#8B6F47] pb-2">
            {title}
          </h4>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[#5D4037] mb-4 font-serif">
            {description}
          </p>

          {/* Metrics Display - like analog gauge readings */}
          <div className="space-y-2">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isReading ? 1 : 0.6, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 text-xs font-typewriter"
              >
                <div className="w-2 h-2 rounded-full bg-[#8B6F47]" />
                <span className="text-[#3E2723]">{metric}</span>
              </motion.div>
            ))}
          </div>

          {/* Vintage stamp with ink effect */}
          <motion.div
            className="absolute bottom-3 right-3 opacity-50"
            animate={{ 
              rotate: [0, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="relative">
              {/* Ink splatter behind stamp */}
              <div 
                className="absolute inset-0 blur-sm bg-[#8B6F47] opacity-20 rounded-full"
                style={{ transform: 'scale(1.5)' }}
              />
              <div className="relative border-2 border-dashed border-[#8B6F47] px-2 py-1 text-xs font-typewriter text-[#8B6F47] rotate-12">
                CERTIFIED
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideIn>
  );
}

export function CloudEngineeringWorld() {
  return (
    <PageTransition>
      <VintagePageWrapper intensity="medium">
        <ProgressBar />
        
        {/* Hero Section - Weather Station Control Room */}
        <section className="min-h-screen pt-20 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #D7CCC8 0%, #BCAAA4 50%, #A1887F 100%)' }}>
          {/* Vintage weather map contour lines background */}
          <div
            className="fixed inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 35px, #5D4037 35px, #5D4037 37px),
                repeating-linear-gradient(90deg, transparent, transparent 35px, #5D4037 35px, #5D4037 37px)
              `,
            }}
          />

          {/* Floating cloud illustrations */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-6xl opacity-10"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${5 + i * 12}%`,
                }}
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                ☁️
              </motion.div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Header - Weather Station Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center relative"
            >
              {/* Vintage weather instruments illustrations */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.15, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute left-0 top-0 hidden lg:block text-9xl"
                style={{ transform: 'rotate(-15deg)' }}
              >
                📡
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.15, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute right-0 top-0 hidden lg:block text-9xl"
                style={{ transform: 'rotate(15deg)' }}
              >
                🛰️
              </motion.div>

              {/* Vintage Weather Station Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="inline-block mb-6 relative"
              >
                {/* Vintage compass rose decoration */}
                <motion.div
                  className="absolute -inset-12 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#8B6F47" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#8B6F47" strokeWidth="0.5" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                      <line
                        key={angle}
                        x1="50"
                        y1="5"
                        x2="50"
                        y2="15"
                        stroke="#8B6F47"
                        strokeWidth="1"
                        transform={`rotate(${angle} 50 50)`}
                      />
                    ))}
                  </svg>
                </motion.div>

                <div className="relative">
                  <div className="absolute inset-0 bg-[#8B6F47] rounded-full blur-xl opacity-30" />
                  <div className="relative bg-[#F5F1DE] border-4 border-[#8B6F47] rounded-full p-6 shadow-2xl">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                      className="text-6xl"
                    >
                      🌤️
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Station Name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-4"
              >
                <div className="inline-block px-8 py-3 bg-[#3E2723] border-4 border-[#8B6F47] relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#8B6F47] rounded-full" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#8B6F47] rounded-full" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#8B6F47] rounded-full" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#8B6F47] rounded-full" />
                  <p className="text-sm font-typewriter text-[#D7CCC8] tracking-widest uppercase">
                    Meteorological Engineering Station
                  </p>
                </div>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-vintage font-bold mb-4 text-[#3E2723]"
                style={{
                  textShadow: '3px 3px 0 #8B6F47, 6px 6px 0 rgba(139, 111, 71, 0.3)',
                }}
              >
                Cloud Infrastructure
              </h1>
              
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl font-carnival text-[#6D4C41] max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="italic">"Monitoring atmospheric conditions</span> and orchestrating <span className="font-bold text-[#8B6F47]">scalable systems</span> since the golden age of computing<span className="italic">"</span>
              </motion.p>

              {/* Vintage barometer decoration */}
              <div className="w-32 h-1 bg-[#8B6F47] rounded-full mx-auto mt-6 relative">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#3E2723] rounded-full"
                  animate={{ left: ['0%', '100%', '0%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>

            {/* Atmospheric Conditions Panel - Platform Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-20"
            >
              <div className="text-center mb-12 relative">
                {/* Vintage wind vane decoration */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -top-16 text-6xl opacity-20"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  🧭
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-vintage font-bold text-[#3E2723] mb-4">
                  Atmospheric Conditions
                </h2>
                <p className="text-base sm:text-lg font-serif text-[#6D4C41] italic">
                  Real-time monitoring across multi-cloud environments
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    platform: 'AWS',
                    condition: 'Clear Skies',
                    pressure: '95%',
                    icon: '☀️',
                  },
                  {
                    platform: 'Azure',
                    condition: 'Partly Cloudy',
                    pressure: '87%',
                    icon: '⛅',
                  },
                  {
                    platform: 'GCP',
                    condition: 'High Pressure',
                    pressure: '92%',
                    icon: '🌤️',
                  },
                ].map((reading, idx) => (
                  <motion.div
                    key={reading.platform}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8 + idx * 0.15, type: 'spring' }}
                    className="relative"
                  >
                    {/* Barometer Card */}
                    <div className="bg-[#F5F1DE] border-4 border-[#8B6F47] rounded-lg p-6 shadow-xl relative overflow-hidden">
                      {/* Vintage paper overlay */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                        }}
                      />
                      
                      <div className="relative z-10">
                        {/* Platform badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-vintage font-bold text-[#3E2723]">
                            {reading.platform}
                          </span>
                          <motion.span 
                            className="text-4xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            {reading.icon}
                          </motion.span>
                        </div>

                        {/* Condition */}
                        <p className="text-sm font-typewriter text-[#6D4C41] mb-4">
                          Status: {reading.condition}
                        </p>

                        {/* Pressure Gauge */}
                        <div className="relative w-full h-24 mb-3">
                          <svg viewBox="0 0 200 120" className="w-full">
                            {/* Gauge arc background */}
                            <path
                              d="M 20 100 A 80 80 0 0 1 180 100"
                              fill="none"
                              stroke="#D7CCC8"
                              strokeWidth="8"
                            />
                            {/* Gauge arc fill */}
                            <motion.path
                              d="M 20 100 A 80 80 0 0 1 180 100"
                              fill="none"
                              stroke="#8B6F47"
                              strokeWidth="8"
                              strokeDasharray="251.2"
                              initial={{ strokeDashoffset: 251.2 }}
                              animate={{ strokeDashoffset: 251.2 - (251.2 * parseInt(reading.pressure) / 100) }}
                              transition={{ duration: 2, ease: 'easeOut' }}
                            />
                            {/* Gauge needle */}
                            <motion.line
                              x1="100"
                              y1="100"
                              x2="100"
                              y2="40"
                              stroke="#3E2723"
                              strokeWidth="2"
                              strokeLinecap="round"
                              initial={{ rotate: -90 }}
                              animate={{ rotate: -90 + (180 * parseInt(reading.pressure) / 100) }}
                              transition={{ duration: 2.5, ease: 'easeOut' }}
                              style={{ transformOrigin: '100px 100px' }}
                            />
                            {/* Needle center */}
                            <circle cx="100" cy="100" r="4" fill="#3E2723" />
                            {/* Center text */}
                            <text x="100" y="95" textAnchor="middle" className="text-2xl font-vintage font-bold" fill="#3E2723">
                              {reading.pressure}
                            </text>
                          </svg>
                        </div>

                        {/* Reading label */}
                        <div className="text-center">
                          <span className="text-xs font-typewriter text-[#8B6F47] uppercase tracking-wider">
                            System Health
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Weather Instruments - Core Services */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 relative"
            >
              {/* Vintage measurement tools illustrations */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="absolute left-4 top-20 text-7xl transform -rotate-12"
                >
                  🌡️
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 0.1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="absolute right-4 top-40 text-7xl transform rotate-12"
                >
                  📏
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  className="absolute left-1/4 bottom-20 text-7xl"
                >
                  ⚖️
                </motion.div>
              </div>

              <div className="text-center mb-12 relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className="inline-block mb-6"
                >
                  <div className="text-6xl relative">
                    📊
                    {/* Subtle pulse effect */}
                    <motion.div
                      className="absolute inset-0 bg-[#8B6F47] rounded-full blur-2xl"
                      animate={{ 
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  </div>
                </motion.div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-vintage font-bold text-[#3E2723] mb-4">
                  Measurement Instruments
                </h2>
                <p className="text-base sm:text-lg font-serif text-[#6D4C41] max-w-3xl mx-auto italic">
                  Precision tools for monitoring, scaling, and optimizing cloud infrastructure
                </p>
              </div>

              <StaggerContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <WeatherInstrument
                    title="Infrastructure as Code"
                    cloudType="Cumulus"
                    description="Automated provisioning and version-controlled infrastructure deployments across multiple cloud platforms using industry-standard tools."
                    metrics={[
                      'Terraform & CloudFormation expertise',
                      'Multi-region deployments with failover',
                      'Auto-scaling for optimal resource usage',
                      'Disaster recovery protocols (RTO < 1hr)',
                    ]}
                    delay={0}
                  />
                  <WeatherInstrument
                    title="DevOps & CI/CD Pipelines"
                    cloudType="Stratus"
                    description="Seamless deployment automation with continuous integration and delivery pipelines for rapid, reliable releases."
                    metrics={[
                      'GitHub Actions, Jenkins, GitLab CI/CD',
                      'Automated testing (95%+ coverage)',
                      'Blue-green & canary deployments',
                      'Sub-30-second rollback capability',
                    ]}
                    delay={0.1}
                  />
                  <WeatherInstrument
                    title="Container Orchestration"
                    cloudType="Cirrus"
                    description="Kubernetes and Docker expertise for building resilient, scalable microservices architectures with service mesh integration."
                    metrics={[
                      'K8s cluster management at scale',
                      'Service mesh (Istio/Linkerd)',
                      'Pod auto-scaling & load balancing',
                      'Network security & policy enforcement',
                    ]}
                    delay={0.2}
                  />
                  <WeatherInstrument
                    title="Cloud Security & Compliance"
                    cloudType="Nimbus"
                    description="Enterprise-grade security protocols, compliance frameworks, and automated vulnerability management for mission-critical workloads."
                    metrics={[
                      'IAM with MFA & least-privilege access',
                      'End-to-end encryption (transit & rest)',
                      'Automated security scanning & patching',
                      'SOC 2, HIPAA, PCI-DSS compliance',
                    ]}
                    delay={0.3}
                  />
                </div>
              </StaggerContainer>
            </motion.div>

            {/* Weather Log - Projects Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 relative"
            >
              {/* Vintage logbook illustration */}
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 0.12, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="absolute right-8 top-0 text-8xl hidden md:block"
              >
                📔
              </motion.div>

              <div className="text-center mb-12 relative z-10">
                {/* Vintage pen illustration */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="inline-block text-5xl mb-4"
                >
                  <motion.span
                    animate={{ 
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="inline-block"
                    aria-hidden="true"
                  >
                    🖋️
                  </motion.span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-vintage font-bold text-[#3E2723] mb-4">
                  Field Observations
                </h2>
                <p className="text-base sm:text-lg font-serif text-[#6D4C41] italic">
                  Documented case studies from the infrastructure laboratory
                </p>
              </div>

              <StaggerContainer>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {[
                    {
                      date: 'Q1 2024',
                      title: 'Enterprise Cloud Migration',
                      description: 'Migrated 200+ legacy on-premise systems to AWS with zero downtime. Implemented hybrid cloud architecture with automated disaster recovery.',
                      impact: 'Cost savings: 45% • Uptime: 99.97%',
                    },
                    {
                      date: 'Q2 2024',
                      title: 'Microservices Transformation',
                      description: 'Architected and deployed Kubernetes-based microservices platform handling 10M+ daily requests with auto-scaling and service mesh.',
                      impact: 'Latency: -65% • Scalability: 10x',
                    },
                    {
                      date: 'Q3 2024',
                      title: 'Real-time Data Pipeline',
                      description: 'Built serverless data pipeline processing 500GB/day with Apache Kafka, AWS Lambda, and real-time analytics dashboards.',
                      impact: 'Processing speed: 2.3s • Uptime: 99.99%',
                    },
                  ].map((observation, idx) => (
                    <SlideIn key={observation.title} delay={idx * 0.15}>
                      <motion.div
                        whileHover={{ y: -8, rotate: idx % 2 === 0 ? -1 : 1 }}
                        className="bg-[#F5F1DE] border-4 border-[#8B6F47] p-6 rounded-lg shadow-lg relative"
                      >
                        {/* Date stamp */}
                        <div className="absolute -top-3 -right-3 bg-[#8B6F47] text-[#F5F1DE] px-3 py-1 text-xs font-typewriter rotate-12 shadow-md">
                          {observation.date}
                        </div>

                        <div className="mb-4">
                          <h3 className="text-xl sm:text-2xl font-vintage font-bold text-[#3E2723] mb-2">
                            {observation.title}
                          </h3>
                          <div className="w-16 h-1 bg-[#8B6F47] rounded" />
                        </div>

                        <p className="text-sm leading-relaxed text-[#5D4037] mb-4 font-serif">
                          {observation.description}
                        </p>

                        {/* Impact metrics */}
                        <div className="border-t-2 border-dashed border-[#8B6F47] pt-3">
                          <p className="text-xs font-typewriter text-[#8B6F47]">
                            📈 {observation.impact}
                          </p>
                        </div>

                        {/* Vintage certified stamp */}
                        <motion.div 
                          className="absolute bottom-3 right-3 opacity-30"
                          whileHover={{ opacity: 0.6, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            className="border-2 border-[#8B6F47] rounded-full w-12 h-12 flex items-center justify-center relative"
                            animate={{ 
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{ 
                              duration: 6, 
                              repeat: Infinity,
                              ease: 'easeInOut'
                            }}
                          >
                            <div className="absolute inset-0 rounded-full bg-[#8B6F47] opacity-10" />
                            <span className="text-[#8B6F47] text-xs font-vintage relative z-10">✓</span>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </SlideIn>
                  ))}
                </div>
              </StaggerContainer>
            </motion.div>
          </div>
        </section>

        {/* Weather Forecast - CTA Section */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #8B6F47 0%, #6D4C41 100%)' }}>
          {/* Vintage map overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 10px, #F5F1DE 10px, #F5F1DE 11px)`,
            }}
          />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="text-7xl"
                >
                  🎈
                </motion.div>
              </div>

              <h2 className="text-4xl sm:text-5xl font-vintage font-bold mb-6 text-[#F5F1DE]"
                style={{
                  textShadow: '2px 2px 0 #3E2723',
                }}
              >
                Launch Your Infrastructure
              </h2>
              
              <p className="text-lg sm:text-xl mb-8 text-[#D7CCC8] font-serif max-w-2xl mx-auto leading-relaxed">
                From initial architecture design to production deployment, let's build a robust, scalable cloud infrastructure tailored to your needs.
              </p>

              <motion.a
                href="mailto:hello@jamesdesign.me"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-[#F5F1DE] border-4 border-[#3E2723] text-[#3E2723] font-vintage text-xl font-bold rounded shadow-2xl relative"
                aria-label="Send email to hello@jamesdesign.me"
              >
                <span className="relative z-10">📧 Contact Station Chief</span>
                
                {/* Corner bolts */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#3E2723] rounded-full" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#3E2723] rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#3E2723] rounded-full" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#3E2723] rounded-full" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </VintagePageWrapper>
    </PageTransition>
  );
}
