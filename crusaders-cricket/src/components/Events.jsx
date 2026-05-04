import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const events = [
  {
    img: '/images/SnapInsta.to_669987254_17913414378361932_619596706340784453_n.jpg',
    tag: 'TRIALS',
    tagColor: '#1a2e5a',
    date: 'Jan 14, 2025',
    title: '2025 Trials are now open',
    excerpt: 'Registrations are open for the 2025 season. All programs — Outright, Flashbacks and CV Colts — are now accepting new players.',
  },
  {
    img: '/images/SnapInsta.to_521321326_17878904070361932_3015545918644035957_n.jpg',
    tag: 'EVENTS',
    tagColor: '#0e7a4e',
    date: 'Dec 02, 2024',
    title: 'Crusaders host Pathway Cup at Pratten Park',
    excerpt: 'A fantastic day of cricket at Pratten Park as Crusaders hosted the annual Pathway Cup, showcasing the best emerging talent in Victoria.',
  },
  {
    img: '/images/SnapInsta.to_516229798_17877105981361932_8179597981012857105_n.jpg',
    tag: 'PROGRAMS',
    tagColor: '#7a3e0e',
    date: 'Nov 18, 2024',
    title: 'Outright Program enrolment closes soon',
    excerpt: 'Don\'t miss your chance to join the Outright Program this summer. Enrolments close at the end of November — secure your spot now.',
  },
]

export default function Events() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(null)
  const [active, setActive] = useState(0)

  return (
    <section id="events" ref={ref} style={{
      padding: '100px 0',
      background: '#0a1628',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}
        >
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>
              WHAT'S ON
            </span>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', letterSpacing: 1, margin: 0 }}>
              EVENTS / <span style={{ color: '#c9a84c' }}>TRIALS</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, marginTop: 8, marginBottom: 0 }}>
              What's happening this season — trials, tours, and special events.
            </p>
          </div>
          <a href="#news" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8,
            padding: '10px 22px', fontSize: 13, fontWeight: 600,
            color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.05)',
            transition: 'all 0.2s', backdropFilter: 'blur(6px)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
          >
            See all ↗
          </a>
        </motion.div>

        {/* Split layout — list left, big image right */}
        <div id="events-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40, alignItems: 'start' }}>

          {/* LEFT — event list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                onClick={() => setActive(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  padding: '22px 24px',
                  borderRadius: 14,
                  background: active === i
                    ? 'rgba(201,168,76,0.1)'
                    : hovered === i
                      ? 'rgba(255,255,255,0.04)'
                      : 'transparent',
                  borderLeft: `3px solid ${active === i ? '#c9a84c' : 'transparent'}`,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: 32, fontWeight: 700, lineHeight: 1,
                  color: active === i ? '#c9a84c' : 'rgba(255,255,255,0.15)',
                  minWidth: 36, transition: 'color 0.25s',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{
                      background: ev.tagColor, color: '#fff',
                      fontSize: 10, fontWeight: 800, letterSpacing: 1.5,
                      padding: '3px 10px', borderRadius: 4,
                    }}>
                      {ev.tag}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>{ev.date}</span>
                  </div>
                  <h4 style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: 18,
                    color: active === i ? '#fff' : 'rgba(255,255,255,0.65)',
                    fontWeight: 600, lineHeight: 1.3, marginBottom: 6,
                    transition: 'color 0.25s',
                  }}>
                    {ev.title}
                  </h4>
                  <p style={{
                    color: 'rgba(255,255,255,0.4)', fontSize: 13,
                    lineHeight: 1.6, margin: 0,
                    maxHeight: active === i ? 80 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease, opacity 0.35s',
                    opacity: active === i ? 1 : 0,
                  }}>
                    {ev.excerpt}
                  </p>
                  {active === i && (
                    <a href="#news" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      marginTop: 12, fontSize: 13, fontWeight: 700,
                      color: '#c9a84c',
                    }}>
                      Read more ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — active image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ position: 'sticky', top: 160 }}
          >
            <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', aspectRatio: '4/3' }}>
              {events.map((ev, i) => (
                <motion.img
                  key={i}
                  src={ev.img}
                  alt={ev.title}
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.04 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%', objectFit: 'cover',
                    display: 'block',
                  }}
                />
              ))}
              {/* Overlay info */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(10,22,40,0.9) 0%, transparent 100%)',
                padding: '32px 28px 24px',
              }}>
                <span style={{
                  background: events[active].tagColor, color: '#fff',
                  fontSize: 10, fontWeight: 800, letterSpacing: 1.5,
                  padding: '4px 12px', borderRadius: 4, display: 'inline-block', marginBottom: 10,
                }}>
                  {events[active].tag}
                </span>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 22, color: '#fff', fontWeight: 600, margin: 0 }}>
                  {events[active].title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 6, marginBottom: 0 }}>
                  {events[active].date}
                </p>
              </div>
            </div>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16 }}>
              {events.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? 28 : 8, height: 8,
                    borderRadius: 4, border: 'none', padding: 0,
                    background: active === i ? '#c9a84c' : 'rgba(255,255,255,0.2)',
                    cursor: 'pointer', transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #events > div > div:last-child { grid-template-columns: 1fr !important; }
          #events > div > div:last-child > div:last-child { position: static !important; }
        }
        @media (max-width: 900px) {
          #events-split { grid-template-columns: 1fr !important; }
          #events-split > div:last-child { position: static !important; top: auto !important; }
        }
        @media (max-width: 768px) {
          #events { padding: 60px 0 !important; }
          #events > div { padding: 0 20px !important; }
          #events-split > div:first-child > div { padding: 16px 12px !important; }
        }
        @media (max-width: 480px) {
          #events > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  )
}
