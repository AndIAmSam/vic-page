import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Statement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.15, 0.4, 0.7, 0.85], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.15, 0.4], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0.15, 0.4], [40, 0]);

  return (
    <section ref={ref} style={{ padding: '10rem 0', textAlign: 'center' }}>
      <div className="container">
        <motion.h2 style={{
          fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          opacity,
          scale,
          y
        }}>
          Lo que has construido<br />
          merece ser protegido<span style={{ color: 'var(--accent)' }}>.</span>
        </motion.h2>
      </div>
    </section>
  );
}
