'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'
import Magnetic from './Magnetic'

const navLinks = [
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
]

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
    const onScroll = () => setScrolled(window.scrollY > 30)
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
      { rootMargin: '-30% 0px -60% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? 'py-4 border-b border-white/10 bg-[#0c0c0e]/95 backdrop-blur-2xl'
            : scrolled
              ? 'py-3.5 border-b border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
              : 'py-5 border-b border-transparent bg-transparent'
        }`}
        style={
          scrolled && !mobileOpen
            ? {
                background: 'linear-gradient(135deg, rgba(18, 18, 22, 0.8) 0%, rgba(12, 12, 14, 0.88) 100%)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              }
            : {}
        }
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              scrollToSection('hero')
              setMobileOpen(false)
            }}
            className="group flex items-center gap-1 cursor-pointer focus:outline-none"
            aria-label="Ferdinand Arya Wijaya Portfolio Home"
          >
            <span
              className="text-base font-bold tracking-tight text-[#f5f5f7] group-hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Ferdinand Arya
            </span>
            <span className="text-base font-bold text-amber-400 group-hover:scale-125 transition-transform">
              .
            </span>
          </button>

          {/* Desktop Nav Links with Apple Liquid Glass Pills */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileTap={{ scaleX: 1.14, scaleY: 0.86 }}
                transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                className={`relative px-4 py-1.5 text-xs font-semibold transition-all duration-300 rounded-full cursor-pointer select-none ${
                  activeSection === link.id
                    ? 'text-[#0c0c0e]'
                    : 'text-[#a1a1a6] hover:text-[#f5f5f7]'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 rounded-full z-0 border border-white/80"
                    style={{
                      background: 'linear-gradient(180deg, #ffffff 0%, #ececef 100%)',
                      boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 1), 0 4px 14px rgba(0, 0, 0, 0.25)',
                    }}
                    transition={{ type: 'spring', stiffness: 520, damping: 32, mass: 0.45 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Resume CTA Button */}
          <div className="hidden md:flex items-center">
            <Magnetic strength={0.25}>
              <a
                href="https://drive.google.com/file/d/1EZ5gjktT6Llwpk4J7O76dCddTry4_V5c/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full text-[#f5f5f7] hover:scale-105 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <Download size={13} className="text-amber-400" />
                Resume
              </a>
            </Magnetic>
          </div>

          {/* Morphing Apple Liquid Glass Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 focus:outline-none transition-all duration-300 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 4px 20px rgba(0,0,0,0.4)',
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-4 h-0.5 bg-[#f5f5f7] rounded-full block transform-origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="w-4 h-0.5 bg-[#f5f5f7] rounded-full block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-4 h-0.5 bg-[#f5f5f7] rounded-full block transform-origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Apple iOS Liquid Glass Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-28 px-6 pb-10 overflow-y-auto"
            style={{
              background: 'linear-gradient(180deg, rgba(12, 12, 14, 0.92) 0%, rgba(18, 18, 22, 0.96) 100%)',
              backdropFilter: 'blur(32px) saturate(200%)',
              WebkitBackdropFilter: 'blur(32px) saturate(200%)',
            }}
          >
            <div className="flex flex-col justify-center flex-grow gap-3 relative z-10 my-auto max-w-sm mx-auto w-full">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                  onClick={() => {
                    scrollToSection(link.id)
                    setMobileOpen(false)
                  }}
                  className="group flex items-center justify-between p-4 rounded-2xl border text-left cursor-pointer transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2)',
                  }}
                >
                  <span
                    className="text-lg font-bold tracking-tight text-[#f5f5f7] group-hover:text-white"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {link.label}
                  </span>
                  <span className="text-xs font-mono text-white/30 group-hover:text-amber-400 transition-colors">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4 relative z-10 max-w-sm mx-auto w-full">
              <a
                href="https://drive.google.com/file/d/1EZ5gjktT6Llwpk4J7O76dCddTry4_V5c/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold text-[#f5f5f7] rounded-2xl shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3)',
                }}
              >
                <Download size={14} className="text-amber-400" />
                Download Resume (PDF)
              </a>

              <div className="flex items-center justify-center gap-3">
                {[
                  { Icon: GitHubIcon, label: 'GitHub Profile', href: 'https://github.com/TricQs' },
                  { Icon: LinkedInIcon, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
                  { Icon: InstagramIcon, label: 'Instagram Profile', href: 'https://www.instagram.com/ferndaryzt/' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-[#a1a1a6] hover:text-[#f5f5f7] transition-all"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <social.Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
