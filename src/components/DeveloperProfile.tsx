'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function DeveloperProfile() {
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'experience'>('about');

  const skills = {
    'Web Design': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'Responsive Design', 'Figma'],
    'Cloud Engineering': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux', 'DevOps', 'Microservices'],
    'AI & ML': ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Machine Learning', 'Neural Networks', 'Data Science']
  };

  const experience = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Labs',
      description: 'Leading development of cloud-native applications with AI integration'
    },
    {
      year: '2022',
      title: 'Cloud Solutions Architect',
      company: 'CloudTech Solutions',
      description: 'Designed and implemented scalable cloud infrastructure'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Digital Creative Agency',
      description: 'Created stunning web experiences for global brands'
    },
    {
      year: '2018',
      title: 'Junior Developer',
      company: 'StartUp Inc.',
      description: 'Started career building modern web applications'
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-20">
      {/* Decorative ink splatters */}
      <div className="ink-splatter" style={{ width: '80px', height: '80px', top: '-40px', left: '5%', opacity: 0.3 }} />
      <div className="ink-splatter" style={{ width: '60px', height: '60px', bottom: '10%', right: '8%', opacity: 0.2 }} />
      
      {/* Header with vintage ornaments */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className="vintage-ornament">❖</span>
          <h2 className="text-6xl font-elegant text-[#1A3A52]">About the Developer</h2>
          <span className="vintage-ornament">❖</span>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent mx-auto" />
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative aged-paper rounded-lg shadow-2xl overflow-hidden border-4 border-[#D4A574] mb-16"
      >
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#1A3A52] opacity-40" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#1A3A52] opacity-40" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#1A3A52] opacity-40" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#1A3A52] opacity-40" />

        <div className="relative z-10 p-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Profile Image Area */}
            <div className="md:col-span-1 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative"
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#1A3A52] to-[#D4A574] p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-[#f4e9d9] flex items-center justify-center overflow-hidden">
                    <span className="text-7xl">👨‍💻</span>
                  </div>
                </div>
                {/* Vintage stamp decoration */}
                <div className="absolute -bottom-4 -right-4 vintage-stamp text-xs font-typewriter text-[#1A3A52] bg-[#f4e9d9]">
                  EST. 2018
                </div>
              </motion.div>
              
              {/* Quick Stats */}
              <div className="mt-8 space-y-3 text-center">
                <div className="font-typewriter text-sm text-[#1A3A52]">
                  <div className="font-bold text-2xl text-[#D4A574]">50+</div>
                  <div>Projects Completed</div>
                </div>
                <div className="font-typewriter text-sm text-[#1A3A52]">
                  <div className="font-bold text-2xl text-[#D4A574]">6+</div>
                  <div>Years Experience</div>
                </div>
                <div className="font-typewriter text-sm text-[#1A3A52]">
                  <div className="font-bold text-2xl text-[#D4A574]">30+</div>
                  <div>Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <h3 className="text-5xl font-vintage text-[#1A3A52] mb-2">James Mwenda</h3>
                <p className="text-xl font-typewriter text-[#D4A574] mb-4">
                  Full Stack Developer • Cloud Architect • AI Enthusiast
                </p>
                <div className="w-24 h-0.5 bg-[#D4A574]" />
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-4 mb-8 border-b-2 border-[#D4A574]/30">
                {(['about', 'skills', 'experience'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-6 font-typewriter text-sm uppercase tracking-wider transition-all ${
                      activeTab === tab
                        ? 'text-[#1A3A52] border-b-3 border-[#D4A574] font-bold'
                        : 'text-[#1A3A52]/60 hover:text-[#1A3A52]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[300px]"
              >
                {activeTab === 'about' && (
                  <div className="space-y-4 font-serif text-[#1A3A52] leading-relaxed">
                    <p className="text-lg first-letter:text-5xl first-letter:font-vintage first-letter:float-left first-letter:mr-3 first-letter:text-[#D4A574]">
                      Greetings, fellow traveler of the digital realm! I am James Mwenda, a craftsman of code and architect of cloud kingdoms. With over six years of dedicated service in the art of software development, I have honed my skills across multiple domains of this ever-evolving technological landscape.
                    </p>
                    <p className="text-lg">
                      My journey began in the vibrant world of web design, where I learned to blend aesthetics with functionality, creating digital experiences that captivate and inspire. As my expertise grew, I ventured into the vast expanse of cloud engineering, mastering the arts of scalable infrastructure and DevOps practices.
                    </p>
                    <p className="text-lg">
                      Most recently, I have delved into the mystical realm of Artificial Intelligence, exploring the frontiers of machine learning and neural networks. My passion lies in bridging these three worlds—design, infrastructure, and innovation—to create solutions that are not only technically sound but also beautifully crafted.
                    </p>
                    <p className="text-lg italic border-l-4 border-[#D4A574] pl-4 mt-6">
                      "Technology is best when it brings people together, and code is poetry when it solves real problems."
                    </p>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-8">
                    {Object.entries(skills).map(([category, skillList], idx) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <h4 className="text-2xl font-vintage text-[#1A3A52] mb-4 flex items-center gap-3">
                          <span className="text-3xl">
                            {category === 'Web Design' ? '🎨' : category === 'Cloud Engineering' ? '☁️' : '🤖'}
                          </span>
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {skillList.map((skill, skillIdx) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-4 py-2 bg-[#1A3A52] text-[#f4e9d9] font-typewriter text-sm rounded border-2 border-[#D4A574] shadow-md hover:shadow-lg transition-shadow cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    {experience.map((exp, idx) => (
                      <motion.div
                        key={exp.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-12 pb-8 border-l-2 border-[#D4A574]"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#D4A574] rounded-full border-4 border-[#f4e9d9]" />
                        
                        {/* Year badge */}
                        <div className="absolute left-[-45px] top-[-5px] font-vintage text-xl text-[#1A3A52] font-bold bg-[#f4e9d9] px-2 rounded">
                          {exp.year}
                        </div>

                        <div>
                          <h5 className="text-2xl font-vintage text-[#1A3A52] mb-1">{exp.title}</h5>
                          <p className="text-lg font-typewriter text-[#D4A574] mb-2">{exp.company}</p>
                          <p className="font-serif text-[#1A3A52]/80">{exp.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certifications & Awards Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Certifications */}
        <div className="aged-paper p-8 rounded-lg border-2 border-[#D4A574] shadow-lg relative overflow-hidden">
          <div className="absolute top-2 right-2 text-6xl opacity-10 rotate-12">📜</div>
          <h4 className="text-3xl font-vintage text-[#1A3A52] mb-6 flex items-center gap-3">
            <span className="text-4xl">🏆</span>
            Certifications
          </h4>
          <ul className="space-y-3 font-typewriter text-[#1A3A52]">
            <li className="flex items-start gap-3">
              <span className="text-[#D4A574] mt-1">✓</span>
              <div>
                <div className="font-bold">AWS Certified Solutions Architect</div>
                <div className="text-sm opacity-70">Amazon Web Services • 2023</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4A574] mt-1">✓</span>
              <div>
                <div className="font-bold">Google Cloud Professional</div>
                <div className="text-sm opacity-70">Google Cloud Platform • 2022</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4A574] mt-1">✓</span>
              <div>
                <div className="font-bold">Certified Kubernetes Administrator</div>
                <div className="text-sm opacity-70">CNCF • 2023</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Awards */}
        <div className="aged-paper p-8 rounded-lg border-2 border-[#D4A574] shadow-lg relative overflow-hidden">
          <div className="absolute top-2 right-2 text-6xl opacity-10 rotate-12">⭐</div>
          <h4 className="text-3xl font-vintage text-[#1A3A52] mb-6 flex items-center gap-3">
            <span className="text-4xl">🌟</span>
            Recognition
          </h4>
          <ul className="space-y-3 font-typewriter text-[#1A3A52]">
            <li className="flex items-start gap-3">
              <span className="text-[#D4A574] mt-1">★</span>
              <div>
                <div className="font-bold">Best Web Design Award</div>
                <div className="text-sm opacity-70">Design Excellence Summit • 2023</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4A574] mt-1">★</span>
              <div>
                <div className="font-bold">Innovation in Cloud Computing</div>
                <div className="text-sm opacity-70">Tech Innovation Awards • 2022</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4A574] mt-1">★</span>
              <div>
                <div className="font-bold">Top Developer Recognition</div>
                <div className="text-sm opacity-70">DevCommunity Awards • 2024</div>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
