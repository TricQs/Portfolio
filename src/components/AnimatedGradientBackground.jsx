'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimatedGradientBackground({
  opacity = 1.0,
  blurAmount = '30px',
  speed = 8,
}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const gradient = isMobile
    ? `radial-gradient(
        ellipse 380% 110% at 50% 95%,
        #ff5500 0%,
        #ff0080 8%,
        #7928ca 14%,
        #0055ff 26%,
        rgba(0, 85, 255, 0.18) 42%,
        transparent 55%
      )`
    : `radial-gradient(
        ellipse 220% 120% at 50% 95%,
        #ff5500 0%,
        #ff0080 8%,
        #7928ca 16%,
        #0055ff 24%,
        rgba(0, 85, 255, 0.18) 40%,
        transparent 52%
      )`

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 select-none bg-[#030305]"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Single radial gradient from bottom center — with responsive aspect ratio */}
      <motion.div
        animate={{
          scaleY: [1, 1.04, 0.97, 1],
          scaleX: [1, 1.02, 0.99, 1],
          opacity: [0.85, 1, 0.9, 0.85],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -inset-[8%]"
        style={{
          background: gradient,
          filter: `blur(${blurAmount})`,
          transformOrigin: 'center bottom',
        }}
      />
    </div>
  )
}
