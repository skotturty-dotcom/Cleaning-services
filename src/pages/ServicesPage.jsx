import React from 'react'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'
import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function ServicesPage({ onSelectService }) {
  return (
    <div style={{ paddingTop: '2rem' }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#ffffff',
        padding: '4rem 1.5rem',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-pill badge-accent" style={{ marginBottom: '1rem' }}>
            SPECIALIZED CLEANING CATALOG
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', marginBottom: '1rem' }}>
            Our Professional Deep Cleaning Services
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Mechanized single-disc floor scrubbing, 100% hospital-grade eco-friendly sanitization, and 5-star verified cleaning crews in Bengaluru.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap', fontSize: '0.9rem', color: '#34d399' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={18} /> German Mechanized Tools
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={18} /> 48-Hr Free Re-Clean Guarantee
            </span>
          </div>
        </div>
      </div>

      <ServicesSection onSelectService={onSelectService} />
      <ContactSection />
    </div>
  )
}
