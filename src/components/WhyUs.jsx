import React from 'react'
import { ShieldCheck, Cpu, Leaf, RefreshCw, DollarSign, Award, ThumbsUp, HeartHandshake } from 'lucide-react'

export default function WhyUs() {
  const pillars = [
    {
      icon: Cpu,
      title: 'German Mechanized Scrubbing',
      desc: 'We use high-RPM single-disc floor scrubbers, 150-bar pressure washers, and industrial vacuum extractors for deep dirt removal.',
      color: '#0284c7'
    },
    {
      icon: Leaf,
      title: '100% Non-Toxic Eco Chemicals',
      desc: 'Diversey / Taski hospital-grade certified cleaning chemicals that eliminate 99.9% germs while being completely safe for kids & pets.',
      color: '#10b981'
    },
    {
      icon: ShieldCheck,
      title: 'Verified & Uniformed Crew',
      desc: '100% background-checked, Aadhaar verified, trained in professional etiquette, and wearing company uniforms with protective gear.',
      color: '#8b5cf6'
    },
    {
      icon: RefreshCw,
      title: '48-Hour Free Re-Clean Guarantee',
      desc: 'If you notice any missed spot during your post-cleaning walkthrough, our crew will return within 48 hours to re-clean at ZERO cost.',
      color: '#f59e0b'
    },
    {
      icon: DollarSign,
      title: 'Transparent Flat Rate Pricing',
      desc: 'What you see is what you pay! No hidden extra charges for stairs, heavy grime, or weekend slots. Complete transparency.',
      color: '#ec4899'
    },
    {
      icon: HeartHandshake,
      title: 'Post-Clean Quality Inspection',
      desc: 'Our supervisor conducts a 32-point inspection checklist with you before handing over the keys. 100% satisfaction required.',
      color: '#06b6d4'
    }
  ]

  return (
    <section id="why-us" style={{ padding: '5rem 0', background: 'var(--slate-50)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-pill badge-primary" style={{ marginBottom: '0.75rem' }}>
            THE MY CLEANING SERVICES DIFFERENCE
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Why Bengaluru Prefers Our Deep Cleaning
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)' }}>
            We don't just sweep or mop—we scientifically deep clean, sanitize, and restore your living spaces to brand-new standards.
          </p>
        </div>

        {/* Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {pillars.map((pil, idx) => {
            const IconComp = pil.icon
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.25rem 2rem 2rem 2rem',
                  borderRadius: '24px',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.15rem',
                  border: `1.5px solid ${pil.color}35`,
                  boxShadow: `0 14px 35px -8px ${pil.color}18, 0 4px 12px rgba(0,0,0,0.03)`,
                  position: 'relative'
                }}
              >
                {/* Top Accent Gradient Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: `linear-gradient(90deg, ${pil.color} 0%, #38bdf8 100%)`
                }} />

                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '18px',
                  background: `linear-gradient(135deg, ${pil.color}18 0%, ${pil.color}30 100%)`,
                  color: pil.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${pil.color}40`,
                  boxShadow: `0 6px 16px ${pil.color}25`
                }}>
                  <IconComp size={30} color={pil.color} />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--slate-900)' }}>
                  {pil.title}
                </h3>

                <p style={{ fontSize: '0.925rem', color: 'var(--slate-600)', lineHeight: '1.6' }}>
                  {pil.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Guarantee Banner */}
        <div style={{
          marginTop: '3.5rem',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(52, 211, 153, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Award size={32} color="#34d399" />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.25rem' }}>
                100% Clean Guarantee or Zero Fee
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.925rem', maxWidth: '600px' }}>
                If you are not delighted with any area cleaned, inform our supervisor before payment and we will fix it instantly.
              </p>
            </div>
          </div>

          <a 
            href="tel:+910000000000" 
            className="btn-accent btn-lg" 
            style={{ textDecoration: 'none' }}
          >
            <span>Call +91 00000 00000</span>
          </a>
        </div>

      </div>
    </section>
  )
}
