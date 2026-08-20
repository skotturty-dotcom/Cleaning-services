import React, { useState, useId } from 'react'
import { Calculator as CalcIcon, Check, Sparkles, Tag, Calendar, Clock, MapPin, Phone, ArrowRight, ShieldCheck, Zap } from 'lucide-react'

export default function Calculator({ initialSelection, onBookingSubmit }) {
  const [bhk, setBhk] = useState(initialSelection?.bhk || '2bhk')
  const [furnished, setFurnished] = useState('furnished')
  const [addons, setAddons] = useState({
    chimney: true,
    balcony: false,
    fridge: false,
    mattress: false,
    windowMesh: true
  })
  const [promoCode, setPromoCode] = useState('BLR10')
  const [promoApplied, setPromoApplied] = useState(true)
  const [slotDate, setSlotDate] = useState('')
  const [slotTime, setSlotTime] = useState('09:00 AM')
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerLocality, setCustomerLocality] = useState('Indiranagar')

  const basePrices = {
    '1bhk': { base: 2499, name: '1 BHK (Up to 600 sq ft)' },
    '2bhk': { base: 3499, name: '2 BHK (600 - 1000 sq ft)' },
    '3bhk': { base: 4999, name: '3 BHK (1000 - 1500 sq ft)' },
    '4bhk': { base: 6999, name: '4 BHK / Duplex (1500 - 2200 sq ft)' },
    'villa': { base: 9999, name: 'Independent Villa / Bungalow' }
  }

  const addonPrices = {
    chimney: { name: 'Kitchen Chimney Internal Degreasing', price: 499 },
    balcony: { name: 'Balcony Pressure Washing', price: 399 },
    fridge: { name: 'Refrigerator Internal Sanitization', price: 299 },
    mattress: { name: 'Mattress UV Steam Sanitization', price: 499 },
    windowMesh: { name: 'Window Mosquito Mesh Cleaning', price: 299 }
  }

  // Calculate Subtotal
  let baseAmount = basePrices[bhk]?.base || 3499
  if (furnished === 'unfurnished') {
    baseAmount = Math.round(baseAmount * 0.9) // 10% discount for unfurnished empty home
  }

  let addonTotal = 0
  Object.keys(addons).forEach(key => {
    if (addons[key]) {
      addonTotal += addonPrices[key].price
    }
  })

  let rawTotal = baseAmount + addonTotal
  let discount = 0
  if (promoApplied) {
    if (promoCode.toUpperCase() === 'BLR10' || promoCode.toUpperCase() === 'PUNE10') {
      discount = Math.round(rawTotal * 0.10)
    } else if (promoCode.toUpperCase() === 'FIRST500') {
      discount = 500
    }
  }

  const finalTotal = Math.max(0, rawTotal - discount)

  const handleToggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'BLR10' || promoCode.toUpperCase() === 'PUNE10' || promoCode.toUpperCase() === 'FIRST500') {
      setPromoApplied(true)
    } else {
      alert('Invalid promo code. Use BLR10 for 10% OFF!')
      setPromoApplied(false)
    }
  }

  const handleConfirmBooking = (e) => {
    e.preventDefault()
    if (!customerPhone) {
      alert('Please enter your phone number to receive slot confirmation.')
      return
    }

    const bookingDetails = {
      bhk: basePrices[bhk].name,
      furnished,
      addons: Object.keys(addons).filter(k => addons[k]).map(k => addonPrices[k].name).join(', ') || 'None',
      totalAmount: finalTotal,
      slotDate: slotDate || 'Earliest Available',
      slotTime,
      customerName: customerName || 'Valued Customer',
      customerPhone,
      locality: customerLocality
    }

    // Launch WhatsApp message with prefilled details
    const waMsg = `Hi My Cleaning Services! I'd like to book a Deep Cleaning session:
- *Package*: ${bookingDetails.bhk} (${furnished})
- *Add-ons*: ${bookingDetails.addons}
- *Total Price*: ₹${bookingDetails.totalAmount} (Discounted)
- *Location*: ${bookingDetails.locality}, Bengaluru
- *Preferred Time*: ${bookingDetails.slotDate} at ${bookingDetails.slotTime}
- *Contact*: ${bookingDetails.customerName} (${bookingDetails.customerPhone})`

    window.open(`https://wa.me/910000000000?text=${encodeURIComponent(waMsg)}`, '_blank')

    if (onBookingSubmit) {
      onBookingSubmit(bookingDetails)
    }
  }

  return (
    <section id="calculator" style={{
      padding: '5rem 0',
      background: 'linear-gradient(180deg, #f8fafc 0%, #e0f2fe 100%)'
    }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-pill badge-accent" style={{ marginBottom: '0.75rem' }}>
            TRANSPARENT COST ESTIMATOR
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Calculate Exact Deep Cleaning Price
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)' }}>
            No hidden fees or unexpected charges. Select your home size and preferences for instant transparent pricing.
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          alignItems: 'start'
        }} className="calculator-layout">
          
          {/* Left Column: Form Controls */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '2rem',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--slate-200)'
          }}>
            
            {/* Step 1: Select Home Size */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={labelHeaderStyle}>
                <span style={stepBadgeStyle}>1</span>
                <span>Select Property Configuration</span>
              </label>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.75rem'
              }}>
                {Object.keys(basePrices).map((key) => {
                  const isSelected = bhk === key
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setBhk(key)}
                      style={{
                        padding: '0.85rem',
                        borderRadius: '14px',
                        border: isSelected ? '2px solid var(--primary)' : '1px solid var(--slate-200)',
                        background: isSelected ? 'var(--primary-light)' : '#ffffff',
                        color: isSelected ? 'var(--primary-hover)' : 'var(--slate-700)',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      <span>{basePrices[key].name.split(' ')[0]} {basePrices[key].name.split(' ')[1]}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: '500', opacity: 0.8 }}>₹{basePrices[key].base}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Furnished Status */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={labelHeaderStyle}>
                <span style={stepBadgeStyle}>2</span>
                <span>Property Furnishing Status</span>
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setFurnished('furnished')}
                  style={{
                    padding: '0.85rem',
                    borderRadius: '14px',
                    border: furnished === 'furnished' ? '2px solid var(--primary)' : '1px solid var(--slate-200)',
                    background: furnished === 'furnished' ? 'var(--primary-light)' : '#ffffff',
                    color: furnished === 'furnished' ? 'var(--primary-hover)' : 'var(--slate-700)',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  🛋️ Fully Furnished / Occupied
                </button>

                <button
                  type="button"
                  onClick={() => setFurnished('unfurnished')}
                  style={{
                    padding: '0.85rem',
                    borderRadius: '14px',
                    border: furnished === 'unfurnished' ? '2px solid var(--accent)' : '1px solid var(--slate-200)',
                    background: furnished === 'unfurnished' ? 'var(--accent-light)' : '#ffffff',
                    color: furnished === 'unfurnished' ? 'var(--accent-hover)' : 'var(--slate-700)',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  📦 Unfurnished / Empty (10% Off)
                </button>
              </div>
            </div>

            {/* Step 3: Add-on Services */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={labelHeaderStyle}>
                <span style={stepBadgeStyle}>3</span>
                <span>Select Recommended Add-ons</span>
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {Object.keys(addonPrices).map((key) => {
                  const item = addonPrices[key]
                  const isChecked = addons[key]
                  const inputId = `addon-${key}`

                  return (
                    <div 
                      key={key}
                      onClick={() => handleToggleAddon(key)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        border: isChecked ? '1px solid var(--primary)' : '1px solid var(--slate-200)',
                        background: isChecked ? '#f0f9ff' : 'var(--slate-50)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <input
                          id={inputId}
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // handled by parent div click
                          style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                        />
                        <label htmlFor={inputId} style={{ fontSize: '0.925rem', fontWeight: '500', color: 'var(--slate-800)', cursor: 'pointer' }}>
                          {item.name}
                        </label>
                      </div>
                      <span style={{ fontWeight: '700', color: 'var(--primary-hover)', fontSize: '0.9rem' }}>
                        +₹{item.price}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Step 4: Booking Schedule & Customer Info */}
            <div>
              <label style={labelHeaderStyle}>
                <span style={stepBadgeStyle}>4</span>
                <span>Preferred Slot & Locality in Bengaluru</span>
              </label>

              <div className="calc-input-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--slate-600)', marginBottom: '0.25rem', display: 'block' }}>Date</label>
                  <input 
                    type="date"
                    value={slotDate}
                    onChange={(e) => setSlotDate(e.target.value)}
                    style={inputFieldStyle}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--slate-600)', marginBottom: '0.25rem', display: 'block' }}>Time Slot</label>
                  <select 
                    value={slotTime}
                    onChange={(e) => setSlotTime(e.target.value)}
                    style={inputFieldStyle}
                  >
                    <option value="08:00 AM">Morning 08:00 AM - 10:00 AM</option>
                    <option value="11:00 AM">Noon 11:00 AM - 01:00 PM</option>
                    <option value="02:00 PM">Afternoon 02:00 PM - 04:00 PM</option>
                    <option value="05:00 PM">Evening 05:00 PM - 07:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="calc-input-3col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--slate-600)', marginBottom: '0.25rem', display: 'block' }}>Your Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Sahit"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={inputFieldStyle}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--slate-600)', marginBottom: '0.25rem', display: 'block' }}>Mobile Number*</label>
                  <input 
                    type="tel" 
                    placeholder="+91 9876543210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    style={inputFieldStyle}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--slate-600)', marginBottom: '0.25rem', display: 'block' }}>Area / Locality</label>
                  <select 
                    value={customerLocality}
                    onChange={(e) => setCustomerLocality(e.target.value)}
                    style={inputFieldStyle}
                  >
                    <option value="Indiranagar">Indiranagar</option>
                    <option value="Koramangala">Koramangala</option>
                    <option value="HSR Layout">HSR Layout</option>
                    <option value="Whitefield">Whitefield</option>
                    <option value="Electronic City">Electronic City</option>
                    <option value="Bellandur">Bellandur & ORR</option>
                    <option value="Marathahalli">Marathahalli</option>
                    <option value="Jayanagar">Jayanagar</option>
                    <option value="JP Nagar">JP Nagar</option>
                    <option value="Hebbal">Hebbal / Yelahanka</option>
                    <option value="Other Bengaluru Area">Other Bengaluru Area</option>
                  </select>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Price Summary Card Sticky */}
          <div style={{
            position: 'sticky',
            top: '100px',
            background: 'var(--slate-900)',
            color: '#ffffff',
            borderRadius: '24px',
            padding: '2rem',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CalcIcon size={20} color="#38bdf8" />
                <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: '700' }}>Price Summary</h3>
              </div>
              <span className="badge-pill badge-accent" style={{ fontSize: '0.75rem' }}>INSTANT QUOTE</span>
            </div>

            {/* Line items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span>{basePrices[bhk]?.name}</span>
                <span style={{ fontWeight: '600', color: '#ffffff' }}>₹{baseAmount}</span>
              </div>

              {Object.keys(addons).filter(k => addons[k]).map(k => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.85rem' }}>
                  <span>+ {addonPrices[k].name}</span>
                  <span>₹{addonPrices[k].price}</span>
                </div>
              ))}

              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#34d399', fontWeight: '600' }}>
                  <span>Promo Discount ({promoCode})</span>
                  <span>-₹{discount}</span>
                </div>
              )}
            </div>

            {/* Promo Code Input */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="Enter Coupon (BLR10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                style={{
                  flexGrow: 1,
                  padding: '0.6rem 0.85rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
              <button 
                type="button" 
                onClick={handleApplyPromo}
                style={{
                  background: 'rgba(56, 189, 248, 0.2)',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  padding: '0.6rem 1rem',
                  borderRadius: '10px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                Apply
              </button>
            </div>

            {/* Total Amount Box */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1.25rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                Total Estimated Amount (Incl. Taxes & Equipment)
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#34d399', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                ₹{finalTotal}
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '400', textDecoration: 'line-through' }}>
                  ₹{rawTotal + 500}
                </span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={14} /> Pay after service completion & inspection
              </div>
            </div>

            {/* Book Now Button */}
            <button 
              onClick={handleConfirmBooking} 
              className="btn-accent btn-lg" 
              style={{ width: '100%', padding: '1rem', justifyContent: 'center' }}
            >
              <Zap size={20} />
              <span>Confirm & Book Slot via WhatsApp</span>
            </button>

            <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
              Or Call directly: <a href="tel:+910000000000" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '700' }}>+91 00000 00000</a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .calculator-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .calc-input-2col { grid-template-columns: 1fr !important; }
          .calc-input-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const labelHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.65rem',
  fontSize: '1.1rem',
  fontWeight: '700',
  color: 'var(--slate-900)',
  marginBottom: '1rem'
}

const stepBadgeStyle = {
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  background: 'var(--primary)',
  color: '#ffffff',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.85rem',
  fontWeight: '800'
}

const inputFieldStyle = {
  width: '100%',
  padding: '0.75rem 0.9rem',
  borderRadius: '10px',
  border: '1px solid var(--slate-300)',
  fontSize: '0.9rem',
  color: 'var(--slate-800)',
  outline: 'none',
  background: '#ffffff'
}
