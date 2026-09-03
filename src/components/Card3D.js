'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const springConfig = { stiffness: 260, damping: 22, mass: 0.6 }

export default function Card3D({
  children,
  className = '',
  overflowHidden = false,
  onClick,
  maxRotate = 8,
  enableTilt = true,
}) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = useCallback(
    (e) => {
      if (!enableTilt || !cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      const clampedX = Math.max(0, Math.min(1, x))
      const clampedY = Math.max(0, Math.min(1, y))

      rotateX.set((clampedY - 0.5) * -maxRotate * 2)
      rotateY.set((clampedX - 0.5) * maxRotate * 2)
      mouseX.set(clampedX)
      mouseY.set(clampedY)
    },
    [enableTilt, maxRotate, rotateX, rotateY, mouseX, mouseY]
  )

  const handleMouseEnter = useCallback(() => {
    if (!enableTilt) return
    setIsHovered(true)
  }, [enableTilt])

  const handleMouseLeave = useCallback(() => {
    if (!enableTilt) return
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
    mouseX.set(0.5)
    mouseY.set(0.5)
  }, [enableTilt, rotateX, rotateY, mouseX, mouseY])

  if (!enableTilt) {
    return (
      <div
        onClick={onClick}
        className={`h-full ${onClick ? 'cursor-pointer' : ''} ${overflowHidden ? 'overflow-hidden' : ''} ${className}`}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        '--mouse-x': mouseX,
        '--mouse-y': mouseY,
      }}
      className={`h-full will-change-transform ${onClick ? 'cursor-pointer' : ''} ${overflowHidden ? 'overflow-hidden' : ''} ${className}`}
    >
      {children}

      {/* Specular glare highlight following cursor */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-30"
          style={{
            background: `radial-gradient(circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  )
}
