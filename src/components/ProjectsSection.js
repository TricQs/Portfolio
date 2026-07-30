'use client'

import { useRef, useState, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, GitBranch, PlayCircle, Layers, FileText } from 'lucide-react'
import Card3D from './Card3D'
import Magnetic from './Magnetic'
import { GlassEffect } from './ui/liquid-glass'
import { GlowingEffect } from './ui/glowing-effect'

const projects = [
  {
    number: '01',
    title: 'ICA Course.com — Online Learning Landing Page',
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
    number: '02',
    title: 'THEDEMIT — Indie Horror Game Studio',
    category: 'Web Design & Development',
    filterCategory: 'Web & Mobile',
    description:
      'A responsive, SEO-optimized website built for an Indonesian indie horror game studio to showcase game titles, media updates, and studio lore with interactive animations.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'SEO Optimization'],
    live: 'https://thedemit.clampolx.com/',
    github: null,
    report: 'https://drive.google.com/file/d/1C9kMAKymagNUejfqcuSadV71S19R0qKO/view?usp=sharing',
    statusText: 'Live Production',
    gradient: 'from-rose-500/30 via-pink-500/15 to-transparent',
    accentColor: '#f43f5e',
  },
  {
    number: '03',
    title: 'Express Blog App & Supabase Cloud',
    category: 'Backend & Web App',
    filterCategory: 'Full-Stack',
    description:
      'A server-side rendered (SSR) blog web application featuring user registration, JWT authentication via httpOnly cookies, author-restricted CRUD post management, and Markdown rendering with XSS sanitization. Connected to PostgreSQL on Supabase Cloud.',
    tech: ['Express.js', 'Node.js', 'PostgreSQL', 'Supabase', 'JWT', 'EJS'],
    live: null,
    github: 'https://github.com/TricQs/backend-project',
    statusText: 'Active Project',
    gradient: 'from-violet-500/30 via-purple-500/15 to-transparent',
    accentColor: '#8b5cf6',
  },
  {
    number: '04',
    title: 'Personal Finance Management Web App',
    category: 'Full-Stack Web App',
    filterCategory: 'Full-Stack',
    description:
      'A web application for tracking multi-account finances, budgeting, and monitoring expenses. Built with Next.js App Router, server-side actions, Supabase authentication, and PostgreSQL database triggers for balance synchronization.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    live: 'https://finance-project-uangku.vercel.app/',
    github: 'https://github.com/CodeMelvin/uangku',
    statusText: 'Active Project',
    gradient: 'from-emerald-500/30 via-teal-500/15 to-transparent',
    accentColor: '#10b981',
  },
  {
    number: '05',
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
    number: '06',
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
    number: '07',
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
    number: '08',
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
    number: '09',
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
]

const categories = ['All', 'Full-Stack', 'Web & Mobile', 'Internship']

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    return activeCategory === 'All'
      ? projects
      : projects.filter(p => p.filterCategory === activeCategory)
  }, [activeCategory])

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding relative"
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
            <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#cbd5e1] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              01 — Product Exhibits
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold mt-2 leading-[1.08] tracking-[-0.035em] text-gradient"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Selected Engineering Projects
            </h2>
            <p className="text-sm text-[#cbd5e1] mt-3 max-w-xl">
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
                className={`relative px-3 sm:px-4 h-8 sm:h-9 flex items-center justify-center rounded-xl text-[11px] sm:text-xs font-semibold transition-colors duration-200 cursor-pointer select-none shrink-0 whitespace-nowrap ${activeCategory === cat ? 'text-white font-bold' : 'text-[#cbd5e1] hover:text-[#f5f5f7]'
                  }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 rounded-xl z-0"
                    style={{
                      background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 50%, #a855f7 100%)',
                      border: '1px solid rgba(56, 189, 248, 0.6)',
                      boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 4px 14px rgba(56, 189, 248, 0.35)',
                    }}
                    transition={{ type: 'spring', stiffness: 520, damping: 32, mass: 0.45 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat === 'All' && <Layers size={13} className={activeCategory === cat ? 'text-[#08080c]' : 'text-[#cbd5e1]'} />}
                  {cat}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* High-Performance 60fps Filtered Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
              >
                <Card3D maxRotate={8} className="h-full rounded-2xl">
                  <GlassEffect className="rounded-2xl border border-white/15 h-full relative">
                    <GlowingEffect
                      spread={35}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <article className="group p-6 flex flex-col relative overflow-hidden h-full z-10">
                      {/* Top Ambient Glow Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

                      {/* Number & Status */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-xs font-mono text-[#cbd5e1]">[{project.number}]</span>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/15 text-[#cbd5e1] bg-white/[0.04] backdrop-blur-sm flex items-center gap-1.5 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accentColor, boxShadow: `0 0 8px ${project.accentColor}` }} />
                          {project.statusText}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold text-[#f5f5f7] group-hover:text-white transition-colors duration-300 mb-2 leading-snug tracking-tight"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {project.title}
                      </h3>

                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="text-[11px] text-[#cbd5e1] font-mono tracking-wide">
                          {project.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#cbd5e1] leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg text-[10px] font-medium border border-white/10 text-[#cbd5e1] bg-white/[0.02]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                        {project.live && (
                          <Magnetic strength={0.2}>
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileTap={{ scaleX: 1.14, scaleY: 0.86 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#08080c] bg-[#38bdf8] hover:bg-[#7dd3fc] px-4 py-2 rounded-xl transition-colors shadow-md"
                            >
                              {project.statusText === 'Video Demo' ? (
                                <>
                                  <PlayCircle size={13} /> Watch Demo
                                </>
                              ) : (
                                <>
                                  <ExternalLink size={13} /> Live Preview
                                </>
                              )}
                            </motion.a>
                          </Magnetic>
                        )}
                        {project.report && (
                          <Magnetic strength={0.2}>
                            <motion.a
                              href={project.report}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileTap={{ scaleX: 1.14, scaleY: 0.86 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5f5f7] hover:text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] px-4 py-2 rounded-xl transition-all"
                            >
                              <FileText size={13} /> View Report
                            </motion.a>
                          </Magnetic>
                        )}
                        {project.github && (
                          <Magnetic strength={0.2}>
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileTap={{ scaleX: 1.14, scaleY: 0.86 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5f5f7] hover:text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] px-4 py-2 rounded-xl transition-all"
                            >
                              <GitBranch size={13} /> GitHub Code
                            </motion.a>
                          </Magnetic>
                        )}
                      </div>
                    </article>
                  </GlassEffect>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
