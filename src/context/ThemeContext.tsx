'use client';

import React, { createContext, useContext, useState } from 'react';
import { themes } from '@/config/theme';

type ThemeType = 'web' | 'cloud' | 'ai';

interface ThemeContextType {
  currentTheme: ThemeType;
  setCurrentTheme: (theme: ThemeType) => void;
  themeConfig: typeof themes[ThemeType];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, initialTheme = 'web' }: { children: React.ReactNode; initialTheme?: ThemeType }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(initialTheme);

  const value = {
    currentTheme,
    setCurrentTheme,
    themeConfig: themes[currentTheme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
