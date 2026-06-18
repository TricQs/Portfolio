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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate send
    await new Promise(r => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute inset-0 grid-overlay pointer-events-none"
        style={{ opacity: 0.4 }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            08 — Contact
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-3 leading-tight text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Let&apos;s Build Something<br />Great
          </h2>
          <p className="text-[#8a8a8a] mt-5 max-w-xl mx-auto leading-relaxed">
            Interested in working together, discussing ideas, or collaborating on projects? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="group">
                <label className="block text-xs font-medium tracking-[0.15em] uppercase text-[#8a8a8a] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-5 py-4 glass border border-white/[0.07] rounded-xl text-sm text-white placeholder-[#8a8a8a]/50 focus:border-white/25 focus:bg-white/[0.03] transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-medium tracking-[0.15em] uppercase text-[#8a8a8a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 glass border border-white/[0.07] rounded-xl text-sm text-white placeholder-[#8a8a8a]/50 focus:border-white/25 focus:bg-white/[0.03] transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium tracking-[0.15em] uppercase text-[#8a8a8a] mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-5 py-4 glass border border-white/[0.07] rounded-xl text-sm text-white placeholder-[#8a8a8a]/50 focus:border-white/25 focus:bg-white/[0.03] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 ${sent
                  ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                  : 'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                  }`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={15} /> Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact items */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl glass border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors duration-300">
                    <item.icon size={15} className="text-[#8a8a8a]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-white hover:text-white/70 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              className="h-px w-full"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)' }}
            />

            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a8a8a] mb-5">
                Follow Me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 glass border border-white/[0.07] rounded-xl flex items-center justify-center hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.Icon
                      size={16}
                      className="text-[#8a8a8a] group-hover:text-white transition-colors duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.3), transparent)' }}
              />
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-green-400 tracking-widest uppercase">Available</span>
              </div>
              <p className="text-sm text-[#8a8a8a] leading-relaxed">
                Currently open to internship, freelance, and collaborative project opportunities. Response within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
