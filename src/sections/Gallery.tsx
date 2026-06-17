import { useRef, useEffect, useState } from 'react';
import { preloadImages } from '../utils/preload';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Aura Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    size: "large"
  },
  {
    id: 2,
    title: "Neuro Workspace",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    size: "medium"
  },
  {
    id: 3,
    title: "Onyx Boutique",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    size: "medium"
  },
  {
    id: 4,
    title: "Zenith Hotel",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    size: "large"
  }
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isLarge = project.size === 'large';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative group overflow-hidden bg-surface rounded-sm ${isLarge ? 'md:col-span-2 md:row-span-2 aspect-video' : 'md:col-span-1 md:row-span-1 aspect-square'}`}
    >
      <PhotoView src={project.image}>
        <div className="w-full h-full cursor-pointer hover-target">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute bottom-0 left-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
              {project.category}
            </p>
            <h3 className="text-3xl font-display font-medium text-white">
              {project.title}
            </h3>
          </div>
        </div>
      </PhotoView>
    </motion.div>
  );
};

export const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imgs = projects.map((p) => p.image);
    const doPreload = async () => {
      try {
        // race preload with a short timeout to avoid long blocking
        await Promise.race([preloadImages(imgs), new Promise((r) => setTimeout(r, 800))]);
      } catch {}
      setLoading(false);
    };
    doPreload();
  }, []);
  
  return (
    <section id="work" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-surface/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
              FEATURED<br />PROJECTS
            </h3>
          </div>
          <button className="text-sm uppercase tracking-widest hover:text-accent transition-colors pb-2 hover-target">
            View Archive
          </button>
        </div>

        <div className="mb-8 flex gap-4">
          {['All', 'Residential', 'Commercial', 'Retail', 'Hospitality'].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover-target ${filter === c ? 'bg-accent text-white' : 'glass text-primary'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <PhotoProvider
          speed={() => 800}
          easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
        >
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-md bg-surface/40 h-56 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
              {projects
                .filter((p) => filter === 'All' ? true : p.category === filter)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          )}
        </PhotoProvider>
      </div>
    </section>
  );
};