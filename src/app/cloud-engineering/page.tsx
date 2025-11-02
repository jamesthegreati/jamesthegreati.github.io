import { ThemeProvider } from '@/context/ThemeContext';
import { CloudEngineeringWorld } from '@/components/CloudEngineeringWorld';
import { FloatingNav } from '@/components/FloatingNav';
import '@/styles/globals.css';

export const metadata = {
  title: 'Cloud Engineering World - Multi-World Portfolio',
};

export default function CloudEngineeringPage() {
  return (
    <ThemeProvider initialTheme="cloud">
      <FloatingNav />
      <CloudEngineeringWorld />
    </ThemeProvider>
  );
}
