import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    bg: '/images/hero-1.jpg',
    badge: 'Est. 1977',
    title: 'Developing Cricketers,',
    titleGold: 'Building Character',
    text: 'Crusaders Cricket Australia is a non-profit organisation established in 1977, providing the opportunity to play, develop and love the game of cricket across Melbourne and beyond.',
    cta1: { label: 'Our Programs', href: '#programs' },
    cta2: { label: 'Learn More', href: '#about' },
  },
  {
    bg: '/images/hero-2.jpg',
    badge: 'Outright Program',
    title: 'Boys Aged 12–18,',
    titleGold: 'Playing Competitive Cricket',
    text: 'Our Outright Program gives young cricketers the chance to compete against schools, association teams, academies and cricket clubs across Melbourne every summer.',
    cta1: { label: 'Outright Program', href: '#programs' },
    cta2: { label: 'Register Now', href: '#contact' },
  },
  {
    bg: '/images/hero-3.jpg',
    badge: 'International Tours',
    title: 'Cricket Tours',
    titleGold: 'Around The World',
    text: 'Experience cricket in Europe, UK, Asia, Sri Lanka and beyond. Crusaders offers once-in-a-lifetime international cricket tour opportunities for all levels.',
    cta1: { label: 'Explore Tours', href: '#programs' },
    cta2: { label: 'Get In Touch', href: '#contact' },
  },
]

const INTERVAL = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length)
    setProgress(0)
  }, [])

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [])

  const goTo = useCallback((i) => {
    setCurrent(i)
    setProgress(0)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const timer = setTimeout(next, INTERVAL)
    return () => clearTimeout(timer)
  }, [current, paused, next])

  // Progress bar
  useEffect(() => {
    if (paused) return
    setProgress(0)
    const start = Date.now()
    const raf = requestAnimationFrame(function tick() {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100))
      if (elapsed < INTERVAL) requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(raf)
  }, [current, paused])

  const s = slides[current]

  return (
    <section
      id="home"
      style={{ position: 'relative', height: '100vh', minHeight: 620, overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background images (crossfade) ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${s.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* ── Gradient overlay ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(105deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.6) 55%, rgba(10,22,40,0.2) 100%)',
      }} />

      {/* ── Slide text ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        display: 'flex', alignItems: 'center',
      }}>
        <div id="home-inner-pad" style={{ maxWidth: 1280, width: '100%', margin: '0 auto', padding: '0 56px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ maxWidth: 640 }}
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #c9a84c, #a8893a)',
                  color: '#fff', fontSize: 11, fontWeight: 700,
                  letterSpacing: 3, textTransform: 'uppercase',
                  padding: '6px 18px', borderRadius: 4, marginBottom: 24,
                }}
              >
                {s.badge}
              </motion.span>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.55 }}
                style={{
                  fontFamily: 'Oswald, sans-serif', fontWeight: 700,
                  fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                  lineHeight: 1.08, marginBottom: 22, color: '#fff',
                }}
              >
                {s.title}<br />
                <span style={{ color: '#c9a84c' }}>{s.titleGold}</span>
              </motion.h1>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  color: 'rgba(255,255,255,0.78)', fontSize: 15.5,
                  lineHeight: 1.85, marginBottom: 38, maxWidth: 520,
                }}
              >
                {s.text}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.45 }}
                style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
              >
                <a
                  href={s.cta1.href}
                  style={{
                    background: 'linear-gradient(135deg, #c9a84c, #a8893a)',
                    color: '#fff', padding: '14px 36px', borderRadius: 6,
                    fontWeight: 600, fontSize: 14, letterSpacing: 0.4,
                    boxShadow: '0 6px 22px rgba(201,168,76,0.38)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(201,168,76,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 22px rgba(201,168,76,0.38)' }}
                >
                  {s.cta1.label}
                </a>
                <a
                  href={s.cta2.href}
                  style={{
                    background: 'transparent', color: '#fff',
                    padding: '14px 36px', borderRadius: 6,
                    border: '2px solid rgba(255,255,255,0.4)',
                    fontWeight: 600, fontSize: 14,
                    transition: 'all 0.22s', display: 'inline-block',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a1628'; e.currentTarget.style.borderColor = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
                >
                  {s.cta2.label}
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Prev / Next arrows ── */}
      {[
        { dir: 'prev', action: prev, side: { left: 24 }, symbol: '‹' },
        { dir: 'next', action: next, side: { right: 24 }, symbol: '›' },
      ].map(({ dir, action, side, symbol }) => (
        <button
          key={dir}
          onClick={action}
          style={{
            position: 'absolute', top: '50%', transform: 'translateY(-50%)',
            ...side, zIndex: 4,
            width: 52, height: 52, borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff', fontSize: 28, lineHeight: 1,
            cursor: 'pointer', backdropFilter: 'blur(6px)',
            transition: 'background 0.2s, transform 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.borderColor = '#c9a84c' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
        >
          {symbol}
        </button>
      ))}

      {/* ── Bottom controls: dots + progress + slide count ── */}
      <div id="home-bottom" style={{
        position: 'absolute', bottom: 36, left: 0, right: 0, zIndex: 4,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 32 : 8,
                height: 8, borderRadius: 4,
                background: i === current ? '#c9a84c' : 'rgba(255,255,255,0.35)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.35s ease',
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div style={{
          width: 200, height: 2,
          background: 'rgba(255,255,255,0.15)',
          borderRadius: 2, overflow: 'hidden',
        }}>
          <motion.div
            key={current}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05, ease: 'linear' }}
            style={{ height: '100%', background: '#c9a84c', borderRadius: 2 }}
          />
        </div>

        {/* Slide count */}
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, letterSpacing: 3 }}>
          0{current + 1} / 0{slides.length}
        </span>
      </div>



      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        style={{
          position: 'absolute', bottom: 36, left: '50%',
          transform: 'translateX(-50%)', zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          pointerEvents: 'none',
        }}
      >
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)' }} />
      </motion.div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          #home .thumb-strip { display: none !important; }
          #home .hero-arrows button { width: 40px !important; height: 40px !important; font-size: 22px !important; }
        }
        /* Mobile: reduce side padding so text doesn't overflow */
        @media (max-width: 768px) {
          #home-inner-pad { padding: 0 20px !important; }
          #home-badge { margin-bottom: 14px !important; }
          #home-body { font-size: 14px !important; margin-bottom: 24px !important; }
          #home-ctas a { padding: 12px 22px !important; font-size: 13px !important; }
          /* Shrink prev/next arrows on mobile */
          #home-prev { left: 10px !important; width: 40px !important; height: 40px !important; font-size: 22px !important; }
          #home-next { right: 10px !important; width: 40px !important; height: 40px !important; font-size: 22px !important; }
          /* Bottom controls */
          #home-bottom { bottom: 20px !important; gap: 10px !important; }
        }
        @media (max-width: 480px) {
          #home-inner-pad { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  )
}
