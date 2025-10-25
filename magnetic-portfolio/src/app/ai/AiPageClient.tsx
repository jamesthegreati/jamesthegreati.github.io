'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Chatbot from '@/components/Chatbot';
import RepoCard from '@/components/RepoCard';
import AiReadyQuiz from '@/components/AiReadyQuiz';
import PortalTransition from '@/components/PortalTransition';
import SentimentAnalyzer from '@/components/SentimentAnalyzer';
import { useSound } from '@/components/SoundProvider';

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  pushed_at: string;
  html_url: string;
}

const AiPageClient = ({ repoData }: { repoData: Repo[] }) => {
  const { playSound, stopSound } = useSound();

  useEffect(() => {
    playSound('hum');
    return () => {
      stopSound('hum');
    };
  }, [playSound, stopSound]);

  return (
    <PortalTransition transitionType="ai">
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
            <SentimentAnalyzer />
          </div>
        </section>
        <section className="my-16">
          <h2 className="text-4xl font-bold font-serif text-center mb-8">
            My Research & Open-Source Heartbeat.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repoData.map((repo) =>
              repo ? (
                <RepoCard
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  stars={repo.stargazers_count}
                  lastCommit={new Date(repo.pushed_at).toLocaleDateString()}
                  url={repo.html_url}
                />
              ) : null
            )}
          </div>
        </section>
        <section className="my-16">
          <AiReadyQuiz />
        </section>
      </div>
    </PortalTransition>
  );
};

export default AiPageClient;
