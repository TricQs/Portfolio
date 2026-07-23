'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
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
  { label: 'Next.js', color: '#f5f5f7' },
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
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Particle canvas */}
      <ParticleBackground />

      {/* ── Ambient glow blobs — refined, less saturated ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 65%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-10 right-0 w-[480px] h-[480px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 65%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.02) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 w-full pt-28 sm:pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.08em] uppercase rounded-full text-emerald-400/90 border border-emerald-500/15"
                style={{ background: 'rgba(16,185,129,0.04)' }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={item} className="space-y-1">
              <h1
                className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[5rem] font-bold leading-[0.95] tracking-[-0.03em]"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <span className="block text-[#f5f5f7]">Frontend</span>
                <span className="block text-shimmer">Developer</span>
                <span className="block text-[#86868b] text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] mt-1 font-medium">
                  &amp; Vibe
                </span>
                <span className="block text-shimmer text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] font-medium">
                  Coding
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="text-[15px] sm:text-base text-[#86868b] leading-[1.7] max-w-md border-l border-white/[0.08] pl-4"
            >
              I build responsive, user-friendly websites and utilize modern AI tools to create fast and clean development workflows.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex items-center gap-2 px-6 py-3 bg-[#f5f5f7] text-[#060606] text-[13px] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
                View Projects
                <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
              <a
                href="https://drive.google.com/file/d/1EZ5gjktT6Llwpk4J7O76dCddTry4_V5c/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 border border-white/[0.08] bg-white/[0.02] text-[#b0b0b5] text-[13px] font-medium rounded-full hover:border-white/[0.15] hover:text-[#f5f5f7] hover:bg-white/[0.04] transition-all duration-300"
              >
                <Download size={13} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                Download CV
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={item} className="flex items-center gap-3 pt-1">
              <span className="text-[10px] text-white/20 tracking-[0.15em] uppercase">Follow</span>
              <div className="h-px w-5 bg-white/[0.06]" />
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 border border-white/[0.06] rounded-xl flex items-center justify-center text-[#6e6e73] hover:text-[#f5f5f7] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <social.Icon size={14} />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 text-[#6e6e73]"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <ArrowDown size={12} />
              </motion.div>
              <span className="tracking-[0.15em] text-[10px] uppercase">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Visual (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ minHeight: '420px' }}
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-white/[0.04]"
              style={{
                background: 'conic-gradient(from 0deg, transparent 75%, rgba(255,255,255,0.05) 100%)',
              }}
            />
            {/* Inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-white/[0.03]"
            />

            {/* Profile image */}
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/[0.08] flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="https://lh3.googleusercontent.com/d/1z8TrQCVL6L-IkNCpw1auB8fSPhhxv3-e"
                alt="Ferdinand Arya"
                fill
                sizes="(max-width: 768px) 176px, 224px"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Tech Badges */}
            {techBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 0.7 + badgePositions[i].delay,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
                style={{ position: 'absolute', ...badgePositions[i] }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5 + i * 0.5,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                  className="px-3 py-1.5 border border-white/[0.06] bg-white/[0.02] backdrop-blur-md rounded-full text-[11px] font-medium whitespace-nowrap flex items-center gap-1.5 hover:border-white/[0.12] transition-colors duration-300 cursor-default text-[#b0b0b5]"
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
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--bg-primary) 20%, transparent)' }}
      />
    </section>
  )
}
