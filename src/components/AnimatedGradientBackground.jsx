'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimatedGradientBackground({
  opacity = 1.0,
  blurAmount = '30px',
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
        ellipse 380% 130% at 50% 95%,
        #ff5500 0%,
        #ff0080 12%,
        #7928ca 20%,
        #0055ff 30%,
        rgba(0, 85, 255, 0.18) 46%,
        transparent 58%
      )`
    : `radial-gradient(
        ellipse 220% 140% at 50% 102%,
        #ff5500 0%,
        #ff0080 15%,
        #7928ca 21%,
        #0055ff 28%,
        rgba(0, 85, 255, 0.18) 42%,
        transparent 56%
      )`

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 select-none bg-[#030305]"
      style={{ opacity }}
      aria-hidden="true"
    >
      <motion.div
        initial={{ scaleY: 0.7, scaleX: 0.8, opacity: 0.35 }}
        animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.2, 1] }}
        className="absolute -inset-[25%]"
        style={{
          background: gradient,
          filter: `blur(${blurAmount})`,
          transformOrigin: 'center bottom',
        }}
      />
    </div>
  )
}
