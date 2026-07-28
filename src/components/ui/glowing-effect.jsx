'use client'

import { memo, useState, useCallback, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

const GlowingEffect = memo(
  ({
    glow = true,
    className = '',
    borderWidth = 1.5,
    spotlightSize = 380,
    disabled = false,
  }) => {
    const containerRef = useRef(null)
    const [mousePos, setMousePos] = useState({ x: -500, y: -500, opacity: 0 })

    const handlePointerMove = useCallback((e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const isInside =
        e.clientX >= rect.left - 40 &&
        e.clientX <= rect.right + 40 &&
        e.clientY >= rect.top - 40 &&
        e.clientY <= rect.bottom + 40

      if (isInside) {
        setMousePos({ x, y, opacity: 1 })
      } else {
        setMousePos((prev) => ({ ...prev, opacity: 0 }))
      }
    }, [])

    useEffect(() => {
      if (disabled) return
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
      return () => window.removeEventListener('pointermove', handlePointerMove)
    }, [handlePointerMove, disabled])

    if (disabled) return null

    return (
      <div
        ref={containerRef}
        className={cn(
          'pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30',
          className
        )}
        style={{ opacity: glow ? 1 : 0 }}
      >
        {/* Card Border Spotlight Glow (Follows Cursor (x,y) 1-to-1) */}
        <div
          className="absolute inset-0 rounded-[inherit] transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: mousePos.opacity,
            padding: `${borderWidth}px`,
            background: `radial-gradient(${spotlightSize}px circle at ${mousePos.x}px ${mousePos.y}px, #38bdf8 0%, #818cf8 30%, #c084fc 60%, transparent 100%)`,
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Ambient Surface Glass Spotlight Glow */}
        <div
          className="absolute inset-0 rounded-[inherit] transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: mousePos.opacity * 0.2,
            background: `radial-gradient(${spotlightSize * 1.1}px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 80%)`,
          }}
        />
      </div>
    )
  }
)

GlowingEffect.displayName = 'GlowingEffect'

export { GlowingEffect }
