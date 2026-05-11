import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import menuLatte from '../assets/images/menu-latte.png';
import menuEspresso from '../assets/images/menu-espresso.png';
import menuCroissant from '../assets/images/menu-croissant.png';
import menuCake from '../assets/images/menu-cake.png';
import menuAvocado from '../assets/images/menu-avocado.png';

type Category = 'cafes' | 'pasteleria' | 'brunch';
interface MenuItem { name: string; description: string; price: string; image: string; tag?: string; }

const categories: { key: Category; label: string }[] = [
  { key: 'cafes', label: 'Cafés' },
  { key: 'pasteleria', label: 'Pastelería' },
  { key: 'brunch', label: 'Brunch' },
];

const menuItems: Record<Category, MenuItem[]> = {
  cafes: [
    { name: 'Latte Artesanal', description: 'Espresso doble con leche texturizada y arte latte. Suave, cremoso y perfecto.', price: '$3.200', image: menuLatte, tag: 'Popular' },
    { name: 'Espresso Doble', description: 'Shot doble de café de origen único con crema natural. Intenso y aromático.', price: '$2.400', image: menuEspresso },
    { name: 'Flat White', description: 'Doble ristretto con microespuma de leche. Balance perfecto entre fuerza y suavidad.', price: '$3.000', image: menuLatte },
  ],
  pasteleria: [
    { name: 'Croissant de Manteca', description: 'Masa hojaldrada artesanal, fermentada 48hs. Crujiente por fuera, tierno por dentro.', price: '$2.800', image: menuCroissant, tag: 'Favorito' },
    { name: 'Carrot Cake', description: 'Bizcocho húmedo de zanahoria con frosting de queso crema y nueces caramelizadas.', price: '$3.500', image: menuCake },
    { name: 'Medialunas de Manteca', description: 'Pack de 3 medialunas artesanales glaseadas con miel. Receta tradicional argentina.', price: '$2.200', image: menuCroissant },
  ],
  brunch: [
    { name: 'Avocado Toast', description: 'Pan masa madre, palta, huevo poché, semillas y brotes. El clásico perfeccionado.', price: '$5.200', image: menuAvocado, tag: 'Nuevo' },
    { name: 'Tostado Soglia', description: 'Pan de campo, jamón cocido, queso gruyère y tomates confitados. Con ensalada.', price: '$4.800', image: menuAvocado },
    { name: 'Bowl de Açaí', description: 'Açaí blend con granola casera, frutas de estación, coco rallado y miel orgánica.', price: '$4.500', image: menuCake },
  ],
};

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-dk-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-soglia-primary/8 dark:hover:shadow-black/40 transition-all duration-500 border border-soglia-cream-dark/50 dark:border-white/7 hover:border-soglia-primary/15 dark:hover:border-soglia-accent/20 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-soglia-dark/30 to-transparent" />
        {item.tag && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-soglia-accent text-white text-xs tracking-wider uppercase rounded-full font-medium">
            {item.tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-soglia-dark dark:text-soglia-cream tracking-wide">{item.name}</h3>
          <span className="text-soglia-primary dark:text-soglia-accent font-semibold text-lg whitespace-nowrap ml-4">{item.price}</span>
        </div>
        <p className="text-soglia-text-light dark:text-soglia-cream/55 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('cafes');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="py-24 md:py-32 bg-soglia-cream/40 dark:bg-dk-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-soglia-accent text-sm tracking-[0.3em] uppercase mb-4">
            Nuestra Carta
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl text-soglia-dark dark:text-soglia-cream mb-6 tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
            Sabores que inspiran
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="section-divider mb-6" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="text-soglia-text-light dark:text-soglia-cream/60 leading-relaxed text-lg">
            Una selección cuidada de nuestros productos favoritos, elaborados con pasión y los mejores ingredientes.
          </motion.p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-300 font-medium ${
                activeCategory === cat.key
                  ? 'bg-soglia-primary text-white shadow-lg shadow-soglia-primary/25'
                  : 'bg-white dark:bg-dk-card text-soglia-text dark:text-soglia-cream/70 hover:bg-soglia-cream dark:hover:bg-dk-card-alt border border-soglia-cream-dark dark:border-white/7'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((item, i) => (
            <MenuCard key={`${activeCategory}-${item.name}`} item={item} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.8 }} className="text-center mt-12">
          <a href="#contacto" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-soglia-primary dark:border-soglia-accent text-soglia-primary dark:text-soglia-accent rounded-full text-sm tracking-[0.2em] uppercase hover:bg-soglia-primary dark:hover:bg-soglia-accent hover:text-white transition-all duration-300 font-medium hover:-translate-y-0.5">
            Ver menú completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
