'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let isVisible = true

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.25
        this.vy = (Math.random() - 0.5) * 0.25
        this.size = Math.random() * 1.2 + 0.5
        this.opacity = Math.random() * 0.35 + 0.1
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`
        ctx.fill()
      }
    }

    const init = () => {
      resize()
      const isMobile = window.innerWidth < 768
      const count = Math.floor((canvas.width * canvas.height) / 15000)
      const maxCount = isMobile ? 30 : 60
      particles = Array.from({ length: Math.min(count, maxCount) }, () => new Particle())
    }

    const animate = () => {
      if (!isVisible) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })

      // Draw connection lines using optimized squared distance checks to avoid Math.sqrt calls
      const maxDist = 110
      const maxDistSq = maxDist * maxDist
      const len = particles.length

      for (let i = 0; i < len; i++) {
        const p1 = particles[i]
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distSq = dx * dx + dy * dy

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq)
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255,255,255,${0.05 * (1 - dist / maxDist)})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(animate)
    }

    const start = () => {
      if (!animId && isVisible) {
        animId = requestAnimationFrame(animate)
      }
    }

    const stop = () => {
      if (animId) {
        cancelAnimationFrame(animId)
        animId = null
      }
    }

    init()
    start()

    const resizeObserver = new ResizeObserver(init)
    resizeObserver.observe(canvas)

    // IntersectionObserver to pause calculations and drawing when off-screen
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) {
          start()
        } else {
          stop()
        }
      },
      { threshold: 0 }
    )
    intersectionObserver.observe(canvas)

    return () => {
      stop()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.6,
      }}
    />
  )
}
