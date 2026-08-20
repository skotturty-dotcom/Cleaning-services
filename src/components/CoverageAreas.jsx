import React, { useState } from 'react'
import { MapPin, Search, CheckCircle2, Navigation } from 'lucide-react'

export default function CoverageAreas() {
  const [searchTerm, setSearchTerm] = useState('')

  const areas = [
    { name: 'Indiranagar', zone: 'Central / East', status: 'Same Day Available' },
    { name: 'Koramangala', zone: 'South East', status: 'Same Day Available' },
    { name: 'HSR Layout', zone: 'South East', status: 'Same Day Available' },
    { name: 'Whitefield', zone: 'East / IT Corridor', status: 'High Demand' },
    { name: 'Electronic City', zone: 'South / IT Hub', status: 'Same Day Available' },
    { name: 'Bellandur & ORR', zone: 'East / IT Corridor', status: 'Same Day Available' },
    { name: 'Marathahalli', zone: 'East Bengaluru', status: 'Same Day Available' },
    { name: 'Jayanagar', zone: 'South Bengaluru', status: 'Available' },
    { name: 'JP Nagar', zone: 'South Bengaluru', status: 'Same Day Available' },
    { name: 'Yelahanka', zone: 'North Bengaluru', status: 'Available' },
    { name: 'Hebbal', zone: 'North Bengaluru', status: 'Same Day Available' },
    { name: 'Malleshwaram', zone: 'West Bengaluru', status: 'Available' },
    { name: 'Rajajinagar', zone: 'West Bengaluru', status: 'Available' },
    { name: 'Sarjapur Road', zone: 'East Bengaluru', status: 'Same Day Available' },
    { name: 'Bannerghatta Road', zone: 'South Bengaluru', status: 'Available' },
    { name: 'BTM Layout', zone: 'South East', status: 'Same Day Available' },
    { name: 'Kammanahalli & HRBR', zone: 'North East', status: 'Available' },
    { name: 'Sadashivanagar', zone: 'Central Bengaluru', status: 'Available' },
    { name: 'MG Road & Brigade Rd', zone: 'Central Bengaluru', status: 'Available' },
    { name: 'Kaggadasapura & CV Raman', zone: 'East Bengaluru', status: 'Available' }
  ]

  const filteredAreas = areas.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.zone.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="coverage" style={{ padding: '5rem 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="badge-pill badge-primary" style={{ marginBottom: '0.75rem' }}>
            SERVICE COVERAGE
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Serving All Major Localities in Bengaluru
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)' }}>
            Our mobile deep cleaning teams are equipped with van units deployed across Bengaluru for rapid 2-hour arrival.
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: '480px',
            margin: '2rem auto 0 auto',
            position: 'relative'
          }}>
            <Search size={20} color="var(--slate-400)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              placeholder="Search your area (e.g. Indiranagar, Koramangala, Whitefield)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.9rem 1rem 0.9rem 3rem',
                borderRadius: '99px',
                border: '2px solid var(--slate-200)',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        {/* Localities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem'
        }}>
          {filteredAreas.map((area, idx) => (
            <div 
              key={idx}
              style={{
                padding: '1.15rem',
                borderRadius: '16px',
                background: 'var(--slate-50)',
                border: '1px solid var(--slate-200)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--slate-900)' }}>
                    {area.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>
                    {area.zone}
                  </div>
                </div>
              </div>

              <span className="badge-pill badge-accent" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>
                Active
              </span>
            </div>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--slate-600)' }}>
            Area not listed? Don't worry! We cover all surrounding Bengaluru societies. Call <a href="tel:+910000000000" style={{ color: 'var(--primary)', fontWeight: '700' }}>+91 00000 00000</a> to confirm!
          </div>
        )}

      </div>
    </section>
  )
}
