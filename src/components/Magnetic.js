'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Magnetic({ children, strength = 0.3, className = '', slime = true }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const handleMouseMove = (e) => {
    if (isTouch || !ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * strength, y: middleY * strength })
  }

  const handleMouseLeave = () => {
    if (isTouch) return
    setPosition({ x: 0, y: 0 })
  }

  if (isTouch) {
    return (
      <motion.div
        whileTap={slime ? { scaleX: 1.14, scaleY: 0.86 } : { scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 500, damping: 14, mass: 0.6 }}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileTap={slime ? { scaleX: 1.14, scaleY: 0.86 } : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 500, damping: 14, mass: 0.6 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
