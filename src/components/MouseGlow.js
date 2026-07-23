'use client'

import { useEffect, useRef } from 'react'

export default function MouseGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    // Disable glow completely on touch devices (phones/tablets) to save resources
    if (window.matchMedia('(pointer: coarse)').matches) return

    const glow = glowRef.current
    if (!glow) return

    let rafId = null
    let latestX = 0
    let latestY = 0

    const updatePosition = () => {
      glow.style.transform = `translate3d(${latestX}px, ${latestY}px, 0)`
      glow.style.opacity = '1'
      rafId = null
    }

    const handleMouseMove = (e) => {
      latestX = e.clientX
      latestY = e.clientY
      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition)
      }
    }

    const handleMouseLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      glow.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        left: -300,
        top: -300,
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transition: 'opacity 0.3s ease',
        willChange: 'transform, opacity',
      }}
    />
  )
}
