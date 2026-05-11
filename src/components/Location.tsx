import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa"


const hours = [
  { days: 'Lunes a Viernes', time: '8:00 — 20:00' },
  { days: 'Sábados', time: '9:00 — 21:00' },
  { days: 'Domingos', time: '9:00 — 18:00' },
];

const contactInfo = [
  { icon: MapPin, label: 'Del Barco Centenera 1249, CABA', href: 'https://maps.google.com/maps?q=Del+Barco+Centenera+1249,+Buenos+Aires,+Argentina' },
  { icon: Phone, label: '+54 11 5555-1234', href: 'tel:+541155551234' },
  { icon: Mail, label: 'hola@sogliacafe.com', href: 'mailto:hola@sogliacafe.com' },
];

const socialLinks = [
  { icon: FaInstagram, label: '@sogliacafe', href: '#' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: '#' },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacto" className="py-24 md:py-32 bg-soglia-cream/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-soglia-accent text-sm tracking-[0.3em] uppercase mb-4"
          >
            Visitanos
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl text-soglia-dark mb-6 tracking-wide"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Dónde encontrarnos
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-divider" />
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto"
          >
            <iframe
              src="https://maps.google.com/maps?q=Del+Barco+Centenera+1249,+Buenos+Aires,+Argentina&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Soglia - Del Barco Centenera 1249"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-soglia-cream-dark/50">
              <h3 className="text-lg font-semibold text-soglia-dark tracking-wider uppercase mb-6">
                Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-soglia-cream flex items-center justify-center group-hover:bg-soglia-primary/10 transition-colors duration-300">
                        <Icon size={18} className="text-soglia-primary" strokeWidth={1.5} />
                      </div>
                      <span className="text-soglia-text group-hover:text-soglia-primary transition-colors duration-300">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-soglia-cream-dark/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-soglia-cream flex items-center justify-center">
                  <Clock size={18} className="text-soglia-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-soglia-dark tracking-wider uppercase">
                  Horarios
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.days} className="flex items-center justify-between pb-3 border-b border-soglia-cream last:border-0 last:pb-0">
                    <span className="text-soglia-text font-medium">{h.days}</span>
                    <span className="text-soglia-primary font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex-1 flex items-center justify-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-soglia-cream-dark/50 hover:border-soglia-primary/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <Icon size={20} className="text-soglia-primary" strokeWidth={1.5} />
                    <span className="text-soglia-text text-sm font-medium group-hover:text-soglia-primary transition-colors duration-300">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
