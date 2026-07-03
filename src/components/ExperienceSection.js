'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Calendar } from 'lucide-react'

const experiences = [
  {
    position: 'VR/AR Application Developer',
    company: 'My Own Project',
    period: 'October 4, 2025',
    description: 'Developed an Augmented Reality educational app for human organ anatomy (Aplikasi Edukasi Organ Manusia Berbasis AR). Users can view interactive 3D models of human organs in real-world space.',
    link: null,
    tags: ['AR', 'Unity', 'Education', '3D Modeling'],
  },
  {
    position: 'Front-End Developer Intern',
    company: 'ICA Course',
    period: 'January 2026 – June 2026',
    description: 'Built a Website Landing Page for an online course platform. Implemented responsive design, smooth animations, and optimized performance.',
    link: 'https://www.bimbel-icacourse.com/',
    linkLabel: 'bimbel-icacourse.com',
    tags: ['Next.js', 'Vercel', 'Responsive Design'],
  },
  {
    position: 'MoodFit App Developer',
    company: 'Google Antigravity IDE Project',
    period: '2026 – Present',
    description: 'Developing MoodFit — an Android app that recommends activities based on mood. Built a Python FastAPI backend with Google Gemini AI integration, exposing a RESTful API with Swagger documentation and graceful offline fallback.',
    link: null,
    tags: ['Android', 'Kotlin', 'Python', 'FastAPI', 'Gemini AI', 'REST API'],
    current: true,
  },
  {
    position: 'More to go',
    company: 'Future Endeavors',
    period: 'Soon',
    description: 'I will be updating and adding more of my professional experience and project history here soon.',
    tags: ['Next Step', 'Developer Journey'],
    isPlaceholder: true,
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            04 — Experience
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-3 leading-tight text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px origin-top"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)' }}
          />

          <div className="space-y-8 pl-10 sm:pl-12 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[3.15rem] md:-left-[4.1rem] top-6 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.5, type: 'spring', stiffness: 400, damping: 20 }}
                    className={`w-3 h-3 rounded-full border-2 ${
                      exp.current
                        ? 'border-white bg-white animate-pulse'
                        : exp.isPlaceholder
                        ? 'border-dashed border-white/20 bg-transparent'
                        : 'border-white/40 bg-transparent'
                    }`}
                  />
                </div>

                {/* Card */}
                <div className={`glass border rounded-2xl p-6 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden relative group ${
                  exp.isPlaceholder
                    ? 'border-dashed border-white/10 hover:border-white/20'
                    : 'border-white/[0.07] hover:border-white/15'
                }`}>
                  {/* Left accent line */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
                    }}
                  />

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className="text-lg font-semibold text-white"
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {exp.position}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-white font-medium tracking-widest uppercase">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#8a8a8a] text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#8a8a8a] text-xs">
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm text-[#8a8a8a] leading-relaxed mb-4">{exp.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-medium rounded-full glass border border-white/10 text-[#8a8a8a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={11} />
                      {exp.linkLabel}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
