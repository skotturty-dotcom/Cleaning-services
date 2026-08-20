import React from 'react'
import WhyUs from '../components/WhyUs'
import Reviews from '../components/Reviews'
import ContactSection from '../components/ContactSection'

export default function WhyUsPage() {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <WhyUs />
      <Reviews />
      <ContactSection />
    </div>
  )
}
