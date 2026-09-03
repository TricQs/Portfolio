'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const springConfig = { stiffness: 200, damping: 20, mass: 0.5 }

export default function HolographicCard({ children, className = '', intensity = 1 }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseXRaw = useMotionValue(0.5)
  const mouseYRaw = useMotionValue(0.5)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)
  const springMouseX = useSpring(mouseXRaw, { stiffness: 300, damping: 25 })
  const springMouseY = useSpring(mouseYRaw, { stiffness: 300, damping: 25 })

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))

      mouseXRaw.set(x)
      mouseYRaw.set(y)
      rotateX.set((y - 0.5) * -8 * intensity)
      rotateY.set((x - 0.5) * 8 * intensity)
    },
    [intensity, mouseXRaw, mouseYRaw, rotateX, rotateY]
  )

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
    mouseXRaw.set(0.5)
    mouseYRaw.set(0.5)
  }, [rotateX, rotateY, mouseXRaw, mouseYRaw])

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {/* Original content */}
      <div className="relative z-10">{children}</div>

      {/* Iridescent rainbow overlay — follows cursor angle */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 mix-blend-color-dodge"
        style={{
          opacity: isHovered ? 0.35 * intensity : 0,
          transition: 'opacity 0.4s ease-out',
          background: `
            linear-gradient(
              ${springMouseX.get() * 360}deg,
              rgba(255, 0, 128, 0.15) 0%,
              rgba(0, 255, 200, 0.12) 25%,
              rgba(100, 100, 255, 0.15) 50%,
              rgba(255, 200, 0, 0.12) 75%,
              rgba(255, 0, 128, 0.15) 100%
            )
          `,
        }}
      />

      {/* White glare spot — follows cursor position */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-20"
        style={{
          opacity: isHovered ? 0.5 * intensity : 0,
          transition: 'opacity 0.35s ease-out',
          background: `radial-gradient(
            ellipse 40% 50% at ${springMouseX.get() * 100}% ${springMouseY.get() * 100}%,
            rgba(255, 255, 255, 0.12) 0%,
            transparent 70%
          )`,
        }}
      />

      {/* Edge highlight border glow */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-20"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: `
              inset 0 0 20px rgba(56, 189, 248, 0.05),
              0 0 30px rgba(168, 85, 247, 0.08)
            `,
          }}
        />
      )}
    </motion.div>
  )
}
