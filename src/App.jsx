import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import Calculator from './components/Calculator'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import WhyUs from './components/WhyUs'
import CoverageAreas from './components/CoverageAreas'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [calcSelection, setCalcSelection] = useState(null)

  const handleOpenBookingModal = (service = null) => {
    setSelectedService(service)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedService(null)
  }

  const handleHeroCalculate = (selection) => {
    setCalcSelection(selection)
    const calcElem = document.getElementById('calculator')
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenBooking={() => handleOpenBookingModal()} />
      
      <main style={{ flexGrow: 1 }}>
        <Hero 
          onCalculatePrice={handleHeroCalculate}
          onOpenBooking={() => handleOpenBookingModal()}
        />
        
        <ServicesSection 
          onSelectService={(srv) => handleOpenBookingModal(srv)}
        />
        
        <Calculator 
          initialSelection={calcSelection}
          onBookingSubmit={(details) => {
            console.log('Booking submitted:', details)
          }}
        />

        <BeforeAfterSlider />

        <WhyUs />

        <CoverageAreas />

        <Reviews />

        <FAQ />

        <ContactSection />
      </main>

      <Footer />

      <BookingModal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        selectedService={selectedService}
      />

      <FloatingCTA 
        onOpenBooking={() => handleOpenBookingModal()}
      />
    </div>
  )
}
