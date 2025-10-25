'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ProjectSaga from '@/components/ProjectSaga';
import ResourceDownload from '@/components/ResourceDownload';
import PortalTransition from '@/components/PortalTransition';
import ProjectModal from '@/components/ProjectModal';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the project.',
    imageUrl: 'https://via.placeholder.com/400',
    demo: <div>Interactive Demo for Project One</div>,
  },
  {
    title: 'Project Two',
    description: 'A brief description of the project.',
    imageUrl: 'https://via.placeholder.com/400',
    demo: <div>Interactive Demo for Project Two</div>,
  },
  {
    title: 'Project Three',
    description: 'A brief description of the project.',
    imageUrl: 'https://via.placeholder.com/400',
    demo: <div>Interactive Demo for Project Three</div>,
  },
];

const WebPage = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <PortalTransition transitionType="web">
      <div className="container mx-auto px-4">
        <Hero
          title="Where Vision Becomes Experience."
          subtitle="I design and build fluid, intuitive web applications that people love to use."
        />
      <section className="my-16">
        <h2 className="text-4xl font-bold font-serif text-center mb-8">
          Play With The Code, Not Just See It.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              onPlayClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>
      <section className="my-16">
        <h2 className="text-4xl font-bold font-serif text-center mb-8">
          From Blueprints to Breakthroughs.
        </h2>
        <ProjectSaga
          bottleneck="The client had a brilliant product, but their platform was creaking under the weight of its own success."
          insight="The data showed the problem wasn't the code, it was the conversation between the user and the machine. We needed to change the language, not just the layout."
          blueprint={<p>Here I would show whiteboard sketches, wireframes, etc.</p>}
          breakthrough="The new design increased user engagement by 50% and reduced bounce rate by 30%."
          testimonial="&quot;Jules didn't just build a website; he built a new way for us to connect with our customers.&quot;"
        />
      </section>
      <section className="my-16">
        <ResourceDownload
          title="Your Free UX Toolkit."
          description="The 10-Point UX/UI Pre-Flight Checklist."
          downloadLink="/10-Point-UX-UI-Pre-Flight-Checklist.txt"
        />
      </section>
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          {selectedProject.demo}
        </ProjectModal>
      )}
    </div>
    </PortalTransition>
  );
};

export default WebPage;
