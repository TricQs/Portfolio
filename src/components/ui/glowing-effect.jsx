'use client'

import { memo, useRef, useEffect } from 'react'
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

    useEffect(() => {
      if (disabled || !glow) return

      const container = containerRef.current
      if (!container) return

      const parent = container.parentElement
      if (!parent) return

      let animFrameId = null

      const handlePointerMove = (e) => {
        if (animFrameId) return
        animFrameId = requestAnimationFrame(() => {
          animFrameId = null
          const rect = parent.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          container.style.setProperty('--x', `${x}px`)
          container.style.setProperty('--y', `${y}px`)
          container.style.setProperty('--opacity', '1')
        })
      }

      const handlePointerLeave = () => {
        if (animFrameId) {
          cancelAnimationFrame(animFrameId)
          animFrameId = null
        }
        container.style.setProperty('--opacity', '0')
      }

      parent.addEventListener('pointermove', handlePointerMove, { passive: true })
      parent.addEventListener('pointerleave', handlePointerLeave, { passive: true })

      return () => {
        if (animFrameId) cancelAnimationFrame(animFrameId)
        parent.removeEventListener('pointermove', handlePointerMove)
        parent.removeEventListener('pointerleave', handlePointerLeave)
      }
    }, [disabled, glow])

    if (disabled) return null

    return (
      <div
        ref={containerRef}
        className={cn(
          'pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30',
          className
        )}
        style={{
          opacity: 'var(--opacity, 0)',
        }}
      >
        {/* Card Border Spotlight Glow (Follows Cursor (x,y) 1-to-1) */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            padding: `${borderWidth}px`,
            background: `radial-gradient(${spotlightSize}px circle at var(--x, -500px) var(--y, -500px), #38bdf8 0%, #818cf8 30%, #c084fc 60%, transparent 100%)`,
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Ambient Surface Glass Spotlight Glow */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(${spotlightSize * 1.1}px circle at var(--x, -500px) var(--y, -500px), rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 80%)`,
          }}
        />
      </div>
    )
  }
)

GlowingEffect.displayName = 'GlowingEffect'

export { GlowingEffect }
