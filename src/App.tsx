import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Gallery } from './sections/Gallery';
import { Contact } from './sections/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { SEO } from './components/SEO';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { Particles } from './components/Particles';
import { LoadingScreen } from './components/LoadingScreen';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <SEO />
      <LoadingScreen />
      <div className="relative bg-background min-h-screen text-primary transition-colors duration-500 selection:bg-accent selection:text-white">
        <Particles />
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        <BackToTop />
        
        <main>
          <Hero />
          <About />
          <Gallery />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
