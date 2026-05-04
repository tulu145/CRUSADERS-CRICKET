import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const players = [
  { year: 1978, name: 'B.C. GREEN' },
  { year: 1982, name: 'P.D. KING' },
  { year: 1982, name: 'A.J.C. DODEMAIDE*' },
  { year: 1983, name: 'S.P. DAVIS*' },
  { year: 1983, name: 'M.G.D. DIMATTINA' },
  { year: 1984, name: 'G.L. JORDAN' },
  { year: 1984, name: 'J.D. SIDDONS***' },
  { year: 1985, name: 'P.W. JACKSON' },
  { year: 1985, name: 'M.C. EPHRAMS' },
  { year: 1985, name: 'G.R. PARKER' },
  { year: 1985, name: 'I.D. FRAZER' },
  { year: 1985, name: 'R.A. QUINN' },
  { year: 1986, name: 'W.G. AYRES' },
  { year: 1987, name: 'P.R. REIFFEL*' },
  { year: 1987, name: 'S.R. O\'DONNELL*' },
  { year: 1987, name: 'P.E. McINTYRE*' },
  { year: 1987, name: 'D.K. WALKER' },
  { year: 1988, name: 'D.A. HARRIS' },
  { year: 1988, name: 'D.S. BERRY' },
  { year: 1989, name: 'D.W. FLEMING*' },
  { year: 1989, name: 'A. ISLAM****' },
  { year: 1989, name: 'S.K. WARNE*' },
  { year: 1990, name: 'C. WHITE**' },
  { year: 1994, name: 'G.J. ALLARDICE' },
  { year: 1992, name: 'A.J. AMALFI' },
  { year: 1992, name: 'M.T.G. ELLIOTT*' },
  { year: 1992, name: 'C. HOWARD' },
  { year: 1993, name: 'I.J. HARVEY***' },
  { year: 1993, name: 'R.A. BARTLETT' },
  { year: 1994, name: 'M.R. FOSTER' },
  { year: 1995, name: 'B.P. RICCI' },
  { year: 1995, name: 'I.S.I. HEWITT' },
  { year: 1995, name: 'A.D. McGINTY' },
  { year: 1996, name: 'S.A.J. CRAIG' },
  { year: 1997, name: 'R. SIDEBOTTOM**' },
  { year: 1998, name: 'C. SCHOFIELD**' },
  { year: 1999, name: 'A.J. HOLLOAKE**' },
  { year: 2000, name: 'B.D. COLLINGWOOD**' },
  { year: 2000, name: 'V.S. SOLANKI' },
  { year: 2006, name: 'C.J. McKAY' },
  { year: 2006, name: 'J.W.M. DALRYMPLE' },
  { year: 2006, name: 'R.J. QUINEY*' },
  { year: 2005, name: 'A. BLIZZARD' },
  { year: 2008, name: 'D.J. HUSSEY' },
  { year: 2009, name: 'T.P. LUDEMAN' },
  { year: 2010, name: 'J.W. HASTINGS' },
  { year: 2011, name: 'A.J. FINCH' },
  { year: 2011, name: 'J. HERRICK' },
  { year: 2011, name: 'G.J. MAXWELL*' },
  { year: 2013, name: 'D. RUSS' },
  { year: 2013, name: 'A. KEATH' },
  { year: 2014, name: 'S.F. MIRE***' },
  { year: 2016, name: 'J.M. HOLLAND*' },
  { year: 2017, name: 'S.E. GOTCH' },
]

// Split into two columns
const half = Math.ceil(players.length / 2)
const col1 = players.slice(0, half)
const col2 = players.slice(half)

const legend = [
  { symbol: '*',    text: 'Australia Test Player' },
  { symbol: '**',   text: 'England Test Player' },
  { symbol: '***',  text: '1 Day International Player' },
  { symbol: '****', text: 'Bangladesh Player' },
]

export default function HonourBoard() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="honour-board"
      ref={ref}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #1a1008 0%, #2c1a0a 50%, #1a1008 100%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Wood grain texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent, transparent 2px,
          rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px
        )`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span style={{
            fontSize: 12, fontWeight: 700, letterSpacing: 4,
            color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: 10,
          }}>
            CRUSADERS ALUMNI
          </span>
          <h2 style={{
            fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: '#f5e6c8', letterSpacing: 1,
          }}>
            First Class &amp; International Players
          </h2>
          <div style={{ width: 60, height: 3, background: '#c9a84c', margin: '16px auto 0', borderRadius: 2 }} />
        </motion.div>

        {/* Board */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          style={{
            background: 'linear-gradient(135deg, #3d2008 0%, #5c3010 40%, #3d2008 100%)',
            borderRadius: 16,
            border: '3px solid #8b6020',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Board header */}
          <div className="board-header" style={{
            background: 'linear-gradient(135deg, #2a1505, #4a2208)',
            borderBottom: '2px solid #8b6020',
            padding: '28px 36px',
            display: 'flex', alignItems: 'center', gap: 32,
          }}>
            {/* Left — logo + motto */}
            <div className="board-header-logo" style={{ textAlign: 'center', minWidth: 160 }}>
              <img
                src="/images/logo.png"
                alt="Crusaders"
                style={{ height: 70, marginBottom: 12, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
              />
              <p style={{
                color: '#d4b87a', fontSize: 13, fontStyle: 'italic',
                lineHeight: 1.6, maxWidth: 160,
              }}>
                "Encourage first to be a champion person and second to be a champion player"
              </p>
            </div>

            {/* Divider */}
            <div className="board-header-divider" style={{ width: 1, alignSelf: 'stretch', background: 'rgba(201,168,76,0.3)' }} />

            {/* Right — title */}
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.9rem)',
                color: '#f5e6c8', letterSpacing: 2, marginBottom: 6,
              }}>
                FIRST CLASS | INTERNATIONAL PLAYERS
              </h3>
              <p style={{ color: '#a08040', fontSize: 13 }}>
                Crusaders Cricket Australia alumni who represented at the highest level
              </p>
            </div>
          </div>

          {/* Player photo + table */}
          <div className="board-grid" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 0 }}>

            {/* Left panel — photo */}
            <div className="left-panel" style={{
              background: 'linear-gradient(180deg, #2a1505, #3d2008)',
              borderRight: '2px solid rgba(201,168,76,0.2)',
              padding: '28px 20px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
            }}>
              <div style={{ borderRadius: 10, overflow: 'hidden', border: '2px solid rgba(201,168,76,0.3)' }}>
                <img
                  src="/images/Screenshot 2026-05-04 041837.png"
                  alt="Clint McKay, John Holland & Rob Quiney"
                  style={{ width: '100%', display: 'block', objectFit: 'contain', height: 160, background: '#1a0a00' }}
                />
              </div>
              <p style={{
                color: '#a08040', fontSize: 11, textAlign: 'center',
                fontStyle: 'italic', lineHeight: 1.5,
              }}>
                Clint McKay, John Holland &amp; Rob Quiney
              </p>

              {/* Legend */}
              <div style={{ marginTop: 'auto', width: '100%' }}>
                <div style={{
                  borderTop: '1px solid rgba(201,168,76,0.2)',
                  paddingTop: 16,
                }}>
                  {legend.map(l => (
                    <div key={l.symbol} style={{
                      display: 'flex', gap: 8, marginBottom: 6,
                      fontSize: 11, color: '#a08040',
                    }}>
                      <span style={{ color: '#c9a84c', fontWeight: 700, minWidth: 28 }}>{l.symbol}</span>
                      <span>{l.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel — table */}
            <div style={{ padding: '0' }}>
              {/* Table header */}
              <div className="player-table-header" style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                background: 'rgba(0,0,0,0.3)',
                borderBottom: '1px solid rgba(201,168,76,0.3)',
              }}>
                {[0, 1].map(col => (
                  <div key={col} style={{
                    display: 'grid', gridTemplateColumns: '60px 1fr',
                    borderRight: col === 0 ? '1px solid rgba(201,168,76,0.2)' : 'none',
                  }}>
                    <div style={{ padding: '10px 12px', color: '#c9a84c', fontSize: 11, fontWeight: 700, letterSpacing: 1, borderRight: '1px solid rgba(201,168,76,0.15)' }}>YEAR</div>
                    <div style={{ padding: '10px 12px', color: '#c9a84c', fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>NAME</div>
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div className="player-table-cols honour-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxHeight: 480, overflowY: 'auto' }}>
                {/* Col 1 */}
                <div style={{ borderRight: '1px solid rgba(201,168,76,0.15)' }}>
                  {col1.map((p, i) => (
                    <motion.div
                      key={`c1-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.02 }}
                      style={{
                        display: 'grid', gridTemplateColumns: '60px 1fr',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        transition: 'background 0.2s',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.08)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{ padding: '8px 12px', color: '#c9a84c', fontSize: 12, fontWeight: 600, borderRight: '1px solid rgba(201,168,76,0.1)' }}>
                        {p.year}
                      </div>
                      <div style={{ padding: '8px 12px', color: '#f0ddb0', fontSize: 12, letterSpacing: 0.3 }}>
                        {p.name}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Col 2 */}
                <div>
                  {col2.map((p, i) => (
                    <motion.div
                      key={`c2-${i}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.02 }}
                      style={{
                        display: 'grid', gridTemplateColumns: '60px 1fr',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        transition: 'background 0.2s',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.08)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{ padding: '8px 12px', color: '#c9a84c', fontSize: 12, fontWeight: 600, borderRight: '1px solid rgba(201,168,76,0.1)' }}>
                        {p.year}
                      </div>
                      <div style={{ padding: '8px 12px', color: '#f0ddb0', fontSize: 12, letterSpacing: 0.3 }}>
                        {p.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Total count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', color: '#a08040', fontSize: 13, marginTop: 20 }}
        >
          {players.length} players have represented at First Class or International level
        </motion.p>
      </div>

      <style>{`
        .honour-scroll::-webkit-scrollbar { width: 4px; }
        .honour-scroll::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
        .honour-scroll::-webkit-scrollbar-thumb { background: #8b6020; border-radius: 2px; }
        @media (max-width: 768px) {
          .board-grid { grid-template-columns: 1fr !important; }
          .left-panel { display: none !important; }
        }
        /* Board header: stack logo + title on mobile */
        @media (max-width: 768px) {
          #honour-board .board-header {
            flex-direction: column !important;
            gap: 16px !important;
            padding: 20px !important;
            align-items: flex-start !important;
          }
          #honour-board .board-header-divider { display: none !important; }
          #honour-board .board-header-logo { min-width: unset !important; }
          /* Two-column player table → single column on mobile */
          #honour-board .player-table-cols { grid-template-columns: 1fr !important; }
          #honour-board .player-table-header { grid-template-columns: 1fr !important; }
          #honour-board .player-table-header > div:last-child { display: none !important; }
          #honour-board { padding: 60px 0 !important; }
          #honour-board > div { padding: 0 16px !important; }
        }
        @media (max-width: 480px) {
          #honour-board .honour-scroll { max-height: 360px !important; }
        }
      `}</style>
    </section>
  )
}
