import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall, Mail } from 'lucide-react';
import AnimatedDivider from './AnimatedDivider';

export default function CTA() {
  const whatsappNumber = "525524321189";
  const whatsappMessage = encodeURIComponent("Hola Víctor, me gustaría coordinar una sesión de diagnóstico patrimonial.");
  const email = "victorflores.sadapatrimonial@gmail.com";

  return (
    <>
      <AnimatedDivider />
      <section id="contact" className="cta">
        <div className="container">
          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ¿Construimos tu estrategia patrimonial?
          </motion.h2>

          <motion.p
            className="cta-sub"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Una conversación breve para revisar tus metas, identificar oportunidades y dar solidez a tu futuro financiero. Con total claridad y sin ningún compromiso.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle size={20} /> Conversemos por WhatsApp
            </a>
            <a href={`tel:+${whatsappNumber}`} className="btn-ghost">
              <PhoneCall size={20} /> Llamar
            </a>
            <a href={`mailto:${email}`} className="btn-ghost">
              <Mail size={20} /> Correo
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
