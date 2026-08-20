import React, { useState } from 'react'
import { Sparkles, SlidersHorizontal, ArrowLeftRight, CheckCircle2 } from 'lucide-react'

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [activeTab, setActiveTab] = useState('kitchen')

  const transformations = {
    kitchen: {
      title: 'Kitchen Counter & Degreasing',
      beforeImg: '/images/kitchen.jpg',
      afterImg: '/images/hero.jpg',
      desc: 'Heavy oil grease, yellowed stove backsplash, and burnt carbon stains scrubbed clean using specialized food-safe degreasers.',
      stats: '100% Grease Removal'
    },
    sofa: {
      title: 'Fabric Sofa Upholstery Shampooing',
      beforeImg: '/images/sofa.jpg',
      afterImg: '/images/hero.jpg',
      desc: 'Deep extraction shampooing removing food spills, pet dander, dust mites, and stubborn water rings.',
      stats: '3-Step Extraction Power'
    },
    bathroom: {
      title: 'Bathroom Hard Water Tile Descaling',
      beforeImg: '/images/bathroom.jpg',
      afterImg: '/images/hero.jpg',
      desc: 'Eliminating tough white limescale deposits from glass shower cubicles, chrome faucets, and floor grouting.',
      stats: 'Streak-Free Finish'
    }
  }

  const current = transformations[activeTab]

  return (
    <section id="before-after" style={{ padding: '5rem 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="badge-pill badge-primary" style={{ marginBottom: '0.75rem' }}>
            REAL RESULTS
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            See The Transformation (Before & After)
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)' }}>
            Drag the interactive slider below to see how our German mechanized cleaning transforms dirty spaces into pristine condition.
          </p>

          {/* Service Selector Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('kitchen')}
              style={tabBtnStyle(activeTab === 'kitchen')}
            >
              🍳 Kitchen Degreasing
            </button>
            <button 
              onClick={() => setActiveTab('sofa')}
              style={tabBtnStyle(activeTab === 'sofa')}
            >
              🛋️ Sofa Shampooing
            </button>
            <button 
              onClick={() => setActiveTab('bathroom')}
              style={tabBtnStyle(activeTab === 'bathroom')}
            >
              🚿 Bathroom Descaling
            </button>
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          background: 'var(--slate-900)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Visual Canvas Container */}
          <div 
            style={{
              position: 'relative',
              height: '420px',
              width: '100%',
              overflow: 'hidden',
              userSelect: 'none',
              cursor: 'ew-resize'
            }}
          >
            {/* After Image (Full background) */}
            <img 
              src={current.afterImg} 
              alt={`${current.title} After Deep Cleaning`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={afterBadgeStyle}>
              ✨ AFTER (DEEP CLEANED)
            </div>

            {/* Before Image (Clipped on left half) */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${sliderPosition}%`,
              height: '100%',
              overflow: 'hidden'
            }}>
              <img 
                src={current.beforeImg} 
                alt={`${current.title} Before Cleaning`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '960px', // matches parent width
                  maxHeight: 'none',
                  height: '420px',
                  objectFit: 'cover',
                  filter: 'sepia(0.3) contrast(1.1) brightness(0.85)' // accentuates "dirty/stained" look
                }}
              />
              <div style={beforeBadgeStyle}>
                ⚠️ BEFORE (DIRTY / STAINED)
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              width: '3px',
              background: '#ffffff',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              transform: 'translateX(-50%)'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'var(--primary)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                border: '3px solid #ffffff'
              }}>
                <ArrowLeftRight size={20} />
              </div>
            </div>

            {/* Range Input Overlay for Dragging */}
            <input 
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(e.target.value)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'ew-resize',
                zIndex: 10
              }}
            />
          </div>

          {/* Description Footer inside card */}
          <div style={{ padding: '1.75rem', background: '#0f172a', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.35rem' }}>
                {current.title}
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', maxWidth: '600px' }}>
                {current.desc}
              </p>
            </div>
            <div className="badge-pill badge-accent" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
              <CheckCircle2 size={16} /> {current.stats}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

const tabBtnStyle = (active) => ({
  padding: '0.65rem 1.25rem',
  borderRadius: '99px',
  border: active ? 'none' : '1px solid var(--slate-300)',
  background: active ? 'linear-gradient(135deg, var(--primary) 0%, #0369a1 100%)' : '#ffffff',
  color: active ? '#ffffff' : 'var(--slate-700)',
  fontWeight: '600',
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: active ? '0 4px 12px rgba(2, 132, 199, 0.3)' : 'none'
})

const beforeBadgeStyle = {
  position: 'absolute',
  top: '16px',
  left: '16px',
  background: 'rgba(225, 29, 72, 0.9)',
  color: '#ffffff',
  padding: '0.4rem 0.85rem',
  borderRadius: '8px',
  fontSize: '0.78rem',
  fontWeight: '700',
  backdropFilter: 'blur(8px)'
}

const afterBadgeStyle = {
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'rgba(16, 185, 129, 0.9)',
  color: '#ffffff',
  padding: '0.4rem 0.85rem',
  borderRadius: '8px',
  fontSize: '0.78rem',
  fontWeight: '700',
  backdropFilter: 'blur(8px)'
}
