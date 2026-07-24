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

          {/* Interactive Search with Magnifying Glass Icon & Clear 'X' Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex items-center gap-3 w-full md:w-auto"
          >
            <div className="relative flex-1 md:w-72 group">
              <Search
                size={15}
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none ${
                  searchQuery
                    ? 'text-white opacity-100 scale-105'
                    : 'text-[#6e6e73] opacity-60 group-hover:text-white group-hover:opacity-100 group-focus-within:text-white group-focus-within:opacity-100'
                }`}
              />
              <input
                type="text"
                placeholder="Search technologies..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-9 py-2.5 rounded-xl border bg-white/[0.03] text-xs transition-all duration-300 backdrop-blur-md focus:outline-none ${
                  searchQuery
                    ? 'text-white border-white/30 bg-white/[0.06] opacity-100 font-medium'
                    : 'text-[#6e6e73] border-white/10 opacity-60 placeholder-[#6e6e73] hover:border-white/20 hover:text-white hover:opacity-100 hover:placeholder-white/60 focus:border-white/30 focus:text-white focus:opacity-100 focus:bg-white/[0.06]'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#86868b] hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                  className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1 opacity-80"
                    style={{ background: category.accent }}
                  />

                  <div className="flex items-center gap-3 mb-6 pl-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.04]"
                      style={{ color: category.accent }}
                    >
                      <category.icon size={16} />
                    </div>
                    <h3
                      className="text-lg font-bold text-[#f5f5f7]"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pl-2">
                    {category.skills.map((skillName) => {
                      const IconComp = techIconMap[skillName]
                      return (
                        <Magnetic key={skillName} strength={0.15}>
                          <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.07] transition-all duration-300 group cursor-pointer">
                            {IconComp && (
                              <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <IconComp size={20} />
                              </div>
                            )}
                            <span className="text-xs font-semibold text-[#a1a1a6] group-hover:text-[#f5f5f7] transition-colors truncate">
                              {skillName}
                            </span>
                          </div>
                        </Magnetic>
                      )
                    })}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 border border-white/10 rounded-2xl bg-white/[0.01]"
              >
                <p className="text-sm text-[#86868b]">No technologies matching &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs text-amber-400 hover:underline cursor-pointer font-medium"
                >
                  Reset search filter
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
