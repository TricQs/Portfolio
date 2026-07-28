'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, GraduationCap, MapPin, Code2, FolderGit2, Sparkles, ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'
import Magnetic from './Magnetic'
import Card3D from './Card3D'

const socialLinks = [
  { Icon: GitHubIcon, label: 'GitHub Profile', href: 'https://github.com/TricQs' },
  { Icon: LinkedInIcon, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
  { Icon: InstagramIcon, label: 'Instagram Profile', href: 'https://www.instagram.com/ferndaryzt/' },
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
  { top: '-6%', left: '0%', delay: 0 },
  { top: '10%', right: '-10%', delay: 0.15 },
  { top: '50%', right: '-14%', delay: 0.3 },
  { bottom: '6%', right: '-6%', delay: 0.45 },
  { bottom: '-6%', left: '6%', delay: 0.6 },
  { top: '54%', left: '-14%', delay: 0.75 },
]

export default function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Ambient Lighting — Warm Obsidian Gold */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(ellipse at center, rgba(212, 168, 83, 0.12) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(212, 168, 83, 0.15) 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 w-full pt-32 sm:pt-36 pb-20 overflow-visible">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="lg:col-span-7 space-y-7"
          >
            {/* Status Beacon — Gold */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 text-[11px] font-medium tracking-[0.1em] uppercase rounded-full text-[#d4a853] border border-[#d4a853]/30 bg-[#d4a853]/10 backdrop-blur-md shadow-[0_0_20px_rgba(212,168,83,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a853] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a853]" />
                </span>
                Available for Junior &amp; Entry-Level Roles
              </span>
            </motion.div>

            {/* Headline — Gold Name Gradient */}
            <motion.div variants={item} className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#cbd5e1]">
                <Sparkles size={13} className="text-[#d4a853] animate-pulse" />
                Frontend Software Engineer
              </div>
              <h1
                className="text-[2.75rem] sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-[-0.035em]"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <span className="text-gradient-gold">Ferdinand Arya</span> <br />
                <span className="text-gradient font-normal text-2xl sm:text-3xl lg:text-4xl block mt-1">
                  Informatics Student &amp; Web Developer
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-[15px] sm:text-base text-[#cbd5e1] leading-[1.75] max-w-[540px] border-l-2 border-[#d4a853]/40 pl-4 py-1"
            >
              Building modern, performant web applications with React, Next.js, and TypeScript. Dedicated to engineering craftsmanship, clean architecture, and intuitive digital interfaces.
            </motion.p>

            {/* CTAs — Gold Primary */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
              <Magnetic strength={0.25}>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold rounded-full transition-[background,box-shadow] duration-300 cursor-pointer overflow-hidden text-[#08080c]"
                  style={{
                    background: 'linear-gradient(135deg, #e8c67a 0%, #d4a853 50%, #c49a48 100%)',
                    boxShadow: '0 0 35px rgba(212, 168, 83, 0.3), inset 0 1px 1px rgba(255,255,255,0.3)',
                  }}
                >
                  <span className="relative z-10">Explore Work</span>
                  <ChevronRight size={14} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Magnetic>

              <Magnetic strength={0.2}>
                <a
                  href="https://drive.google.com/file/d/1KvDJ4PDQWPXYdr3xumVfAmV3xaYX2YOA/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 bg-white/[0.03] text-[#f5f5f7] text-[13px] font-medium rounded-full hover:border-[#d4a853]/30 hover:bg-white/[0.06] transition-[border-color,background] duration-300 backdrop-blur-sm"
                >
                  <Download size={14} strokeWidth={1.75} className="text-[#d4a853] group-hover:-translate-y-0.5 transition-transform duration-300" />
                  CV (PDF)
                </a>
              </Magnetic>

              <div className="h-6 w-px bg-white/10 hidden sm:block mx-1" />

              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <Magnetic key={social.label} strength={0.3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-[#cbd5e1] hover:text-[#d4a853] hover:border-[#d4a853]/25 hover:bg-white/[0.05] transition-[border-color,color,background] duration-300 bg-white/[0.02]"
                    >
                      <social.Icon size={15} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>

            {/* Quick Proof Strip */}
            <motion.div
              variants={item}
              className="pt-7 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#cbd5e1]"
            >
              <div className="flex items-center gap-2.5">
                <GraduationCap size={15} strokeWidth={1.5} className="text-[#d4a853] flex-shrink-0" />
                <span>UBM Serpong</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Code2 size={15} strokeWidth={1.5} className="text-[#d4a853] flex-shrink-0" />
                <span>React · Next.js · TS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FolderGit2 size={15} strokeWidth={1.5} className="text-[#d4a853] flex-shrink-0" />
                <span>10+ Projects Built</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={15} strokeWidth={1.5} className="text-[#d4a853] flex-shrink-0" />
                <span>Tangerang, Indonesia</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile — Gold Ring Scanner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative lg:col-span-5 flex items-center justify-center pt-8 lg:pt-0 min-h-[440px] overflow-visible"
          >
            <div className="p-14 sm:p-20 rounded-full flex items-center justify-center relative overflow-visible">
              {/* Breathing Gold Aura */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.55, 0.3] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none gpu-layer"
                style={{
                  background: 'radial-gradient(circle, rgba(212, 168, 83, 0.12) 0%, rgba(212, 168, 83, 0.03) 50%, transparent 75%)',
                  filter: 'blur(30px)',
                }}
              />

              {/* Outer Gold Hairline Ring */}
              <div
                className="absolute w-[330px] h-[330px] sm:w-[410px] sm:h-[410px] rounded-full pointer-events-none"
                style={{
                  border: '1.5px solid rgba(212, 168, 83, 0.35)',
                  boxShadow: '0 0 30px rgba(212, 168, 83, 0.15), inset 0 0 30px rgba(212, 168, 83, 0.04)',
                }}
              />

              {/* Inner Hairline Ring */}
              <div className="absolute w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] rounded-full border border-white/8 pointer-events-none" />

              {/* Gold Light Scanner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[330px] h-[330px] sm:w-[410px] sm:h-[410px] rounded-full pointer-events-none"
              >
                <div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
                  style={{
                    background: '#d4a853',
                    boxShadow: '0 0 16px rgba(212, 168, 83, 0.9), 0 0 40px rgba(212, 168, 83, 0.4)',
                  }}
                />
              </motion.div>

              {/* Central Profile Image */}
              <div
                className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden flex items-center justify-center group"
                style={{
                  border: '2px solid rgba(212, 168, 83, 0.35)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(212, 168, 83, 0.15)',
                }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/d/1z8TrQCVL6L-IkNCpw1auB8fSPhhxv3-e"
                  alt="Ferdinand Arya Wijaya"
                  fill
                  sizes="(max-width: 768px) 192px, 240px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Tech Badges — Gold-tinted glass */}
              {techBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.4 + badgePositions[i].delay,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  style={{ position: 'absolute', ...badgePositions[i] }}
                >
                  <Magnetic strength={0.35} slime={true}>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 4 + i * 0.4,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                      }}
                      className="px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer text-[#f5f5f7] select-none"
                      style={{
                        background: `
                          radial-gradient(
                            circle 80px at 25% 25%,
                            rgba(255, 255, 255, 0.18) 0%,
                            transparent 70%
                          ),
                          linear-gradient(
                            135deg,
                            rgba(255, 255, 255, 0.10) 0%,
                            rgba(255, 255, 255, 0.03) 50%,
                            rgba(212, 168, 83, 0.06) 100%
                          )
                        `,
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: `
                          inset 0 1.5px 0 rgba(255, 255, 255, 0.35),
                          inset 0 -1px 0 rgba(255, 255, 255, 0.08),
                          0 8px 32px rgba(0, 0, 0, 0.5)
                        `,
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: badge.color, boxShadow: `0 0 8px ${badge.color}` }}
                      />
                      <span className="tracking-tight text-[12px]">{badge.label}</span>
                    </motion.div>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
