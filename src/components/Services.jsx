import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const solutions = [
  {
    num: '01',
    title: 'Respaldo en Salud',
    desc: 'Acceso inmediato a la mejor medicina privada a nivel nacional e internacional. Blinda tu economía ante eventualidades médicas graves sin descapitalizarte ni comprometer lo que has construido.'
  },
  {
    num: '02',
    title: 'Certeza Familiar',
    desc: 'Un escudo financiero irrevocable. Garantiza que, pase lo que pase, tus seres queridos mantendrán intacto su nivel de vida, sus proyectos y su tranquilidad.'
  },
  {
    num: '03',
    title: 'Garantía Universitaria',
    desc: 'El mejor legado es la educación. Construye un fondo garantizado que asegurará el pago de la universidad de tus hijos desde hoy, sin importar la inflación.'
  },
  {
    num: '04',
    title: 'Independencia Financiera',
    desc: 'El diseño de una estrategia fiscalmente eficiente para construir un capital sólido que te permita disfrutar tu jubilación con absoluta libertad y dignidad.'
  }
];

export default function Services() {
  const containerRef = useRef(null);
  
  return (
    <section id="services" ref={containerRef} style={{ backgroundColor: 'white', padding: '10rem 0' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '8rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary-blue)', fontWeight: 600 }}>
            Tus Soluciones
          </h2>
        </motion.div>

        <div>
          {solutions.map((sol, idx) => {
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '1.5rem',
                  paddingBottom: '5rem',
                  marginBottom: '5rem',
                  borderBottom: idx !== solutions.length - 1 ? '1px solid #f1f5f9' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem' }}>
                  <span style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 300, color: '#e2e8f0', lineHeight: 0.8 }}>
                    {sol.num}
                  </span>
                  <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--primary-dark)' }}>
                    {sol.title}
                  </h3>
                </div>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '800px', marginLeft: 'clamp(0px, 8vw + 2rem, 8rem)' }}>
                  {sol.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
