'use client'

import dynamic from 'next/dynamic'

const MouseGlowInner = dynamic(() => import('./MouseGlow'), { ssr: false })

export default function MouseGlowWrapper() {
  return <MouseGlowInner />
}
