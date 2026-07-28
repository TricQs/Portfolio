'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2, MapPin, GraduationCap, Code2, ExternalLink, Sparkles } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '../SocialIcons'

export function AvatarHoverCard({ children, avatarSrc, name = 'Ferdinand Arya Wijaya', title = 'Frontend Software Engineer' }) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  return (
    <div
      className="relative inline-block z-30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Avatar Element */}
      <div className="cursor-pointer">
        {children}
      </div>

      {/* Floating Avatar Hover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.6 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80 sm:w-88 p-5 rounded-2xl bg-[#08080d]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(56,189,248,0.15)] z-50 pointer-events-auto"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 35px rgba(56, 189, 248, 0.2), inset 0 1px 1px rgba(255,255,255,0.2)',
            }}
          >
            {/* Header: Mini Avatar & Info */}
            <div className="flex items-start gap-3.5 mb-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#38bdf8]/50 flex-shrink-0 shadow-md">
                <Image
                  src={avatarSrc}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white truncate tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {name}
                  </h4>
                  <CheckCircle2 size={14} className="text-[#38bdf8] flex-shrink-0 fill-[#38bdf8]/20" />
                </div>
                <p className="text-xs text-[#38bdf8] font-mono font-medium truncate">
                  @ferdinandarya
                </p>
                <p className="text-[11px] text-[#cbd5e1] font-medium mt-0.5 truncate">
                  {title}
                </p>
              </div>
            </div>

            {/* Status Beacon Badge */}
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider text-[#38bdf8] border border-[#38bdf8]/30 bg-[#38bdf8]/10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#38bdf8]" />
                </span>
                Available for Junior & Entry Roles
              </span>
            </div>

            {/* Bio Statement */}
            <p className="text-xs text-[#cbd5e1] leading-relaxed mb-4">
              Informatics student at UBM Serpong focusing on Next.js, React & TypeScript web application craftsmanship.
            </p>

            {/* Quick Proof Badges */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-[#cbd5e1] mb-4">
              <div className="flex items-center gap-1.5">
                <GraduationCap size={13} className="text-[#38bdf8]" />
                <span className="truncate">UBM Serpong</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 size={13} className="text-[#38bdf8]" />
                <span className="truncate">React & Next.js</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#38bdf8]" />
                <span className="truncate">10+ Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#38bdf8]" />
                <span className="truncate">Tangerang, ID</span>
              </div>
            </div>

            {/* Social Action Strip */}
            <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/10">
              <span className="text-[10px] text-[#94a3b8] font-mono">CONNECT:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/CodeMelvin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-[#cbd5e1] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
                >
                  <GitHubIcon size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/ferdinand-arya-wijaya-046648316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-[#cbd5e1] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
                >
                  <LinkedInIcon size={14} />
                </a>
                <a
                  href="https://instagram.com/ferdinand_arya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-[#cbd5e1] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
                >
                  <InstagramIcon size={14} />
                </a>
              </div>
            </div>

            {/* Arrow Tip */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#08080d]/95" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
