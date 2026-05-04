import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const articles = [
  {
    img: '/images/news.jpeg',
    category: 'Announcement',
    tag: 'Featured',
    date: 'March 15, 2024',
    readTime: '3 min read',
    title: '2024 Season Registration Now Open',
    excerpt: 'Join us for another exciting season of cricket. Registration is now open for all programs including Outright and Flashbacks. Don\'t miss your chance to be part of the Crusaders family this summer.',
    featured: true,
  },
  {
    img: '/images/news1.jpeg',
    category: 'Tours',
    tag: null,
    date: 'March 10, 2024',
    readTime: '2 min read',
    title: 'UK Tour Applications Close Soon',
    excerpt: 'Do not miss your chance to experience cricket in the United Kingdom. Applications for the mid-year tour close at the end of this month.',
    featured: false,
  },
  {
    img: '/images/news2.jpeg',
    category: 'Partnership',
    tag: null,
    date: 'March 5, 2024',
    readTime: '4 min read',
    title: 'Crusaders Partner with Cricket Victoria',
    excerpt: 'We are proud to announce an expanded partnership with Cricket Victoria to provide more development opportunities for pathway players.',
    featured: false,
  },
]

const categoryColors = {
  'Announcement': '#1a2e5a',
  'Tours':        '#0e7a4e',
  'Partnership':  '#7a3e0e',
  'Club News':    '#1a2e5a',
  'Outright':     '#0e4e7a',
}

export default function News() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(null)

  const featured = articles[0]
  const secondary = articles.slice(1)

  return (
    <section id="news" ref={ref} style={{ padding: '100px 0', background: '#f0f4f8' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: 48,
            flexWrap: 'wrap', gap: 16,
          }}
        >
          <div>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 4,
              color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: 10,
            }}>
              LATEST UPDATES
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              News &amp; <span style={{ color: '#c9a84c' }}>Announcements</span>
            </h2>
          </div>
          <motion.a
            href="#news"
            whileHover={{ scale: 1.04 }}
            style={{
              background: '#1a2e5a', color: '#fff',
              padding: '12px 28px', borderRadius: 6,
              fontWeight: 600, fontSize: 13, letterSpacing: 0.5,
              display: 'inline-block', transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.background = '#1a2e5a'}
          >
            View All News →
          </motion.a>
        </motion.div>

        {/* ── Layout: featured left + two stacked right ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 28 }}>

          {/* FEATURED — large left card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setHovered('featured')}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: '#fff', borderRadius: 20, overflow: 'hidden',
              boxShadow: hovered === 'featured'
                ? '0 24px 60px rgba(10,22,40,0.14)'
                : '0 4px 24px rgba(10,22,40,0.07)',
              transform: hovered === 'featured' ? 'translateY(-6px)' : 'translateY(0)',
              transition: 'all 0.4s ease',
              display: 'flex', flexDirection: 'column',
              cursor: 'pointer',
            }}
          >
            {/* Image */}
            <div style={{ height: 300, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
              <img
                src={featured.img}
                alt={featured.title}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: hovered === 'featured' ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.6s ease',
                }}
              />
              {/* Gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,22,40,0.5) 0%, transparent 60%)',
              }} />
              {/* Badges */}
              <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 8 }}>
                <span style={{
                  background: categoryColors[featured.category] || '#1a2e5a',
                  color: '#fff', fontSize: 11, fontWeight: 700,
                  letterSpacing: 1, padding: '5px 14px', borderRadius: 20,
                }}>
                  {featured.category}
                </span>
                {featured.tag && (
                  <span style={{
                    background: '#c9a84c', color: '#fff',
                    fontSize: 11, fontWeight: 700,
                    letterSpacing: 1, padding: '5px 14px', borderRadius: 20,
                  }}>
                    {featured.tag}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 14, fontSize: 12, color: '#888' }}>
                <span>📅 {featured.date}</span>
                <span>⏱ {featured.readTime}</span>
              </div>
              <h3 style={{
                fontSize: 22, color: '#1a2e5a', lineHeight: 1.35,
                marginBottom: 14, fontFamily: 'Oswald, sans-serif', fontWeight: 600,
              }}>
                {featured.title}
              </h3>
              <p style={{ color: '#555', fontSize: 14.5, lineHeight: 1.75, marginBottom: 24, flex: 1 }}>
                {featured.excerpt}
              </p>
              <a href="#news" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#1a2e5a', color: '#fff',
                padding: '11px 24px', borderRadius: 6,
                fontWeight: 600, fontSize: 13, alignSelf: 'flex-start',
                transition: 'background 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#c9a84c'}
                onMouseLeave={e => e.currentTarget.style.background = '#1a2e5a'}
              >
                Read Full Article →
              </a>
            </div>
          </motion.div>

          {/* RIGHT — two stacked cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {secondary.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#fff', borderRadius: 16, overflow: 'hidden',
                  boxShadow: hovered === i
                    ? '0 16px 48px rgba(10,22,40,0.13)'
                    : '0 4px 20px rgba(10,22,40,0.06)',
                  transform: hovered === i ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'all 0.35s ease',
                  display: 'flex', cursor: 'pointer',
                  flex: 1,
                }}
                className="news-secondary-card"
              >
                {/* Image — left side */}
                <div className="news-secondary-img" style={{ width: 160, flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={article.img}
                    alt={article.title}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transform: hovered === i ? 'scale(1.07)' : 'scale(1)',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: categoryColors[article.category] || '#1a2e5a',
                    color: '#fff', fontSize: 10, fontWeight: 700,
                    letterSpacing: 0.8, padding: '4px 10px', borderRadius: 20,
                  }}>
                    {article.category}
                  </div>
                </div>

                {/* Content — right side */}
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 10, fontSize: 11, color: '#999' }}>
                    <span>{article.date}</span>
                    <span>· {article.readTime}</span>
                  </div>
                  <h4 style={{
                    fontSize: 16, color: '#1a2e5a', lineHeight: 1.4,
                    marginBottom: 10, fontFamily: 'Oswald, sans-serif',
                    fontWeight: 600, flex: 1,
                  }}>
                    {article.title}
                  </h4>
                  <p style={{ color: '#666', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>
                    {article.excerpt}
                  </p>
                  <a href="#news" style={{
                    fontSize: 13, fontWeight: 700,
                    color: hovered === i ? '#c9a84c' : '#1a2e5a',
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    transition: 'color 0.25s',
                  }}>
                    Read More
                    <span style={{
                      transition: 'transform 0.25s',
                      transform: hovered === i ? 'translateX(4px)' : 'translateX(0)',
                      display: 'inline-block',
                    }}>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #news > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #news > div > div:last-child > div:last-child {
            flex-direction: column !important;
          }
          #news > div > div:last-child > div:last-child > div:first-child {
            width: 100% !important;
            height: 180px !important;
          }
        }
        @media (max-width: 768px) {
          #news > div { padding: 0 20px !important; }
          #news { padding: 60px 0 !important; }
          /* Secondary article cards: stack image on top */
          .news-secondary-card { flex-direction: column !important; }
          .news-secondary-img { width: 100% !important; height: 160px !important; flex-shrink: 0 !important; }
        }
        @media (max-width: 480px) {
          #news > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  )
}
