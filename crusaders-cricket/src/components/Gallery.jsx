import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  '/images/SnapInsta.to_657176226_17911646715361932_5052196963538041068_n.jpg',
  '/images/SnapInsta.to_657688138_17911646706361932_6776268511557554489_n.jpg',
  '/images/SnapInsta.to_658105149_17913414369361932_977014611690724308_n.jpg',
  '/images/SnapInsta.to_658219730_17911646676361932_3176338789729500879_n.jpg',
  '/images/SnapInsta.to_658939670_17912760390361932_4360272608178590723_n.jpg',
  '/images/SnapInsta.to_662200660_17912760414361932_5019773885759917044_n.jpg',
  '/images/SnapInsta.to_669987254_17913414378361932_619596706340784453_n.jpg',
]

export default function Gallery() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" ref={ref} style={{ padding: '100px 0', background: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#c9a84c', textTransform: 'uppercase' }}>
            OUR GALLERY
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12 }}>
            Life at <span style={{ color: '#c9a84c' }}>Crusaders</span>
          </h2>
        </motion.div>

        {/* 3D Coverflow Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 200,
              modifier: 1.2,
              slideShadows: true,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            style={{ paddingBottom: 50 }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} style={{ width: 380, height: 280 }}>
                <div
                  onClick={() => setLightbox(img)}
                  style={{
                    width: '100%', height: 280, borderRadius: 16, overflow: 'hidden',
                    cursor: 'pointer', position: 'relative',
                  }}
                >
                  <img src={img} alt={`Gallery ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(10,22,40,0)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,22,40,0.4)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(10,22,40,0)'}
                  >
                    <span style={{ color: '#fff', fontSize: 32, opacity: 0 }}
                      onMouseEnter={e => e.target.style.opacity = 1}
                    >🔍</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Grid below */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 12, marginTop: 40 }}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              onClick={() => setLightbox(img)}
              style={{
                height: 120, borderRadius: 12, overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              }}
            >
              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)',
              zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'zoom-out',
            }}
          >
            <motion.img
              src={lightbox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 12, objectFit: 'contain' }}
            />
            <button onClick={() => setLightbox(null)} style={{
              position: 'absolute', top: 24, right: 24,
              background: 'rgba(255,255,255,0.1)', border: 'none',
              color: '#fff', fontSize: 24, width: 48, height: 48,
              borderRadius: '50%', cursor: 'pointer',
            }}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          #gallery > div > div:last-child { grid-template-columns: repeat(3, 1fr) !important; }
          #gallery > div { padding: 0 20px !important; }
          #gallery { padding: 60px 0 !important; }
        }
        @media (max-width: 480px) {
          #gallery > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
          #gallery > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  )
}
