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
    period: '2026',
    description: 'Developed MoodFit — an Android app that recommends activities based on mood. Built a Python FastAPI backend with Google Gemini AI integration, exposing a RESTful API with Swagger documentation and graceful offline fallback.',
    link: 'https://github.com/TricQs/MoodFit',
    linkLabel: 'github.com/TricQs/MoodFit',
    tags: ['Android', 'Kotlin', 'Python', 'FastAPI', 'Gemini AI', 'REST API'],
  },
  {
    position: 'Software Engineer',
    company: 'FinOps-Core Project',
    period: '2026 – Present',
    description: 'Developed FinOps-Core, a mobile financial operations platform. Engineered a Laravel RESTful API backend and a cross-platform React Native frontend, integrating an AI-powered document scanning system for automated ledger entry.',
    link: 'https://github.com/TricQs/frontend-mobile',
    linkLabel: 'github.com/TricQs/frontend-mobile',
    tags: ['React Native', 'Laravel', 'AI', 'REST API'],
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
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#86868b]">
            04 — Experience
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold mt-4 leading-[1.1] tracking-[-0.03em] text-gradient"
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
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px origin-top"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }}
          />

          <div className="space-y-6 pl-10 sm:pl-12 md:pl-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.65rem] md:-left-[3.15rem] top-6 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.12 + 0.4, type: 'spring', stiffness: 400, damping: 20 }}
                    className={`w-2.5 h-2.5 rounded-full border-[1.5px] ${
                      exp.current
                        ? 'border-white bg-white'
                        : exp.isPlaceholder
                        ? 'border-dashed border-white/15 bg-transparent'
                        : 'border-white/30 bg-transparent'
                    }`}
                  />
                </div>

                {/* Card */}
                <div className={`border rounded-2xl p-6 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden relative group ${
                  exp.isPlaceholder
                    ? 'border-dashed border-white/[0.06] hover:border-white/[0.12]'
                    : 'border-white/[0.06] hover:border-white/[0.12]'
                }`}
                style={{ background: 'rgba(255,255,255,0.015)' }}
                >
                  {/* Left accent line */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
                    }}
                  />

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className="text-[15px] font-semibold text-[#f5f5f7] tracking-[-0.01em]"
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {exp.position}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[9px] rounded-full bg-white/[0.06] text-[#f5f5f7] font-medium tracking-[0.08em] uppercase border border-white/[0.08]">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#86868b] text-[13px] mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#6e6e73] text-[11px]">
                      <Calendar size={10} strokeWidth={1.5} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-[13px] text-[#86868b] leading-[1.7] mb-4">{exp.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-medium rounded-full border border-white/[0.06] text-[#6e6e73]"
                        style={{ background: 'rgba(255,255,255,0.02)' }}
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
                      className="inline-flex items-center gap-1.5 text-[11px] text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-300"
                    >
                      <ExternalLink size={10} strokeWidth={1.5} />
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
