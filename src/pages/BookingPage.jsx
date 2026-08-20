import React, { useState } from 'react'
import { Sparkles, Calendar, Phone, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'

export default function BookingPage({ selectedService }) {
  const [bhk, setBhk] = useState('2bhk')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [locality, setLocality] = useState('Indiranagar')
  const [slotDate, setSlotDate] = useState('')
  const [slotTime, setSlotTime] = useState('09:00 AM')

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (!phone) {
      alert('Please enter your mobile number!')
      return
    }

    const srvName = selectedService ? selectedService.title : 'Full Home Deep Cleaning'
    const waMsg = `Hi My Cleaning Services! Direct Web Booking Request:
- Service: ${srvName}
- House Config: ${bhk.toUpperCase()}
- Name: ${name || 'Customer'}
- Mobile: ${phone}
- Locality: ${locality}, Bengaluru
- Preferred Slot: ${slotDate || 'Earliest Slot'} (${slotTime})`

    window.open(`https://wa.me/910000000000?text=${encodeURIComponent(waMsg)}`, '_blank')
  }

  return (
    <div style={{ padding: '4rem 0', background: 'var(--slate-50)', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--slate-200)'
        }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-pill badge-primary" style={{ marginBottom: '0.5rem' }}>
              ONLINE SLOT RESERVATION
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--slate-900)' }}>
              {selectedService ? selectedService.title : 'Book Your Deep Cleaning Slot'}
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)', marginTop: '0.5rem' }}>
              Instant WhatsApp Confirmation • 100% Satisfaction Re-Clean Guarantee • Pay After Service
            </p>
          </div>

          <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div>
              <label style={labelStyle}>Select House Configuration</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {['1bhk', '2bhk', '3bhk', '4bhk'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBhk(item)}
                    style={{
                      padding: '0.85rem',
                      borderRadius: '12px',
                      border: bhk === item ? '2px solid var(--primary)' : '1px solid var(--slate-200)',
                      background: bhk === item ? 'var(--primary-light)' : '#ffffff',
                      color: bhk === item ? 'var(--primary-hover)' : 'var(--slate-700)',
                      fontWeight: '700',
                      fontSize: '0.95rem',
                      cursor: 'pointer'
                    }}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="calc-input-2col">
              <div>
                <label style={labelStyle}>Your Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Sahit"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Mobile Number*</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="calc-input-2col">
              <div>
                <label style={labelStyle}>Preferred Date</label>
                <input 
                  type="date"
                  value={slotDate}
                  onChange={(e) => setSlotDate(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Preferred Time Slot</label>
                <select 
                  value={slotTime}
                  onChange={(e) => setSlotTime(e.target.value)}
                  style={inputStyle}
                >
                  <option value="09:00 AM">Morning 9:00 AM</option>
                  <option value="12:00 PM">Noon 12:00 PM</option>
                  <option value="03:00 PM">Afternoon 3:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Locality in Bengaluru</label>
              <select 
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                style={inputStyle}
              >
                <option value="Indiranagar">Indiranagar</option>
                <option value="Koramangala">Koramangala</option>
                <option value="HSR Layout">HSR Layout</option>
                <option value="Whitefield">Whitefield</option>
                <option value="Electronic City">Electronic City</option>
                <option value="Bellandur">Bellandur & ORR</option>
                <option value="Jayanagar">Jayanagar</option>
                <option value="JP Nagar">JP Nagar</option>
                <option value="Other Area">Other Bengaluru Area</option>
              </select>
            </div>

            <div style={{
              background: '#f0fdf4',
              borderRadius: '14px',
              padding: '1rem',
              fontSize: '0.85rem',
              color: 'var(--slate-700)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: '1px solid #bbf7d0'
            }}>
              <ShieldCheck size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
              <span>No advance payment needed. Inspect our work before payment!</span>
            </div>

            <button type="submit" className="btn-accent btn-lg" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
              <Zap size={20} />
              <span>Confirm & Launch WhatsApp Booking</span>
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

const labelStyle = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: '600',
  color: 'var(--slate-800)',
  marginBottom: '0.4rem'
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  borderRadius: '12px',
  border: '1px solid var(--slate-300)',
  fontSize: '0.925rem',
  outline: 'none',
  background: '#ffffff'
}
