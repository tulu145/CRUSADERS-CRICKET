import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const partners = [
  { src: '/images/1.png', alt: 'Community Bank Clifton Hill / North Fitzroy – Bendigo Bank' },
  { src: '/images/2.png', alt: 'Tasty Fresh Food Co.' },
  { src: '/images/3.png', alt: 'Cricket Victoria' },
  { src: '/images/4.png', alt: 'ACS' },
  { src: '/images/5.png', alt: 'APS Sport' },
  { src: '/images/6.png', alt: 'CricketKit' },
]

export default function Partners() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="partners" ref={ref} style={{
      padding: '72px 0',
      background: 'linear-gradient(180deg, #f0f4f8 0%, #fff 100%)',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 4,
            color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: 10,
          }}>
            SUPPORTERS
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', margin: 0 }}>
            Our <span style={{ color: '#c9a84c' }}>Partners</span>
          </h2>
        </motion.div>

        {/* Infinite scroll strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            position: 'relative',
            background: '#fff',
            borderRadius: 20,
            border: '1px solid #e4e8ef',
            boxShadow: '0 4px 24px rgba(10,22,40,0.06)',
            padding: '32px 0',
            overflow: 'hidden',
          }}
        >
          {/* Left fade */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
            background: 'linear-gradient(to right, #fff, transparent)',
            pointerEvents: 'none',
          }} />
          {/* Right fade */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
            background: 'linear-gradient(to left, #fff, transparent)',
            pointerEvents: 'none',
          }} />

          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={48}
            loop
            speed={3000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            allowTouchMove={false}
            breakpoints={{
              480:  { slidesPerView: 3 },
              768:  { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            style={{ padding: '0 80px' }}
          >
            {[...partners, ...partners, ...partners].map((p, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', height: 72,
                    padding: '0 12px', cursor: 'pointer',
                  }}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    style={{
                      maxHeight: 52, maxWidth: '100%',
                      objectFit: 'contain', display: 'block',
                    }}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* "Become a partner" subtle line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            textAlign: 'center', marginTop: 24,
            color: '#999', fontSize: 13,
          }}
        >
          Interested in partnering with us?{' '}
          <a href="#contact" style={{
            color: '#c9a84c', fontWeight: 600,
            borderBottom: '1px solid rgba(201,168,76,0.4)',
            transition: 'color 0.2s',
          }}>
            Get in touch →
          </a>
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #partners > div { padding: 0 20px !important; }
          #partners { padding: 48px 0 !important; }
        }
        @media (max-width: 480px) {
          #partners > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  )
}
