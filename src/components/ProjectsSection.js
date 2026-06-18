'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'ICA Course — Online Class Website',
    description:
      'A modern landing page for an online learning platform. Features smooth animations, responsive design, and optimized performance.',
    tech: ['Next.js', 'Vercel', 'Tailwind CSS'],
    live: 'https://icacourse.vercel.app/',
    github: null,
    gradient: 'from-blue-900/30 to-indigo-900/20',
    number: '01',
  },
  {
    title: 'VR/AR Human Organ Education App',
    description:
      'Augmented Reality educational application for learning about human anatomy. Users view interactive 3D organ models in their real-world environment.',
    tech: ['Unity', 'AR Foundation', 'C#', '3D Modeling'],
    live: 'https://youtu.be/dluuvq1TVNQ?si=JlrLqoErSI0S02eT',
    github: null,
    gradient: 'from-purple-900/30 to-violet-900/20',
    number: '02',
  },
  {
    title: 'MoodFit — AI Mood Companion',
    description:
      'Android app that recommends personalized wellness activities based on mood — stress, neutral, or productive. Powered by a Python FastAPI backend with Gemini AI integration.',
    tech: ['Android', 'Kotlin', 'Gemini AI', 'Antigravity IDE'],
    live: null,
    github: null,
    statusText: 'On Progress',
    gradient: 'from-emerald-900/30 to-green-900/20',
    number: '03',
    wip: true,
  },
  {
    title: 'MoodFit API — Python Backend',
    description:
      'RESTful API backend built with Python & FastAPI that powers the MoodFit Android app. Integrates Google Gemini AI to generate personalised wellness activity recommendations in real-time.',
    tech: ['Python', 'FastAPI', 'Gemini AI', 'REST API'],
    live: 'http://127.0.0.1:8000/docs',
    github: null,
    gradient: 'from-teal-900/30 to-cyan-900/20',
    number: '04',
    wip: true,
    statusText: 'Local / Deploy Soon',
  },
  {
    title: 'PlayItNow — Web Games Portal',
    description:
      'A web platform showcasing various browser-based games I have developed, featuring clean user interfaces and instant playability.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://playitnow.pages.dev/',
    github: null,
    gradient: 'from-zinc-800/30 to-slate-900/20',
    number: '05',
  },
  {
    title: 'GymBar — Fitness App',
    description:
      'A fitness companion application featuring workout tracking, exercise routines, and curated fitness articles to support an active lifestyle.',
    tech: ['React Native', 'Tailwind CSS', 'Mobile Development'],
    live: 'https://drive.google.com/drive/folders/1WqDiX8ybgWCYYKhMa0gzGKEjfWqCkDlO',
    github: null,
    gradient: 'from-amber-900/20 to-orange-900/20',
    number: '06',
  },
  {
    title: 'THEDEMIT — Indie Horror Game Studio',
    description:
      `THEDEMIT is an independent Indonesian horror game developer.\nWe craft immersive, haunting worlds, unique stories, and chilling gameplay\nthat bring Indonesia's darkest myths to life.`,
    tech: ['Web Design', 'UI/UX Design', 'Framer Motion'],
    live: 'https://thedemit.clampolx.com/',
    github: null,
    gradient: 'from-rose-900/20 to-pink-900/20',
    number: '07',
  },
  {
    title: 'More to go',
    description:
      'I will be updating and adding more of my professional experience and project history here soon.',
    tech: ['Future Endeavors'],
    live: null,
    github: null,
    statusText: 'Soon',
    gradient: 'from-zinc-900/10 to-stone-900/10',
    number: '08',
    isPlaceholder: true,
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute inset-0 grid-overlay pointer-events-none"
        style={{ opacity: 0.4 }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            06 — Work
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-3 leading-tight text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Featured<br />Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={project.isPlaceholder ? {} : { y: -8, transition: { duration: 0.3 } }}
              className={`group glass border rounded-2xl overflow-hidden transition-colors duration-500 flex flex-col ${
                project.isPlaceholder
                  ? 'border-dashed border-white/10 hover:border-white/20'
                  : 'border-white/[0.07] hover:border-white/15'
              }`}
            >
              {/* Image / Gradient Area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-3 z-10">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <GitBranch size={15} />
                    </a>
                  )}
                </div>

                {/* Project number bg */}
                <span
                  className="text-[8rem] font-bold text-white/[0.04] select-none leading-none"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {project.number}
                </span>

                {/* WIP badge */}
                {project.wip && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-2 py-0.5 text-[9px] rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-medium tracking-widest uppercase">
                      In Progress
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="font-semibold text-white text-base leading-snug mb-2 group-hover:text-white/90 transition-colors"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {project.title}
                </h3>
                <p className="text-[#8a8a8a] text-xs leading-relaxed flex-1 mb-4 whitespace-pre-line">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.05] border border-white/[0.08] text-[#8a8a8a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={11} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <GitBranch size={11} /> GitHub
                    </a>
                  )}
                  {!project.live && !project.github && (
                    <span className="text-xs text-white/20">
                      {project.statusText || 'Coming soon'}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
