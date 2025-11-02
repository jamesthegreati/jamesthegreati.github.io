# Multi-World Vintage Portfolio

A stunning, immersive vintage-themed portfolio showcasing expertise in Web Design, Cloud Engineering, and AI. Each service is presented as a distinct "world" with its own aesthetic and interactive experience.

## 🚀 Getting Site Live at jamesdesign.me

**Getting a 404 error?** See [QUICK_START.md](QUICK_START.md) for a 3-step fix (takes ~15 minutes).

**Already working?** Great! The site auto-deploys when you push to `main`.

## Features

### 🎨 Three Unique Worlds

1. **Web Design World (1970s Creative Agency)**
   - Warm, welcoming aesthetic with earth tones
   - Vintage typography and design elements
   - Portfolio showcase with project cards
   - Parallax scrolling effects

2. **Cloud Engineering World (1980s Tech Control Center)**
   - Tech noir aesthetic with circuit patterns
   - Grid-based layouts mimicking terminal interfaces
   - Interactive infrastructure diagrams
   - Real-time system animations

3. **AI Expert World (Retrofuturistic Innovation Lab)**
   - Holographic neon effects
   - Data visualization with retro flair
   - Animated neural network patterns
   - Dynamic color shifts and glitch effects

### ✨ Technical Features

- **Smooth Portal Transitions**: 1-second immersive transitions between worlds
- **Micro-interactions**: 300-400ms smooth hover and interaction effects
- **Animations**: GSAP ScrollTrigger and Framer Motion for engaging animations
- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, 1024px, 1440px
- **Performance Optimized**: Code splitting, lazy loading, image optimization
- **Accessibility**: WCAG AA compliant with focus states and reduced motion support

## Color Palettes

### Web Design World
- Cream: #F5F1DE
- Mustard: #D4A574
- Navy: #1A3A52
- Coral: #E8897B
- Sage: #7A9D7F

### Cloud Engineering World
- Charcoal: #2C3E50
- Silver: #BDC3C7
- Electric Blue: #3498DB
- Copper: #B87333
- Steel: #708090

### AI Expert World
- Deep Purple: #3D1A5C
- Neon Cyan: #00D9FF
- Cream: #F0E6D2
- Gold: #FFD700
- Magenta: #FF006E

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom theme configuration
- **Animations**: Framer Motion & GSAP
- **Language**: TypeScript
- **Fonts**: Bebas Neue (display), Source Sans Pro (body), Bigelow Rules (retro)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (Hub)
│   ├── web-design/
│   ├── cloud-engineering/
│   └── ai-expert/
├── components/
│   ├── Hub.tsx             # Portal hub
│   ├── WebDesignWorld.tsx
│   ├── CloudEngineeringWorld.tsx
│   ├── AIExpertWorld.tsx
│   └── animations/
│       └── Transitions.tsx
├── context/
│   └── ThemeContext.tsx
├── config/
│   └── theme.ts
└── styles/
    └── globals.css
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Building for Production

```bash
npm run build
npm start
```

## Performance Targets

- Page load time < 3 seconds
- Lighthouse score > 90
- Animation frame rate ≥ 60fps
- Mobile responsive on all devices

## Customization

Edit the theme colors in `tailwind.config.js` and `src/config/theme.ts` to match your brand colors.

Update project content in each world component:
- `src/components/WebDesignWorld.tsx`
- `src/components/CloudEngineeringWorld.tsx`
- `src/components/AIExpertWorld.tsx`

## Deployment

This site is configured to deploy to **GitHub Pages** with the custom domain **jamesdesign.me**.

### Automated Deployment

The site deploys automatically via GitHub Actions when you push to the `main` branch.

### Setup Instructions

1. **Configure DNS** at your domain registrar (see [DEPLOYMENT_INSTRUCTIONS.md](DEPLOYMENT_INSTRUCTIONS.md))
2. **Enable GitHub Pages** in repository settings (Settings → Pages)
3. **Set Source** to "GitHub Actions"
4. **Add Custom Domain**: `jamesdesign.me`

### Troubleshooting

If you're seeing a 404 error at jamesdesign.me:

1. Run the diagnostic script: `./check-deployment.sh`
2. See detailed guide: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
3. Follow the steps in [DEPLOYMENT_INSTRUCTIONS.md](DEPLOYMENT_INSTRUCTIONS.md)

### Local Static Build

To test the static build locally:

```bash
npm install
npm run build
cd out
python3 -m http.server 8080
# Visit http://localhost:8080
```

### Alternative Deployment

You can also deploy to Vercel or any Node.js hosting provider:

```bash
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This portfolio template is free to use and modify for personal use.

## Credits

Design inspired by deep research on vintage web design principles, immersive web experiences, and retro aesthetics combined with modern web technology.
