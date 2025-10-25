interface RepoCardProps {
  name: string;
  description: string;
  stars: number;
  lastCommit: string;
  url: string;
}

const RepoCard = ({ name, description, stars, lastCommit, url }: RepoCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700"
    >
      <h3 className="text-2xl font-bold font-serif mb-2">{name}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex justify-between text-sm text-gray-400">
        <span>{stars} stars</span>
        <span>Last commit: {lastCommit}</span>
      </div>
    </a>
  );
};

export default RepoCard;
