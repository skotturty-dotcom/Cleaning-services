import React from 'react'
import Calculator from '../components/Calculator'
import FAQ from '../components/FAQ'

export default function CalculatorPage({ onBookingSubmit }) {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <Calculator onBookingSubmit={onBookingSubmit} />
      <FAQ />
    </div>
  )
}
