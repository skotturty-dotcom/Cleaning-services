import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'How long does a full home deep cleaning session take?',
      a: 'For a standard 2 BHK or 3 BHK home, our 3 to 4 member team takes approximately 4 to 6 hours. Larger villas or homes with heavy post-renovation dust may take up to 7-8 hours.'
    },
    {
      q: 'Do I need to supply water, electricity, or cleaning chemicals?',
      a: 'You only need to provide running water and power supply for our machines. Our crew brings all professional heavy-duty machines (single-disc scrubbers, vacuum extractors, pressure washers) and 100% non-toxic hospital-grade chemicals (Taski/Diversey).'
    },
    {
      q: 'Are your cleaning chemicals safe for children, pets, and seniors?',
      a: 'Yes, absolutely! We strictly use eco-friendly, biodegradable, non-toxic formulations that are free from harmful volatile organic compounds (VOCs). Your home will be completely safe for kids and pets immediately after cleaning.'
    },
    {
      q: 'What if I find a missed spot after the cleaning is finished?',
      a: 'We offer an instant 48-Hour Free Re-Clean Guarantee! Before payment, our supervisor conducts a 32-point walkthrough with you. If you notice any missed spot within 48 hours, our crew will return and re-clean it at zero additional charge.'
    },
    {
      q: 'How far in advance should I book my cleaning slot?',
      a: 'We recommend booking 24 to 48 hours in advance to secure your preferred morning or weekend time slot. However, we also accommodate same-day urgent slots across Indiranagar, Koramangala, HSR Layout, and Whitefield.'
    },
    {
      q: 'What is the difference between regular daily cleaning and professional deep cleaning?',
      a: 'Daily maid cleaning only covers surface sweeping and mopping. Professional deep cleaning involves high-RPM mechanized floor scrubbing, high-pressure tile descaling, cobweb removal from ceiling fans/light fixtures, deep degreasing of kitchen grease, and vacuum extraction for upholstered furniture.'
    }
  ]

  return (
    <section id="faq" style={{ padding: '5rem 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-pill badge-primary" style={{ marginBottom: '0.75rem' }}>
            GOT QUESTIONS?
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)' }}>
            Everything you need to know about our home deep cleaning process in Bengaluru.
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx

            return (
              <div 
                key={idx}
                style={{
                  borderRadius: '16px',
                  border: isOpen ? '2px solid var(--primary)' : '1px solid var(--slate-200)',
                  background: isOpen ? '#f0f9ff' : 'var(--slate-50)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--slate-900)',
                    fontFamily: 'var(--font-heading)',
                    gap: '1rem'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--slate-600)" />}
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.25rem 3.25rem',
                    color: 'var(--slate-700)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
