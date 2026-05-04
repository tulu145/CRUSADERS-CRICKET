import { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function RotatingGem({ color }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.8
    ref.current.rotation.x = clock.getElapsedTime() * 0.4
  })
  return (
    <Float speed={2} floatIntensity={1}>
      <mesh ref={ref}>
        <octahedronGeometry args={[0.8, 0]} />
        <MeshDistortMaterial color={color} metalness={0.9} roughness={0.05} distort={0.1} emissive={color} emissiveIntensity={0.2} />
      </mesh>
    </Float>
  )
}

const directors = [
  { name: 'Ken Jacobs OAM', role: 'Chairman', img: '/images/Ken Jacobs OAM Chairman.png', color: '#c9a84c' },
  { name: 'Tegan Richards', role: 'Co Director', img: '/images/Tegan Richards Co Director.png', color: '#4488ff' },
  { name: 'Swan Richards OAM', role: 'Director', img: '/images/Swan Richards OAM Director.png', color: '#44cc88' },
  { name: 'Noel Boys', role: 'Financial Director', img: '/images/Noel Boys.png', color: '#ff6644' },
]

const patrons = [
  { name: 'Malcolm Gray AM', role: 'President', img: '/images/Malcolm Gray AM.png' },
  { name: 'Belinda Clark AO', role: 'Patron', img: '/images/Belinda Clark AO.png' },
  { name: 'The Hon. Julia Gillard AC', role: 'Patron', img: '/images/The Hon. Julia Gillard AC.png' },
  { name: 'The Hon. John Howard OM, AC', role: 'Patron', img: '/images/The Hon. John Howard OM, AC.png' },
  { name: 'Sir Michael Parkinson CBE', role: 'Patron', img: '/images/Sir Michael Parkinson CBE.png' },
  { name: 'Sir Tim Rice', role: 'Patron', img: '/images/Sir Tim Rice.png' },
  { name: 'David L Richards OAM', role: 'Patron', img: '/images/David L Richards OAM.png' },
  { name: 'John Wylie AM', role: 'Patron', img: '/images/John Wylie AM.png' },
]

function DirectorCard({ d, index, inView }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, type: 'spring', stiffness: 150 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff', borderRadius: 20, overflow: 'hidden',
        boxShadow: hovered ? '0 24px 60px rgba(10,22,40,0.18)' : '0 4px 20px rgba(10,22,40,0.06)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
    >
      {/* 3D gem header */}
      <div style={{ height: 120, background: 'linear-gradient(135deg, #0a1628, #112240)', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[3, 3, 3]} intensity={2} color={d.color} />
          <Stars radius={50} depth={20} count={500} factor={2} fade />
          <Suspense fallback={null}>
            <RotatingGem color={d.color} />
          </Suspense>
        </Canvas>
      </div>

      {/* Photo */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: -40, position: 'relative', zIndex: 1 }}>
        <div style={{
          width: 90, height: 90, borderRadius: '50%', overflow: 'hidden',
          border: `3px solid ${d.color}`,
          boxShadow: `0 8px 24px ${d.color}44`,
        }}>
          <img src={d.img} alt={d.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
      </div>

      <div style={{ padding: '16px 24px 28px', textAlign: 'center' }}>
        <h4 style={{ fontSize: 18, color: '#0a1628', marginBottom: 6 }}>{d.name}</h4>
        <span style={{
          display: 'inline-block', background: d.color, color: '#fff',
          fontSize: 11, fontWeight: 700, letterSpacing: 1,
          padding: '4px 14px', borderRadius: 20,
        }}>
          {d.role}
        </span>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" ref={ref} style={{ padding: '100px 0', background: '#f0f4f8' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Directors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#c9a84c', textTransform: 'uppercase' }}>
            LEADERSHIP
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12 }}>
            Our <span style={{ color: '#c9a84c' }}>Directors</span>
          </h2>
        </motion.div>

        <div id="directors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginBottom: 80 }}>
          {directors.map((d, i) => (
            <DirectorCard key={d.name} d={d} index={i} inView={inView} />
          ))}
        </div>

        {/* Patrons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#c9a84c', textTransform: 'uppercase' }}>
            DISTINGUISHED SUPPORTERS
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12 }}>
            Our <span style={{ color: '#c9a84c' }}>Patrons</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={2}
            spaceBetween={24}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            style={{ paddingBottom: 48 }}
          >
            {patrons.map((p, i) => (
              <SwiperSlide key={i}>
                <div style={{ textAlign: 'center', padding: '16px 8px' }}>
                  <div style={{
                    width: 90, height: 90, borderRadius: '50%', overflow: 'hidden',
                    margin: '0 auto 12px',
                    border: '3px solid #c9a84c',
                    boxShadow: '0 6px 20px rgba(201,168,76,0.25)',
                  }}>
                    <img src={p.img} alt={p.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  </div>
                  <h6 style={{ fontSize: 13, color: '#0a1628', marginBottom: 4, lineHeight: 1.3 }}>{p.name}</h6>
                  <span style={{ fontSize: 11, color: '#c9a84c', fontWeight: 600, letterSpacing: 0.5 }}>{p.role}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #team > div > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
          #team > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
        /* Target by ID for reliability */
        @media (max-width: 900px) {
          #directors-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #team > div { padding: 0 20px !important; }
          #team { padding: 60px 0 !important; }
        }
        @media (max-width: 576px) {
          #directors-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          #team > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  )
}
