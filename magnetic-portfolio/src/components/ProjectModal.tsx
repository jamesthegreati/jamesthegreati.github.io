'use client';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ProjectModal = ({ isOpen, onClose, title, children }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-midnight-blue w-full h-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-4xl font-bold font-serif mb-8 text-center">{title}</h2>
        <div className="w-full h-5/6 border border-gray-700 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
