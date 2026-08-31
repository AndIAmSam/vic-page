import { motion } from 'framer-motion';
import AnimatedDivider from './AnimatedDivider';

const method = [
  {
    num: '01',
    title: 'Diagnóstico Integral',
    desc: 'Evaluamos tus objetivos, flujo financiero actual y vulnerabilidades patrimoniales para entender el panorama completo.'
  },
  {
    num: '02',
    title: 'Arquitectura a la Medida',
    desc: 'Diseñamos un plan estructurado y eficiente, ajustado a tu capacidad real y enfocado en maximizar el rendimiento de cada decisión.'
  },
  {
    num: '03',
    title: 'Acompañamiento Continuo',
    desc: 'Tu plan evoluciona contigo. Cuentas con un asesor directo para revisar avances, gestionar trámites y adaptar tu estrategia en momentos clave.'
  }
];

export default function Approach() {
  return (
    <>
      <AnimatedDivider />
      <section className="approach">
        <div className="container">
          <motion.p
            style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              marginBottom: '3rem'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Método de asesoría
          </motion.p>
          <div className="approach-grid">
            {method.map((p, i) => (
              <motion.div
                key={i}
                className="approach-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <p className="approach-number">{p.num}</p>
                <h3 className="approach-title">{p.title}</h3>
                <p className="approach-desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
