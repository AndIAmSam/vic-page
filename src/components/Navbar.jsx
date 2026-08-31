import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-inner">
        <span style={{ 
          fontFamily: 'Outfit, sans-serif', 
          fontSize: '1.15rem', 
          fontWeight: 700, 
          color: 'var(--bg)',
          letterSpacing: '-0.02em'
        }}>
          Victor Flores
        </span>
        <a href="#contact" className="nav-cta">Conversemos</a>
      </div>
    </motion.nav>
  );
}
