'use client';

import Link from 'next/link';
import { useSound } from '@/components/SoundProvider';
import { motion } from 'framer-motion';

const portals = [
  {
    name: 'Web',
    href: '/web',
    description: 'Where Vision Becomes Experience.',
  },
  {
    name: 'Cloud',
    href: '/cloud',
    description: 'Infrastructure That Breathes.',
  },
  {
    name: 'AI',
    href: '/ai',
    description: 'Intelligence, Illuminated.',
  },
];

export default function Home() {
  const { playSound } = useSound();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portals.map((portal) => (
          <Link href={portal.href} key={portal.name}>
            <motion.div
              onHoverStart={() => playSound('click')}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-lg text-center cursor-pointer"
            >
              <h2 className="text-4xl font-bold font-serif mb-4">{portal.name}</h2>
              <p>{portal.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
