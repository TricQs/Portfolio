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
      'I focus on user experience before writing a single line of code. Great products start with understanding the human on the other side of the screen.',
  },
  {
    number: '02',
    icon: Target,
    title: 'Build With Purpose',
    description:
      'Every component I build should solve a real problem. I avoid over-engineering and stay focused on delivering measurable value.',
  },
  {
    number: '03',
    icon: Bot,
    title: 'AI Enhanced Workflow',
    description:
      'I leverage ChatGPT, Claude, and Gemini to increase speed, quality, and creativity — treating AI not as a shortcut but as a creative partner.',
  },
  {
    number: '04',
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Technology moves fast. I constantly explore new frameworks, design patterns, and modern development practices to stay ahead.',
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
      <div
        className="absolute inset-0 grid-overlay pointer-events-none"
        style={{ opacity: 0.5 }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            02 — Approach
          </span>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mt-3 leading-tight text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            My Approach
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative glass border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 cursor-default overflow-hidden hover:border-white/15 transition-colors duration-500"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)',
                }}
              />

              {/* Top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                }}
              />

              {/* Number */}
              <span
                className="text-6xl font-bold text-white/[0.06] select-none absolute top-4 right-6"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {item.number}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-300">
                <item.icon
                  size={18}
                  className="text-[#8a8a8a] group-hover:text-white transition-colors duration-300"
                />
              </div>

              {/* Content */}
              <div className="space-y-3 relative z-10">
                <h3
                  className="text-lg font-semibold text-white leading-snug"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#8a8a8a] leading-relaxed">
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
