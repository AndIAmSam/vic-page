import { motion } from 'framer-motion';

export default function AnimatedDivider() {
  return (
    <motion.div
      className="divider-line"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: 'center' }}
    />
  );
}
