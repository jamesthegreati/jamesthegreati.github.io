'use client';

import Hero from '@/components/Hero';
import Chatbot from '@/components/Chatbot';
import RepoCard from '@/components/RepoCard';
import AiReadyQuiz from '@/components/AiReadyQuiz';
import PortalTransition from '@/components/PortalTransition';

const AiPage = () => {
  return (
    <PortalTransition>
      <div className="container mx-auto px-4">
        <Hero
          title="Intelligence, Illuminated."
          subtitle="I transform complex data into intelligent systems that create new possibilities."
        />
      <section className="my-16">
        <h2 className="text-4xl font-bold font-serif text-center mb-8">
          Interact with the Future.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Chatbot />
          {/* Placeholder for another AI demo, e.g., a data visualization */}
          <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
            <p>Another AI Demo</p>
          </div>
        </div>
      </section>
      <section className="my-16">
        <h2 className="text-4xl font-bold font-serif text-center mb-8">
          My Research & Open-Source Heartbeat.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RepoCard
            name="Awesome Project"
            description="A brief description of the repository."
            stars={123}
            lastCommit="2 weeks ago"
            url="https://github.com/user/repo"
          />
          <RepoCard
            name="Another Cool Thing"
            description="A brief description of the repository."
            stars={456}
            lastCommit="1 month ago"
            url="https://github.com/user/repo"
          />
          <RepoCard
            name="AI Research Paper"
            description="A brief description of the repository."
            stars={789}
            lastCommit="3 months ago"
            url="https://github.com/user/repo"
          />
        </div>
      </section>
      <section className="my-16">
        <AiReadyQuiz />
      </section>
    </div>
    </PortalTransition>
  );
};

export default AiPage;
