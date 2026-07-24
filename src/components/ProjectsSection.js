'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, GitBranch, PlayCircle, Layers, Sparkles } from 'lucide-react'
import Card3D from './Card3D'
import Magnetic from './Magnetic'

const projects = [
  {
    number: '01',
    title: 'Personal Finance Management Web App',
    category: 'Full-Stack Web App',
    filterCategory: 'Full-Stack',
    description:
      'A web application for tracking multi-account finances, budgeting, and monitoring expenses. Built with Next.js App Router, server-side actions, Supabase authentication, and PostgreSQL database triggers for balance synchronization.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    live: null,
    github: 'https://github.com/CodeMelvin/uangku',
    statusText: 'Active Project',
    gradient: 'from-emerald-500/30 via-teal-500/15 to-transparent',
    accentColor: '#10b981',
  },
  {
    number: '02',
    title: 'THEDEMIT — Indie Horror Game Studio',
    category: 'Web Design & Development',
    filterCategory: 'Web & Mobile',
    description:
      'A responsive, SEO-optimized website built for an Indonesian indie horror game studio to showcase game titles, media updates, and studio lore with interactive animations.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'SEO Optimization'],
    live: 'https://thedemit.clampolx.com/',
    github: null,
    statusText: 'Live Production',
    gradient: 'from-rose-500/30 via-pink-500/15 to-transparent',
    accentColor: '#f43f5e',
  },
  {
    number: '03',
    title: 'Ayen Tanu — Real Estate Catalog Platform',
    category: 'Client Web Project',
    filterCategory: 'Web & Mobile',
    description:
      'A real estate listing website for a property agent. Features dynamic property synchronization via Google Sheets API, multi-category filtering (Sale/Rent), property detail modals, and direct WhatsApp contact routing.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Sheets API', 'Cloudflare Pages'],
    live: 'https://ayenwebsite.pages.dev/',
    github: null,
    statusText: 'Live Production',
    gradient: 'from-amber-500/30 via-yellow-500/15 to-transparent',
    accentColor: '#f59e0b',
  },
  {
    number: '04',
    title: 'ICA Course — Online Learning Landing Page',
    category: 'Internship Project',
    filterCategory: 'Internship',
    description:
      'A modern landing page designed and built during an internship at ICA Course. Features clean layout structure, responsive navigation, and fast page loading performance.',
    tech: ['Next.js', 'Vercel', 'Tailwind CSS', 'UI/UX Design'],
    live: 'https://bimbel-icacourse.com/',
    github: null,
    statusText: 'Live Production',
    gradient: 'from-blue-500/30 via-indigo-500/15 to-transparent',
    accentColor: '#3b82f6',
  },
  {
    number: '05',
    title: 'MoodFit — AI Mood Companion & FastAPI Backend',
    category: 'Mobile & Backend API',
    filterCategory: 'Full-Stack',
    description:
      'An Android mobile application and Python FastAPI REST backend that provides personalized activity suggestions based on user mood using Gemini AI.',
    tech: ['Kotlin', 'Android', 'Python', 'FastAPI', 'Gemini AI API'],
    live: 'https://moodfit-backend-api.vercel.app',
    github: 'https://github.com/TricQs/MoodFit',
    statusText: 'Live Demo API',
    gradient: 'from-cyan-500/30 via-teal-500/15 to-transparent',
    accentColor: '#06b6d4',
  },
  {
    number: '06',
    title: 'VR/AR Human Organ Educational App',
    category: 'Augmented Reality',
    filterCategory: 'Web & Mobile',
    description:
      'An AR mobile application for learning human anatomy interactively. Users can place and inspect 3D human organ models in real-world environments.',
    tech: ['Unity', 'AR Foundation', 'C#', '3D Modeling'],
    live: 'https://youtu.be/dluuvq1TVNQ?si=JlrLqoErSI0S02eT',
    github: null,
    statusText: 'Video Demo',
    gradient: 'from-purple-500/30 via-indigo-500/15 to-transparent',
    accentColor: '#a855f7',
  },
  {
    number: '07',
    title: 'GymBar — Fitness Companion Mobile App',
    category: 'Mobile Application',
    filterCategory: 'Web & Mobile',
    description:
      'A fitness mobile application featuring workout tracking routines, exercise guides, and fitness articles to support healthy lifestyle habits.',
    tech: ['React Native', 'Tailwind CSS', 'Mobile UI'],
    live: 'https://drive.google.com/drive/folders/1Ahv-Uoyt05LJBmTf4EgQ7P7EQuNxsUsn?usp=drive_link',
    github: null,
    statusText: 'Project Files',
    gradient: 'from-orange-500/30 via-amber-500/15 to-transparent',
    accentColor: '#f97316',
  },
  {
    number: '08',
    title: 'Nexus Arcade — Web Games Portal',
    category: 'Web Portal',
    filterCategory: 'Web & Mobile',
    description:
      'A browser games portal showcasing lightweight web games with responsive UI layouts and instant playability.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://nexus-arcade-one.vercel.app/',
    github: null,
    statusText: 'Live Demo',
    gradient: 'from-slate-500/30 via-zinc-500/15 to-transparent',
    accentColor: '#94a3b8',
  },
  {
    number: '09',
    title: 'FinOps-Core — Mobile Receipt Scanner App',
    category: 'Mobile & API Development',
    filterCategory: 'Full-Stack',
    description:
      'A mobile financial operations application with automated receipt scanning for quick entry, paired with a Laravel REST API backend.',
    tech: ['React Native', 'Laravel API', 'AI Vision'],
    live: null,
    github: 'https://github.com/TricQs/frontend-mobile',
    statusText: 'In Progress',
    gradient: 'from-sky-500/30 via-blue-500/15 to-transparent',
    accentColor: '#38bdf8',
  },
]

const categories = ['All', 'Full-Stack', 'Web & Mobile', 'Internship']

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.filterCategory === activeCategory)

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header & Single-Line Fit Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#a1a1a6] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              01 — Product Exhibits
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold mt-2 leading-[1.08] tracking-[-0.035em] text-gradient"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Selected Engineering Projects
            </h2>
            <p className="text-sm text-[#a1a1a6] mt-3 max-w-xl">
              Showcasing software applications, full-stack tools, and internship projects built with engineering craftsmanship.
            </p>
          </motion.div>

          {/* Compact Single-Row Slime Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex flex-nowrap items-center gap-1 p-1 sm:p-1.5 border border-white/15 rounded-2xl bg-white/[0.03] backdrop-blur-xl w-fit max-w-full overflow-hidden shadow-lg shrink-0 self-start md:self-auto"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scaleX: 1.14, scaleY: 0.86 }}
                transition={{ type: 'spring', stiffness: 500, damping: 14, mass: 0.6 }}
                className={`relative px-3 sm:px-4 h-8 sm:h-9 flex items-center justify-center rounded-xl text-[11px] sm:text-xs font-semibold transition-colors duration-200 cursor-pointer select-none shrink-0 whitespace-nowrap ${
                  activeCategory === cat ? 'text-[#0c0c0e]' : 'text-[#a1a1a6] hover:text-[#f5f5f7]'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 rounded-xl z-0 border border-white/80"
                    style={{
                      background: 'linear-gradient(180deg, #ffffff 0%, #ececef 100%)',
                      boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 1), 0 4px 14px rgba(0, 0, 0, 0.25)',
                    }}
                    transition={{ type: 'spring', stiffness: 520, damping: 32, mass: 0.45 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat === 'All' && <Layers size={13} className={activeCategory === cat ? 'text-[#0c0c0e]' : 'text-[#a1a1a6]'} />}
                  {cat}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Interactive 3D Projects Grid with Smooth Layout Transitions */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.number}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
              >
                <Card3D maxRotate={10} className="h-full">
                  <article className="group card-liquid rounded-2xl p-6 flex flex-col relative overflow-hidden h-full">
                    {/* Top Ambient Glow Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

                    {/* Number & Status */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-mono text-[#a1a1a6]">[{project.number}]</span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/15 text-[#a1a1a6] bg-white/[0.04] backdrop-blur-sm flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accentColor, boxShadow: `0 0 8px ${project.accentColor}` }} />
                        {project.statusText}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold text-[#f5f5f7] text-lg mb-1.5 tracking-[-0.01em] group-hover:text-white transition-colors"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {project.title}
                    </h3>

                    {/* Category */}
                    <span className="text-[11px] text-[#86868b] font-medium uppercase tracking-wider mb-4 block">
                      {project.category}
                    </span>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#a1a1a6] leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[10px] rounded-lg border border-white/10 text-[#a1a1a6] bg-white/[0.03] group-hover:border-white/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                      {project.live && (
                        <Magnetic strength={0.2}>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileTap={{ scaleX: 1.15, scaleY: 0.85 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                            aria-label={`Live Demo for ${project.title}`}
                            className="flex items-center gap-1.5 text-xs text-[#f5f5f7] hover:text-white font-semibold transition-colors bg-white/[0.06] hover:bg-white/[0.14] px-3.5 py-2 rounded-xl border border-white/15 shadow-sm"
                          >
                            {project.statusText === 'Video Demo' ? <PlayCircle size={14} /> : <ExternalLink size={14} />}
                            {project.statusText === 'Video Demo' ? 'Watch Demo' : 'Live Preview'}
                          </motion.a>
                        </Magnetic>
                      )}
                      {project.github && (
                        <Magnetic strength={0.2}>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileTap={{ scaleX: 1.15, scaleY: 0.85 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                            aria-label={`GitHub Repository for ${project.title}`}
                            className="flex items-center gap-1.5 text-xs text-[#a1a1a6] hover:text-[#f5f5f7] transition-colors py-2 px-3 rounded-xl border border-transparent hover:border-white/10"
                          >
                            <GitBranch size={14} /> GitHub Code
                          </motion.a>
                        </Magnetic>
                      )}
                    </div>
                  </article>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
