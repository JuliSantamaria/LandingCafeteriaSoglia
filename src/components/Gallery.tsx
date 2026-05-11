import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import galleryInterior from '../assets/images/gallery-interior.png';
import galleryFlatlay from '../assets/images/gallery-flatlay.png';
import galleryBarista from '../assets/images/gallery-barista.png';
import galleryBeans from '../assets/images/gallery-beans.png';
import menuLatte from '../assets/images/menu-latte.png';
import menuCroissant from '../assets/images/menu-croissant.png';

const images = [
  { src: galleryInterior, alt: 'Interior de Soglia', span: 'md:col-span-2 md:row-span-2' },
  { src: galleryFlatlay, alt: 'Selección de productos', span: '' },
  { src: galleryBarista, alt: 'Barista preparando café', span: '' },
  { src: menuLatte, alt: 'Latte art', span: '' },
  { src: galleryBeans, alt: 'Granos de café de especialidad', span: '' },
  { src: menuCroissant, alt: 'Croissant artesanal', span: 'md:col-span-2' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="galeria" className="py-24 md:py-32 bg-soglia-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-soglia-accent text-sm tracking-[0.3em] uppercase mb-4"
          >
            Nuestro Espacio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-soglia-dark mb-6 tracking-wide"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Un vistazo a Soglia
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-divider" />
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${img.span} aspect-square`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-soglia-dark/0 group-hover:bg-soglia-dark/40 transition-all duration-500 flex items-end justify-start p-6">
                <span className="text-white text-sm tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-light">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
