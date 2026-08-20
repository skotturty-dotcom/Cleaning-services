import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Sparkles, Phone, Calendar, Menu, X, MapPin, ShieldCheck, ChevronDown } from 'lucide-react'

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState('Bengaluru')
  const navigate = useNavigate()
  const location = useLocation()

  const cities = ['Bengaluru', 'Pune & PCMC', 'Mumbai', 'Delhi NCR', 'Hyderabad']

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBookClick = () => {
    if (onOpenBooking) {
      onOpenBooking()
    }
    navigate('/booking')
  }

  return (
    <>
      {/* Top Notification & Location Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)',
        color: '#ffffff',
        padding: '0.45rem 1rem',
        fontSize: '0.825rem',
        fontWeight: '500',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          
          {/* Offer Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge-pill badge-accent" style={{ fontSize: '0.7rem', padding: '0.15rem 0.55rem', fontWeight: '700' }}>
              OFFER
            </span>
            <span style={{ fontSize: '0.825rem', color: '#e2e8f0' }}>
              Use Code <strong style={{ color: '#38bdf8' }}>BLR10</strong> for Flat 10% OFF on Full Home Cleaning!
            </span>
          </div>

          {/* Location & Guarantee Info */}
          <div className="nav-top-right" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            
            {/* Interactive Location Dropdown */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#94a3b8', position: 'relative' }}>
              <MapPin size={14} style={{ color: '#38bdf8', flexShrink: 0 }} />
              <span style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: '500' }}>Location:</span>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '6px',
                  color: '#38bdf8',
                  fontWeight: '600',
                  fontSize: '0.78rem',
                  padding: '0.15rem 0.4rem',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                {cities.map(c => <option key={c} value={c} style={{ background: '#0f172a', color: '#fff' }}>{c}</option>)}
              </select>
            </div>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#94a3b8', fontSize: '0.8rem' }}>
              <ShieldCheck size={14} style={{ color: '#34d399', flexShrink: 0 }} /> 100% Eco-Safe & Satisfaction Guarantee
            </span>
          </div>

        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.12)' : '0 1px 4px rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
          gap: '1rem'
        }}>
          
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0284c7 0%, #10b981 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.35)',
              flexShrink: 0
            }}>
              <Sparkles size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: '800',
                lineHeight: '1.1',
                color: '#0f172a',
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap'
              }}>
                My Cleaning <span style={{ color: '#0284c7' }}>Services</span>
              </div>
              <div style={{ fontSize: '0.68rem', fontWeight: '700', color: '#64748b', letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                {selectedCity} Deep Clean Experts
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="desktop-links" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.4rem',
            margin: '0 auto'
          }}>
            <Link to="/services" style={linkStyle(location.pathname === '/services')}>Services</Link>
            <Link to="/calculator" style={linkStyle(location.pathname === '/calculator')}>Price Calculator</Link>
            <Link to="/before-after" style={linkStyle(location.pathname === '/before-after')}>Before & After</Link>
            <Link to="/why-us" style={linkStyle(location.pathname === '/why-us')}>Why Us</Link>
            <Link to="/coverage" style={linkStyle(location.pathname === '/coverage')}>Service Areas</Link>
            <Link to="/reviews" style={linkStyle(location.pathname === '/reviews')}>Reviews</Link>
            <Link to="/faq" style={linkStyle(location.pathname === '/faq')}>FAQs</Link>
          </div>

          {/* Right CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            
            {/* Phone Button */}
            <a href="tel:+910000000000" className="btn-secondary btn-sm nav-phone-btn" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <Phone size={15} color="#0284c7" style={{ flexShrink: 0 }} />
              <span style={{ fontWeight: '700', letterSpacing: '0.02em' }}>+91 00000 00000</span>
            </a>

            {/* Book Online Button */}
            <button onClick={handleBookClick} className="btn-primary btn-sm nav-book-btn" style={{ whiteSpace: 'nowrap' }}>
              <Calendar size={15} style={{ flexShrink: 0 }} />
              <span>Book Online</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-burger-btn"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '0.4rem',
                display: 'none',
                color: '#0f172a'
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600', paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
              📍 Selected Location: <strong style={{ color: '#0284c7' }}>{selectedCity}</strong>
            </div>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Services</Link>
            <Link to="/calculator" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Price Calculator</Link>
            <Link to="/before-after" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Before & After</Link>
            <Link to="/why-us" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Why Choose Us</Link>
            <Link to="/coverage" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Service Areas</Link>
            <Link to="/reviews" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Customer Reviews</Link>
            <Link to="/faq" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>FAQs</Link>
            <Link to="/booking" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Contact & Booking</Link>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a href="tel:+910000000000" className="btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.875rem' }}>
                <Phone size={16} color="#0284c7" />
                <span>+91 00000 00000</span>
              </a>
              <button onClick={() => { setMobileMenuOpen(false); handleBookClick(); }} className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.875rem' }}>
                <Calendar size={16} />
                <span>Book Slot</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 1180px) {
          .desktop-links { display: none !important; }
          .mobile-burger-btn { display: flex !important; }
        }
        @media (max-width: 768px) {
          .nav-top-right { display: none !important; }
          .nav-phone-btn { display: none !important; }
        }
        @media (max-width: 520px) {
          .nav-book-btn { display: none !important; }
        }
      `}</style>
    </>
  )
}

const linkStyle = (active) => ({
  fontFamily: 'var(--font-heading)',
  fontSize: '0.9rem',
  fontWeight: active ? '700' : '600',
  color: active ? '#0284c7' : '#334155',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease',
  borderBottom: active ? '2px solid #0284c7' : '2px solid transparent',
  paddingBottom: '2px'
})

const mobileLinkStyle = {
  fontSize: '0.95rem',
  fontWeight: '600',
  color: '#0f172a',
  textDecoration: 'none',
  padding: '0.4rem 0',
  borderBottom: '1px solid #f1f5f9'
}
