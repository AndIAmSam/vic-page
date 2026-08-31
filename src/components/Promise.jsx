import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedDivider from './AnimatedDivider';

const pillars = [
  {
    title: 'Blindaje de Liquidez y Capital',
    desc: 'Estructuras diseñadas para absorber contingencias de alto impacto financiero, evitando que tengas que liquidar inversiones, frenar metas o descapitalizarte.'
  },
  {
    title: 'Capitalización y Proyección a Futuro',
    desc: 'Estrategias de acumulación sistemática y optimización fiscal para consolidar proyectos a mediano plazo y construir un retiro solvente bajo tus propias reglas.'
  },
  {
    title: 'Continuidad y Trascendencia',
    desc: 'Mecanismos que garantizan la permanencia de tu estilo de vida, la autonomía financiera en cualquier etapa y la certeza patrimonial para tu entorno.'
  }
];

export default function Promise() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [60, 0]);

  return (
    <>
      <AnimatedDivider />
      <section className="promise" ref={ref} style={{ padding: '8rem 0' }}>
        <div className="container">
          <motion.div style={{ opacity, y }}>
            <p style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              marginBottom: '4rem'
            }}>
              Pilares estratégicos
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '3rem'
            }}>
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em'
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6
                  }}>
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
