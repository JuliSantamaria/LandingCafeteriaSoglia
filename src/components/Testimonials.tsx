import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Valentina M.',
    text: 'El mejor café de la zona sin dudas. El latte art es precioso y el sabor es increíble. El ambiente te hace querer quedarte toda la tarde.',
    rating: 5,
    date: 'Hace 2 semanas',
  },
  {
    name: 'Martín R.',
    text: 'La pastelería es de otro nivel. Los croissants son los mejores que probé, y el carrot cake es adictivo. Siempre vuelvo.',
    rating: 5,
    date: 'Hace 1 mes',
  },
  {
    name: 'Lucía G.',
    text: 'Un lugar hermoso para trabajar o encontrarse con amigos. El wifi funciona perfecto, la música es ideal y el café excelente.',
    rating: 5,
    date: 'Hace 3 semanas',
  },
  {
    name: 'Tomás F.',
    text: 'El brunch del fin de semana es espectacular. El avocado toast y el bowl de açaí son mis favoritos. Súper recomendable.',
    rating: 5,
    date: 'Hace 1 semana',
  },
  {
    name: 'Carolina S.',
    text: 'Descubrí Soglia hace poco y ya es mi lugar favorito. La atención es impecable y cada detalle está cuidado al máximo.',
    rating: 5,
    date: 'Hace 2 meses',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-24 md:py-32 bg-soglia-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-soglia-primary/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-soglia-accent/5 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-soglia-accent text-sm tracking-[0.3em] uppercase mb-4"
          >
            Testimonios
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-white mb-6 tracking-wide"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Lo que dicen de nosotros
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-16 h-[2px] bg-gradient-to-r from-soglia-primary to-soglia-accent mx-auto" />
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Quote icon */}
          <Quote
            size={60}
            className="text-soglia-primary/15 absolute -top-4 left-1/2 -translate-x-1/2"
          />

          <div className="min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-center px-4"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-soglia-accent fill-soglia-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto font-light italic"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div>
                  <p className="text-white font-medium tracking-wider text-sm uppercase">
                    {testimonials[current].name}
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    {testimonials[current].date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2 bg-soglia-accent'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
