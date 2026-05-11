import { Coffee, ArrowUp } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Menú', href: '#menu' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-soglia-dark pt-16 pb-8 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-soglia-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Row */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Coffee size={24} className="text-soglia-accent" strokeWidth={1.5} />
              <span className="text-white text-xl tracking-[0.35em] font-light">SOGLIA</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Café de especialidad y pastelería artesanal. Un espacio diseñado para disfrutar los pequeños momentos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase font-medium mb-4">
              Navegación
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/40 hover:text-soglia-accent transition-colors duration-300 text-sm tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase font-medium mb-4">
              Seguinos
            </h4>
            <p className="text-white/40 text-sm mb-4 leading-relaxed">
              Enterate de nuestras novedades, menú del día y eventos especiales.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-soglia-primary/20 transition-colors duration-300 border border-white/10 hover:border-soglia-primary/30"
              >
                <FaInstagram size={18} className="text-white/60 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-soglia-primary/20 transition-colors duration-300 border border-white/10 hover:border-soglia-primary/30"
              >
                <FaWhatsapp size={18} className="text-white/60 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Soglia. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/30 hover:text-soglia-accent transition-colors duration-300 text-xs tracking-wider uppercase group"
          >
            Volver arriba
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
