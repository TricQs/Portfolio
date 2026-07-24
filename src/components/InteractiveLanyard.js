'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function InteractiveLanyard() {
  const cardRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  // Motion values relative to equilibrium
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Physics springs for natural rope & card pendulum swinging
  const x = useSpring(rawX, { stiffness: 350, damping: 20 })
  const y = useSpring(rawY, { stiffness: 350, damping: 20 })

  // Dynamic 3D tilt transforms during drag
  const rotateX = useTransform(y, [-140, 140], [22, -22])
  const rotateY = useTransform(x, [-140, 140], [-22, 22])
  const rotateZ = useTransform(x, [-140, 140], [-14, 14])

  // Direct DOM refs for SVG Strap path to prevent React state re-renders on every frame
  const pathRef1 = useRef(null)
  const pathRef2 = useRef(null)

  useEffect(() => {
    const updatePath = () => {
      const latestX = x.get()
      const latestY = y.get()
      const anchorX = 130
      const anchorY = -70 // Anchored above the top of the container/viewport
      const targetX = anchorX + latestX * 0.72
      const targetY = 100 + latestY * 0.72

      const controlX = anchorX + latestX * 0.36
      const controlY = anchorY + (targetY - anchorY) * 0.5

      const d = `M ${anchorX} ${anchorY} Q ${controlX} ${controlY} ${targetX} ${targetY}`
      if (pathRef1.current) pathRef1.current.setAttribute('d', d)
      if (pathRef2.current) pathRef2.current.setAttribute('d', d)
    }

    const unsubX = x.on('change', updatePath)
    const unsubY = y.on('change', updatePath)
    updatePath()

    return () => {
      unsubX()
      unsubY()
    }
  }, [x, y])

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto flex flex-col items-center select-none overflow-visible">

      {/* Dynamic Ribbon Strap Hanging from top above screen */}
      <svg
        className="w-[260px] h-[110px] overflow-visible pointer-events-none z-10 -mt-8"
        viewBox="0 0 260 110"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lanyardStrapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <filter id="lanyardGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Top Screen Mounting Anchor Ring (extending from above screen) */}
        <circle cx="130" cy="-60" r="6" fill="#f5f5f7" />
        <circle cx="130" cy="-60" r="12" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />

        {/* Smooth Curved Strap Ribbon */}
        <path
          ref={pathRef1}
          d="M 130 -60 Q 130 20 130 100"
          fill="none"
          stroke="url(#lanyardStrapGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#lanyardGlow)"
        />
        <path
          ref={pathRef2}
          d="M 130 -60 Q 130 20 130 100"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Draggable Minimal Photo Card */}
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={{ left: -120, right: 120, top: -50, bottom: 140 }}
        dragElastic={0.2}
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
        className="relative z-20 cursor-grab active:cursor-grabbing touch-none group -mt-2"
        role="region"
        aria-label="Interactive Profile Badge Lanyard"
      >
        {/* Metal Lanyard Clip */}
        <div className="mx-auto w-10 h-6 flex flex-col items-center justify-center -mb-2 relative z-30 pointer-events-none">
          <div className="w-5 h-3 rounded-t-md border-2 border-slate-300 bg-gradient-to-b from-slate-200 to-slate-500 shadow-md" />
          <div className="w-7 h-3 rounded-full border border-white/30 bg-slate-800 flex items-center justify-center shadow-inner">
            <div className="w-2.5 h-1 rounded-full bg-slate-300" />
          </div>
        </div>

        {/* Minimalist Profile Picture Badge Frame */}
        <div
          className={`relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl p-2.5 border transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col items-center justify-center ${
            isDragging
              ? 'border-white/50 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(129,140,248,0.35)] scale-[1.03]'
              : 'border-white/20 hover:border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
          }`}
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(18,18,22,0.9) 60%, rgba(8,8,10,0.98) 100%)',
          }}
        >
          {/* Holographic Gloss Sweep Effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500 z-10"
            style={{
              background: 'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.5) 48%, rgba(129,140,248,0.4) 52%, transparent 70%)',
            }}
          />

          {/* Clean Profile Photo Container */}
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-inner">
            <Image
              src="https://lh3.googleusercontent.com/d/1z8TrQCVL6L-IkNCpw1auB8fSPhhxv3-e"
              alt="Ferdinand Arya Wijaya"
              fill
              sizes="(max-width: 768px) 192px, 224px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
