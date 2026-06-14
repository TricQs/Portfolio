'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'

const footerNavLinks = [
  { label: 'About',      id: 'about'      },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills',     id: 'skills'     },
  { label: 'Projects',   id: 'projects'   },
  { label: 'AI',         id: 'ai'         },
  { label: 'Contact',    id: 'contact'    },
]

const socialLinks = [
  { Icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/ferdinandaryaw' },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/ferndary/' },
  { Icon: Mail, label: 'Email', href: 'mailto:ferdinandarya80@gmail.com' },
]

export default function Footer() {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        background: '#0d0d0d',
        minHeight: '60vh',
      }}
    >
      {/* Ambient glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-20 pb-10 relative z-10 flex flex-col h-full">
        {/* Big tagline */}
        <div className="flex-1 flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              <span className="text-gradient">Let&apos;s Create</span>
              <br />
              <span className="text-white/20">The Future</span>
              <br />
              <span className="text-white">Together.</span>
            </h2>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 glass border border-white/10 rounded-full text-sm text-[#8a8a8a] hover:text-white hover:border-white/25 transition-all duration-300 group cursor-pointer"
            >
              Get in Touch
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNavLinks.map(link => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs text-[#8a8a8a] hover:text-white transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 glass border border-white/[0.07] rounded-lg flex items-center justify-center text-[#8a8a8a] hover:text-white hover:border-white/20 transition-all duration-300"
              >
                <social.Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-[10px] text-[#8a8a8a]/50 tracking-widest">
          © {new Date().getFullYear()} · Designed & Developed by Ferdinand Arya Wijaya · Built with Next.js
        </p>
      </div>
    </footer>
  )
}
