import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', color: 'var(--slate-700)', paddingTop: '4rem', paddingBottom: '6rem', borderTop: '1px solid var(--slate-200)' }}>
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
              <Link to="/" style={{ textDecoration: 'none' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--slate-900)', fontFamily: 'var(--font-heading)' }}>
                  My Cleaning <span style={{ color: 'var(--primary)' }}>Services</span>
                </span>
              </Link>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Bengaluru's premier professional home deep cleaning service provider. Delivering mechanized German single-disc floor scrubbing, eco-friendly sanitization, and 100% satisfaction guarantees.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--accent-hover)', fontWeight: '600' }}>
              <ShieldCheck size={16} color="var(--accent)" /> Verified Cleaning Crew & Safe Non-Toxic Products
            </div>
          </div>

          {/* Col 2: Deep Cleaning Services */}
          <div>
            <h4 style={{ color: 'var(--slate-900)', fontSize: '1rem', fontWeight: '700', marginBottom: '1.25rem' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li><Link to="/services/full-home" style={footerLinkStyle}>Full Home Deep Cleaning</Link></li>
              <li><Link to="/services/kitchen" style={footerLinkStyle}>Kitchen Deep Degreasing</Link></li>
              <li><Link to="/services/bathroom" style={footerLinkStyle}>Bathroom Deep Sanitization</Link></li>
              <li><Link to="/services/sofa" style={footerLinkStyle}>Sofa & Upholstery Shampooing</Link></li>
              <li><Link to="/services/tank" style={footerLinkStyle}>Overhead & Sump Water Tank Cleaning</Link></li>
              <li><Link to="/services/office" style={footerLinkStyle}>Office & Commercial Deep Cleaning</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Bengaluru Areas */}
          <div>
            <h4 style={{ color: 'var(--slate-900)', fontSize: '1rem', fontWeight: '700', marginBottom: '1.25rem' }}>
              Bengaluru Service Areas
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li><Link to="/coverage" style={footerLinkStyle}>Indiranagar Deep Cleaning</Link></li>
              <li><Link to="/coverage" style={footerLinkStyle}>Koramangala & HSR Layout</Link></li>
              <li><Link to="/coverage" style={footerLinkStyle}>Whitefield & ITPL Cleaning</Link></li>
              <li><Link to="/coverage" style={footerLinkStyle}>Electronic City & Bellandur</Link></li>
              <li><Link to="/coverage" style={footerLinkStyle}>Jayanagar & JP Nagar</Link></li>
              <li><Link to="/coverage" style={footerLinkStyle}>Hebbal & Yelahanka</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 style={{ color: 'var(--slate-900)', fontSize: '1rem', fontWeight: '700', marginBottom: '1.25rem' }}>
              Contact Hub
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} color="var(--primary)" />
                <a href="tel:+910000000000" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '700' }}>+91 00000 00000</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="var(--primary)" />
                <span style={{ color: 'var(--slate-700)' }}>support@mycleaningservicesbengaluru.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={16} color="var(--primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ color: 'var(--slate-700)' }}>Main Office & Commercial Hub, City Center</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--slate-600)', marginTop: '0.5rem' }}>
                ⏰ Working Hours: 8:00 AM - 9:00 PM (Open 7 Days)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div style={{
          borderTop: '1px solid var(--slate-200)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--slate-500)'
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
  color: 'var(--slate-600)',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
}
