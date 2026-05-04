import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'HOME',                href: '#home' },
  { label: 'NEWS',                href: '#news' },
  { label: 'FIXTURES / RESULTS', href: '#fixtures' },
  { label: 'OUR TEAM',           href: '#team' },
  { label: 'TOURS',              href: '#programs' },
  { label: 'MEMBERSHIP / MERCHANDISE', href: '#membership' },
  { label: 'PHOTO GALLERY',      href: '#gallery' },
  { label: 'POLICIES',           href: '#policies' },
  { label: 'CONTACT US',         href: '#contact' },
]

const SPONSORS = [
  { src: '/images/1.png', alt: 'Community Bank Clifton Hill / North Fitzroy – Bendigo Bank' },
  { src: '/images/2.png', alt: 'Tasty Fresh Food Co.' },
  { src: '/images/3.png', alt: 'Cricket Victoria' },
  { src: '/images/4.png', alt: 'ACS' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [activeLink, setActive]   = useState('HOME')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ─────────────────────────────────────────────
          TOP BAR  — white, logo + title + sponsors
      ───────────────────────────────────────────── */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #ddd',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100,
        boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '10px 24px',
          display: 'flex', alignItems: 'center',
          gap: 24,
        }}>

          {/* Logo */}
          <a href="#home" style={{ flexShrink: 0 }}>
            <img
              src="/images/logo.png"
              alt="Crusaders Cricket Australia"
              style={{ height: 72, display: 'block' }}
            />
          </a>

          {/* Divider */}
          <div style={{ width: 1, height: 60, background: '#ccc', flexShrink: 0 }} />

          {/* Title block */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(1rem, 2.2vw, 1.55rem)',
              fontWeight: 700,
              color: '#1a2e5a',
              letterSpacing: 1,
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              CRUSADERS CRICKET AUSTRALIA
            </div>
            <div style={{
              fontSize: 12, color: '#555',
              marginTop: 4, letterSpacing: 0.3,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              Official website of Crusaders Cricket Australia – NON-PROFIT ORGANISATION
            </div>
          </div>

          {/* Sponsor logos */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            flexShrink: 0,
          }} className="sponsor-logos">
            {SPONSORS.map(sp => (
              <img
                key={sp.alt}
                src={sp.src}
                alt={sp.alt}
                style={{ height: 44, objectFit: 'contain', display: 'block' }}
              />
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="hamburger"
            aria-label="Open menu"
            style={{
              display: 'none',
              background: 'none', border: 'none',
              cursor: 'pointer', padding: 6, flexShrink: 0,
            }}
          >
            <span style={{ display: 'block', width: 24, height: 2, background: '#1a2e5a', marginBottom: 5 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#1a2e5a', marginBottom: 5 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#1a2e5a' }} />
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          NAV BAR  — solid navy, all caps links
      ───────────────────────────────────────────── */}
      <div style={{
        background: '#1a2e5a',
        position: 'fixed', top: 93, left: 0, right: 0, zIndex: 1099,
        boxShadow: '0 3px 10px rgba(0,0,0,0.25)',
      }} className="main-nav">
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '0 24px',
          display: 'flex', alignItems: 'center',
          overflowX: 'auto',
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              style={{
                display: 'block',
                padding: '14px 16px',
                color: activeLink === link.label ? '#c9a84c' : 'rgba(255,255,255,0.88)',
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: 0.6,
                whiteSpace: 'nowrap',
                borderBottom: activeLink === link.label
                  ? '3px solid #c9a84c'
                  : '3px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
                fontFamily: 'Poppins, sans-serif',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#c9a84c'
                e.currentTarget.style.borderBottomColor = '#c9a84c'
              }}
              onMouseLeave={e => {
                if (activeLink !== link.label) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.88)'
                  e.currentTarget.style.borderBottomColor = 'transparent'
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          MOBILE SLIDE-IN MENU
      ───────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                zIndex: 1200,
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              style={{
                position: 'fixed', top: 0, left: 0, bottom: 0, width: 300,
                background: '#1a2e5a', zIndex: 1300,
                padding: '24px 0', overflowY: 'auto',
              }}
            >
              <div style={{ padding: '0 24px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <img src="/images/logo.png" alt="Crusaders" style={{ height: 50 }} />
                  <button
                    onClick={() => setMenuOpen(false)}
                    style={{ background: 'none', border: 'none', color: '#fff', fontSize: 26, cursor: 'pointer', lineHeight: 1 }}
                  >
                    ✕
                  </button>
                </div>
              </div>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { setActive(link.label); setMenuOpen(false) }}
                  style={{
                    display: 'block',
                    padding: '14px 28px',
                    color: activeLink === link.label ? '#c9a84c' : 'rgba(255,255,255,0.82)',
                    fontSize: 13, fontWeight: 600, letterSpacing: 0.8,
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                  onMouseLeave={e => { if (activeLink !== link.label) e.currentTarget.style.color = 'rgba(255,255,255,0.82)' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────
          RESPONSIVE STYLES
      ───────────────────────────────────────────── */}
      <style>{`
        /* Hide sponsors on small screens */
        @media (max-width: 900px) {
          .sponsor-logos { display: none !important; }
          .hamburger     { display: block !important; }
          .main-nav      { display: none !important; }
        }
        /* Scrollbar hide on nav */
        .main-nav div::-webkit-scrollbar { display: none; }
        .main-nav div { -ms-overflow-style: none; scrollbar-width: none; }

        /* Mobile top bar adjustments */
        @media (max-width: 480px) {
          .navbar-title-block .navbar-title {
            font-size: 0.85rem !important;
            white-space: normal !important;
          }
          .navbar-title-block .navbar-subtitle {
            display: none !important;
          }
          .navbar-logo { height: 52px !important; }
          .navbar-divider { display: none !important; }
        }
      `}</style>
    </>
  )
}
