import AiPageClient from './AiPageClient';

async function getRepoData(repoName: string) {
  const res = await fetch(`https://api.github.com/repos/${repoName}`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

const repoNames = [
  'tensorflow/tensorflow',
  'facebook/react',
  'openai/openai-python',
];

const AiPage = async () => {
  const repoData = await Promise.all(repoNames.map(getRepoData));

  return <AiPageClient repoData={repoData} />;
};

export default AiPage;
