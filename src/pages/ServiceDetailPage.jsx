import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Sparkles, CheckCircle2, Clock, Users, ShieldAlert, ArrowLeft, Calendar } from 'lucide-react'
import ContactSection from '../components/ContactSection'

const serviceData = {
  'full-home': {
    title: 'Full Home Deep Cleaning',
    badge: 'MOST POPULAR',
    image: '/images/hero.jpg',
    startingPrice: '₹3,499',
    originalPrice: '₹4,499',
    duration: '5 - 7 Hours',
    crew: '3-4 Certified Cleaners',
    description: 'Our flagship top-to-bottom deep sanitization package. We use heavy-duty German single-disc mechanized floor scrubbers, high-suction extraction vacuums, and eco-friendly disinfectants to transform your complete home.',
    inclusions: [
      'Living Room & Bedrooms: Cobweb removal, ceiling fans, light fixtures, switchboards, AC filters, window tracks & glass polishing',
      'Cabinet & Wardrobes: Dry & wet wiping of external surfaces and interior shelving (if empty)',
      'Furniture & Doors: Wiping of wooden furniture, door frames, handles, and skirtings',
      'Floor Scrubbing: Single-disc machine scrubbing & sanitization for tile/marble floors',
      'Balcony Washing: Pressure cleaning of balcony railings, tiles, and floor drain cleaning'
    ],
    process: [
      '1. Deep Vacuuming & Cobweb Evacuation',
      '2. Degreasing & Hard Water Descaling',
      '3. Single-Disc Machine Floor Scrubbing',
      '4. Sanitization & Final Inspection Walkthrough'
    ]
  },
  'kitchen': {
    title: 'Kitchen Deep Degreasing',
    badge: 'HIGH DEMAND',
    image: '/images/kitchen.jpg',
    startingPrice: '₹1,499',
    originalPrice: '₹1,999',
    duration: '2.5 - 3.5 Hours',
    crew: '2 Specialized Cleaners',
    description: 'Intense grease & oil stain removal designed for active Indian cooking. We eliminate stubborn carbon deposits from chimney filters, exhaust fans, gas stove tops, tiles, and cabinets.',
    inclusions: [
      'Chimney & Exhaust Fan: External oil degreasing & filter mesh dip scrubbing',
      'Stovetop & Countertop: Deep stain removal and stainless steel burner polishing',
      'Kitchen Cabinets & Drawers: Cleaning inside out (degreasing food splatters & grime)',
      'Tile Scrubbing: Wall tile degreasing and grout line stain removal',
      'Appliance Exterior: Wiping of microwave, refrigerator, and dishwasher exteriors'
    ],
    process: [
      '1. Chemical Degreaser Soaking',
      '2. High-Temperature Steam Degreasing',
      '3. Countertop & Cabinet Polishing'
    ]
  },
  'bathroom': {
    title: 'Bathroom Deep Sanitization',
    badge: 'HYGIENE GUARANTEE',
    image: '/images/bathroom.jpg',
    startingPrice: '₹599',
    originalPrice: '₹899',
    duration: '1.5 - 2 Hours',
    crew: '1-2 Sanitization Techs',
    description: 'Targeted hard water stain removal and medical-grade disinfection. We descale limescale deposits from shower cubicle glass, chrome faucets, and floor tiles.',
    inclusions: [
      'Hard Water Stain Removal: Acid-free chemical treatment for tiles, glass doors & taps',
      'Sanitization: Medical-grade hospital disinfectant application for WC, sink & tub',
      'Grout & Floor Scrubbing: Deep mechanized floor scrubbing to remove soap scum & mold',
      'Mirror & Chrome Polishing: Streak-free mirror polishing and chrome faucet restoration',
      'Exhaust & Fixture Wiping: Ceiling exhaust fan cleaning, light covers & geyser exterior'
    ],
    process: [
      '1. Descaling Treatment',
      '2. High-Pressure Scrubber Application',
      '3. Sanitization & Fragrance Spray'
    ]
  },
  'sofa': {
    title: 'Upholstery & Sofa Shampooing',
    badge: 'STAIN REMOVAL',
    image: '/images/sofa.jpg',
    startingPrice: '₹249 / seat',
    originalPrice: '₹349 / seat',
    duration: '1 - 2 Hours',
    crew: '1 Upholstery Specialist',
    description: '3-Step injection-extraction deep shampooing for fabric & velvet sofas, dining chairs, and carpets. Removes dust mites, allergens & deep stains.',
    inclusions: [
      'Step 1 High-Power Vacuuming: Dry extraction of deep-seated dust, pet hair & food crumbs',
      'Step 2 Eco Shampoo Application: Non-toxic foam application targeting stubborn stains & odors',
      'Step 3 Wet Extraction: High-suction machine extraction pulling out dirt slurry and moisture',
      'Conditioning: Fabric softener coating for soft feel & fresh fragrance'
    ],
    process: [
      '1. Dry Vacuuming',
      '2. Foam Injection',
      '3. Sludge Extraction & Drying'
    ]
  },
  'tank': {
    title: 'Water Tank & Sump Cleaning',
    badge: 'SAFE DRINKING',
    image: '/images/bathroom.jpg',
    startingPrice: '₹899',
    originalPrice: '₹1,299',
    duration: '1 - 2 Hours',
    crew: '2 Tank Technicians',
    description: '6-Stage scientific cleaning for overhead syntax tanks and underground sumps using high-pressure jet washing and UV antibacterial treatment.',
    inclusions: [
      'Sludge Removal: Heavy duty submersible pump evacuation of mud & sediment',
      'High-Pressure Jet Wash: 150-bar pressure washing of inner walls & ceiling',
      'Vacuuming: Industrial vacuuming of remaining micro-sludge',
      'Anti-Bacterial Spray: Non-toxic disinfectant wash for total germ kill'
    ],
    process: [
      '1. Evacuation',
      '2. Jet Scrubbing',
      '3. UV Sterilization'
    ]
  },
  'office': {
    title: 'Commercial & Office Cleaning',
    badge: 'FOR BUSINESS',
    image: '/images/hero.jpg',
    startingPrice: '₹9 / sq ft',
    originalPrice: '₹12 / sq ft',
    duration: 'Custom Schedule',
    crew: 'Dedicated Cleaning Team',
    description: 'Tailored deep cleaning solutions for corporate offices, IT parks, retail showrooms, clinics, and restaurants in Bengaluru.',
    inclusions: [
      'Workstation & Desk Sanitization: Anti-static wiping of IT hardware, screens & keyboards',
      'Carpet & Chair Shampooing: Deep extraction cleaning for office rolling chairs & carpets',
      'Washroom & Pantry Maintenance: Continuous hygiene deep scrubbing & scenting',
      'Glass Facade & Window Cleaning: Streak-free interior & exterior glass cleaning'
    ],
    process: [
      '1. Facility Assessment',
      '2. Off-Hours Deep Scrubbing',
      '3. Quality Certification'
    ]
  }
}

export default function ServiceDetailPage({ onOpenBooking }) {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const srv = serviceData[serviceId] || serviceData['full-home']

  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ marginBottom: '1.5rem' }}>
        <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to All Services
        </Link>
      </div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          marginBottom: '4rem'
        }} className="calc-input-2col">
          
          <div>
            <span className="badge-pill badge-primary" style={{ marginBottom: '1rem' }}>
              {srv.badge}
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '800', color: 'var(--slate-900)', marginBottom: '1rem' }}>
              {srv.title}
            </h1>

            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--slate-600)', marginBottom: '1.5rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={18} color="var(--primary)" /> {srv.duration}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Users size={18} color="var(--accent)" /> {srv.crew}
              </span>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--slate-700)', lineHeight: '1.7', marginBottom: '2rem' }}>
              {srv.description}
            </p>

            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '1.75rem',
              border: '1px solid var(--slate-200)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--slate-900)', marginBottom: '1rem' }}>
                What's Included in {srv.title}:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {srv.inclusions.map((inc, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', color: 'var(--slate-800)', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div>
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--slate-200)',
              position: 'sticky',
              top: '100px'
            }}>
              <img 
                src={srv.image} 
                alt={srv.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem' }}
              />

              <div style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>Starting Price</div>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--accent-hover)', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {srv.startingPrice}
                <span style={{ fontSize: '1rem', color: 'var(--slate-400)', textDecoration: 'line-through' }}>{srv.originalPrice}</span>
              </div>

              <button 
                onClick={() => navigate('/booking')} 
                className="btn-accent btn-lg"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}
              >
                <Calendar size={18} />
                <span>Book This Service Now</span>
              </button>

              <a 
                href={`https://wa.me/910000000000?text=Hi%20My%20Cleaning%20Services,%20I%20want%20to%20book%20${encodeURIComponent(srv.title)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>

        </div>
      </div>

      <ContactSection />
    </div>
  )
}
