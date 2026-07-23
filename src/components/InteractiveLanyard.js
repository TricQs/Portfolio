'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, Wifi, Sparkles, Cpu } from 'lucide-react'

export default function InteractiveLanyard() {
  const cardRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  // Position motion values relative to equilibrium
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Physics springs for natural rope & card pendulum swinging
  const x = useSpring(rawX, { stiffness: 350, damping: 18 })
  const y = useSpring(rawY, { stiffness: 350, damping: 18 })

  // Dynamic 3D tilt transforms during drag
  const rotateX = useTransform(y, [-120, 120], [20, -20])
  const rotateY = useTransform(x, [-120, 120], [-20, 20])
  const rotateZ = useTransform(x, [-120, 120], [-12, 12])

  // Direct DOM refs for SVG Strap path to prevent React re-renders on every spring frame
  const pathRef1 = useRef(null)
  const pathRef2 = useRef(null)

  useEffect(() => {
    const updatePath = () => {
      const latestX = x.get()
      const latestY = y.get()
      const anchorX = 120
      const targetX = anchorX + latestX * 0.7
      const targetY = 90 + latestY * 0.7
      const controlX = anchorX + latestX * 0.35
      const controlY = targetY / 2
      const d = `M ${anchorX} 0 Q ${controlX} ${controlY} ${targetX} ${targetY}`
      if (pathRef1.current) pathRef1.current.setAttribute('d', d)
      if (pathRef2.current) pathRef2.current.setAttribute('d', d)
    }

    const unsubscribeX = x.on('change', updatePath)
    const unsubscribeY = y.on('change', updatePath)
    updatePath()

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [x, y])

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto flex flex-col items-center pt-2 select-none">

      {/* Dynamic Lanyard Nylon Strap SVG */}
      <svg
        className="w-[240px] h-[95px] overflow-visible pointer-events-none z-10"
        viewBox="0 0 240 95"
      >
        <defs>
          <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <filter id="strapGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Lanyard Top Fixed Mounting Anchor */}
        <circle cx="120" cy="0" r="5" fill="#f5f5f7" />
        <circle cx="120" cy="0" r="9" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />

        {/* Dynamic Curved Nylon Ribbon Strap */}
        <path
          ref={pathRef1}
          d="M 120 0 Q 120 40 120 80"
          fill="none"
          stroke="url(#strapGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#strapGlow)"
        />
        <path
          ref={pathRef2}
          d="M 120 0 Q 120 40 120 80"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
      </svg>

      {/* Draggable Hanging ID Card */}
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={{ left: -100, right: 100, top: -40, bottom: 120 }}
        dragElastic={0.25}
        dragSnapToOrigin
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false)
          rawX.set(0)
          rawY.set(0)
        }}
        onDrag={(e, info) => {
          rawX.set(info.offset.x)
          rawY.set(info.offset.y)
        }}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          rotateZ,
          transformPerspective: 1000,
        }}
        className="relative z-20 cursor-grab active:cursor-grabbing touch-none group"
      >
        {/* Metal Lanyard Clip / Ring Header */}
        <div className="mx-auto w-12 h-6 flex flex-col items-center justify-center -mb-2 relative z-30">
          <div className="w-6 h-3 rounded-t-md border-2 border-slate-300 bg-gradient-to-b from-slate-400 to-slate-600 shadow-md" />
          <div className="w-8 h-3 rounded-full border border-white/20 bg-slate-800 flex items-center justify-center shadow-inner">
            <div className="w-3 h-1 rounded-full bg-slate-400" />
          </div>
        </div>

        {/* Glassmorphic ID Badge Body */}
        <div
          className={`w-[260px] sm:w-[285px] rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden backdrop-blur-xl ${isDragging
            ? 'border-white/40 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(129,140,248,0.3)] scale-[1.02]'
            : 'border-white/15 hover:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
            }`}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(20,20,25,0.85) 40%, rgba(10,10,12,0.95) 100%)',
          }}
        >
          {/* Holographic Security Overlay Gloss */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.4) 45%, rgba(129,140,248,0.3) 50%, transparent 70%)',
            }}
          />

          {/* Micro Card Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                INF-2026 // VERIFIED
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-white/40 font-mono">
              <Wifi size={10} className="text-emerald-400" /> RFID
            </div>
          </div>

          {/* Avatar & Profile Information */}
          <div className="flex items-center gap-3.5 mb-4">
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg flex-shrink-0 bg-white/5">
              <Image
                src="https://lh3.googleusercontent.com/d/1z8TrQCVL6L-IkNCpw1auB8fSPhhxv3-e"
                alt="Ferdinand Arya Wijaya"
                fill
                sizes="72px"
                className="object-cover"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1 text-[10px] text-indigo-300 font-semibold uppercase tracking-wider">
                <ShieldCheck size={12} /> Front-End Engineer
              </div>
              <h3 className="text-base font-bold text-white tracking-tight truncate font-grotesk mt-0.5">
                Ferdinand Arya
              </h3>
              <p className="text-[11px] text-white/50 truncate mt-0.5">
                Universitas Bunda Mulia
              </p>
            </div>
          </div>

          {/* Micro Tech Badges inside Badge */}
          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/10 mb-3 text-[10px] text-white/70 font-mono">
            <div className="bg-white/5 px-2 py-1 rounded text-center border border-white/5">
              React 19
            </div>
            <div className="bg-white/5 px-2 py-1 rounded text-center border border-white/5">
              Next.js 16
            </div>
            <div className="bg-white/5 px-2 py-1 rounded text-center border border-white/5">
              TypeScript
            </div>
          </div>

          {/* Barcode SVG & Pull Cue */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-0.5 opacity-40 group-hover:opacity-70 transition-opacity">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-white rounded-xs"
                  style={{ width: i % 3 === 0 ? '3px' : i % 2 === 0 ? '1px' : '2px' }}
                />
              ))}
            </div>
            <span className="text-[9px] font-mono text-indigo-300/80 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
              {isDragging ? 'RELEASE TO RECOIL' : 'DRAG TO SWING'}
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
