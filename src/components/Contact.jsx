import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall, Mail, Download } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = "525524321189";
  const email = "victorflores.sadapatrimonial@gmail.com";

  return (
    <section id="contact" className="dark-section" style={{ padding: '8rem 0 4rem 0', borderRadius: '4rem 4rem 0 0', marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
            Hablemos del futuro.
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', marginBottom: '4rem' }}>
            Protege lo que has construido. Envíame un mensaje y comencemos a diseñar tu estrategia patrimonial.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            <a href={`https://wa.me/${whatsappNumber}`} className="btn-premium" style={{ backgroundColor: 'white', color: 'var(--primary-dark)' }}>
              <MessageCircle size={22} /> Iniciar chat en WhatsApp
            </a>
            <a href={`tel:+${whatsappNumber}`} className="btn-premium" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <PhoneCall size={22} /> Llamar
            </a>
          </div>

          <div style={{ marginTop: '5rem', width: '100%', maxWidth: '800px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ textAlign: 'left' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', marginBottom: '0.5rem' }}>Correo Electrónico</p>
              <a href={`mailto:${email}`} style={{ fontSize: '1.25rem', color: 'white' }}>{email}</a>
            </div>
            
            <button className="btn-premium" style={{ padding: '1rem 2rem', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.3)', fontSize: '1rem' }}>
              <Download size={18} /> Guardar vCard
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
