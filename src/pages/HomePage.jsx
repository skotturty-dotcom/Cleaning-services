import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import Calculator from '../components/Calculator'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import WhyUs from '../components/WhyUs'
import CoverageAreas from '../components/CoverageAreas'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'

export default function HomePage({ onOpenBooking, onSelectService }) {
  return (
    <>
      <Hero 
        onCalculatePrice={(selection) => {
          const calcElem = document.getElementById('calculator')
          if (calcElem) {
            calcElem.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        onOpenBooking={onOpenBooking}
      />
      <ServicesSection onSelectService={onSelectService} />
      <Calculator />
      <BeforeAfterSlider />
      <WhyUs />
      <CoverageAreas />
      <Reviews />
      <FAQ />
      <ContactSection />
    </>
  )
}
