'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import dynamic from 'next/dynamic'

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
  { top: '25%', right: '5%', delay: 0.15 },
  { top: '55%', right: '2%', delay: 0.3 },
  { bottom: '25%', right: '10%', delay: 0.45 },
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

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-8"
          >
            {/* Label */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-[0.15em] uppercase glass border border-white/10 rounded-full text-[#8a8a8a]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={item} className="space-y-2">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <span className="block text-white">Frontend</span>
                <span className="block text-gradient">Developer</span>
                <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2">
                  & AI Prompt
                </span>
                <span className="block text-gradient">Engineer</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-[#8a8a8a] leading-relaxed max-w-lg"
            >
              I build modern digital experiences and craft AI-powered workflows
              through thoughtful design, code, and prompting.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                View Projects
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
              <a
                href="https://drive.google.com/file/d/13-aJqYoIrwuKJuyrQMikF97BiMMVjrtE/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-7 py-3.5 glass border border-white/10 text-white text-sm font-medium rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                Download CV
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 text-[#8a8a8a] text-sm"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ArrowDown size={14} />
              </motion.div>
              <span className="tracking-widest text-xs uppercase">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Right: Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-white/[0.06]"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 70%, rgba(255,255,255,0.08) 100%)',
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
                style={{
                  position: 'absolute',
                  ...badgePositions[i],
                }}
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
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #050505, transparent)',
        }}
      />
    </section>
  )
}
