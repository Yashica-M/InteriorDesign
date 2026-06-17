import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-20 px-6 md:px-12 border-t border-primary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-display font-bold tracking-tighter mb-4">
              STUDIO<span className="text-accent">.</span>
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              Crafting premium interior spaces that inspire and comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About', 'Work', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-secondary hover:text-accent transition-colors text-sm hover-target w-max"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full glass hover:bg-accent hover:text-white transition-all duration-300 hover-target"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm flex items-center gap-2">
            © {currentYear} All rights reserved. Made with{' '}
            <Heart className="w-4 h-4 text-accent fill-accent" /> by Studio
          </p>
          <div className="flex gap-6 text-sm text-secondary">
            <a href="#" className="hover:text-accent transition-colors hover-target">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors hover-target">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
