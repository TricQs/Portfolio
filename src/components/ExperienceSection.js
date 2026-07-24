'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Calendar, Briefcase, Award, CheckCircle2 } from 'lucide-react'
import Card3D from './Card3D'
import Magnetic from './Magnetic'

const experiences = [
  {
    position: 'Front-End Developer Intern',
    company: 'ICA Course',
    period: 'Jan 2026 – Jun 2026',
    description:
      'Designed and developed a responsive landing page for an online tutoring course platform. Collaborated on UI layout prototypes, component styling with Tailwind CSS, and deployment on Vercel.',
    highlights: [
      'Engineered high-speed landing page with clean layout architecture using Next.js & Tailwind CSS.',
      'Optimized asset loading and mobile responsiveness achieving seamless cross-browser display.',
      'Deployed production build on Vercel with structured meta tags for search engine discoverability.',
    ],
    link: 'https://www.bimbel-icacourse.com/',
    linkLabel: 'bimbel-icacourse.com',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'UI/UX Design'],
    accentColor: '#3b82f6',
  }
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
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#86868b] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            04 — Career &amp; Experience
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold mt-2 leading-[1.08] tracking-[-0.035em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Cinematic Experience Timeline
          </h2>
        </motion.div>

        {/* Timeline Stage */}
        <div className="relative">
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(255,255,255,0.05))' }}
          />

          <div className="space-y-8 pl-12 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.position}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Glowing Node Dot */}
                <div className="absolute -left-[3.25rem] md:-left-[5.25rem] top-7 flex items-center justify-center">
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 border-2 border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                  </span>
                </div>

                {/* 3D Timeline Stage Card */}
                <Card3D maxRotate={8}>
                  <div className="border border-white/10 hover:border-white/20 rounded-2xl p-7 md:p-8 bg-gradient-to-br from-white/[0.03] to-white/[0.005] backdrop-blur-md transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3
                            className="text-xl font-bold text-[#f5f5f7] tracking-tight"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}
                          >
                            {exp.position}
                          </h3>
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono text-blue-400 border border-blue-500/20 bg-blue-500/10">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[#86868b] text-xs font-mono bg-white/[0.02] border border-white/10 px-3 py-1.5 rounded-full">
                        <Calendar size={13} strokeWidth={1.75} />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-sm text-[#86868b] leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2.5 mb-6">
                      {exp.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#a1a1a6] leading-relaxed">
                          <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {exp.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] rounded-lg border border-white/10 text-[#a1a1a6] bg-white/[0.02]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    {exp.link && (
                      <Magnetic strength={0.2}>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-[#f5f5f7] hover:text-white font-semibold transition-colors bg-white/[0.04] hover:bg-white/[0.1] px-4 py-2 rounded-xl border border-white/10"
                        >
                          <ExternalLink size={13} />
                          {exp.linkLabel}
                        </a>
                      </Magnetic>
                    )}
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
