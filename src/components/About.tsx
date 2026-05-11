import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, CakeSlice, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Coffee,
    title: 'Café de Especialidad',
    description:
      'Seleccionamos los mejores granos de origen único, tostados artesanalmente para resaltar sus notas más puras y complejas.',
  },
  {
    icon: CakeSlice,
    title: 'Pastelería Artesanal',
    description:
      'Cada creación es elaborada a mano con ingredientes de primera calidad, recetas propias y la dedicación que merecés.',
  },
  {
    icon: Sparkles,
    title: 'Ambiente Único',
    description:
      'Un espacio diseñado para inspirar. Luz natural, materiales nobles y una atmósfera que te invita a quedarte.',
  },
];

function AnimatedCard({ value, index }: { value: typeof values[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = value.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group relative bg-white dark:bg-dk-card rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-soglia-primary/8 dark:hover:shadow-black/30 transition-all duration-500 border border-soglia-cream-dark/50 dark:border-white/7 hover:border-soglia-primary/20 dark:hover:border-soglia-accent/20 hover:-translate-y-1"
    >
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-soglia-primary/3 to-soglia-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-soglia-cream dark:bg-dk-card-alt flex items-center justify-center mb-6 group-hover:bg-soglia-primary/10 dark:group-hover:bg-soglia-primary/15 transition-colors duration-500">
          <Icon size={26} className="text-soglia-primary dark:text-soglia-accent" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-semibold text-soglia-dark dark:text-soglia-cream mb-3 tracking-wide">
          {value.title}
        </h3>

        <p className="text-soglia-text-light dark:text-soglia-cream/55 leading-relaxed text-sm">
          {value.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-soglia-white dark:bg-dk-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-soglia-accent text-sm tracking-[0.3em] uppercase mb-4"
          >
            Nuestra Esencia
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-soglia-dark dark:text-soglia-cream mb-6 tracking-wide"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Más que un café
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-divider mb-6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-soglia-text-light dark:text-soglia-cream/60 leading-relaxed text-lg"
          >
            En Soglia creemos que el café es un arte. Desde el grano hasta la taza,
            cada detalle está pensado para ofrecerte un momento de disfrute único en un
            espacio donde la calidez y el diseño se encuentran.
          </motion.p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <AnimatedCard key={value.title} value={value} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
