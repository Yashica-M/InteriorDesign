import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './hooks/ThemeContext'
import { preloadImages } from './utils/preload'
import { projects } from './sections/Gallery'

// Preload critical assets (fonts/images) for better perceived performance
const criticalImages = [
  // first few gallery images
  ...projects.slice(0, 3).map((p) => p.image),
];

preloadImages(criticalImages).catch(() => {});

// Add a class when fonts are ready to allow font-family swap without FOIT
if (typeof document !== 'undefined' && 'fonts' in document) {
  try {
    // `document.fonts.ready` resolves when fonts declared via @import or @font-face are loaded
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document as any).fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded');
    }).catch(() => {});
  } catch {
    // ignore
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
