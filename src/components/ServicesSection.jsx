import React from 'react'
import { Sparkles, CheckCircle2, Clock, Users, ShieldAlert, ArrowRight, Zap } from 'lucide-react'

export default function ServicesSection({ onSelectService }) {

  const services = [
    {
      id: 'full-home',
      title: 'Full Home Deep Cleaning',
      badge: 'MOST POPULAR',
      image: '/images/hero.jpg',
      startingPrice: '₹3,499',
      originalPrice: '₹4,499',
      duration: '5 - 7 Hours',
      crew: '3-4 Certified Cleaners',
      shortDesc: 'Comprehensive top-to-bottom deep sanitization, vacuuming, mechanized floor scrubbing, window cleaning, and dust removal for your complete house.',
      inclusions: [
        'Living Room & Bedrooms: Cobweb removal, ceiling fans, light fixtures, switchboards, AC filters, window tracks & glass polishing',
        'Cabinet & Wardrobes: Dry & wet wiping of external surfaces and interior shelving (if empty)',
        'Furniture & Doors: Wiping of wooden furniture, door frames, handles, and skirtings',
        'Floor Scrubbing: Single-disc machine scrubbing & sanitization for tile/marble floors',
        'Balcony Washing: Pressure cleaning of balcony railings, tiles, and floor drain cleaning'
      ],
      exclusions: [
        'Wall paint touchups or internal painting',
        'Heavy furniture lifting without customer assistance'
      ]
    },
    {
      id: 'kitchen',
      title: 'Kitchen Deep Degreasing',
      badge: 'HIGH DEMAND',
      image: '/images/kitchen.jpg',
      startingPrice: '₹1,499',
      originalPrice: '₹1,999',
      duration: '2.5 - 3.5 Hours',
      crew: '2 Specialized Cleaners',
      shortDesc: 'Intense grease & oil stain removal from chimney filters, exhaust fans, stovetop, wall tiles, sink descaling, and cabinet deep degreasing.',
      inclusions: [
        'Chimney & Exhaust Fan: External oil degreasing & filter mesh dip scrubbing',
        'Stovetop & Countertop: Deep stain removal and stainless steel burner polishing',
        'Kitchen Cabinets & Drawers: Cleaning inside out (degreasing food splatters & grime)',
        'Tile Scrubbing: Wall tile degreasing and grout line stain removal',
        'Appliance Exterior: Wiping of microwave, refrigerator, and dishwasher exteriors'
      ],
      exclusions: [
        'Appliance internal electrical repairs',
        'Chimney motor internal dismantling'
      ]
    },
    {
      id: 'bathroom',
      title: 'Bathroom Deep Sanitization',
      badge: 'HYGIENE GUARANTEE',
      image: '/images/bathroom.jpg',
      startingPrice: '₹599',
      originalPrice: '₹899',
      duration: '1.5 - 2 Hours',
      crew: '1-2 Sanitization Techs',
      shortDesc: 'Hard water stain removal, tile descaling, glass shower enclosure polishing, chrome tap shining, toilet bowl disinfection & odor elimination.',
      inclusions: [
        'Hard Water Stain Removal: Acid-free chemical treatment for tiles, glass doors & taps',
        'Sanitization: Medical-grade hospital disinfectant application for WC, sink & tub',
        'Grout & Floor Scrubbing: Deep mechanized floor scrubbing to remove soap scum & mold',
        'Mirror & Chrome Polishing: Streak-free mirror polishing and chrome faucet restoration',
        'Exhaust & Fixture Wiping: Ceiling exhaust fan cleaning, light covers & geyser exterior'
      ],
      exclusions: [
        'Plumbing pipe replacement or leak fixes'
      ]
    },
    {
      id: 'sofa',
      title: 'Upholstery & Sofa Shampooing',
      badge: 'STAIN REMOVAL',
      image: '/images/sofa.jpg',
      startingPrice: '₹249 / seat',
      originalPrice: '₹349 / seat',
      duration: '1 - 2 Hours',
      crew: '1 Upholstery Specialist',
      shortDesc: '3-Step injection-extraction deep shampooing for fabric & velvet sofas, dining chairs, and carpets. Removes dust mites, allergens & deep stains.',
      inclusions: [
        'Step 1 High-Power Vacuuming: Dry extraction of deep-seated dust, pet hair & food crumbs',
        'Step 2 Eco Shampoo Application: Non-toxic foam application targeting stubborn stains & odors',
        'Step 3 Wet Extraction: High-suction machine extraction pulling out dirt slurry and moisture',
        'Conditioning: Fabric softener coating for soft feel & fresh fragrance',
        'Drying Advice: Quick 3-4 hour natural fan drying'
      ],
      exclusions: [
        'Permanent dye or chemical burn stain removal'
      ]
    },
    {
      id: 'tank',
      title: 'Water Tank & Sump Cleaning',
      badge: 'SAFE DRINKING',
      image: '/images/bathroom.jpg',
      startingPrice: '₹899',
      originalPrice: '₹1,299',
      duration: '1 - 2 Hours',
      crew: '2 Tank Technicians',
      shortDesc: '6-Stage scientific cleaning for overhead syntax tanks and underground sumps using high-pressure jet washing and UV antibacterial treatment.',
      inclusions: [
        'Sludge Removal: Heavy duty submersible pump evacuation of mud & sediment',
        'High-Pressure Jet Wash: 150-bar pressure washing of inner walls & ceiling',
        'Vacuuming: Industrial vacuuming of remaining micro-sludge',
        'Anti-Bacterial Spray: Non-toxic disinfectant wash for total germ kill',
        'UV Sterilization: Safe radiation disinfection before refill'
      ],
      exclusions: [
        'Civil brickwork repair or tank crack sealing'
      ]
    },
    {
      id: 'office',
      title: 'Commercial & Office Cleaning',
      badge: 'FOR BUSINESS',
      image: '/images/hero.jpg',
      startingPrice: '₹9 / sq ft',
      originalPrice: '₹12 / sq ft',
      duration: 'Custom Schedule',
      crew: 'Dedicated Cleaning Team',
      shortDesc: 'Tailored deep cleaning solutions for corporate offices, IT parks, retail showrooms, clinics, and restaurants in Bengaluru.',
      inclusions: [
        'Workstation & Desk Sanitization: Anti-static wiping of IT hardware, screens & keyboards',
        'Carpet & Chair Shampooing: Deep extraction cleaning for office rolling chairs & carpets',
        'Washroom & Pantry Maintenance: Continuous hygiene deep scrubbing & scenting',
        'Glass Facade & Window Cleaning: Streak-free interior & exterior glass cleaning'
      ],
      exclusions: [
        'Hazardous industrial chemical waste disposal'
      ]
    }
  ]

  return (
    <section id="services" style={{ padding: '5rem 0', background: 'var(--slate-50)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-pill badge-primary" style={{ marginBottom: '0.75rem' }}>
            OUR SPECIALIZED SERVICES
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Professional Deep Cleaning Services in Bengaluru
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)' }}>
            Choose from our specialized mechanized deep cleaning packages engineered for Bengaluru's dust, hard water, and humidity challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }} className="services-grid">
          {services.map((srv) => {
            return (
              <div 
                key={srv.id}
                className="glass-card"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1.5px solid rgba(2, 132, 199, 0.2)',
                  boxShadow: '0 14px 35px -8px rgba(2, 132, 199, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03)'
                }}
              >
                {/* Card Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={srv.image} 
                    alt={srv.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                    color: '#ffffff',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '99px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    letterSpacing: '0.04em'
                  }}>
                    {srv.badge}
                  </div>

                  {/* Price Tag */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(15, 23, 42, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.4rem'
                  }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Starts</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#34d399', fontFamily: 'var(--font-heading)' }}>{srv.startingPrice}</span>
                    <span style={{ fontSize: '0.75rem', color: '#cbd5e1', textDecoration: 'line-through' }}>{srv.originalPrice}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--slate-900)' }}>
                    {srv.title}
                  </h3>

                  <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', fontSize: '0.825rem', color: 'var(--slate-600)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={15} color="var(--primary)" /> {srv.duration}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Users size={15} color="var(--accent)" /> {srv.crew}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.925rem', color: 'var(--slate-600)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                    {srv.shortDesc}
                  </p>

                  {/* Checklist Content (Always Visible) */}
                  <div style={{
                    background: 'var(--slate-50)',
                    borderRadius: '12px',
                    padding: '1rem',
                    marginBottom: '1.25rem',
                    fontSize: '0.85rem',
                    border: '1px solid var(--slate-200)'
                  }}>
                    <div style={{ fontWeight: '700', color: 'var(--slate-800)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <CheckCircle2 size={15} color="var(--accent)" /> What's Included:
                    </div>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.85rem' }}>
                      {srv.inclusions.map((inc, i) => (
                        <li key={i} style={{ color: 'var(--slate-700)', lineHeight: '1.4', display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>•</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>

                    {srv.exclusions && srv.exclusions.length > 0 && (
                      <>
                        <div style={{ fontWeight: '700', color: '#e11d48', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.5rem' }}>
                          <ShieldAlert size={14} color="#e11d48" /> Exclusions:
                        </div>
                        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {srv.exclusions.map((exc, i) => (
                            <li key={i} style={{ color: 'var(--slate-600)', fontSize: '0.8rem' }}>
                              ✕ {exc}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
                    <button 
                      onClick={() => onSelectService(srv)}
                      className="btn-primary"
                      style={{ flexGrow: 1, padding: '0.75rem 1rem', fontSize: '0.9rem' }}
                    >
                      <Zap size={16} />
                      <span>Book Service</span>
                    </button>
                    <a 
                      href={`https://wa.me/910000000000?text=Hi%20My%20Cleaning%20Services,%20I%20am%20interested%20in%20booking%20${encodeURIComponent(srv.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                      style={{ padding: '0.75rem 1rem', fontSize: '0.9rem' }}
                    >
                      WhatsApp
                    </a>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
