import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
        setStatus('success');
        formRef.current.reset();
      } else {
        // Production error handling
        // eslint-disable-next-line no-console
        console.error('EmailJS keys are missing. Please configure your .env file.');
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const inputClasses =
    'w-full bg-transparent border-b border-primary/20 pb-4 text-primary placeholder:text-primary/30 focus:outline-none focus:border-primary transition-colors duration-300 resize-none';

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8">
              LET&apos;S DESIGN
              <br />
              SOMETHING
              <br />
              EXTRAORDINARY.
            </h2>
            <p className="text-secondary text-lg max-w-md mb-12">
              Currently accepting new projects. Let&apos;s discuss your next big idea and bring it
              to life with precision and style.
            </p>

            <div className="flex flex-col space-y-6">
              <a
                href="mailto:hello@example.com"
                className="text-2xl hover:text-accent transition-colors flex items-center gap-4 group hover-target w-max text-primary"
              >
                hello@example.com
                <ArrowUpRight className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-accent transition-all duration-300" />
              </a>
              <div className="flex gap-6 pt-8">
                <a
                  href="#"
                  className="p-4 rounded-full border border-primary/10 hover:bg-primary hover:text-background transition-colors hover-target text-primary"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-4 rounded-full border border-primary/10 hover:bg-primary hover:text-background transition-colors hover-target text-primary"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-4 rounded-full border border-primary/10 hover:bg-primary hover:text-background transition-colors hover-target text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-2xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="What's your name?"
                  className={`${inputClasses} peer`}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="What's your email?"
                  className={`${inputClasses} peer`}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} peer`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 font-medium uppercase tracking-widest text-sm hover:bg-white/90 transition-colors disabled:opacity-50 flex justify-center items-center gap-2 hover-target"
              >
                {isSubmitting
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">
                  Thank you! I will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
