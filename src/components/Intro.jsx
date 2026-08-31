import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/victor.webp';

export default function Intro() {
  const { scrollY } = useScroll();
  const yName = useTransform(scrollY, [0, 600], [0, 150]);
  const opacityName = useTransform(scrollY, [0, 400], [1, 0]);
  const yPhoto = useTransform(scrollY, [0, 600], [0, 80]);
  const scalePhoto = useTransform(scrollY, [0, 400], [1, 1.05]);

  return (
    <section className="intro">
      <div className="container" style={{ position: 'relative' }}>
        <motion.div style={{ y: yName, opacity: opacityName }}>
          <motion.p
            className="intro-role"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Consultoría Patrimonial
          </motion.p>

          <motion.h1
            className="intro-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Victor<br />
            Flores<span className="accent">.</span>
          </motion.h1>

          <motion.p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: '#6b6560',
              maxWidth: '550px',
              lineHeight: 1.4,
              fontWeight: 300,
              marginTop: '1rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tu tranquilidad financiera no se deja al azar.{' '}
            <strong style={{ color: 'var(--bg)', fontWeight: 600 }}>Se diseña.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ marginTop: '2.5rem' }}
          >
            <a href="#contact" className="nav-cta" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              Iniciar conversación
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="intro-photo"
          style={{ y: yPhoto, scale: scalePhoto }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={profileImg} alt="Victor Manuel Flores Cervantes" />
        </motion.div>
      </div>
    </section>
  );
}
