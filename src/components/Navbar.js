'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
]

// Scroll ke section tanpa mengubah URL
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${mobileOpen
          ? 'py-4 border-b border-transparent'
          : scrolled
            ? 'py-3 border-b border-white/[0.06]'
            : 'py-5 border-b border-transparent'
          }`}
        style={{
          background: mobileOpen
            ? 'transparent'
            : scrolled
              ? 'rgba(6, 6, 6, 0.8)'
              : 'transparent',
          backdropFilter: mobileOpen ? 'none' : scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: mobileOpen ? 'none' : scrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              scrollToSection('hero')
              setMobileOpen(false)
            }}
            className="group flex items-center gap-0.5 cursor-pointer"
          >
            <span
              className="text-[15px] font-semibold tracking-[-0.02em] text-[#f5f5f7]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Ferdinand Arya
            </span>
            <span className="text-[15px] font-semibold text-white/20 group-hover:text-white/60 transition-colors duration-300">
              .
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 py-1.5 text-[13px] tracking-[-0.01em] transition-all duration-300 rounded-lg cursor-pointer ${activeSection === link.id
                  ? 'text-[#f5f5f7]'
                  : 'text-[#86868b] hover:text-[#f5f5f7]'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-3 right-3 h-px bg-white/60"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://drive.google.com/file/d/1EZ5gjktT6Llwpk4J7O76dCddTry4_V5c/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium rounded-full border border-white/[0.08] bg-white/[0.03] text-[#f5f5f7] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group"
            >
              <Download size={13} className="text-[#86868b] group-hover:text-[#f5f5f7] transition-colors duration-300" />
              Resume
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#86868b] hover:text-white transition-colors rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
            style={{ background: 'rgba(6, 6, 6, 0.98)', backdropFilter: 'blur(24px)' }}
          >
            {/* Subtle ambient glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)' }}
            />

            {/* Menu Links */}
            <div className="flex flex-col justify-center flex-grow gap-1 relative z-10 my-auto">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id)
                    setMobileOpen(false)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-4 py-4 border-b border-white/[0.04] text-[#86868b] hover:text-white transition-all duration-300 text-left cursor-pointer"
                >
                  <span className="text-[11px] font-mono text-white/15 group-hover:text-white/40 transition-colors duration-300 tabular-nums">
                    0{i + 1}
                  </span>
                  <span
                    className="text-2xl font-semibold tracking-[-0.02em] group-hover:translate-x-2 transition-transform duration-300"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Footer with CV and Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-auto pt-6 border-t border-white/[0.04] flex flex-col gap-5 relative z-10"
            >
              <a
                href="https://drive.google.com/file/d/1EZ5gjktT6Llwpk4J7O76dCddTry4_V5c/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-medium border border-white/[0.08] bg-white/[0.03] rounded-xl hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group"
              >
                <Download size={13} className="text-[#86868b] group-hover:text-white transition-colors duration-300" />
                Download CV
              </a>

              {/* Social Icons row */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-[10px] text-white/20 tracking-[0.15em] uppercase">Follow</span>
                <div className="h-px w-5 bg-white/[0.06]" />
                {[
                  { Icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/TricQs' },
                  { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
                  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/ferndaryzt/' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 border border-white/[0.06] rounded-xl flex items-center justify-center text-[#86868b] hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <social.Icon size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
