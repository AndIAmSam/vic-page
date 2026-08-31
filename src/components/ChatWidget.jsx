import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';

const faqTree = {
  welcome: {
    bot: '¡Hola! 👋 Soy el asistente de la firma de Victor Flores. ¿En qué podemos orientarte hoy?',
    options: [
      { label: '¿En qué se especializan?', next: 'asesoria' },
      { label: '¿Cómo funciona el proceso?', next: 'sesion' },
      { label: '¿Tienen algún costo las sesiones?', next: 'costo' },
      { label: 'Quiero agendar una sesión', next: 'agendar' }
    ]
  },
  asesoria: {
    bot: 'Nos especializamos en arquitectura patrimonial: blindaje de liquidez, capitalización a futuro y continuidad financiera. Todo diseñado a la medida de tus metas, sin productos genéricos.',
    options: [
      { label: '¿Qué respaldo tienen?', next: 'respaldo' },
      { label: 'Quiero agendar una sesión', next: 'agendar' },
      { label: 'Volver al inicio', next: 'welcome' }
    ]
  },
  sesion: {
    bot: 'Iniciamos con un diagnóstico integral donde evaluamos tus objetivos y flujo actual. A partir de ahí, diseñamos una estrategia patrimonial personalizada bajo la dirección de Victor.',
    options: [
      { label: '¿Tienen algún costo?', next: 'costo' },
      { label: 'Quiero agendar una sesión', next: 'agendar' },
      { label: 'Volver al inicio', next: 'welcome' }
    ]
  },
  costo: {
    bot: 'Ninguna de nuestras sesiones de consultoría tiene costo ni compromiso. El objetivo es analizar tu situación y determinar si podemos aportarte valor estratégico.',
    options: [
      { label: 'Perfecto, quiero agendar', next: 'agendar' },
      { label: 'Tengo otra pregunta', next: 'welcome' }
    ]
  },
  respaldo: {
    bot: 'Operamos a través de Vigvita Patrimonial, una de las firmas consultoras más prestigiosas del país, y contamos con el solido respaldo de MetLife, líder global con más de 150 años de trayectoria.',
    options: [
      { label: '¿Cómo funciona el proceso?', next: 'sesion' },
      { label: 'Quiero agendar una sesión', next: 'agendar' },
      { label: 'Volver al inicio', next: 'welcome' }
    ]
  },
  agendar: {
    bot: '¡Excelente! Para coordinar tu sesión de diagnóstico, el canal más directo es WhatsApp. Te enlazaremos en minutos.',
    options: [
      { label: 'Abrir WhatsApp', next: 'whatsapp' },
      { label: 'Tengo otra pregunta', next: 'welcome' }
    ]
  }
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentNode, setCurrentNode] = useState('welcome');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const whatsappNumber = "525524321189";
  const whatsappMessage = encodeURIComponent("Hola Víctor, me gustaría coordinar una sesión de diagnóstico patrimonial.");

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const node = faqTree['welcome'];
      setMessages([{ type: 'bot', text: node.bot, options: node.options }]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleOption = (option) => {
    if (option.next === 'whatsapp') {
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
      return;
    }

    const node = faqTree[option.next];
    setCurrentNode(option.next);
    
    // Add user message, remove old options
    setMessages(prev => [
      ...prev.map(m => ({ ...m, options: null })),
      { type: 'user', text: option.label }
    ]);
    
    setIsTyping(true);
    
    // Simulate thinking delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { type: 'bot', text: node.bot, options: node.options }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: 'clamp(1rem, 5vw, 2rem)',
          right: 'clamp(1rem, 5vw, 2rem)',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--accent)',
          color: 'var(--bg)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(196, 163, 90, 0.35)',
          zIndex: 200
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              bottom: 'clamp(4.5rem, 15vw, 6rem)',
              right: 'clamp(1rem, 5vw, 2rem)',
              width: 'clamp(280px, calc(100vw - 2rem), 380px)',
              maxHeight: '520px',
              background: '#141414',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              zIndex: 199,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 8px rgba(74, 222, 128, 0.5)'
              }} />
              <div>
                <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#f5f0e8' }}>
                  Asistente Virtual
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Respuestas inmediatas</p>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {messages.map((msg, i) => (
                <div key={i}>
                  {/* Message bubble */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      maxWidth: '90%',
                      padding: '0.85rem 1rem',
                      borderRadius: msg.type === 'bot' ? '1rem 1rem 1rem 0.25rem' : '1rem 1rem 0.25rem 1rem',
                      background: msg.type === 'bot' ? 'rgba(255,255,255,0.06)' : 'var(--accent)',
                      color: msg.type === 'bot' ? '#f5f0e8' : 'var(--bg)',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                      marginLeft: msg.type === 'user' ? 'auto' : '0',
                      fontWeight: msg.type === 'user' ? 500 : 400
                    }}
                  >
                    {msg.text}
                  </motion.div>

                  {/* Quick reply options */}
                  {msg.options && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        marginTop: '0.75rem'
                      }}
                    >
                      {msg.options.map((opt, j) => (
                        <button
                          key={j}
                          onClick={() => handleOption(opt)}
                          style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '0.75rem',
                            padding: '0.65rem 1rem',
                            color: 'var(--accent)',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(196,163,90,0.1)';
                            e.currentTarget.style.borderColor = 'var(--accent)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                          }}
                        >
                          {opt.label}
                          <ArrowRight size={14} />
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    maxWidth: '90%',
                    padding: '0.85rem 1rem',
                    borderRadius: '1rem 1rem 1rem 0.25rem',
                    background: 'rgba(255,255,255,0.06)',
                    width: 'fit-content'
                  }}
                >
                  <div style={{ display: 'flex', gap: '4px', padding: '0.2rem 0' }}>
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-muted)' }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
