import { ThemeProvider } from '@/context/ThemeContext';
import { AIExpertWorld } from '@/components/AIExpertWorld';
import { FloatingNav } from '@/components/FloatingNav';
import '@/styles/globals.css';

export const metadata = {
  title: 'AI Expert World - Multi-World Portfolio',
};

export default function AIExpertPage() {
  return (
    <ThemeProvider initialTheme="ai">
      <FloatingNav />
      <AIExpertWorld />
    </ThemeProvider>
  );
}
