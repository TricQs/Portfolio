'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import dynamic from 'next/dynamic'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'

const socialLinks = [
  { Icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/TricQs' },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/ferndaryzt/' },
]

const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false })

const techBadges = [
  { label: 'ChatGPT', color: '#10a37f' },
  { label: 'Claude', color: '#c96342' },
  { label: 'Gemini', color: '#4285f4' },
  { label: 'Next.js', color: '#ffffff' },
  { label: 'React', color: '#61dafb' },
  { label: 'TypeScript', color: '#3178c6' },
]

const badgePositions = [
  { top: '10%', left: '8%', delay: 0 },
  { top: '25%', right: '8%', delay: 0.15 },
  { top: '55%', right: '6%', delay: 0.3 },
  { bottom: '25%', right: '12%', delay: 0.45 },
  { bottom: '15%', left: '5%', delay: 0.6 },
  { top: '65%', left: '3%', delay: 0.75 },
]

export default function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden grid-overlay"
    >
      {/* Particle canvas */}
      <ParticleBackground />

      {/* ── Colorful ambient glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue blob — left */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 65%)' }}
        />
        {/* Purple blob — right */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-10 right-0 w-[480px] h-[480px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 65%)' }}
        />
        {/* Teal blob — bottom */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 65%)' }}
        />
        {/* White centre vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 w-full pt-24 sm:pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div variants={item}>
              <span
                className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase rounded-full text-green-400 border border-green-500/20"
                style={{ background: 'rgba(20,184,166,0.06)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={item} className="space-y-1">
              <h1
                className="text-[2.8rem] sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <span className="block text-white">Frontend</span>
                <span className="block text-shimmer">Developer</span>
                <span className="block text-white/60 text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium">
                  &amp; Vibe
                </span>
                <span className="block text-shimmer text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl font-medium">
                  Coding
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-[#6a6a6a] leading-relaxed max-w-lg border-l-2 border-white/10 pl-4"
            >
              I build modern digital experiences and craft AI-powered workflows
              through thoughtful design, code, and prompting.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
              >
                {/* Shimmer overlay on button */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                View Projects
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
              <a
                href="https://drive.google.com/file/d/1aSIy1P0ZhF8H6Vl72l4bGj1VehA9x5E-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-7 py-3.5 glass border border-white/10 text-white/80 text-sm font-medium rounded-full hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                Download CV
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={item} className="flex items-center gap-3 pt-1">
              <span className="text-[10px] text-white/25 tracking-[0.2em] uppercase">Follow</span>
              <div className="h-px w-6 bg-white/10" />
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 glass border border-white/[0.07] rounded-xl flex items-center justify-center text-[#6a6a6a] hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors duration-300"
                >
                  <social.Icon size={15} />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 text-[#4a4a4a]"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ArrowDown size={13} />
              </motion.div>
              <span className="tracking-[0.2em] text-[10px] uppercase">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Visual (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ minHeight: '420px' }}
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-white/[0.06]"
              style={{
                background: 'conic-gradient(from 0deg, transparent 70%, rgba(255,255,255,0.08) 100%)',
              }}
            />
            {/* Inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-white/[0.04]"
            />

            {/* Profile image */}
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden glass border border-white/10 flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/d/1z8TrQCVL6L-IkNCpw1auB8fSPhhxv3-e"
                alt="Ferdinand Arya"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Tech Badges */}
            {techBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 0.8 + badgePositions[i].delay,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                style={{ position: 'absolute', ...badgePositions[i] }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + i * 0.5,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                  className="px-3 py-1.5 glass border border-white/10 rounded-full text-xs font-medium whitespace-nowrap flex items-center gap-1.5 hover:border-white/25 transition-colors duration-300 cursor-default"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: badge.color }}
                  />
                  {badge.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #050505 30%, transparent)' }}
      />
    </section>
  )
}
