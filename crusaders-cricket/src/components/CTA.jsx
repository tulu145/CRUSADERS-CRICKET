import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTA() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cta-section" ref={ref} style={{ position: 'relative', padding: '140px 0', overflow: 'hidden' }}>

      {/* ── Video background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source
          src="/images/stadium-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Dark overlay with slight gold tint ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 50%, rgba(10,22,40,0.88) 100%)',
      }} />

      {/* ── Gold top & bottom lines ── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', zIndex: 2 }} />

      {/* ── Content ── */}
      <div id="cta-content" style={{
        position: 'relative', zIndex: 3,
        maxWidth: 860, margin: '0 auto',
        padding: '0 48px', textAlign: 'center',
      }}>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 4,
            color: '#c9a84c', textTransform: 'uppercase',
            display: 'block', marginBottom: 18,
          }}
        >
          GET INVOLVED
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            color: '#fff', lineHeight: 1.1,
            fontWeight: 700, marginBottom: 24,
          }}
        >
          Ready to Join the{' '}
          <span style={{ color: '#c9a84c' }}>Crusaders?</span>
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ height: 3, background: '#c9a84c', borderRadius: 2, margin: '0 auto 28px' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          style={{
            color: 'rgba(255,255,255,0.78)', fontSize: 16,
            lineHeight: 1.85, marginBottom: 48, maxWidth: 620, margin: '0 auto 48px',
          }}
        >
          Whether you are 12 or 60, a beginner or an experienced cricketer, there is a place for you at Crusaders Cricket Australia. Join us today and be part of a legacy that spans over four decades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}
          id="cta-buttons"
        >
          <a
            href="#contact"
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #a8893a)',
              color: '#fff', padding: '16px 48px', borderRadius: 6,
              fontWeight: 700, fontSize: 15, letterSpacing: 0.5,
              boxShadow: '0 8px 30px rgba(201,168,76,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(201,168,76,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,168,76,0.4)' }}
          >
            Register Now
          </a>
          <a
            href="#about"
            style={{
              background: 'transparent', color: '#fff',
              padding: '16px 48px', borderRadius: 6,
              border: '2px solid rgba(255,255,255,0.35)',
              fontWeight: 700, fontSize: 15,
              transition: 'all 0.22s', display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a1628'; e.currentTarget.style.borderColor = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #cta-section { padding: 80px 0 !important; }
          #cta-content { padding: 0 24px !important; }
          #cta-buttons { gap: 12px !important; }
          #cta-buttons a { padding: 14px 32px !important; font-size: 14px !important; }
        }
        @media (max-width: 480px) {
          #cta-section { padding: 60px 0 !important; }
          #cta-content { padding: 0 16px !important; }
          #cta-buttons a { padding: 12px 24px !important; width: 100% !important; text-align: center !important; }
        }
      `}</style>
    </section>
  )
}
