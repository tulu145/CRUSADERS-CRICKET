import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Torus, Box } from '@react-three/drei'
import { motion, useInView } from 'framer-motion'

function FloatingTrophy() {
  const g = useRef()
  useFrame(({ clock }) => {
    g.current.rotation.y = clock.getElapsedTime() * 0.5
  })
  return (
    <Float speed={1.5} floatIntensity={1}>
      <group ref={g}>
        {/* Cup body */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.6, 0.4, 1.2, 32]} />
          <MeshDistortMaterial color="#c9a84c" metalness={0.9} roughness={0.1} distort={0.05} />
        </mesh>
        {/* Base */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.5, 0.6, 0.2, 32]} />
          <meshStandardMaterial color="#a8893a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Handles */}
        <Torus args={[0.35, 0.06, 16, 32]} position={[0.7, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#c9a84c" metalness={0.9} roughness={0.1} />
        </Torus>
        <Torus args={[0.35, 0.06, 16, 32]} position={[-0.7, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#c9a84c" metalness={0.9} roughness={0.1} />
        </Torus>
        {/* Stars around */}
        {[0, 1, 2, 3, 4].map(i => (
          <Box key={i} args={[0.08, 0.08, 0.08]}
            position={[
              Math.cos((i / 5) * Math.PI * 2) * 1.4,
              Math.sin((i / 5) * Math.PI * 2) * 0.5,
              0
            ]}
          >
            <meshStandardMaterial color="#c9a84c" emissive="#c9a84c" emissiveIntensity={0.5} />
          </Box>
        ))}
      </group>
    </Float>
  )
}

const stats = [
  { value: '47+', label: 'Years Active' },
  { value: '3', label: 'Programs' },
  { value: '100+', label: 'Alumni' },
  { value: '12', label: 'Countries Toured' },
]

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} style={{ padding: '100px 0', background: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Left — 3D + image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div id="about-image-wrap" style={{ borderRadius: 20, overflow: 'hidden', height: 480 }}>
              <img src="/images/woner-pic.jpg" alt="Crusaders Cricket Australia"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>

            {/* 3D Trophy overlay — smaller */}
            <div id="about-trophy-badge" style={{
              position: 'absolute', bottom: -20, right: -20,
              width: 130, height: 130, borderRadius: 16,
              background: 'linear-gradient(135deg, #0a1628, #112240)',
              border: '2px solid rgba(201,168,76,0.3)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
            }}>
              <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[3, 3, 3]} intensity={2} color="#c9a84c" />
                <Suspense fallback={null}>
                  <FloatingTrophy />
                </Suspense>
              </Canvas>
            </div>

            {/* Years badge — smaller, moved up */}
            <div id="about-years-badge" style={{
              position: 'absolute', top: 16, left: -14,
              background: 'linear-gradient(135deg, #c9a84c, #a8893a)',
              borderRadius: 12, padding: '12px 18px', textAlign: 'center',
              boxShadow: '0 8px 24px rgba(201,168,76,0.4)',
            }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: '#fff', fontFamily: 'Oswald, sans-serif' }}>47+</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.9)', letterSpacing: 1 }}>YEARS OF CRICKET</div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: 3,
              color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: 12,
            }}>
              ABOUT US
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, marginBottom: 20 }}>
              Crusaders Cricket<br />
              <span style={{ color: '#c9a84c' }}>Australia</span>
            </h2>
            <p style={{ color: '#555', lineHeight: 1.9, marginBottom: 16 }}>
              Crusaders Cricket Australia is a non-for-profit organisation established in <strong>1977</strong> by Ben Barnett (former Australian Cricketer), Swan Richards, David Richards and the late Ray Steele to provide the opportunity of playing the game of cricket.
            </p>
            <p style={{ color: '#555', lineHeight: 1.9, marginBottom: 32 }}>
              Crusaders has been developing cricketers for almost four decades, producing first-class, test cricketers and more importantly, great people. Notable alumni include <strong>Shane Warne, Damien Fleming, Paul Reiffel, Clinton McKay</strong> and many more.
            </p>

            {/* Stats grid */}
            <div id="about-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 36 }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    textAlign: 'center', padding: '16px 8px',
                    background: '#f0f4f8', borderRadius: 12,
                    borderBottom: '3px solid #c9a84c',
                  }}
                >
                  <div style={{ fontSize: 28, fontWeight: 700, color: '#c9a84c', fontFamily: 'Oswald, sans-serif' }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: '#666', letterSpacing: 0.5, marginTop: 4 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            <a href="#programs" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0a1628', color: '#fff',
              padding: '14px 32px', borderRadius: 6,
              fontWeight: 600, fontSize: 14,
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#c9a84c'}
              onMouseLeave={e => e.currentTarget.style.background = '#0a1628'}
            >
              Read Our Story →
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about > div > div > div:first-child > div:nth-child(2) { right: 0 !important; bottom: -20px !important; width: 150px !important; height: 150px !important; }
        }
        /* On mobile, pull the absolute-positioned badges inside the flow */
        @media (max-width: 768px) {
          #about-image-wrap { height: 300px !important; }
          #about-trophy-badge {
            width: 100px !important; height: 100px !important;
            bottom: -10px !important; right: 0 !important;
          }
          #about-years-badge {
            top: 10px !important; left: 0 !important;
            padding: 8px 12px !important;
          }
          #about-years-badge div:first-child { font-size: 20px !important; }
          #about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #about > div { padding: 0 20px !important; }
        }
        @media (max-width: 480px) {
          #about-image-wrap { height: 240px !important; }
        }
      `}</style>
    </section>
  )
}
