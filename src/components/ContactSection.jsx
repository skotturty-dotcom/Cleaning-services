import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Sparkles } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Full Home Deep Cleaning',
    locality: 'Indiranagar',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.phone) {
      alert('Please enter your mobile number!')
      return
    }

    const waMsg = `Hi My Cleaning Services! Inquiry from Web Form:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Service: ${formData.service}
- Locality: ${formData.locality}
- Notes: ${formData.notes || 'None'}`

    window.open(`https://wa.me/910000000000?text=${encodeURIComponent(waMsg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{ padding: '5rem 0', background: 'var(--slate-900)', color: '#ffffff' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="contact-grid">
          
          {/* Left Column: Direct Info */}
          <div>
            <span className="badge-pill badge-dark" style={{ marginBottom: '1rem' }}>
              GET IN TOUCH INSTANTLY
            </span>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '800', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              Have Questions or Need a Custom Quote?
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              Our customer happiness team is available 7 days a week from 8:00 AM to 9:00 PM to help you select the perfect cleaning plan for your home.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Phone Card */}
              <a 
                href="tel:+910000000000"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={24} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Call Direct / Instant Booking</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#38bdf8', fontFamily: 'var(--font-heading)' }}>
                    +91 00000 00000
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/910000000000?text=Hi%20My%20Cleaning%20Services,%20I%20want%20to%20inquire%20about%20deep%20cleaning!"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MessageSquare size={24} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>WhatsApp 24/7 Chat</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff' }}>
                    Chat with Booking Representative
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.25rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'rgba(52, 211, 153, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={24} color="#34d399" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Main Hub Address</div>
                  <div style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>
                    Main Office & Commercial Hub, City Center
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Quick Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            padding: '2.25rem',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            <h3 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              Request Callback / Call Back Offer
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
              Fill in your contact details below and our cleaning supervisor will call you back within 15 minutes!
            </p>

            {submitted ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <Sparkles size={36} color="#34d399" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Inquiry Sent Successfully!
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  Our team has received your request. We opened WhatsApp to confirm your slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', color: '#cbd5e1', marginBottom: '0.35rem' }}>Full Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Sahit"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={darkInputStyle}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', color: '#cbd5e1', marginBottom: '0.35rem' }}>Mobile Number*</label>
                  <input 
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={darkInputStyle}
                  />
                </div>

                <div className="contact-form-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#cbd5e1', marginBottom: '0.35rem' }}>Service Required</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={darkInputStyle}
                    >
                      <option value="Full Home Deep Cleaning">Full Home Cleaning</option>
                      <option value="Kitchen Degreasing">Kitchen Degreasing</option>
                      <option value="Bathroom Sanitization">Bathroom Cleaning</option>
                      <option value="Sofa Shampooing">Sofa Shampooing</option>
                      <option value="Water Tank Cleaning">Water Tank Cleaning</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#cbd5e1', marginBottom: '0.35rem' }}>Area in Bengaluru</label>
                    <input 
                      type="text"
                      placeholder="e.g. Indiranagar"
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      style={darkInputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', color: '#cbd5e1', marginBottom: '0.35rem' }}>Special Instructions (Optional)</label>
                  <textarea 
                    rows="2"
                    placeholder="e.g. Need cleaning after flat painting..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ ...darkInputStyle, resize: 'none' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary btn-lg" style={{ marginTop: '0.5rem', width: '100%' }}>
                  <Send size={18} />
                  <span>Request Instant Callback</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .contact-form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const darkInputStyle = {
  width: '100%',
  padding: '0.75rem 0.9rem',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  background: 'rgba(255, 255, 255, 0.08)',
  color: '#ffffff',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'inherit'
}
