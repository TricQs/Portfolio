'use client'

import { useEffect, useRef } from 'react'

export default function MouseGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (e) => {
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
      glow.style.opacity = '1'
    }

    const handleMouseLeave = () => {
      glow.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '600px',
        height: '600px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transition: 'opacity 0.4s ease',
        willChange: 'left, top',
      }}
    />
  )
}
