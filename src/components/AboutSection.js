'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, GraduationCap, Layout, Sparkles, Quote } from 'lucide-react'
import Card3D from './Card3D'

const stats = [
  { icon: Code2, value: '10+', label: 'Projects Built', color: 'from-blue-500/20 to-indigo-500/5' },
  { icon: GraduationCap, value: 'S1', label: 'Informatics Student', color: 'from-emerald-500/20 to-teal-500/5' },
  { icon: Layout, value: '1', label: 'Internship Completed', color: 'from-amber-500/20 to-yellow-500/5' },
  { icon: Sparkles, value: '100%', label: 'Commitment to Growth', color: 'from-purple-500/20 to-pink-500/5' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#86868b] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            02 — Background &amp; Philosophy
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.05] tracking-[-0.035em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Editorial Bio &amp;<br />Engineering Mindset
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Bio Text (7 Cols) - Editorial Magazine Styling */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg sm:text-xl text-[#f5f5f7] leading-relaxed font-normal tracking-tight border-l-2 border-amber-500/60 pl-5">
              I am an Informatics Student at Universitas Bunda Mulia Serpong with a core focus on Front-End Web Development, design system structure, and intuitive UI/UX execution.
            </p>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
              I enjoy translating user interface designs into responsive, well-structured web applications using React, Next.js, and TypeScript. My focus is on writing readable code, following modern web standards, and delivering clean user experiences.
            </p>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
              I actively utilize modern developer tools and AI assistants (like ChatGPT, Claude, and Gemini) to streamline debugging, explore new libraries, and continuously accelerate my technical learning.
            </p>

            {/* Editorial Highlight Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.005] backdrop-blur-md relative overflow-hidden group"
            >
              <Quote size={40} className="absolute -right-2 -bottom-2 text-white/5 group-hover:text-white/10 transition-colors duration-300 pointer-events-none" />
              <blockquote className="text-xs sm:text-sm text-[#f5f5f7] italic font-medium leading-relaxed relative z-10">
                &ldquo;I focus on writing clean, maintainable code and creating responsive user interfaces that deliver clear value to users.&rdquo;
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Quick Stats Grid (5 Cols) - Interactive 3D Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <Card3D maxRotate={12} className="h-full">
                  <div className={`border border-white/[0.08] hover:border-white/20 rounded-2xl p-6 bg-gradient-to-b ${stat.color} hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-sm`}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.04] text-[#f5f5f7] mb-5 shadow-sm">
                      <stat.icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div
                        className="text-3xl sm:text-4xl font-bold text-[#f5f5f7] tracking-tight mb-1"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-[#86868b] uppercase tracking-wider font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
