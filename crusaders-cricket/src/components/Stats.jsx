import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCounter(target, inView, duration = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

const stats = [
  {
    target: 47, suffix: '+', label: 'Years Active',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    desc: 'Established 1977',
  },
  {
    target: 3, suffix: '', label: 'Programs',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/>
      </svg>
    ),
    desc: 'Outright · Flashbacks · Tours',
  },
  {
    target: 100, suffix: '+', label: 'Alumni',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    desc: 'First-class & international',
  },
  {
    target: 12, suffix: '', label: 'Countries Toured',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
    desc: 'Europe · Asia · UK · More',
  },
]

function StatItem({ stat, inView, index }) {
  const count = useCounter(stat.target, inView, 2000)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '44px 32px',
        borderRight: index < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
        textAlign: 'center',
        position: 'relative',
        transition: 'background 0.3s',
        background: hovered ? 'rgba(201,168,76,0.04)' : 'transparent',
        borderRadius: 4,
      }}
    >
      {/* Icon */}
      <motion.div
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
      >
        {stat.icon}
      </motion.div>

      {/* Number */}
      <div style={{
        fontFamily: 'Oswald, sans-serif',
        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
        fontWeight: 700, color: '#c9a84c',
        lineHeight: 1, letterSpacing: -1,
      }}>
        {count}{stat.suffix}
      </div>

      {/* Gold bar — fills on inView */}
      <div style={{ width: 48, height: 2, background: 'rgba(201,168,76,0.2)', margin: '16px auto', borderRadius: 1, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: '100%' } : {}}
          transition={{ delay: 0.4 + index * 0.12, duration: 0.8 }}
          style={{ height: '100%', background: '#c9a84c', borderRadius: 1 }}
        />
      </div>

      {/* Label */}
      <div style={{
        color: '#fff', fontSize: 13, fontWeight: 600,
        letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 8,
      }}>
        {stat.label}
      </div>

      {/* Sub-desc */}
      <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, letterSpacing: 0.5 }}>
        {stat.desc}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      padding: '90px 0',
      background: '#0a1628',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/images/SnapInsta.to_515087540_18052410245524034_1833108653311320684_n.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
        zIndex: 0,
      }} />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,0.88)', zIndex: 0 }} />

      {/* Top gold line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: '#c9a84c', textTransform: 'uppercase' }}>
            BY THE NUMBERS
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginTop: 10, color: '#fff' }}>
            Our <span style={{ color: '#c9a84c' }}>Impact</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <div id="stats-row" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} inView={inView} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />

      <style>{`
        @media (max-width: 768px) {
          #stats-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #stats-row { grid-template-columns: 1fr !important; }
          #stats-row > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08) !important; padding: 32px 20px !important; }
        }
        @media (max-width: 768px) {
          #stats-row > div { padding: 32px 16px !important; }
        }
      `}</style>
    </section>
  )
}
