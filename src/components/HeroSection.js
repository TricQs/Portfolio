'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Download, ChevronDown, MapPin, GraduationCap, Code2, Sparkles, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'
import ParticleBackground from './ParticleBackground'
import { GlassEffect } from './ui/liquid-glass'

// BlurText animation component
const BlurText = ({
  text,
  delay = 40,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("")
  }, [text, animateBy])

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  )
}

export default function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-10 overflow-hidden bg-transparent select-none"
    >
      {/* Dynamic Canvas Particles (Low Density, Optimized) */}
      <ParticleBackground />

      {/* Main Hero Center Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full flex flex-col items-center justify-center relative z-10 my-auto text-center">

        {/* 1. Available Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-xs font-semibold tracking-wide text-emerald-300 font-sans">
              Available for Junior &amp; Entry-Level Roles
            </span>
          </div>
        </motion.div>

        {/* 2. Giant Typography ("FERDINAND ARYA") with Capsule Profile Image */}
        <div className="relative w-full max-w-5xl my-2 mb-6 sm:mb-10 flex flex-col items-center justify-center">

          {/* Main Name Typography (Electric Cyan Theme) */}
          <div className="relative text-center w-full">
            <div>
              <BlurText
                text="FERDINAND"
                delay={80}
                animateBy="letters"
                direction="top"
                className="font-bold text-[48px] sm:text-[95px] md:text-[135px] lg:text-[165px] leading-[0.85] tracking-tighter uppercase justify-center whitespace-nowrap drop-shadow-[0_10px_35px_rgba(56,189,248,0.3)] text-[#38bdf8]"
                style={{ fontFamily: "'Fira Code', monospace" }}
              />
            </div>
            <div>
              <BlurText
                text="ARYA"
                delay={80}
                animateBy="letters"
                direction="top"
                className="font-bold text-[48px] sm:text-[95px] md:text-[135px] lg:text-[165px] leading-[0.85] tracking-tighter uppercase justify-center whitespace-nowrap drop-shadow-[0_10px_35px_rgba(56,189,248,0.3)] text-[#38bdf8]"
                style={{ fontFamily: "'Fira Code', monospace" }}
              />
            </div>

            {/* Profile Capsule — dead-center of entire FERDINAND + ARYA block */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <div className="w-[48px] h-[78px] sm:w-[70px] sm:h-[115px] md:w-[88px] md:h-[142px] lg:w-[102px] lg:h-[165px] rounded-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(56,189,248,0.3)] border-2 border-[#38bdf8]/60 relative">
                <Image
                  src="https://lh3.googleusercontent.com/d/1z8TrQCVL6L-IkNCpw1auB8fSPhhxv3-e"
                  alt="Ferdinand Arya Wijaya"
                  fill
                  sizes="(max-width: 768px) 85px, 120px"
                  className="object-cover"
                  style={{ objectPosition: 'center 30%' }}
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3. Subtitle & Concise Bio (Generous Top Margin to Prevent Any Collision) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-10 md:mt-12 space-y-3 max-w-2xl mx-auto"
        >
          <h2
            className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-[#f5f5f7]"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Frontend Developer &amp; Informatics Student
          </h2>
          <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed max-w-xl mx-auto font-sans">
            Building modern, performant web applications with React, Next.js, and TypeScript. Dedicated to engineering craftsmanship, clean architecture, and intuitive digital interfaces.
          </p>
        </motion.div>

        {/* 4. Quick Info Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-[#cbd5e1]"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <MapPin size={13} className="text-[#38bdf8]" /> Tangerang, Indonesia
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <GraduationCap size={13} className="text-[#a855f7]" /> UBM Serpong
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <Code2 size={13} className="text-emerald-400" /> React · Next.js · TS
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <Sparkles size={13} className="text-amber-400" /> 10+ Projects Built
          </span>
        </motion.div>

        {/* 5. Call To Action Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-3">
            {/* Explore Work */}
            <GlassEffect className="rounded-full border border-[#38bdf8]/50 overflow-hidden shadow-[0_0_25px_rgba(56,189,248,0.25)]">
              <button
                onClick={() => {
                  const el = document.getElementById('projects')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-bold rounded-full text-white bg-gradient-to-r from-[#38bdf8]/30 via-[#6366f1]/20 to-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <span>Explore Work</span>
                <ArrowRight size={14} className="text-[#38bdf8]" />
              </button>
            </GlassEffect>

            {/* Download CV */}
            <GlassEffect className="rounded-full border border-white/20 overflow-hidden">
              <a
                href="https://drive.google.com/file/d/1KvDJ4PDQWPXYdr3xumVfAmV3xaYX2YOA/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-bold rounded-full text-[#f5f5f7] bg-white/[0.04] hover:bg-white/[0.08] hover:scale-105 transition-all duration-300"
              >
                <Download size={14} className="text-[#38bdf8]" />
                <span>CV (PDF)</span>
              </a>
            </GlassEffect>
          </div>

          {/* Social Links Glass Pill Container */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-lg">
            {[
              { Icon: GitHubIcon, label: 'GitHub Profile', href: 'https://github.com/TricQs' },
              { Icon: LinkedInIcon, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/ferdinandaryaw/' },
              { Icon: InstagramIcon, label: 'Instagram Profile', href: 'https://www.instagram.com/ferndaryzt/' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#cbd5e1] hover:text-[#38bdf8] hover:bg-white/[0.1] transition-all cursor-pointer"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* 6. Bottom Scroll Down Indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <motion.button
          animate={showScrollIndicator ? { opacity: 0.65, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            const el = document.getElementById('projects')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
          className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
        >
          <span>SCROLL</span>
          <ChevronDown size={14} className="animate-bounce text-[#38bdf8]" />
        </motion.button>
      </div>
    </section>
  )
}
