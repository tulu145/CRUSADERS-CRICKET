export default function Footer() {
  return (
    <footer style={{ background: '#060e1a', padding: '70px 0 0', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', gap: 48, paddingBottom: 60 }}>

          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="Crusaders Cricket Australia" style={{ height: 65, marginBottom: 20 }} />
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
              Crusaders Cricket Australia is a non-for-profit organisation established in 1977, dedicated to developing cricketers and great people through the game of cricket.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['f', 'in', '𝕏', '▶'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)', fontSize: 13, transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 style={{ color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Oswald, sans-serif' }}>
              Quick Links
            </h6>
            {['Home', 'About Us', 'Programs', 'Our Team', 'Gallery', 'News', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} style={{
                display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: 14,
                marginBottom: 10, transition: 'color 0.3s',
              }}
                onMouseEnter={e => e.target.style.color = '#c9a84c'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >
                › {link}
              </a>
            ))}
          </div>

          {/* Programs */}
          <div>
            <h6 style={{ color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Oswald, sans-serif' }}>
              Programs
            </h6>
            {['Outright Program', 'Flashbacks Program', 'Cricket Tours', 'CV Partnership'].map(p => (
              <a key={p} href="#programs" style={{
                display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: 14,
                marginBottom: 10, transition: 'color 0.3s',
              }}
                onMouseEnter={e => e.target.style.color = '#c9a84c'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >
                › {p}
              </a>
            ))}
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h6 style={{ color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Oswald, sans-serif' }}>
              Contact Us
            </h6>
            {[
              { icon: '📍', text: 'Melbourne, Victoria, Australia' },
              { icon: '✉️', text: 'info@crusaderscricketaustralia.com.au' },
              { icon: '🌐', text: 'crusaderscricketaustralia.com.au' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 14, color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}

            <h6 style={{ color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', margin: '24px 0 14px', fontFamily: 'Oswald, sans-serif' }}>
              Newsletter
            </h6>
            <div className="footer-newsletter" style={{ display: 'flex', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)' }}>
              <input type="email" placeholder="Your email" style={{
                flex: 1, padding: '12px 14px', background: 'rgba(255,255,255,0.05)',
                border: 'none', color: '#fff', fontSize: 13, outline: 'none',
                fontFamily: 'Poppins, sans-serif',
              }} />
              <button style={{
                background: '#c9a84c', border: 'none', color: '#fff',
                padding: '12px 18px', cursor: 'pointer', fontSize: 13, fontWeight: 600,
                transition: 'background 0.3s',
              }}
                onMouseEnter={e => e.target.style.background = '#a8893a'}
                onMouseLeave={e => e.target.style.background = '#c9a84c'}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, margin: 0 }}>
            © 2025 Crusaders Cricket Australia. All Rights Reserved. Non-Profit Organisation Est. 1977.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, margin: 0 }}>
            Built with ❤️ for Cricket
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 576px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
          footer > div { padding: 0 20px !important; }
          footer { padding: 48px 0 0 !important; }
        }
        @media (max-width: 480px) {
          footer > div { padding: 0 16px !important; }
          /* Newsletter input + button: stack on very small screens */
          .footer-newsletter { flex-direction: column !important; border-radius: 8px !important; }
          .footer-newsletter input { border-radius: 8px 8px 0 0 !important; }
          .footer-newsletter button { border-radius: 0 0 8px 8px !important; width: 100% !important; }
        }
      `}</style>
    </footer>
  )
}
