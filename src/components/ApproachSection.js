'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Palette, Target, Bot, BookOpen } from 'lucide-react'

const approaches = [
  {
    number: '01',
    icon: Palette,
    title: 'Design First',
    description:
      'Focusing on intuitive user experience and clean design before writing code. Good websites start with understanding user needs.',
  },
  {
    number: '02',
    icon: Target,
    title: 'Build With Purpose',
    description:
      'Creating clean, functional components that solve real problems without unnecessary complexity.',
  },
  {
    number: '03',
    icon: Bot,
    title: 'AI-Assisted Workflow',
    description:
      'Utilizing AI tools like ChatGPT, Claude, and Gemini to boost productivity, debug faster, and write cleaner code.',
  },
  {
    number: '04',
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Constantly exploring modern web frameworks and industry best practices to improve every day.',
  },
]

export default function ApproachSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="approach"
      ref={ref}
      className="section-padding relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#86868b]">
            02 — Approach
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold mt-4 leading-[1.1] tracking-[-0.03em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            My Approach
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {approaches.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-5 cursor-default overflow-hidden hover:border-white/[0.12] transition-all duration-500"
              style={{ background: 'rgba(255,255,255,0.015)' }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)',
                }}
              />

              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                }}
              />

              {/* Number */}
              <span
                className="text-5xl font-bold text-white/[0.04] select-none absolute top-4 right-5"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {item.number}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl border border-white/[0.06] flex items-center justify-center group-hover:border-white/[0.12] transition-colors duration-300" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <item.icon
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#86868b] group-hover:text-[#f5f5f7] transition-colors duration-300"
                />
              </div>

              {/* Content */}
              <div className="space-y-2.5 relative z-10">
                <h3
                  className="text-[15px] font-semibold text-[#f5f5f7] leading-snug tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#86868b] leading-[1.7]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
