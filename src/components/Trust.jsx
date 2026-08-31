import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import AnimatedDivider from './AnimatedDivider';
import vigvitaLogo from '../assets/logo.png';
import metlifeLogo from '../assets/metlife-logo.png';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const brands = [
  {
    logo: vigvitaLogo,
    alt: 'Vigvita Patrimonial',
    desc: 'Promotoría especializada en asesoría patrimonial y planeación financiera para familias y empresas en México.',
    socials: [
      { icon: InstagramIcon, url: 'https://www.instagram.com/vigvita_patrimonial', label: 'Instagram' },
      { icon: FacebookIcon, url: 'https://www.facebook.com/vigvita/', label: 'Facebook' }
    ]
  },
  {
    logo: metlifeLogo,
    alt: 'MetLife',
    desc: 'Líder global en protección financiera con presencia en más de 40 países y más de 150 años de trayectoria.',
    url: 'https://www.metlife.com.mx',
    urlLabel: 'metlife.com.mx'
  }
];

export default function Trust() {
  return (
    <>
      <AnimatedDivider />
      <section className="trust" style={{ textAlign: 'left', padding: '6rem 0' }}>
        <div className="container">
          <motion.p
            className="trust-label"
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Con el respaldo de
          </motion.p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                style={{
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(0,0,0,0.08)',
                  transition: 'background 0.4s',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.03)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.alt} 
                  style={{ height: '36px', objectFit: 'contain', marginBottom: '1.5rem', opacity: 0.85 }} 
                />
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: '#6b6560', 
                  lineHeight: 1.6, 
                  marginBottom: '1.5rem' 
                }}>
                  {brand.desc}
                </p>
                {brand.socials ? (
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {brand.socials.map((s, j) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={j}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.875rem',
                            color: 'var(--accent)',
                            fontWeight: 500,
                            transition: 'opacity 0.3s'
                          }}
                        >
                          <Icon size={16} /> {s.label}
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <a 
                    href={brand.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.4rem',
                      fontSize: '0.875rem', 
                      color: 'var(--accent)',
                      fontWeight: 500,
                      transition: 'opacity 0.3s'
                    }}
                  >
                    {brand.urlLabel} <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
