import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Menú', href: '#menu' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-soglia-white/95 backdrop-blur-md shadow-lg shadow-soglia-dark/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="relative z-10"
          >
            <span
              className={`text-2xl font-light tracking-[0.35em] transition-colors duration-500 ${
                scrolled ? 'text-soglia-primary' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              SOGLIA
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm tracking-wider uppercase transition-colors duration-300 group ${
                  scrolled
                    ? 'text-soglia-text hover:text-soglia-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-soglia-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className={`px-5 py-2.5 rounded-full text-sm tracking-wider uppercase transition-all duration-300 border ${
                scrolled
                  ? 'border-soglia-primary text-soglia-primary hover:bg-soglia-primary hover:text-white'
                  : 'border-white/40 text-white hover:bg-white/10'
              }`}
            >
              Reservar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden relative z-10 p-2 transition-colors duration-300 ${
              mobileOpen ? 'text-white' : scrolled ? 'text-soglia-primary' : 'text-white'
            }`}
            aria-label="Menú de navegación"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-soglia-dark/95 backdrop-blur-lg md:hidden z-0"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-white text-2xl tracking-[0.2em] uppercase font-light hover:text-soglia-accent transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-4 px-8 py-3 border border-soglia-accent text-soglia-accent rounded-full text-lg tracking-wider uppercase hover:bg-soglia-accent hover:text-white transition-all duration-300"
              >
                Reservar Mesa
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
