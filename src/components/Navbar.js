'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'
import { GlassEffect } from './ui/liquid-glass'

const navLinks = [
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'AI Lab', id: 'ai-lab' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('projects')
  const isClicking = useRef(false)
  const clickTimeout = useRef(null)

  const handleNavClick = (id) => {
    isClicking.current = true
    setActiveSection(id)

    if (clickTimeout.current) clearTimeout(clickTimeout.current)
    clickTimeout.current = setTimeout(() => {
      isClicking.current = false
    }, 1200)

    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 30
      setScrolled(isScrolled)

      if (!isClicking.current && window.scrollY < 200) {
        setActiveSection('projects')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClicking.current) return
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-25% 0px -45% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => {
      observer.disconnect()
      if (clickTimeout.current) clearTimeout(clickTimeout.current)
    }
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[padding,border-color,background,box-shadow] duration-300 ${mobileOpen
          ? 'py-4 border-b border-white/10 bg-[#08080c]/90 backdrop-blur-2xl'
          : scrolled
            ? 'py-3.5 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]'
            : 'py-5 border-b border-transparent bg-transparent'
          }`}
        style={
          scrolled && !mobileOpen
            ? {
              background: 'linear-gradient(135deg, rgba(13, 13, 20, 0.85) 0%, rgba(8, 8, 12, 0.92) 100%)',
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
              isClicking.current = true
              setActiveSection('projects')
              setMobileOpen(false)
              const el = document.getElementById('hero')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              if (clickTimeout.current) clearTimeout(clickTimeout.current)
              clickTimeout.current = setTimeout(() => { isClicking.current = false }, 1200)
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
            <span className="text-base font-bold text-[#d4a853] group-hover:scale-125 transition-transform">
              .
            </span>
          </button>

          {/* Desktop Nav — Liquid Glass Gold-Tinted Active Pill */}
          <GlassEffect className="hidden md:flex rounded-full border border-white/20 p-1 backdrop-blur-xl">
            <nav className="flex items-center gap-1 overflow-hidden relative" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  whileTap={{ scaleX: 1.14, scaleY: 0.86 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold transition-colors duration-300 rounded-full cursor-pointer select-none ${activeSection === link.id
                    ? 'text-[#08080c]'
                    : 'text-[#a1a1a6] hover:text-[#f5f5f7]'
                    }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 rounded-full z-0"
                      style={{
                        background: 'linear-gradient(135deg, #e8c67a 0%, #d4a853 50%, #c49a48 100%)',
                        border: '1px solid rgba(232, 198, 122, 0.6)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 4px 14px rgba(212, 168, 83, 0.3)',
                      }}
                      transition={{ type: 'spring', stiffness: 480, damping: 36, mass: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              ))}
            </nav>
          </GlassEffect>

          {/* CV Button — Liquid Glass Gold Accent */}
          <div className="hidden md:flex items-center">
            <GlassEffect className="rounded-full border border-[#d4a853]/40">
              <motion.a
                href="https://drive.google.com/file/d/1KvDJ4PDQWPXYdr3xumVfAmV3xaYX2YOA/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scaleX: 1.14, scaleY: 0.86 }}
                transition={{ type: 'spring', stiffness: 700, damping: 12, mass: 0.3 }}
                className="flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full text-[#f5f5f7] hover:scale-105 transition-transform duration-300 bg-white/[0.04]"
              >
                <Download size={13} className="text-[#d4a853]" />
                CV
              </motion.a>
            </GlassEffect>
          </div>

          {/* Mobile Hamburger — Gold-tinted glass */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center focus:outline-none transition-[background,border-color] duration-300 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.12) 0%, rgba(255,255,255,0.04) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(212, 168, 83, 0.20)',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 4px 20px rgba(0,0,0,0.4)',
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-4 h-0.5 bg-[#f5f5f7] rounded-full block"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute w-4 h-0.5 bg-[#f5f5f7] rounded-full block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-4 h-0.5 bg-[#f5f5f7] rounded-full block"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer — Obsidian Luxe Translucent Glass with Specular Reflection Sheen */}
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
              background: 'linear-gradient(180deg, rgba(8, 8, 12, 0.88) 0%, rgba(13, 13, 20, 0.92) 100%)',
              backdropFilter: 'blur(28px) saturate(180%)',
              WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            }}
          >
            {/* Top Specular Glass Reflection Sheen (Khusus Layar Mobile) */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none z-20"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 30%, rgba(212, 168, 83, 0.8) 50%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.6), 0 2px 25px rgba(212, 168, 83, 0.4)',
              }}
            />
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[340px] h-[120px] rounded-full pointer-events-none opacity-40 z-10"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, rgba(212, 168, 83, 0.15) 45%, transparent 75%)',
                filter: 'blur(20px)',
              }}
            />
            <div className="flex flex-col justify-center flex-grow gap-3 relative z-10 my-auto max-w-sm mx-auto w-full">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                  onClick={() => {
                    handleNavClick(link.id)
                    setMobileOpen(false)
                  }}
                  className="group flex items-center justify-between p-4 rounded-2xl border text-left cursor-pointer transition-[border-color,background] duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.10)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)',
                  }}
                >
                  <span
                    className="text-lg font-bold tracking-tight text-[#f5f5f7] group-hover:text-white"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {link.label}
                  </span>
                  <span className="text-xs font-mono text-[#a1a1a6] group-hover:text-[#d4a853] transition-colors">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/8 flex flex-col gap-4 relative z-10 max-w-sm mx-auto w-full">
              <a
                href="https://drive.google.com/file/d/1KvDJ4PDQWPXYdr3xumVfAmV3xaYX2YOA/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold text-[#f5f5f7] rounded-2xl shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.15) 0%, rgba(255,255,255,0.04) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 168, 83, 0.22)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                }}
              >
                <Download size={14} className="text-[#d4a853]" />
                Download CV (PDF)
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
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-[#a1a1a6] hover:text-[#d4a853] transition-all"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.10)',
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
