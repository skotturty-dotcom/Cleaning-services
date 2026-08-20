import React from 'react'
import { Sparkles, Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1d', color: '#cbd5e1', paddingTop: '4rem', paddingBottom: '6rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0284c7 0%, #10b981 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={20} color="#ffffff" />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                My Cleaning <span style={{ color: '#38bdf8' }}>Services</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Bengaluru's premier professional home deep cleaning service provider. Delivering mechanized German single-disc floor scrubbing, eco-friendly sanitization, and 100% satisfaction guarantees.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#34d399' }}>
              <ShieldCheck size={16} /> Verified Cleaning Crew & Safe Non-Toxic Products
            </div>
          </div>

          {/* Col 2: Deep Cleaning Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '1.25rem' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li><a href="#services" style={footerLinkStyle}>Full Home Deep Cleaning</a></li>
              <li><a href="#services" style={footerLinkStyle}>Kitchen Deep Degreasing</a></li>
              <li><a href="#services" style={footerLinkStyle}>Bathroom Deep Sanitization</a></li>
              <li><a href="#services" style={footerLinkStyle}>Sofa & Upholstery Shampooing</a></li>
              <li><a href="#services" style={footerLinkStyle}>Overhead & Sump Water Tank Cleaning</a></li>
              <li><a href="#services" style={footerLinkStyle}>Office & Commercial Deep Cleaning</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Bengaluru Areas */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '1.25rem' }}>
              Bengaluru Service Areas
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li><a href="#coverage" style={footerLinkStyle}>Indiranagar Deep Cleaning</a></li>
              <li><a href="#coverage" style={footerLinkStyle}>Koramangala & HSR Layout</a></li>
              <li><a href="#coverage" style={footerLinkStyle}>Whitefield & ITPL Cleaning</a></li>
              <li><a href="#coverage" style={footerLinkStyle}>Electronic City & Bellandur</a></li>
              <li><a href="#coverage" style={footerLinkStyle}>Jayanagar & JP Nagar</a></li>
              <li><a href="#coverage" style={footerLinkStyle}>Hebbal & Yelahanka</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '1.25rem' }}>
              Contact Hub
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} color="#38bdf8" />
                <a href="tel:+910000000000" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '700' }}>+91 00000 00000</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="#38bdf8" />
                <span>support@mycleaningservicesbengaluru.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={16} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>Main Office & Commercial Hub, City Center</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                ⏰ Working Hours: 8:00 AM - 9:00 PM (Open 7 Days)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} My Cleaning Services Bengaluru. All Rights Reserved.
          </div>
          <div>
            Built with React & Vanilla CSS for Bengaluru Homes.
          </div>
        </div>

      </div>
    </footer>
  )
}

const footerLinkStyle = {
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
}
