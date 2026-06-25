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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${mobileOpen
          ? 'py-5 border-transparent'
          : scrolled
            ? 'py-3 border-white/[0.08]'
            : 'py-5 border-transparent'
          }`}
        style={{
          background: mobileOpen
            ? 'transparent'
            : scrolled
              ? 'rgba(5, 5, 5, 0.75)'
              : 'transparent',
          backdropFilter: mobileOpen ? 'none' : scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: mobileOpen ? 'none' : scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              scrollToSection('hero')
              setMobileOpen(false)
            }}
            className="group flex items-center gap-1 cursor-pointer"
          >
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Ferdinand Arya
            </span>
            <span className="text-xl font-bold text-white/30 group-hover:text-white transition-colors duration-300">
              .
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm tracking-wide transition-all duration-300 relative py-1 cursor-pointer ${activeSection === link.id
                  ? 'text-white'
                  : 'text-[#8a8a8a] hover:text-white'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1aSIy1P0ZhF8H6Vl72l4bGj1VehA9x5E-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium glass border border-white/10 rounded-full hover:border-white/25 hover:bg-white/5 transition-all duration-300 group"
            >
              <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              Download CV
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#8a8a8a] hover:text-white transition-colors"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col pt-28 px-8 pb-8 overflow-y-auto"
          >
            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

            {/* Colorful ambient glow blobs */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)' }}
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 65%)' }}
            />

            {/* Menu Links */}
            <div className="flex flex-col justify-center flex-grow gap-2 relative z-10 my-auto">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id)
                    setMobileOpen(false)
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-4 py-4 border-b border-white/[0.06] text-[#8a8a8a] hover:text-white transition-all duration-300 text-left cursor-pointer"
                >
                  <span className="text-xs font-mono text-white/20 group-hover:text-white/60 transition-colors duration-300">
                    0{i + 1}.
                  </span>
                  <span
                    className="text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300"
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
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-auto pt-6 border-t border-white/[0.06] flex flex-col gap-6 relative z-10"
            >
              <a
                href="https://drive.google.com/file/d/1aSIy1P0ZhF8H6Vl72l4bGj1VehA9x5E-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-medium glass border border-white/10 rounded-full hover:border-white/25 hover:bg-white/5 transition-all duration-300 group"
              >
                <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                Download CV
              </a>

              {/* Social Icons row */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-[10px] text-white/25 tracking-[0.2em] uppercase">Follow</span>
                <div className="h-px w-6 bg-white/10" />
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
                    className="w-9 h-9 glass border border-white/[0.07] rounded-xl flex items-center justify-center text-[#8a8a8a] hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors duration-300"
                  >
                    <social.Icon size={15} />
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
