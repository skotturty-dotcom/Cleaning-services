import React, { useState } from 'react'
import { Sparkles, Star, ShieldCheck, CheckCircle2, Phone, MessageSquare, ArrowRight, Clock, Award } from 'lucide-react'

export default function Hero({ onCalculatePrice, onOpenBooking }) {
  const [bhk, setBhk] = useState('2bhk')
  const [service, setService] = useState('full-home')

  const handleQuickEstimate = (e) => {
    e.preventDefault()
    onCalculatePrice({ bhk, service })
  }

  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0369a1 100%)',
      color: '#ffffff',
      padding: '4rem 0 5rem 0',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Gradient Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.25) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.9fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Headline & Value Proposition */}
          <div>
            {/* Top Rating Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span className="badge-pill" style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '0.4rem 0.9rem'
              }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <span style={{ fontWeight: '700', marginLeft: '4px' }}>4.9/5 Rating</span>
                <span style={{ opacity: 0.7, fontSize: '0.78rem' }}>(1,250+ Bengaluru Reviews)</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              color: '#ffffff'
            }}>
              Spotless Clean Homes,<br />
              <span style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Effortless Deep Cleaning
              </span> in Bengaluru
            </h1>

            <p style={{
              fontSize: '1.125rem',
              color: '#cbd5e1',
              marginBottom: '2rem',
              maxWidth: '560px',
              lineHeight: '1.6'
            }}>
              Experience German mechanized single-disc scrubbing, 100% eco-friendly hospital-grade disinfectants & 5-star verified cleaning crews. Guaranteed spotless results or we re-clean for free!
            </p>

            {/* Feature Bullets */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.85rem',
              marginBottom: '2.5rem'
            }}>
              {[
                'German Mechanized Equipment',
                '100% Eco-Safe & Pet Friendly',
                'Background Verified Professionals',
                '48-Hour Re-Clean Guarantee'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', fontSize: '0.925rem', fontWeight: '500' }}>
                  <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button onClick={onOpenBooking} className="btn-accent btn-lg">
                <Sparkles size={20} />
                <span>Book Deep Cleaning Now</span>
              </button>

              <a 
                href="https://wa.me/910000000000?text=Hi%20My%20Cleaning%20Services,%20I%20want%20to%20get%20a%20deep%20cleaning%20quote!" 
                target="_blank"
                rel="noreferrer"
                className="btn-secondary btn-lg"
                style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(8px)' }}
              >
                <MessageSquare size={20} color="#25D366" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#38bdf8', fontFamily: 'var(--font-heading)' }}>5,000+</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Homes Cleaned in Bengaluru</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#34d399', fontFamily: 'var(--font-heading)' }}>99.4%</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Satisfaction Score</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fbbf24', fontFamily: 'var(--font-heading)' }}>45+</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Trained Cleaning Crew</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Card & Quick Price Quote Form */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(2, 132, 199, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              position: 'relative'
            }}>
              {/* Hero Image */}
              <img 
                src="/images/hero.jpg" 
                alt="Pristine sunlit modern living room deep cleaned by My Cleaning Services Bengaluru" 
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '0.4rem 0.8rem',
                borderRadius: '99px',
                fontSize: '0.78rem',
                fontWeight: '600',
                color: '#34d399',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Award size={14} /> #1 Deep Cleaner Bengaluru
              </div>

              {/* Quick Calculator Card Overlay */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.92)',
                backdropFilter: 'blur(20px)',
                padding: '1.75rem',
                color: '#ffffff'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Sparkles size={18} color="#38bdf8" />
                  <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '700' }}>Instant Price Estimator</h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
                  Select your home details for an instant transparent rate:
                </p>

                <form onSubmit={handleQuickEstimate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#cbd5e1', marginBottom: '0.35rem', fontWeight: '500' }}>
                      Select Service Type
                    </label>
                    <select 
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      style={selectStyle}
                    >
                      <option value="full-home">✨ Full Home Deep Cleaning</option>
                      <option value="kitchen">🍳 Kitchen Deep Degreasing</option>
                      <option value="bathroom">🚿 Bathroom Deep Sanitization</option>
                      <option value="sofa">🛋️ Upholstery & Sofa Shampooing</option>
                      <option value="tank">💧 Water Tank Cleaning</option>
                      <option value="office">🏢 Office / Commercial Cleaning</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#cbd5e1', marginBottom: '0.35rem', fontWeight: '500' }}>
                      House Size / Layout
                    </label>
                    <select 
                      value={bhk}
                      onChange={(e) => setBhk(e.target.value)}
                      style={selectStyle}
                    >
                      <option value="1bhk">1 BHK (Up to 600 sq ft)</option>
                      <option value="2bhk">2 BHK (600 - 1000 sq ft)</option>
                      <option value="3bhk">3 BHK (1000 - 1500 sq ft)</option>
                      <option value="4bhk">4 BHK / Duplex (1500+ sq ft)</option>
                      <option value="villa">Independent Villa / Bungalow</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}>
                    <span>Calculate Price & View Slots</span>
                    <ArrowRight size={18} />
                  </button>
                </form>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', fontSize: '0.78rem', color: '#94a3b8' }}>
                  <Clock size={13} color="#38bdf8" /> Same day slots available in Indiranagar, Koramangala, HSR Layout
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}

const selectStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#ffffff',
  fontSize: '0.925rem',
  outline: 'none',
  fontFamily: 'inherit'
}
