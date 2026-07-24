'use client'

import { useEffect, useRef } from 'react'

export default function BitVolleyball() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let visible = true

    const PS = 5
    const W = 560
    const H = 116
    const NET_X = 280
    const GROUND_Y = 98
    const NET_TOP = 80

    const LEFT_BASE = 170
    const LEFT_MIN = 100
    const LEFT_MAX = 262
    const RIGHT_BASE = 390
    const RIGHT_MIN = 298
    const RIGHT_MAX = 460

    let leftX = LEFT_BASE
    let rightX = RIGHT_BASE
    let bx = LEFT_BASE
    let sx = LEFT_BASE
    let tx = RIGHT_BASE
    let t = 0
    let speed = 0.008
    let arc = 60
    let hits = 0
    let maxHits
    let frame = 0
    let leftHit = 0
    let rightHit = 0

    let phase = 'rally'
    let phaseT = 0
    let flyinX
    let missStartX = 0
    let missDir = 1

    let scoreA = 0
    let scoreB = 0
    let pointFlash = 0
    let pointSide = ''
    let serving = ''

    const HEAD_Y = GROUND_Y - PS * 4
    let by = HEAD_Y

    const newRally = () => {
      phase = 'rally'
      phaseT = 0
      hits = 0
      maxHits = 3 + Math.floor(Math.random() * 4)
      leftX = LEFT_BASE
      rightX = RIGHT_BASE

      if (!serving) serving = Math.random() > 0.5 ? 'A' : 'B'
      const startLeft = serving === 'A'
      sx = startLeft ? LEFT_BASE : RIGHT_BASE
      bx = sx
      by = HEAD_Y
      tx = startLeft
        ? RIGHT_MIN + Math.random() * (RIGHT_MAX - RIGHT_MIN)
        : LEFT_MIN + Math.random() * (LEFT_MAX - LEFT_MIN)
      t = 0
      arc = 54 + Math.random() * 16
      speed = 0.006 + Math.random() * 0.008
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      canvas.width = W * dpr
      canvas.height = H * dpr
    }

    const easeOut = (x) => 1 - Math.pow(1 - x, 2)

    newRally()
    resize()

    const animate = () => {
      if (!visible) return
      frame++
      const dpr = window.devicePixelRatio || 1
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)

      if (leftHit > 0) leftHit--
      if (rightHit > 0) rightHit--
      if (pointFlash > 0) pointFlash--

      // ── Update ──
      if (phase === 'rally') {
        t += speed

        if (t >= 1) {
          hits++

          if (hits >= maxHits) {
            if (sx < NET_X) { scoreA++; pointSide = 'A' }
            else { scoreB++; pointSide = 'B' }
            serving = pointSide
            pointFlash = 45
            phase = 'miss'
            phaseT = 0
            missStartX = tx
            missDir = tx - sx > 0 ? 1 : -1
          } else {
            t = 0
            bx = tx
            if (bx < NET_X) leftHit = 10
            else rightHit = 10
            sx = bx
            tx = bx < NET_X
              ? RIGHT_MIN + Math.random() * (RIGHT_MAX - RIGHT_MIN)
              : LEFT_MIN + Math.random() * (LEFT_MAX - LEFT_MIN)
            arc = 54 + Math.random() * 16
            speed = 0.006 + Math.random() * 0.008
          }
        }

        if (phase === 'rally') {
          bx = sx + (tx - sx) * t
          by = HEAD_Y - arc * Math.sin(t * Math.PI)

          if (tx > NET_X) rightX += (tx - rightX) * 0.045
          else leftX += (tx - leftX) * 0.045
          leftX += (LEFT_BASE - leftX) * 0.012
          rightX += (RIGHT_BASE - rightX) * 0.012
          leftX = Math.max(LEFT_MIN, Math.min(LEFT_MAX, leftX))
          rightX = Math.max(RIGHT_MIN, Math.min(RIGHT_MAX, rightX))
        }
      } else if (phase === 'miss') {
        phaseT++
        const f = Math.min(phaseT / 28, 1)
        bx = missStartX + missDir * f * 50
        by = HEAD_Y + f * (GROUND_Y - HEAD_Y)
        if (phaseT >= 28) { phase = 'break'; phaseT = 0 }
      } else if (phase === 'break') {
        phaseT++
        bx = -100; by = -100
        if (phaseT >= 52) {
          phase = 'flyin'
          phaseT = 0
          flyinX = Math.random() > 0.5
            ? LEFT_MIN + Math.random() * (LEFT_MAX - LEFT_MIN)
            : RIGHT_MIN + Math.random() * (RIGHT_MAX - RIGHT_MIN)
        }
      } else if (phase === 'flyin') {
        phaseT++
        const f = Math.min(phaseT / 28, 1)
        bx = flyinX
        by = -PS * 6 + (HEAD_Y + PS * 6) * f
        if (phaseT >= 28) newRally()
      }

      // ── Draw ──
      const pix = (x, y, color, w, h) => {
        ctx.fillStyle = color
        ctx.fillRect(Math.round(x), Math.round(y), w || PS, h || PS)
      }

      // Faint ground line
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.fillRect(80, GROUND_Y + 1, 400, 1)

      // Net
      for (let ny = NET_TOP; ny < GROUND_Y; ny += 8) {
        pix(NET_X, ny, 'rgba(255,255,255,0.25)')
      }

      // Players
      const bobL = Math.sin(frame * 0.04) * 1.2
      const bounceL = leftHit > 0 ? -3 * easeOut(leftHit / 10) : 0
      const bobR = Math.sin(frame * 0.04 + Math.PI) * 1.2
      const bounceR = rightHit > 0 ? -3 * easeOut(rightHit / 10) : 0

      const drawPlayer = (x, y) => {
        pix(x, y - PS * 3, 'rgba(255,255,255,0.9)')
        pix(x, y - PS * 2, 'rgba(255,255,255,0.9)')
        pix(x, y - PS, 'rgba(255,255,255,0.9)')
      }

      drawPlayer(leftX, GROUND_Y + bobL + bounceL)
      drawPlayer(rightX, GROUND_Y + bobR + bounceR)

      // Ball
      if (phase !== 'break') {
        pix(bx - PS, by - PS, '#60a5fa', PS * 2, PS * 2)
      }

      // Score Text
      const txt = (str, x, y, color, size, weight) => {
        ctx.fillStyle = color
        ctx.font = (weight || '') + ' ' + (size || 9) + 'px monospace'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillText(str, x, y)
      }

      const sy = NET_TOP - 18
      txt(scoreA, NET_X - 30, sy, 'rgba(255,255,255,0.6)', 9)
      txt('-', NET_X, sy, 'rgba(255,255,255,0.3)', 9)
      txt(scoreB, NET_X + 30, sy, 'rgba(255,255,255,0.6)', 9)
      txt('●', NET_X + (serving === 'A' ? -42 : 42), sy,
        serving ? '#60a5fa' : 'rgba(255,255,255,0)', 9)

      if (pointFlash > 24) {
        const label = pointSide === 'A' ? 'A +1' : 'B +1'
        const cx = pointSide === 'A' ? NET_X - 80 : NET_X + 80
        txt(label, cx, sy, '#60a5fa', 8, 'bold')
      }

      raf = requestAnimationFrame(animate)
    }

    const startAnim = () => {
      if (!raf && visible) {
        raf = requestAnimationFrame(animate)
      }
    }

    const stopAnim = () => {
      if (raf) {
        cancelAnimationFrame(raf)
        raf = null
      }
    }

    startAnim()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting
        if (visible) startAnim()
        else stopAnim()
      },
      { threshold: 0 }
    )
    io.observe(canvas)

    return () => {
      stopAnim()
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        display: 'block',
        pointerEvents: 'none',
        imageRendering: 'pixelated',
        opacity: 0.65,
      }}
    />
  )
}
