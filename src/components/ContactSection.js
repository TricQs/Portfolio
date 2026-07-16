'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'ferdinandarya80@gmail.com', href: 'mailto:ferdinandarya80@gmail.com' },
  { icon: Phone, label: 'Phone', value: '0857-7913-7093', href: 'tel:085779137093' },
  { icon: MapPin, label: 'Location', value: 'Dadap Tangerang Kosambi' },
]

const socialLinks = [
  { Icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/TricQs' },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/ferndaryzt/' },
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
        headers: {
          'Content-Type': 'application/json',
        },
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
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#86868b]">
            09 — Contact
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold mt-4 leading-[1.1] tracking-[-0.03em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Let&apos;s Build Something<br />Great
          </h2>
          <p className="text-[#86868b] mt-5 max-w-lg mx-auto leading-[1.7] text-[15px]">
            Interested in working together, discussing ideas, or collaborating on projects? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-[#86868b] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3.5 border border-white/[0.06] rounded-xl text-[13px] text-[#f5f5f7] placeholder-[#6e6e73]/60 focus:border-white/[0.15] focus:bg-white/[0.02] transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.015)' }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-[#86868b] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3.5 border border-white/[0.06] rounded-xl text-[13px] text-[#f5f5f7] placeholder-[#6e6e73]/60 focus:border-white/[0.15] focus:bg-white/[0.02] transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.015)' }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-medium tracking-[0.12em] uppercase text-[#86868b] mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3.5 border border-white/[0.06] rounded-xl text-[13px] text-[#f5f5f7] placeholder-[#6e6e73]/60 focus:border-white/[0.15] focus:bg-white/[0.02] transition-all duration-300 resize-none"
                  style={{ background: 'rgba(255,255,255,0.015)' }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-[13px] font-semibold transition-all duration-300 cursor-pointer ${sent
                  ? 'bg-emerald-500/[0.1] border border-emerald-500/20 text-emerald-400'
                  : 'bg-[#f5f5f7] text-[#060606] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                  }`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={14} /> Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-3.5 h-3.5 border-[1.5px] border-[#060606]/30 border-t-[#060606] rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={13} /> Send Message
                  </>
                )}
              </motion.button>

              {/* Error Message */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] text-red-400/80 mt-2 text-center"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="space-y-8"
          >
            {/* Contact items */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.12] transition-colors duration-300" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <item.icon size={14} strokeWidth={1.5} className="text-[#86868b]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-[#6e6e73] mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[13px] text-[#f5f5f7] hover:text-white/70 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[13px] text-[#f5f5f7]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="section-divider" />

            {/* Social Links */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#6e6e73] mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 border border-white/[0.06] rounded-xl flex items-center justify-center hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300 group"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                    aria-label={social.label}
                  >
                    <social.Icon
                      size={15}
                      className="text-[#86868b] group-hover:text-[#f5f5f7] transition-colors duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="border border-white/[0.06] rounded-2xl p-6 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.015)' }}>
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.2), transparent)' }}
              />
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-medium text-emerald-400/90 tracking-[0.08em] uppercase">Available</span>
              </div>
              <p className="text-[13px] text-[#86868b] leading-[1.7]">
                Currently open to internship, freelance, and collaborative project opportunities. Response within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
