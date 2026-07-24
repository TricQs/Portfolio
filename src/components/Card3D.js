'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Card3D({ children, className = '', maxRotate = 8, glow = true, overflowHidden = true }) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

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

  const handleMouseLeave = () => {
    if (isTouch) return
    setRotateX(0)
    setRotateY(0)
    setGlare(prev => ({ ...prev, opacity: 0 }))
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`relative ${overflowHidden ? 'overflow-hidden' : ''} ${className}`}
    >
      {children}

      {glow && !isTouch && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-30"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 250px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.2), transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  )
}
