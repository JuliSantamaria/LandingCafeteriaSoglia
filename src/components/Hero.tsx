import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.png';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Soglia café interior"
          className="w-full h-full object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-soglia-dark/70 via-soglia-dark/50 to-soglia-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-soglia-dark/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-16 h-[1px] bg-soglia-accent mx-auto mb-8"
        />

        {/* Subtitle top */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-soglia-accent text-sm md:text-base tracking-[0.4em] uppercase mb-6 font-light"
        >
          Café de Especialidad & Pastelería
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-7xl md:text-8xl lg:text-9xl text-white font-light tracking-[0.25em] mb-8"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          SOGLIA
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Donde cada taza cuenta una historia y cada bocado es una experiencia artesanal
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => handleScroll('#menu')}
            className="px-8 py-4 bg-soglia-primary text-white rounded-full text-sm tracking-[0.2em] uppercase hover:bg-soglia-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-soglia-primary/30 hover:-translate-y-0.5"
          >
            Descubrí Nuestro Menú
          </button>
          <button
            onClick={() => handleScroll('#nosotros')}
            className="px-8 py-4 border border-white/30 text-white rounded-full text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Conocenos
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => handleScroll('#nosotros')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors duration-300"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={28} />
      </motion.button>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r border-b border-white/10" />
    </section>
  );
}
