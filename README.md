# Nidio's Portfolio

A modern, performant personal portfolio website built with React and Tailwind CSS — featuring 3D animations, parallax effects, and interactive UI components.

🌐 **Live:** [nidios-portfolio.vercel.app](https://nidios-portfolio.vercel.app)

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Styling | Tailwind CSS v4 |
| Build Tool | Vite 7 |
| 3D / WebGL | Three.js, React Three Fiber, COBE |
| Animation | Motion (Framer Motion) |
| Email | EmailJS |
| Deployment | Vercel |

---

## Features

- **Hero Section** — Parallax mountain background with animated flip text
- **About Section** — Bento grid layout with interactive 3D globe, draggable skill cards, and orbiting tech icons
- **Projects Section** — 6 featured projects with modal detail view
- **Contact Section** — Functional contact form powered by EmailJS with particle background
- **Responsive** — Fully optimized for mobile and desktop

---

## Performance

Lighthouse scores on production build:

| Metric | Score |
|--------|-------|
| Performance (Desktop) | 99 |
| Accessibility | 87 |
| Best Practices | 100 |
| SEO | 75 |

Optimizations applied:
- All images converted to WebP (avg. 92% size reduction)
- Lazy loading for below-fold sections and images
- Google Fonts loaded via `<link>` preconnect (non-render-blocking)
- Vite manual chunks for Three.js, Motion, and vendor libraries
- Explicit `width` and `height` on all `<img>` elements to prevent CLS

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Projects Featured

| Project | Tech |
|---------|------|
| BetaZeta — E-commerce Platform | HTML, CSS, JavaScript |
| Medical Chain ID — Blockchain Medical Records | React, Motoko, Tailwind |
| Codeblock — Web Development Agency | React, Tailwind, JavaScript |
| NeuraBloom — Autism Learning Platform | Laravel, Tailwind, MySQL |
| Mijn Amor — Travel Booking Platform | Laravel, Tailwind, MySQL |
| YourSkin — AI Skin Cancer Detection | React, Python, MySQL |

---

## Contact

- **LinkedIn** — [linkedin.com/in/nidio-tilman-b666a7377](https://www.linkedin.com/in/nidio-tilman-b666a7377/)
- **Instagram** — [@kezarstorski](https://www.instagram.com/kezarstorski/)
- **Email** — nidio.tilman24@gmail.com
