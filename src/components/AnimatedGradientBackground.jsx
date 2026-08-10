'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimatedGradientBackground({
  opacity = 1.0,
  blurAmount = '14px',
}) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 768px)').matches
    }
    return false
  })
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)

    const timer = setTimeout(() => {
      setHasEntered(true)
    }, 1100)

    return () => {
      mq.removeEventListener('change', handler)
      clearTimeout(timer)
    }
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
      className="fixed inset-0 pointer-events-none z-0 select-none bg-[#030305] gpu-layer"
      style={{ opacity, transform: 'translate3d(0,0,0)', contain: 'strict' }}
      aria-hidden="true"
    >
      <motion.div
        initial={{ scaleY: 0.8, scaleX: 0.9, opacity: 0.3 }}
        animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -inset-[22%]"
        style={{
          background: gradient,
          filter: `blur(${blurAmount})`,
          transformOrigin: 'center bottom',
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      />
    </div>
  )
}
