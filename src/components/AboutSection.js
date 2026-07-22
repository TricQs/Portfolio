'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="card-glow border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-500 group cursor-default"
      style={{ background: 'rgba(255,255,255,0.015)' }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <stat.icon size={16} strokeWidth={1.5} className="text-[#86868b] group-hover:text-[#f5f5f7] transition-colors duration-300" />
      </div>
      <div
        className="text-3xl font-bold text-[#f5f5f7] tracking-[-0.02em]"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {stat.value}
      </div>
      <p className="text-[11px] text-[#6e6e73] uppercase tracking-[0.1em] font-medium">{stat.label}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section-padding relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#86868b]">
            01 — About
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold mt-4 leading-[1.1] tracking-[-0.03em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Text */}
          <div className="space-y-6">
            {[
              'I am an Undergraduate Informatics Student at Universitas Bunda Mulia Serpong, passionate about Front-End Development, User Experience, and Artificial Intelligence on websites and applications.',
              'I enjoy transforming ideas into intuitive digital products while leveraging AI tools to accelerate creativity and productivity.',
              'Beyond coding, I love vibe coding — actively leveraging AI tools like ChatGPT, Claude, and Gemini to speed up workflows, solve problems, and build innovative solutions.',
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 * (i + 1), duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`leading-[1.75] ${i === 0 ? 'text-[15px] sm:text-base text-[#f5f5f7]' : 'text-[15px] text-[#86868b]'}`}
              >
                {para}
              </motion.p>
            ))}

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 relative rounded-2xl overflow-hidden border border-white/[0.06] aspect-[4/3] flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.015)' }}
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
              transition={{ delay: 0.5, duration: 0.7 }}
              className="border border-white/[0.06] rounded-2xl p-6 relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.015)' }}
            >
              <div
                className="absolute top-0 left-0 w-[2px] h-full rounded-full"
                style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)' }}
              />
              <p className="text-[13px] text-[#86868b] leading-[1.8] italic pl-4">
                &ldquo;Design is not just what it looks like and feels like. Design is how it works &mdash; and I bring that philosophy to every project.&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
