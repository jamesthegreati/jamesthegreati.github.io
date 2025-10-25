interface ResourceDownloadProps {
  title: string;
  description: string;
  downloadLink: string;
}

const ResourceDownload = ({ title, description, downloadLink }: ResourceDownloadProps) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg text-center">
      <h2 className="text-3xl font-bold font-serif mb-4">{title}</h2>
      <p className="text-lg mb-4">{description}</p>
      <a
        href={downloadLink}
        download
        className="bg-coral-accent text-white px-6 py-3 rounded-lg inline-block"
      >
        Download Now
      </a>
    </div>
  );
};

export default ResourceDownload;
