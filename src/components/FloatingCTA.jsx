import React from 'react'
import { Phone, MessageSquare, Calendar } from 'lucide-react'

export default function FloatingCTA({ onOpenBooking }) {
  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/910000000000?text=Hi%20My%20Cleaning%20Services,%20I%20want%20to%20book%20a%20deep%20cleaning%20slot!"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 990,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          transition: 'transform 0.3s ease'
        }}
        className="animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={30} fill="#ffffff" color="#ffffff" />
      </a>

      {/* Mobile Bottom Fixed Bar */}
      <div className="mobile-bottom-bar" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 980,
        background: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        padding: '0.75rem 1rem',
        display: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: '0 -4px 15px rgba(0,0,0,0.1)'
      }}>
        <a 
          href="tel:+910000000000"
          className="btn-secondary"
          style={{ flex: 1, justifyContent: 'center', padding: '0.75rem' }}
        >
          <Phone size={18} color="#0284c7" />
          <span>Call Now</span>
        </a>

        <button 
          onClick={onOpenBooking}
          className="btn-primary"
          style={{ flex: 1, justifyContent: 'center', padding: '0.75rem' }}
        >
          <Calendar size={18} />
          <span>Book Online</span>
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-bar { display: flex !important; }
        }
      `}</style>
    </>
  )
}
