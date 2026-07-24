'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle, Sparkles } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'
import Magnetic from './Magnetic'
import Card3D from './Card3D'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'ferdinandarya80@gmail.com', href: 'mailto:ferdinandarya80@gmail.com' },
  { icon: Phone, label: 'Phone', value: '0857-7913-7093', href: 'tel:085779137093' },
  { icon: MapPin, label: 'Location', value: 'Dadap, Tangerang, Banten' },
]

const socialLinks = [
  { Icon: GitHubIcon, label: 'GitHub Profile', href: 'https://github.com/TricQs' },
  { Icon: LinkedInIcon, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
  { Icon: InstagramIcon, label: 'Instagram Profile', href: 'https://www.instagram.com/ferndaryzt/' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setError(data.error || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error('Contact submission error:', err)
      setError('Connection error. Please check your internet connection and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Stage Finale Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(ellipse at bottom, rgba(59,130,246,0.3) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#86868b] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            07 — Finale &amp; Contact Stage
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold mt-2 leading-[1.08] tracking-[-0.035em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Let&apos;s Build Something Iconic
          </h2>
          <p className="text-sm text-[#86868b] mt-4 max-w-lg mx-auto leading-relaxed">
            Open to entry-level engineering roles, internships, web application development, or technical collaboration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Interactive Form Stage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <Card3D maxRotate={6} className="h-full">
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl" aria-label="Contact form">
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] font-medium tracking-[0.12em] uppercase text-[#86868b] mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3.5 border border-white/10 rounded-xl text-sm text-[#f5f5f7] placeholder-[#86868b]/50 focus:border-white/30 focus:bg-white/[0.04] transition-all bg-white/[0.015]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[11px] font-medium tracking-[0.12em] uppercase text-[#86868b] mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3.5 border border-white/10 rounded-xl text-sm text-[#f5f5f7] placeholder-[#86868b]/50 focus:border-white/30 focus:bg-white/[0.04] transition-all bg-white/[0.015]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-medium tracking-[0.12em] uppercase text-[#86868b] mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Hello Ferdinand, I'd like to discuss..."
                    className="w-full px-4 py-3.5 border border-white/10 rounded-xl text-sm text-[#f5f5f7] placeholder-[#86868b]/50 focus:border-white/30 focus:bg-white/[0.04] transition-all resize-none bg-white/[0.015]"
                  />
                </div>

                <Magnetic strength={0.3} slime={false} className="w-full">
                  <button
                    type="submit"
                    disabled={sending || sent}
                    className={`w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                      sent
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                        : 'bg-[#f5f5f7] text-[#060606] hover:bg-white shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                    }`}
                  >
                    {sent ? (
                      <>
                        <CheckCircle size={16} /> Message Sent Successfully!
                      </>
                    ) : sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#060606]/30 border-t-[#060606] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Send Message
                      </>
                    )}
                  </button>
                </Magnetic>

                <div aria-live="polite" className="text-center">
                  {error && <p className="text-xs text-rose-400 mt-2">{error}</p>}
                </div>
              </form>
            </Card3D>
          </motion.div>

          {/* Contact Details & Availability Stage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card3D key={item.label} maxRotate={8}>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.015] hover:border-white/20 transition-all">
                    <div className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0 bg-white/[0.03]">
                      <item.icon size={18} className="text-[#f5f5f7]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#86868b] mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-[#f5f5f7] hover:text-white transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#f5f5f7] font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>

            <div className="section-divider" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#86868b] mb-4 font-semibold">
                Social Profiles
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Magnetic key={social.label} strength={0.3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 border border-white/10 rounded-xl flex items-center justify-center hover:border-white/30 hover:bg-white/[0.06] transition-all text-[#86868b] hover:text-[#f5f5f7] bg-white/[0.02]"
                    >
                      <social.Icon size={16} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            <div className="border border-emerald-500/20 rounded-2xl p-6 bg-emerald-500/5 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase">Open for Work</span>
              </div>
              <p className="text-xs text-[#a1a1a6] leading-relaxed">
                Actively seeking entry-level software engineering positions, front-end developer roles, internships, and technical projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
