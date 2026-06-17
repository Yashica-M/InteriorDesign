import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Statistics } from '../components/Statistics';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "Space Planning", "Bespoke Furniture", "Lighting Design", 
  "Material Selection", "Interior Architecture", "Project Management"
];

const ExperienceCard = ({ role, company, period, delay }: { role: string, company: string, period: string, delay: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      className="border-t border-primary/10 py-8 flex flex-col md:flex-row md:items-center justify-between group hover:bg-primary/[0.02] transition-colors p-4 -mx-4 rounded-xl"
    >
      <div>
        <h4 className="text-2xl font-medium text-primary mb-2">{role}</h4>
        <p className="text-secondary">{company}</p>
      </div>
      <div className="mt-4 md:mt-0 text-primary/50 font-mono text-sm">
        {period}
      </div>
    </motion.div>
  );
};

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (!textRef.current || !sectionRef.current) return;
    
    // Split text into words for animation
    const words = textRef.current.innerText.split(' ');
    textRef.current.innerHTML = '';
    
    words.forEach(word => {
      const span = document.createElement('span');
      span.innerText = word + ' ';
      span.style.opacity = '0.2';
      span.style.display = 'inline-block';
      textRef.current?.appendChild(span);
    });

    const spans = textRef.current.querySelectorAll('span');
    
    gsap.to(spans, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 1,
      },
      opacity: 1,
      stagger: 0.1,
      color: 'var(--primary)',
    });
    
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 md:py-48 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Statistics Section */}
        <Statistics />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-20">
          <div className="lg:col-span-8">
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-8">The Studio</h2>
            <p ref={textRef} className="text-3xl md:text-5xl font-light leading-snug md:leading-tight text-primary/20">
              We blend architectural precision with artistic vision to create physical spaces that don't just exist—they inspire, comfort, and endure. We design for the way you live.
            </p>
            
            <div className="mt-20">
              <h3 className="text-xl font-medium mb-10">Expertise</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-6 py-3 rounded-full glass text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="space-y-4 pt-16 lg:pt-0">
              <ExperienceCard role="Lead Interior Designer" company="Luxe Interiors" period="2022 - present" delay={0.1} />
              <ExperienceCard role="Senior Space Planner" company="Urban Design Co." period="2019 - 2022" delay={0.2} />
              <ExperienceCard role="Interior Architect" company="Studio Elegance" period="2016 - 2019" delay={0.3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
