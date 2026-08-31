import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Victor Manuel Flores Cervantes</p>
      </div>
    </motion.footer>
  );
}
