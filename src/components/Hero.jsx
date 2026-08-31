import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/victor.webp';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects based on window scroll
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.1]);
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: '4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div style={{ maxWidth: '800px', position: 'relative', zIndex: 10, y: yText, opacity: opacityText }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ 
              display: 'inline-block', 
              fontSize: '1.25rem', 
              fontWeight: 500, 
              color: 'var(--primary-blue)', 
              marginBottom: '1.5rem' 
            }}>
              Vigvita Patrimonial • MetLife
            </span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Protege el mañana, <br />
            <span style={{ color: 'var(--text-muted)' }}>disfruta el hoy.</span>
          </motion.h1>

          <motion.p 
            style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-muted)', 
              marginTop: '2rem',
              marginBottom: '3rem',
              maxWidth: '500px',
              lineHeight: 1.5
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Diseño estrategias financieras de alto nivel para blindar tu patrimonio y el futuro de tu familia, analizando lo que realmente necesitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#contact" className="btn-premium">
              Agenda tu cita <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-image-wrapper"
        style={{ scale: scaleImage, y: yImage }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src={profileImg}
          alt="Victor Manuel Flores Cervantes" 
        />
      </motion.div>
    </section>
  );
}
