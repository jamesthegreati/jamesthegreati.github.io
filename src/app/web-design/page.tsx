import { ThemeProvider } from '@/context/ThemeContext';
import { WebDesignWorld } from '@/components/WebDesignWorld';
import { FloatingNav } from '@/components/FloatingNav';
import '@/styles/globals.css';

export const metadata = {
  title: 'Web Design World - Multi-World Portfolio',
};

export default function WebDesignPage() {
  return (
    <ThemeProvider initialTheme="web">
      <FloatingNav />
      <WebDesignWorld />
    </ThemeProvider>
  );
}
