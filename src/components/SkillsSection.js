'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Search, Sparkles, Terminal, Code2, Cpu, X } from 'lucide-react'
import Magnetic from './Magnetic'

import {
  HTMLIcon, CSSIcon, JavaScriptIcon, TypeScriptIcon, ReactIcon, NextjsIcon, TailwindIcon,
  PythonIcon, FastAPIIcon, RESTAPIIcon, NodejsIcon,
  FigmaIcon, DesignSystemsIcon, ResponsiveIcon, WireframingIcon,
  ChatGPTIcon, ClaudeIcon, GeminiIcon,
  GitHubTechIcon, VSCodeIcon, VercelIcon,
} from './TechIcons'

const techIconMap = {
  'HTML5': HTMLIcon, 'CSS3': CSSIcon, 'JavaScript (ES6+)': JavaScriptIcon,
  'TypeScript': TypeScriptIcon, 'React': ReactIcon, 'Next.js': NextjsIcon,
  'Tailwind CSS': TailwindIcon, 'Python': PythonIcon, 'FastAPI': FastAPIIcon,
  'REST API': RESTAPIIcon, 'Node.js': NodejsIcon, 'Figma': FigmaIcon,
  'Design Systems': DesignSystemsIcon, 'Responsive Web Design': ResponsiveIcon,
  'Wireframing': WireframingIcon, 'ChatGPT': ChatGPTIcon, 'Claude': ClaudeIcon,
  'Gemini': GeminiIcon, 'Git & GitHub': GitHubTechIcon, 'VS Code': VSCodeIcon,
  'Vercel': VercelIcon,
}

const skillCategories = [
  {
    title: 'Front-End Development',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    icon: Code2,
    accent: '#3b82f6',
  },
  {
    title: 'Backend & APIs',
    skills: ['Python', 'FastAPI', 'Node.js', 'REST API'],
    icon: Cpu,
    accent: '#10b981',
  },
  {
    title: 'UI/UX & Design Systems',
    skills: ['Figma', 'Responsive Web Design', 'Wireframing', 'Design Systems'],
    icon: Sparkles,
    accent: '#ec4899',
  },
  {
    title: 'Developer & AI Tools',
    skills: ['Git & GitHub', 'VS Code', 'Vercel', 'ChatGPT', 'Claude', 'Gemini'],
    icon: Terminal,
    accent: '#8b5cf6',
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = skillCategories.map(cat => {
    const matchingSkills = cat.skills.filter(s =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (matchingSkills.length === 0) return null
    return { ...cat, skills: matchingSkills }
  }).filter(Boolean)

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header & Search Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#a1a1a6] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              03 — Tech Matrix &amp; Stack
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold mt-2 leading-[1.08] tracking-[-0.035em] text-gradient"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Interactive Technologies
            </h2>
          </motion.div>

          {/* Interactive Search with Clear 'X' Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex items-center gap-3 w-full md:w-auto"
          >
            <div className="relative flex-1 md:w-72">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a1a1a6]" />
              <input
                type="text"
                placeholder="Search technologies..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-white/15 bg-white/[0.03] text-xs text-[#f5f5f7] placeholder-[#a1a1a6] focus:border-white/30 focus:bg-white/[0.06] transition-all backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#a1a1a6] hover:text-[#f5f5f7] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  aria-label="Clear search input"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Skill Categories Matrix */}
        <div className="space-y-10">
          <AnimatePresence>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: catIndex * 0.08, duration: 0.5 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/15 shadow-sm"
                        style={{ background: `${category.accent}20` }}
                      >
                        <category.icon size={16} style={{ color: category.accent }} />
                      </div>
                      <h3
                        className="text-sm font-bold text-[#f5f5f7] tracking-tight uppercase"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#a1a1a6] bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-full">
                      {category.skills.length} Technologies
                    </span>
                  </div>

                  {/* Skills Node Grid */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => {
                      const Icon = techIconMap[skill]
                      return (
                        <Magnetic key={skill} strength={0.2}>
                          <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="flex items-center gap-2.5 px-4 py-2.5 border border-white/15 rounded-xl text-xs font-semibold text-[#f5f5f7] hover:border-white/35 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer select-none bg-white/[0.03] shadow-sm group"
                          >
                            {Icon && <Icon size={16} className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />}
                            <span>{skill}</span>
                          </motion.div>
                        </Magnetic>
                      )
                    })}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-[#a1a1a6] text-sm flex flex-col items-center gap-3">
                <p>No technologies found matching &ldquo;{searchQuery}&rdquo;.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 rounded-xl bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  Reset Search Filter
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
