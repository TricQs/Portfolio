'use client'

import { useRef } from 'react'
import { motion, useInView, useCountUp } from 'framer-motion'
import { Code2, Cpu, Workflow, GraduationCap } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { icon: Code2, value: '10+', label: 'Projects Built' },
  { icon: Cpu, value: '15+', label: 'Technologies Learned' },
  { icon: Workflow, value: '20+', label: 'AI Workflows Created' },
  { icon: GraduationCap, value: 'S1', label: 'Informatics Student' },
]

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="card-glow glass border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-3 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500 group cursor-default"
    >
      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <stat.icon size={17} className="text-[#8a8a8a] group-hover:text-white transition-colors duration-300" />
      </div>
      <div
        className="text-3xl font-bold text-white"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {stat.value}
      </div>
      <p className="text-xs text-[#6a6a6a] uppercase tracking-widest">{stat.label}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section-padding relative">
      {/* Section glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            01 — About
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-3 leading-tight text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-6">
            {[
              'I am an Undergraduate Informatics Student at Universitas Bunda Mulia Serpong, passionate about Front-End Development, User Experience, and Artificial Intelligence on websites and applications.',
              'I enjoy transforming ideas into intuitive digital products while leveraging AI tools to accelerate creativity and productivity.',
              'Beyond coding, I love vibe coding — actively leveraging AI tools like ChatGPT, Claude, and Gemini to speed up workflows, solve problems, and build innovative solutions.',
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * (i + 1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`leading-relaxed ${i === 0 ? 'text-lg text-white' : 'text-[#8a8a8a]'}`}
              >
                {para}
              </motion.p>
            ))}

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 relative rounded-2xl overflow-hidden glass border border-white/[0.07] aspect-[4/3] flex items-center justify-center"
            >
              <Image
                src="https://lh3.googleusercontent.com/d/1z8TrQCVL6L-IkNCpw1auB8fSPhhxv3-e"
                alt="Ferdinand Arya"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>

            {/* Tagline */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="glass border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-full"
                style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
              />
              <p className="text-sm text-[#8a8a8a] leading-relaxed italic pl-4">
                "Design is not just what it looks like and feels like. Design is how it works — and I bring that philosophy to every project."
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
