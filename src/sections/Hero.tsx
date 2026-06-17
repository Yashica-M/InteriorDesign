import { useEffect, useRef } from 'react';
import { preloadImages } from '../utils/preload';
import { projects } from './Gallery';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (!textRef.current) return;
    
    const chars = textRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.05, 
        duration: 1.2, 
        ease: 'power4.out',
        delay: 0.5
      }
    );
  }, []);

  useEffect(() => {
    // preload a few key images used in the gallery to reduce perceived load
    const imgs = projects.slice(0, 3).map((p) => p.image);
    let mounted = true;
    (async () => {
      try {
        await Promise.race([preloadImages(imgs), new Promise((r) => setTimeout(r, 500))]);
      } catch {}
      // no state to set here; this is a best-effort preload
      return () => { mounted = false; };
    })();
  }, []);

  const title = "TIMELESS";
  const title2 = "INTERIORS";

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background transition-colors duration-500" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full px-6 md:px-12 flex flex-col"
      >
        <div className="overflow-hidden mb-2">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-accent tracking-widest uppercase text-sm md:text-base font-semibold block"
          >
            Premium Interior Design Studio
          </motion.span>
        </div>
        
        <h1 ref={textRef} className="font-display font-bold text-6xl md:text-[10vw] leading-[0.9] tracking-tighter uppercase whitespace-normal">
          <div className="overflow-hidden pb-4">
            {title.split('').map((char, i) => (
              <span key={`1-${i}`} className="char inline-block">{char}</span>
            ))}
          </div>
          <div className="overflow-hidden pb-4 ml-0 md:ml-[10vw] text-primary/90">
            {title2.split('').map((char, i) => (
              <span key={`2-${i}`} className="char inline-block">{char}</span>
            ))}
          </div>
        </h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
           className="mt-12 md:max-w-xl md:ml-auto md:mr-[10vw]"
        >
          <p className="text-secondary text-lg md:text-xl font-light leading-relaxed">
            Crafting premium, thoughtfully designed spaces. Elevating lifestyles through bespoke interiors, rich textures, and elite aesthetics.
          </p>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="hover-target inline-flex items-center gap-2 border border-primary/20 bg-primary/5 hover:bg-primary text-primary hover:text-background transition-all duration-300 px-8 py-4 rounded-full font-medium"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-secondary">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
