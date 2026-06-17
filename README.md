# PortfolioWeb — Interior Design Portfolio Starter

This project is a carefully crafted single-page portfolio built with React, TypeScript, Vite and TailwindCSS, tailored for an Interior Design Company. It demonstrates premium motion design, accessibility, SEO-ready meta tags, and a production-ready structure.

Quick start

```bash
npm install
npm run dev
```

Build

```bash
npm run build
npm run preview
```

Deployment

This repository includes a `vercel.json` file configured for static deployment. Connect to Vercel and deploy the project; the build output is in `dist/`.

Notes

- Replace the placeholder URLs in `src/components/SEO.tsx`, `sitemap.xml` and `robots.txt` with your real domain.
- Add EmailJS credentials to `src/sections/Contact.tsx` before using the contact form.
- The design uses Lenis for smooth scroll and GSAP/Framer Motion for animations.
# 🚀 Premium Portfolio Website

An ultra-premium, production-ready, single-page personal portfolio website built with cutting-edge technologies and award-winning design principles.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0a0a/3b82f6?text=Premium+Portfolio)

## ✨ Features

### 🎨 Design & UX
- **Luxury Design System** - Apple-level polish with Awwwards-quality interactions
- **Dark/Light Mode** - Seamless theme switching with smooth transitions
- **Glassmorphism** - Modern glass effects and layered depth
- **Premium Typography** - Custom font pairing (Inter + Syncopate)
- **Responsive Design** - Flawless experience across all devices

### 🎭 Advanced Animations
- **GSAP ScrollTrigger** - Scroll-based storytelling and reveals
- **Framer Motion** - Smooth, performant React animations
- **Custom Cursor** - Interactive cursor with hover states
- **Particles Background** - Dynamic particle system with connections
- **Stagger Animations** - Cinematic entrance effects
- **Parallax Effects** - Multi-layer depth and movement

### 🎯 Premium Features
- **Smooth Scrolling** - Lenis smooth scroll implementation
- **Loading Screen** - Elegant preloader with progress indicator
- **Scroll Progress** - Visual scroll position indicator
- **Back to Top** - Smooth scroll-to-top button
- **Animated Statistics** - Counter animations on scroll
- **Lightbox Gallery** - Premium image viewing experience
- **Contact Form** - Validated form with EmailJS integration
- **Navigation Menu** - Full-screen animated menu

### 🔍 SEO & Performance
- **Perfect SEO** - Meta tags, Open Graph, Twitter Cards
- **Structured Data** - Schema.org markup for rich results
- **Sitemap & Robots.txt** - Search engine optimization
- **Lazy Loading** - Optimized image loading
- **Code Splitting** - Efficient bundle management
- **Lighthouse 95+** - Performance, Accessibility, SEO scores

### ♿ Accessibility
- **WCAG Compliant** - AA accessibility standards
- **Keyboard Navigation** - Full keyboard support
- **ARIA Labels** - Screen reader friendly
- **Focus States** - Clear focus indicators
- **Semantic HTML** - Proper HTML structure

## 🛠️ Tech Stack

### Core
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling

### Animation & Motion
- **Framer Motion** - Production-ready animations
- **GSAP** - Professional-grade animation library
- **Lenis** - Smooth scroll implementation

### Additional Libraries
- **React Helmet Async** - SEO meta tag management
- **React Photo View** - Lightbox gallery
- **EmailJS** - Contact form integration
- **Lucide React** - Beautiful icon system

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Development

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── AnimatedCounter.tsx
│   ├── BackToTop.tsx
│   ├── CustomCursor.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   ├── Navigation.tsx
│   ├── Particles.tsx
│   ├── ScrollProgress.tsx
│   ├── SEO.tsx
│   └── Statistics.tsx
├── sections/           # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
├── hooks/             # Custom React hooks
│   └── useTheme.tsx
├── utils/             # Utility functions
│   └── cn.ts
├── styles/            # Global styles
│   └── globals.css
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## 🎨 Customization

### 1. Update Personal Information

Edit `src/components/SEO.tsx`:
```typescript
const structuredData = {
  name: 'Studio Name',
  jobTitle: 'Interior Design Studio',
  // ... update other fields
};
```

### 2. Configure EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/) and create a service + template.
2. Add the keys to a `.env` file in the project root (Vite requires `VITE_` prefix):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_SITE_URL=https://yourdomain.com
```

The app reads these variables at runtime and falls back to a demo send when not provided.

### 3. Update Colors

Edit `src/styles/globals.css`:
```css
:root {
  --background: #f5f5f5;
  --accent: #2563eb;
  /* ... customize colors */
}
```

### 4. Add Projects

Edit `src/sections/Gallery.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project",
    category: "Category",
    image: "image-url",
    size: "large" // or "medium"
  },
  // ... add more projects
];
```

### 5. Update Statistics

Edit `src/components/Statistics.tsx`:
```typescript
const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  // ... update stats
];
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Other Platforms

The site is a static build and can be deployed to any static hosting service:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📊 Performance

Target Lighthouse Scores:
- ✅ Performance: 95+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 100

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
