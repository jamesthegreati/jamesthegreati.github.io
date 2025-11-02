import '@/styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Hub } from '@/components/Hub';
import { FloatingNav } from '@/components/FloatingNav';

export default function Home() {
  return (
    <ThemeProvider>
      <FloatingNav />
      <Hub />
    </ThemeProvider>
  );
}
