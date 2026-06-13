'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
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

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'py-3 border-white/[0.08]'
            : 'py-5 border-transparent'
        }`}
        style={{
          background: 'rgba(5, 5, 5, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
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
                className={`text-sm tracking-wide transition-all duration-300 relative py-1 cursor-pointer ${
                  activeSection === link.id
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
              href="https://drive.google.com/file/d/13-aJqYoIrwuKJuyrQMikF97BiMMVjrtE/view?usp=drive_link"
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 glass flex flex-col pt-24 px-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 p-2 text-[#8a8a8a]"
            >
              <X size={22} />
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id)
                  setMobileOpen(false)
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-3xl font-bold py-4 border-b border-white/[0.06] text-[#8a8a8a] hover:text-white transition-colors duration-300 text-left cursor-pointer"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href="https://drive.google.com/file/d/13-aJqYoIrwuKJuyrQMikF97BiMMVjrtE/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-2 text-sm font-medium text-[#8a8a8a]"
            >
              <Download size={14} /> Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
