import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';

const faqTree = {
  welcome: {
    bot: '¡Hola! 👋 Soy el asistente virtual de Victor Flores. ¿En qué puedo orientarte?',
    options: [
      { label: '¿Qué tipo de asesoría ofrece?', next: 'asesoria' },
      { label: '¿Cómo funciona una sesión?', next: 'sesion' },
      { label: '¿Tiene algún costo la consulta inicial?', next: 'costo' },
      { label: 'Quiero agendar una cita', next: 'agendar' }
    ]
  },
  asesoria: {
    bot: 'Victor se especializa en consultoría patrimonial: blindaje de liquidez, capitalización a futuro y continuidad financiera. Todo diseñado a la medida de tus metas, sin productos genéricos.',
    options: [
      { label: '¿Con qué empresas trabaja?', next: 'respaldo' },
      { label: 'Quiero agendar una cita', next: 'agendar' },
      { label: 'Volver al inicio', next: 'welcome' }
    ]
  },
  sesion: {
    bot: 'La primera sesión es un diagnóstico integral: se analizan tus objetivos, tu flujo financiero y posibles vulnerabilidades. A partir de ahí, Victor diseña una arquitectura patrimonial personalizada.',
    options: [
      { label: '¿Tiene algún costo?', next: 'costo' },
      { label: 'Quiero agendar una cita', next: 'agendar' },
      { label: 'Volver al inicio', next: 'welcome' }
    ]
  },
  costo: {
    bot: 'La sesión de diagnóstico inicial es sin costo y sin compromiso. Es una conversación para entender tu situación y ver si hay oportunidades de mejora.',
    options: [
      { label: 'Perfecto, quiero agendar', next: 'agendar' },
      { label: 'Tengo otra pregunta', next: 'welcome' }
    ]
  },
  respaldo: {
    bot: 'Victor trabaja como consultor patrimonial a través de Vigvita Patrimonial, con el respaldo de MetLife, líder global con más de 150 años de trayectoria en protección financiera.',
    options: [
      { label: '¿Cómo funciona una sesión?', next: 'sesion' },
      { label: 'Quiero agendar una cita', next: 'agendar' },
      { label: 'Volver al inicio', next: 'welcome' }
    ]
  },
  agendar: {
    bot: '¡Excelente! Para coordinar una sesión con Victor, el canal más directo es WhatsApp. Te conectará en minutos.',
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
  }, [messages]);

  const handleOption = (option) => {
    if (option.next === 'whatsapp') {
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
      return;
    }

    const node = faqTree[option.next];
    setCurrentNode(option.next);
    setMessages(prev => [
      ...prev.map(m => ({ ...m, options: null })), // Remove old options
      { type: 'user', text: option.label },
      { type: 'bot', text: node.bot, options: node.options }
    ]);
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
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
