import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import FloatingCTA from './components/FloatingCTA'

import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import CalculatorPage from './pages/CalculatorPage'
import BeforeAfterPage from './pages/BeforeAfterPage'
import WhyUsPage from './pages/WhyUsPage'
import CoveragePage from './pages/CoveragePage'
import ReviewsPage from './pages/ReviewsPage'
import FaqPage from './pages/FaqPage'
import BookingPage from './pages/BookingPage'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleOpenBookingModal = (service = null) => {
    setSelectedService(service)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedService(null)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar onOpenBooking={() => handleOpenBookingModal()} />
        
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenBooking={() => handleOpenBookingModal()} 
                  onSelectService={(srv) => handleOpenBookingModal(srv)}
                />
              } 
            />
            <Route 
              path="/services" 
              element={
                <ServicesPage 
                  onSelectService={(srv) => handleOpenBookingModal(srv)}
                />
              } 
            />
            <Route 
              path="/services/:serviceId" 
              element={
                <ServiceDetailPage 
                  onOpenBooking={() => handleOpenBookingModal()}
                />
              } 
            />
            <Route 
              path="/calculator" 
              element={<CalculatorPage />} 
            />
            <Route 
              path="/before-after" 
              element={<BeforeAfterPage />} 
            />
            <Route 
              path="/why-us" 
              element={<WhyUsPage />} 
            />
            <Route 
              path="/coverage" 
              element={<CoveragePage />} 
            />
            <Route 
              path="/reviews" 
              element={<ReviewsPage />} 
            />
            <Route 
              path="/faq" 
              element={<FaqPage />} 
            />
            <Route 
              path="/booking" 
              element={<BookingPage selectedService={selectedService} />} 
            />
          </Routes>
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
    </BrowserRouter>
  )
}
