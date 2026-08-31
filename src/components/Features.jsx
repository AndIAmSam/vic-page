import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Features() {
  const containerRef = useRef(null);
  
  // Parallax based on this section's scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1]);

  return (
    <section id="about" ref={containerRef} style={{ padding: '12rem 0', backgroundColor: 'white', overflow: 'hidden' }}>
      <div className="container">
        <motion.div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', opacity, scale }}>
          <motion.h2 
            style={{ x: xLeft, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            No ofrezco planes genéricos.
          </motion.h2>
          
          <motion.h2 
            style={{ x: xRight, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--primary-blue)', marginTop: '0.5rem' }}
          >
            Blindo patrimonios.
          </motion.h2>

          <motion.p 
            style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '3.5rem', maxWidth: '700px', margin: '3.5rem auto 0', lineHeight: 1.6 }}
          >
            A lo largo de mi trayectoria he aprendido que cada familia y cada negocio es único. Mi metodología se basa en realizar un análisis financiero profundo para crear trajes a la medida, garantizando que tengas protección exacta sin pagar coberturas innecesarias. 
            <br/><br/>
            Con el respaldo global de <strong>MetLife</strong> y <strong>Vigvita Patrimonial</strong>, estoy contigo desde la planeación hasta el momento en que más lo necesites.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
