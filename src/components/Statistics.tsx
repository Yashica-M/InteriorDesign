import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';

const stats = [
  { value: 150, suffix: '+', label: 'Spaces Transformed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Design Awards' },
];

export const Statistics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-20">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-4xl md:text-6xl font-display font-bold text-accent mb-2">
            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-sm md:text-base text-secondary uppercase tracking-wider">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
