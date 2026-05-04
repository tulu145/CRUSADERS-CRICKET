import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const stories = [
  {
    img: '/images/story/1.jpeg',
    chapter: 'Chapter 1',
    year: '1977',
    title: 'The Beginning',
    subtitle: 'A Vision Takes Shape',
    story: 'In 1977, Ben Barnett — a former Australian Test cricketer — joined forces with Swan Richards, David Richards and the late Ray Steele with a single purpose: to give young cricketers the opportunity to play the game they love. From that founding moment, Crusaders Cricket Australia was born.',
  },
  {
    img: '/images/story/2.jpeg',
    chapter: 'Chapter 2',
    year: '1980s',
    title: 'Growing the Game',
    subtitle: 'Youth Cricket Takes Root',
    story: 'Through the 1980s, the Outright Program became the heartbeat of the club — giving boys aged 12 to 18 the chance to compete against schools, association teams, academies and cricket clubs across Melbourne every summer. Talent was everywhere. It just needed a home.',
  },
  {
    img: '/images/story/3.jpeg',
    chapter: 'Chapter 3',
    year: '1985–1995',
    title: 'Champions Emerge',
    subtitle: 'From Crusaders to Test Cricket',
    story: 'The names began to appear on the national stage. Paul Reiffel. Damien Fleming. Shane Warne. Simon O\'Donnell. Each of them passed through the Crusaders system before going on to represent Australia. The club wasn\'t just developing cricketers — it was shaping legends.',
  },
  {
    img: '/images/story/4.jpeg',
    chapter: 'Chapter 4',
    year: '1990s',
    title: 'Flashbacks & Friendships',
    subtitle: 'Cricket for Life',
    story: 'Cricket doesn\'t have to end at 30. The Flashbacks Program was created for cricketers who refused to hang up their whites — men aged 30 and over who still had the fire to compete, to connect, and to be part of something bigger than themselves.',
  },
  {
    img: '/images/story/5.jpeg',
    chapter: 'Chapter 5',
    year: '2000s',
    title: 'Taking Cricket to the World',
    subtitle: 'International Tours Begin',
    story: 'Mid-year cricket tours opened a new chapter. Europe. The United Kingdom. Asia. Sri Lanka. Crusaders players were now experiencing cricket on the world stage — playing at iconic grounds, forging international friendships, and carrying the navy, sky blue and gold across the globe.',
  },
  {
    img: '/images/story/6.jpeg',
    chapter: 'Chapter 6',
    year: '2010s',
    title: 'A New Generation',
    subtitle: 'The Next Wave of Talent',
    story: 'Aaron Finch. Glenn Maxwell. James Hastings. The 2010s brought a new generation of Crusaders alumni to the international arena. The pipeline from club cricket to the highest level was working — proof that the founding vision of 1977 was very much alive.',
  },
  {
    img: '/images/story/7.jpeg',
    chapter: 'Chapter 7',
    year: '2017',
    title: 'The Cricket Victoria Partnership',
    subtitle: 'Pathway to Excellence',
    story: 'In 2017, Crusaders partnered with Cricket Victoria to provide long-format development matches for players who had previously played within the pathway system. It was a landmark moment — bridging grassroots cricket with elite development in a way never done before.',
  },
  {
    img: '/images/story/8.jpeg',
    chapter: 'Chapter 8',
    year: 'Always',
    title: 'The Emblem',
    subtitle: 'Past, Present & Future',
    story: 'The Crusaders emblem tells the whole story. Navy blue for the past. Sky blue for the present. Gold for the future. The stars represent every state and territory of Australia. The martlett — a mythical bird from the 10th century — embodies the spirit of the Crusade.',
  },
  {
    img: '/images/story/9.jpeg',
    chapter: 'Chapter 9',
    year: 'Every Season',
    title: 'More Than Cricket',
    subtitle: 'Building Great People',
    story: 'The scoreboard only tells half the story. Crusaders has always believed that being a champion person comes before being a champion player. The friendships forged, the lessons learned, the character built — these are the real trophies that last a lifetime.',
  },
  {
    img: '/images/story/10.jpeg',
    chapter: 'Chapter 10',
    year: 'Today & Beyond',
    title: 'The Legacy Continues',
    subtitle: 'Four Decades and Counting',
    story: 'Nearly five decades on, the Crusaders story is still being written. New players. New tours. New champions. The same values. The same commitment. The same love for the game. Crusaders Cricket Australia — a cause that endures.',
  },
]

const DURATION = 6000

export default function StorySlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused]   = useState(false)
  const [progress, setProgress] = useState(0)
  const ref    = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const next  = useCallback(() => { setCurrent(c => (c + 1) % stories.length); setProgress(0) }, [])
  const prev  = useCallback(() => { setCurrent(c => (c - 1 + stories.length) % stories.length); setProgress(0) }, [])
  const goTo  = useCallback(i  => { setCurrent(i); setProgress(0) }, [])

  useEffect(() => {
    if (paused || !inView) return
    const t = setTimeout(next, DURATION)
    return () => clearTimeout(t)
  }, [current, paused, inView, next])

  useEffect(() => {
    if (paused || !inView) return
    setProgress(0)
    const start = Date.now()
    let raf
    const tick = () => {
      const p = Math.min(((Date.now() - start) / DURATION) * 100, 100)
      setProgress(p)
      if (p < 100) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [current, paused, inView])

  const s = stories[current]

  return (
    <section
      id="our-story"
      ref={ref}
      style={{ background: '#060e1a', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Section label ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="story-label-wrap"
        style={{
          maxWidth: 1280, margin: '0 auto', padding: '56px 56px 0',
          display: 'flex', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: '#c9a84c', textTransform: 'uppercase' }}>
          OUR JOURNEY
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.25)' }} />
      </motion.div>

      {/* ── Split layout ── */}
      <div
        className="story-content-wrap"
        style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '40px 56px 0',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 56,
              alignItems: 'center',
              width: '100%',
            }}
            className="story-grid"
          >
            {/* LEFT — text */}
            <div>
              {/* Chapter + year */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                <span style={{
                  background: 'rgba(201,168,76,0.15)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: '#c9a84c', fontSize: 11, fontWeight: 700,
                  letterSpacing: 2, padding: '5px 14px', borderRadius: 20,
                }}>
                  {s.chapter}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, fontFamily: 'Oswald, sans-serif', letterSpacing: 2 }}>
                  {s.year}
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                fontWeight: 700, color: '#fff',
                lineHeight: 1.08, marginBottom: 10,
              }}>
                {s.title}
              </h2>

              {/* Subtitle */}
              <p style={{ color: '#c9a84c', fontSize: 15, fontStyle: 'italic', marginBottom: 24, letterSpacing: 0.3 }}>
                {s.subtitle}
              </p>

              {/* Story */}
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15.5, lineHeight: 1.9, margin: 0 }}>
                {s.story}
              </p>
            </div>

            {/* RIGHT — photo */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 20, overflow: 'hidden',
                border: '2px solid rgba(201,168,76,0.3)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                background: '#000',
              }}>
                <img
                  src={s.img}
                  alt={s.title}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom controls ── */}
      <div
        className="story-controls"
        style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '32px 56px 52px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 20, flexWrap: 'wrap',
        }}
      >

        {/* Progress strips */}
        <div className="story-progress-strips" style={{ display: 'flex', gap: 6, flex: 1, maxWidth: 480 }}>
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={stories[i].title}
              style={{
                flex: 1, height: 3, padding: 0, border: 'none',
                background: i < current ? '#c9a84c' : 'rgba(255,255,255,0.15)',
                borderRadius: 2, cursor: 'pointer',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {i === current && (
                <motion.div
                  key={current}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.05, ease: 'linear' }}
                  style={{ position: 'absolute', inset: 0, background: '#c9a84c', borderRadius: 2 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Counter */}
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, fontFamily: 'Oswald, sans-serif', letterSpacing: 2 }}>
          {String(current + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}
        </span>

        {/* Prev / Next */}
        <div style={{ display: 'flex', gap: 10 }}>
          {[{ action: prev, label: '←' }, { action: next, label: '→' }].map(({ action, label }) => (
            <button
              key={label}
              onClick={action}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#fff', fontSize: 18, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.borderColor = '#c9a84c' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #our-story > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px 24px 0 !important; }
          #our-story > div:nth-child(3) { padding: 24px 24px 40px !important; }
          #our-story > div:first-child  { padding: 40px 24px 0 !important; }
        }
        /* The actual grid is inside a motion.div — target it with a class */
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .story-grid > div:last-child { order: -1; }
          #our-story .story-label-wrap { padding: 40px 20px 0 !important; }
          #our-story .story-controls { padding: 24px 20px 40px !important; flex-wrap: wrap !important; }
          #our-story .story-content-wrap { padding: 28px 20px 0 !important; min-height: unset !important; }
          #our-story .story-progress-strips { max-width: 100% !important; }
        }
        @media (max-width: 480px) {
          #our-story .story-label-wrap { padding: 32px 16px 0 !important; }
          #our-story .story-controls { padding: 20px 16px 32px !important; }
          #our-story .story-content-wrap { padding: 24px 16px 0 !important; }
        }
      `}</style>
    </section>
  )
}
