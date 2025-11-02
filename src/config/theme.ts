// Design system and theme configuration
export const themes = {
  web: {
    name: 'Web Design World',
    subtitle: '1970s Creative Agency',
    primary: '#F5F1DE',
    secondary: '#D4A574',
    accent: '#E8897B',
    dark: '#1A3A52',
    light: '#F5F1DE',
    colors: {
      cream: '#F5F1DE',
      mustard: '#D4A574',
      navy: '#1A3A52',
      coral: '#E8897B',
      sage: '#7A9D7F',
    },
    description: 'Warm, welcoming, creative',
  },
  cloud: {
    name: 'Cloud Engineering World',
    subtitle: '1980s-90s Tech Control Center',
    primary: '#2C3E50',
    secondary: '#BDC3C7',
    accent: '#3498DB',
    dark: '#2C3E50',
    light: '#BDC3C7',
    colors: {
      charcoal: '#2C3E50',
      silver: '#BDC3C7',
      electric: '#3498DB',
      copper: '#B87333',
      steel: '#708090',
    },
    description: 'Sophisticated, technical, trustworthy',
  },
  ai: {
    name: 'AI Expert World',
    subtitle: 'Vintage Cybernetics Lab',
    primary: '#F2EDDE', // parchment
    secondary: '#8B6F47', // brass
    accent: '#B87333', // copper
    dark: '#2E2A24', // charcoal
    light: '#F2EDDE', // parchment
    colors: {
      parchment: '#F2EDDE',
      charcoal: '#2E2A24',
      brass: '#8B6F47',
      copper: '#B87333',
      navy: '#1A3A52',
      ink: '#1C1C1C',
      // legacy kept for compatibility
      purple: '#3D1A5C',
      cyan: '#00D9FF',
      cream: '#F0E6D2',
      gold: '#FFD700',
      magenta: '#FF006E',
    },
    description: 'Confident, engineered, human-centered intelligence',
  },
};

export const typography = {
  display: 'font-display',
  body: 'font-body',
  retro: 'font-retro',
};

export const animations = {
  microInteraction: '300-400ms',
  pageTransition: '800-1200ms',
  scrollAnimation: 'variable',
};

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};
