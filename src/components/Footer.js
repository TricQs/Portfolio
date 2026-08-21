'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'
import Magnetic from './Magnetic'

const footerNavLinks = [
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
]

const socialLinks = [
  { Icon: GitHubIcon, label: 'GitHub Profile', href: 'https://github.com/TricQs' },
  { Icon: LinkedInIcon, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
  { Icon: InstagramIcon, label: 'Instagram Profile', href: 'https://www.instagram.com/ferndaryzt/' }
]

export default function Footer() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-100px' })

  return (
    <footer className="relative z-10 bg-transparent pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-8 relative z-10 flex flex-col h-full">
        {/* Footer Heading with Scroll-Triggered Entrance */}
        <div className="flex-1 flex items-center" ref={headingRef}>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold leading-[0.98] tracking-[-0.03em]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              <span className="text-gradient-gold">Ready to collaborate?</span>
              <br />
              <span className="text-[#f5f5f7]">Let&apos;s build together.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Magnetic strength={0.3}>
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileTap={{ scaleX: 1.18, scaleY: 0.82 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-[#d4a853]/15 rounded-full text-xs sm:text-sm text-[#cbd5e1] hover:text-[#d4a853] hover:border-[#d4a853]/30 hover:bg-[#d4a853]/5 transition-[border-color,color,background] duration-300 group cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  Contact Me
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </motion.button>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom Bar with Staggered Entrance */}
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer Navigation">
            {footerNavLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 10 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                whileTap={{ scaleX: 1.15, scaleY: 0.85 }}
                className="text-xs text-[#cbd5e1] hover:text-white transition-colors tracking-wide cursor-pointer font-medium"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social, i) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={headingInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Magnetic strength={0.3}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 border border-white/[0.08] rounded-lg flex items-center justify-center text-[#cbd5e1] hover:text-[#d4a853] hover:border-[#d4a853]/25 transition-[border-color,color] duration-300 bg-white/[0.02]"
                  >
                    <social.Icon size={14} />
                  </a>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-[11px] text-[#cbd5e1] tracking-wide"
        >
          © {new Date().getFullYear()} · Ferdinand Arya Wijaya · Informatics Student &amp; Front-End Developer
        </motion.p>
      </div>
    </footer>
  )
}
