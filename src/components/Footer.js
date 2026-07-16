'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'
import BitVolleyball from './BitVolleyball'

const footerNavLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'AI', id: 'ai' },
  { label: 'Contact', id: 'contact' },
]

const socialLinks = [
  { Icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/TricQs' },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/ferndaryzt/' }
]

export default function Footer() {
  const [style, setStyle] = useState({})

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth
      if (vw < 768) {
        const s = Math.min(1, (vw - 12) / 560)
        setStyle({
          position: 'absolute',
          bottom: 0,
          zIndex: 2,
          opacity: 0.7,
          left: '50%',
          transform: `translateX(-50%) scale(${s})`,
          transformOrigin: 'bottom center',
        })
      } else {
        setStyle({
          position: 'absolute',
          bottom: 0,
          zIndex: 2,
          opacity: 0.7,
          left: '50%',
          transform: 'translateX(calc(-50% + 130px))',
        })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        background: 'var(--bg-secondary)',
        minHeight: '70vh',
      }}
    >
      {/* Ambient glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
      />
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-8 relative z-10 flex flex-col h-full">
        {/* Big tagline */}
        <div className="flex-1 flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold leading-[0.95] tracking-[-0.03em]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              <span className="text-gradient">Let&apos;s Create</span>
              <br />
              <span className="text-white/15">The Future</span>
              <br />
              <span className="text-[#f5f5f7]">Together.</span>
            </h2>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-white/[0.06] rounded-full text-[13px] text-[#86868b] hover:text-[#f5f5f7] hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300 group cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              Get in Touch
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {footerNavLinks.map(link => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[11px] text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-300 tracking-[0.04em] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 border border-white/[0.06] rounded-lg flex items-center justify-center text-[#6e6e73] hover:text-[#f5f5f7] hover:border-white/[0.12] transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <social.Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-[10px] text-[#6e6e73]/50 tracking-[0.08em]">
          © {new Date().getFullYear()} · Designed & Developed by Ferdinand Arya Wijaya · Built with Next.js
        </p>
      </div>

      <div style={style}>
        <BitVolleyball />
      </div>
    </footer>
  )
}
