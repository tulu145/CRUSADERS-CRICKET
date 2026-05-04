import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: 8,
    border: '1px solid #e0e0e0', fontSize: 14, fontFamily: 'Poppins, sans-serif',
    outline: 'none', transition: 'border-color 0.3s',
    background: '#fafafa',
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '100px 0', background: '#f0f4f8' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#c9a84c', textTransform: 'uppercase' }}>
            GET IN TOUCH
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 12 }}>
            Contact <span style={{ color: '#c9a84c' }}>Us</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60, alignItems: 'start' }}>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{ fontSize: 26, marginBottom: 16 }}>Let's Talk Cricket</h3>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 36 }}>
              Whether you want to join a program, enquire about tours, or just learn more about Crusaders Cricket Australia — we'd love to hear from you.
            </p>

            {[
              { icon: '📍', label: 'Location', value: 'Melbourne, Victoria, Australia' },
              { icon: '✉️', label: 'Email', value: 'info@crusaderscricketaustralia.com.au' },
              { icon: '🌐', label: 'Website', value: 'crusaderscricketaustralia.com.au' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  marginBottom: 24, padding: '20px', background: '#fff',
                  borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderLeft: '4px solid #c9a84c',
                }}
              >
                <span style={{ fontSize: 24 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 12, color: '#c9a84c', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 14, color: '#333' }}>{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map(s => (
                <a key={s} href="#" style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: '#0a1628', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, transition: 'background 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#c9a84c'}
                  onMouseLeave={e => e.currentTarget.style.background = '#0a1628'}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="contact-form-box" style={{
              background: '#fff', borderRadius: 20, padding: '40px',
              boxShadow: '0 8px 40px rgba(10,22,40,0.08)',
            }}>
              <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                {[
                  { key: 'name', placeholder: 'Your Full Name', label: 'Name' },
                  { key: 'email', placeholder: 'your@email.com', label: 'Email', type: 'email' },
                  { key: 'phone', placeholder: '+61 4XX XXX XXX', label: 'Phone' },
                  { key: 'subject', placeholder: 'Program Enquiry', label: 'Subject' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#333', display: 'block', marginBottom: 6 }}>{f.label}</label>
                    <input
                      type={f.type || 'text'}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#c9a84c'}
                      onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#333', display: 'block', marginBottom: 6 }}>Message</label>
                <textarea
                  placeholder="Tell us about yourself and what you're interested in..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', height: 'auto' }}
                  onFocus={e => e.target.style.borderColor = '#c9a84c'}
                  onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <button type="submit" style={{
                width: '100%', padding: '16px',
                background: sent ? '#44cc88' : 'linear-gradient(135deg, #0a1628, #112240)',
                color: '#fff', border: 'none', borderRadius: 8,
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
                transition: 'all 0.3s', letterSpacing: 0.5,
                boxShadow: '0 6px 20px rgba(10,22,40,0.2)',
              }}
                onMouseEnter={e => !sent && (e.currentTarget.style.background = 'linear-gradient(135deg, #c9a84c, #a8893a)')}
                onMouseLeave={e => !sent && (e.currentTarget.style.background = 'linear-gradient(135deg, #0a1628, #112240)')}
              >
                {sent ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
          #contact > div > div:last-child > form { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          #contact > div { padding: 0 20px !important; }
          #contact { padding: 60px 0 !important; }
          /* Form inner 2-col grid → 1 col */
          .contact-form-grid { grid-template-columns: 1fr !important; }
          /* Form padding */
          .contact-form-box { padding: 24px !important; }
        }
        @media (max-width: 480px) {
          #contact > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  )
}
