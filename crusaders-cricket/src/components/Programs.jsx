import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const programs = [
  {
    color: '#c9a84c',
    badge: 'Ages 12–18',
    title: 'Outright Program',
    desc: 'Provides opportunity for boys aged 12–18 to play games in summer against schools, association teams, academies and cricket clubs across Melbourne.',
    img: '/images/SnapInsta.to_514347097_17876482692361932_6871406018616802787_n.jpg',
    features: ['Summer season matches', 'Schools & academies', 'Skill development', 'Team environment'],
  },
  {
    color: '#4488ff',
    badge: 'Ages 30+',
    title: 'Flashbacks Program',
    desc: 'Cricketers aged 30+ who continue to take part in the game of cricket, playing matches across Melbourne. Never stop playing the game you love.',
    img: '/images/SnapInsta.to_522269379_17878904061361932_4563592613423593796_n.jpg',
    features: ['30+ age group', 'Melbourne matches', 'Social cricket', 'Competitive play'],
  },
  {
    color: '#44cc88',
    badge: 'International',
    title: 'Cricket Tours',
    desc: 'Once-in-a-lifetime opportunity to experience cricket in Europe, UK, Asia, Sri Lanka and anywhere else on the planet. Mid-year tours for all levels.',
    img: '/images/SnapInsta.to_504276146_17876482824361932_979426114541232903_n.jpg',
    features: ['Europe & UK tours', 'Asia & Sri Lanka', 'All skill levels', 'Mid-year schedule'],
  },
]

export default function Programs() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(null)

  return (
    <section id="programs" ref={ref} style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#c9a84c', textTransform: 'uppercase' }}>
            WHAT WE OFFER
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12 }}>
            Our <span style={{ color: '#c9a84c' }}>Programs</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: '#fff', borderRadius: 20, overflow: 'hidden',
                boxShadow: hovered === i
                  ? '0 24px 60px rgba(10,22,40,0.18)'
                  : '0 4px 20px rgba(10,22,40,0.06)',
                transform: hovered === i ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
              }}
            >
              {/* Image header */}
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transform: hovered === i ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 60%)',
                }} />
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: p.color, color: '#fff',
                  fontSize: 11, fontWeight: 700, letterSpacing: 1,
                  padding: '4px 14px', borderRadius: 20,
                }}>
                  {p.badge}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: 22, marginBottom: 12, color: '#0a1628' }}>{p.title}</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>

                <ul style={{ marginBottom: 24 }}>
                  {p.features.map(f => (
                    <li key={f} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      fontSize: 13, color: '#555', marginBottom: 8,
                    }}>
                      <span style={{ color: '#c9a84c', fontSize: 16 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" style={{
                  display: 'inline-block',
                  background: hovered === i ? '#c9a84c' : '#0a1628',
                  color: '#fff', padding: '10px 24px', borderRadius: 6,
                  fontSize: 13, fontWeight: 600, transition: 'background 0.3s',
                }}>
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #programs > div > div:last-child { grid-template-columns: 1fr !important; }
          #programs > div { padding: 0 20px !important; }
          #programs { padding: 60px 0 !important; }
        }
        @media (max-width: 480px) {
          #programs > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  )
}
