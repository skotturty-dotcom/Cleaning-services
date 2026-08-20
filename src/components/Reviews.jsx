import React, { useState } from 'react'
import { Star, CheckCircle, Quote, ThumbsUp, Sparkles } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      name: 'Rohan Deshmukh',
      locality: 'Indiranagar, Bengaluru',
      service: '3 BHK Full Home Deep Cleaning',
      rating: 5,
      date: '2 days ago',
      review: 'Booked My Cleaning Services for our 3 BHK deep cleaning before moving in. The crew of 4 led by Ramesh arrived right at 9 AM with professional single-disc floor machines. The kitchen grease and bathroom hard water stains are 100% gone. Unbelievable transformation!'
    },
    {
      name: 'Pooja Kulkarni',
      locality: 'Koramangala, Bengaluru',
      service: 'Kitchen Degreasing & Sofa Shampooing',
      rating: 5,
      date: '1 week ago',
      review: 'Our 5-seater fabric sofa had stubborn tea and coffee stains from our kids. After their wet extraction shampooing, the sofa looks brand new and smells amazing! Highly recommend their prompt service and polite staff.'
    },
    {
      name: 'Amitabh Joshi',
      locality: 'Whitefield, Bengaluru',
      service: '2 BHK Deep Cleaning',
      rating: 5,
      date: '2 weeks ago',
      review: 'Great experience! Transparent pricing with no surprises. They cleaned fan blades, window tracks, kitchen cabinets, and balcony tiles meticulously. Supervisor got my walkthrough sign-off before leaving.'
    },
    {
      name: 'Snehal Patil',
      locality: 'HSR Layout, Bengaluru',
      service: 'Bathroom Deep Sanitization',
      rating: 5,
      date: '3 weeks ago',
      review: 'Bengaluru hard water had ruined our glass shower cubicle. My Cleaning Services descaled it completely. It looks crystal clear again! Very satisfied with their eco-safe non-chemical odor products.'
    },
    {
      name: 'Vikram & Swati Mehta',
      locality: 'Electronic City, Bengaluru',
      service: 'Full Villa Deep Cleaning',
      rating: 5,
      date: '1 month ago',
      review: 'Used coupon BLR10 and got a great deal. The team worked tirelessly for 7 hours. Every corner, balcony, and light fitting was polished. Will definitely book annually!'
    }
  ]

  return (
    <section id="reviews" style={{ padding: '5rem 0', background: 'var(--slate-50)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-pill badge-accent" style={{ marginBottom: '0.75rem' }}>
            CUSTOMER TESTIMONIALS
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Loved by 5,000+ Bengaluru Homeowners
          </h2>
          
          {/* Summary Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: '#ffffff',
            padding: '0.75rem 1.5rem',
            borderRadius: '99px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--slate-200)',
            marginTop: '1rem'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--slate-900)', fontFamily: 'var(--font-heading)' }}>
              4.9 / 5.0
            </div>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <div style={{ borderLeft: '1px solid var(--slate-300)', paddingLeft: '1rem', fontSize: '0.85rem', color: 'var(--slate-600)' }}>
              Based on 1,250+ Verified Google & Local Reviews
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Header row: stars & quote icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <Quote size={24} color="var(--primary)" style={{ opacity: 0.3 }} />
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--slate-700)', lineHeight: '1.6', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                  "{rev.review}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--slate-100)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--slate-900)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    {rev.name}
                    <CheckCircle size={14} color="var(--accent)" />
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--slate-600)' }}>
                    📍 {rev.locality} • <span style={{ color: 'var(--primary)' }}>{rev.service}</span>
                  </div>
                </div>

                <span style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
