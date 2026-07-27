'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Card3D({ children, className = '', maxRotate = 8, glow = true, overflowHidden = false, onClick }) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })
  const [isTouch] = useState(() =>
    typeof window !== 'undefined' ? ('ontouchstart' in window || navigator.maxTouchPoints > 0) : false
  )
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (isTouch || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rY = ((mouseX / width) - 0.5) * (maxRotate * 2)
    const rX = ((mouseY / height) - 0.5) * (-maxRotate * 2)

    setRotateX(rX)
    setRotateY(rY)

    const glareX = (mouseX / width) * 100
    const glareY = (mouseY / height) * 100
    setGlare({ x: glareX, y: glareY, opacity: 0.12 })
  }

  const handleMouseEnter = () => {
    if (!isTouch) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (isTouch) return
    setRotateX(0)
    setRotateY(0)
    setGlare(prev => ({ ...prev, opacity: 0 }))
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
      className={`h-full ${onClick ? 'cursor-pointer' : ''} ${overflowHidden ? 'overflow-hidden' : ''} ${className}`}
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'subpixel-antialiased',
          willChange: isHovered ? 'transform' : 'auto',
        }}
        className="relative h-full"
      >
        {glow && !isTouch && (
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              opacity: glare.opacity,
              transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              background: `radial-gradient(circle 250px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.2), transparent 70%)`,
            }}
          />
        )}

        <div className="relative z-20 h-full">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
