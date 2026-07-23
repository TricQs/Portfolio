'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    title: 'ICA Course — Online Class Website',
    description:
      'A modern landing page for an online learning platform. Features smooth animations, responsive design, and optimized performance.',
    tech: ['Next.js', 'Vercel', 'Tailwind CSS'],
    live: 'https://bimbel-icacourse.com/',
    github: null,
    gradient: 'from-blue-900/20 to-indigo-900/10',
    number: '01',
  },
  {
    title: 'THEDEMIT — Indie Horror Game Studio',
    description:
      'A responsive and SEO-friendly website for an Indonesian indie horror game studio, designed to showcase game releases and studio updates.',
    tech: ['React', 'SEO', 'UI/UX Design', 'Framer Motion'],
    live: 'https://thedemit.clampolx.com/',
    github: null,
    gradient: 'from-rose-900/15 to-pink-900/10',
    number: '02',
  },
  {
    title: 'Personal Finance Management Web App',
    description:
      'A web application for tracking personal finances, managing budgets, and monitoring expenses across accounts. Features automatic balance updates and PDF/Excel report exports.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Shadcn UI'],
    live: null,
    github: 'https://github.com/CodeMelvin/uangku',
    statusText: 'In Progress',
    gradient: 'from-emerald-900/20 to-teal-900/10',
    number: '03',
    wip: true,
  },
  {
    title: 'Ayen Tanu — Real Estate Listing Platform',
    description:
      'A responsive real estate catalog for a property agent with live Google Sheets sync, filtering by sale/rent status, property detail modals, and direct WhatsApp contact buttons.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Sheets API', 'Cloudflare Pages'],
    live: 'https://ayenwebsite.pages.dev/',
    github: null,
    gradient: 'from-amber-900/20 to-yellow-900/10',
    number: '04',
  },
  {
    title: 'VR/AR Human Organ Education App',
    description:
      'An Augmented Reality (AR) mobile app for learning human anatomy. Users can view and interact with 3D organ models in real time.',
    tech: ['Unity', 'AR Foundation', 'C#', '3D Modeling'],
    live: 'https://youtu.be/dluuvq1TVNQ?si=JlrLqoErSI0S02eT',
    github: null,
    gradient: 'from-purple-900/20 to-violet-900/10',
    number: '05',
  },
  {
    title: 'MoodFit — AI Mood Companion',
    description:
      'An Android app that suggests personalized wellness activities based on your current mood (stress, calm, or energetic), integrated with Gemini AI.',
    tech: ['Android', 'Kotlin', 'Gemini AI', 'Antigravity IDE'],
    live: null,
    github: 'https://github.com/TricQs/MoodFit',
    statusText: 'Completed',
    gradient: 'from-emerald-900/20 to-green-900/10',
    number: '06',
  },
  {
    title: 'MoodFit API — Python Backend',
    description:
      'A Python FastAPI backend powering the MoodFit Android app. Connects to Google Gemini AI to generate real-time activity recommendations.',
    tech: ['Python', 'FastAPI', 'Gemini AI', 'REST API'],
    live: 'https://moodfit-backend-api.vercel.app',
    github: null,
    gradient: 'from-teal-900/20 to-cyan-900/10',
    number: '07',
    statusText: 'Live Demo',
  },
  {
    title: 'GymBar — Fitness App',
    description:
      'A mobile fitness app featuring workout tracking routines, exercise guides, and fitness articles to support a healthy lifestyle.',
    tech: ['React Native', 'Tailwind CSS', 'Mobile Development'],
    live: 'https://drive.google.com/drive/folders/1Ahv-Uoyt05LJBmTf4EgQ7P7EQuNxsUsn?usp=drive_link',
    github: null,
    gradient: 'from-amber-900/15 to-orange-900/10',
    number: '08',
  },
  {
    title: 'Nexus Arcade — Web Games Portal',
    description:
      'A web portal showcasing lightweight browser-based games, featuring clean navigation and quick playability.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://nexus-arcade-one.vercel.app/',
    github: null,
    gradient: 'from-zinc-800/20 to-slate-900/10',
    number: '09',
  },
  {
    title: 'FinOps-Core — Financial Operations',
    description:
      'A mobile financial app featuring receipt scanning for quick entry. Built with React Native and a Laravel REST API backend.',
    tech: ['React Native', 'Laravel', 'AI Integration'],
    live: null,
    github: 'https://github.com/TricQs/frontend-mobile',
    statusText: 'In Development',
    gradient: 'from-sky-900/20 to-blue-900/10',
    number: '10',
    wip: true,
  },
  {
    title: 'More to go',
    description:
      'I will be updating and adding more of my professional experience and project history here soon.',
    tech: ['Future Endeavors'],
    live: null,
    github: null,
    statusText: 'Soon',
    gradient: 'from-zinc-900/10 to-stone-900/5',
    number: '11',
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
            06 — Work
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold mt-4 leading-[1.1] tracking-[-0.03em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Featured<br />Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={project.isPlaceholder ? {} : { y: -4, transition: { duration: 0.25 } }}
              className={`group border rounded-2xl overflow-hidden transition-all duration-500 flex flex-col ${project.isPlaceholder
                ? 'border-dashed border-white/[0.06] hover:border-white/[0.12]'
                : 'border-white/[0.06] hover:border-white/[0.12]'
                }`}
              style={{ background: 'rgba(255,255,255,0.015)' }}
            >
              {/* Image / Gradient Area */}
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-3 z-10">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/[0.08] border border-white/15 text-white hover:bg-white/[0.15] transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/[0.08] border border-white/15 text-white hover:bg-white/[0.15] transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <GitBranch size={14} />
                    </a>
                  )}
                </div>

                {/* Project number bg */}
                <span
                  className="text-[7rem] font-bold text-white/[0.03] select-none leading-none"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="font-semibold text-[#f5f5f7] text-[14px] leading-snug mb-2 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {project.title}
                </h3>
                <p className="text-[#86868b] text-[12px] leading-[1.7] flex-1 mb-4 whitespace-pre-line">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] rounded-full border border-white/[0.06] text-[#6e6e73]"
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto pt-3 border-t border-white/[0.04]">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-300"
                    >
                      <ExternalLink size={10} strokeWidth={1.5} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-300"
                    >
                      <GitBranch size={10} strokeWidth={1.5} /> GitHub
                    </a>
                  )}
                  {!project.live && !project.github && (
                    <span className="text-[11px] text-white/15">
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
