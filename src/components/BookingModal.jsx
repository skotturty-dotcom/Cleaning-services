import React, { useState } from 'react'
import { X, Sparkles, Calendar, Clock, MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react'

export default function BookingModal({ isOpen, onClose, selectedService }) {
  const [bhk, setBhk] = useState('2bhk')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [locality, setLocality] = useState('Indiranagar')
  const [slotDate, setSlotDate] = useState('')
  const [slotTime, setSlotTime] = useState('09:00 AM')

  if (!isOpen) return null

  const handleModalSubmit = (e) => {
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
    onClose()
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2000,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        maxWidth: '540px',
        width: '100%',
        boxShadow: 'var(--shadow-xl)',
        overflow: 'hidden',
        position: 'relative',
        animation: 'float 0.3s ease-out'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: '#ffffff',
          padding: '1.5rem 1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.2' }}>
                {selectedService ? selectedService.title : 'Book Deep Cleaning Slot'}
              </h3>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                Instant WhatsApp Confirmation • No Advance Payment Required
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleModalSubmit} style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div>
            <label style={modalLabelStyle}>House Size / Configuration</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {['1bhk', '2bhk', '3bhk', '4bhk'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setBhk(item)}
                  style={{
                    padding: '0.6rem',
                    borderRadius: '10px',
                    border: bhk === item ? '2px solid var(--primary)' : '1px solid var(--slate-200)',
                    background: bhk === item ? 'var(--primary-light)' : '#ffffff',
                    color: bhk === item ? 'var(--primary-hover)' : 'var(--slate-700)',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="modal-input-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={modalLabelStyle}>Your Name</label>
              <input 
                type="text" 
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={modalInputStyle}
              />
            </div>
            <div>
              <label style={modalLabelStyle}>Mobile Number*</label>
              <input 
                type="tel" 
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={modalInputStyle}
              />
            </div>
          </div>

          <div className="modal-input-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={modalLabelStyle}>Preferred Date</label>
              <input 
                type="date"
                value={slotDate}
                onChange={(e) => setSlotDate(e.target.value)}
                style={modalInputStyle}
              />
            </div>
            <div>
              <label style={modalLabelStyle}>Preferred Time</label>
              <select 
                value={slotTime}
                onChange={(e) => setSlotTime(e.target.value)}
                style={modalInputStyle}
              >
                <option value="09:00 AM">Morning 9:00 AM</option>
                <option value="12:00 PM">Noon 12:00 PM</option>
                <option value="03:00 PM">Afternoon 3:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label style={modalLabelStyle}>Locality in Bengaluru</label>
            <select 
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              style={modalInputStyle}
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
            background: 'var(--slate-50)',
            borderRadius: '12px',
            padding: '0.85rem',
            fontSize: '0.78rem',
            color: 'var(--slate-600)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ShieldCheck size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
            <span>Pay directly after cleaning walkthrough. 100% satisfaction re-clean guarantee!</span>
          </div>

          <button type="submit" className="btn-accent btn-lg" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
            <span>Confirm & Launch WhatsApp Booking</span>
          </button>
        </form>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .modal-input-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

const modalLabelStyle = {
  display: 'block',
  fontSize: '0.825rem',
  fontWeight: '600',
  color: 'var(--slate-800)',
  marginBottom: '0.35rem'
}

const modalInputStyle = {
  width: '100%',
  padding: '0.7rem 0.85rem',
  borderRadius: '10px',
  border: '1px solid var(--slate-300)',
  fontSize: '0.9rem',
  outline: 'none'
}
