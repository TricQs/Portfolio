'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  TailwindIcon,
  PythonIcon,
  FastAPIIcon,
  RESTAPIIcon,
  NodejsIcon,
  FigmaIcon,
  DesignSystemsIcon,
  ResponsiveIcon,
  WireframingIcon,
  ChatGPTIcon,
  ClaudeIcon,
  GeminiIcon,
  OpenCodeIcon,
  GitHubTechIcon,
  VSCodeIcon,
  VercelIcon,
  AntigravityIcon,
} from './TechIcons'

const techIconMap = {
  'HTML': HTMLIcon,
  'CSS': CSSIcon,
  'JavaScript': JavaScriptIcon,
  'TypeScript': TypeScriptIcon,
  'React': ReactIcon,
  'Next.js': NextjsIcon,
  'Tailwind CSS': TailwindIcon,
  'Python': PythonIcon,
  'FastAPI': FastAPIIcon,
  'REST API': RESTAPIIcon,
  'Node.js': NodejsIcon,
  'Figma': FigmaIcon,
  'Design Systems': DesignSystemsIcon,
  'Responsive Design': ResponsiveIcon,
  'Wireframing': WireframingIcon,
  'ChatGPT': ChatGPTIcon,
  'Claude': ClaudeIcon,
  'Gemini': GeminiIcon,
  'OpenCode': OpenCodeIcon,
  'GitHub': GitHubTechIcon,
  'VS Code': VSCodeIcon,
  'Vercel': VercelIcon,
  'Google Antigravity IDE': AntigravityIcon,
}

const skillCategories = [
  {
    title: 'Front-End',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'REST API', 'Node.js'],
  },
  {
    title: 'UI/UX',
    skills: ['Figma', 'Design Systems', 'Responsive Design', 'Wireframing'],
  },
  {
    title: 'AI Tools',
    skills: ['ChatGPT', 'Claude', 'Gemini', 'OpenCode'],
  },
  {
    title: 'Dev Tools',
    skills: ['GitHub', 'VS Code', 'Vercel', 'Google Antigravity IDE'],
  },
]


function SkillPill({ skill, index }) {
  const Icon = techIconMap[skill]
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="flex items-center gap-2 px-3.5 py-2 border border-white/[0.06] rounded-xl text-[13px] text-[#86868b] hover:text-[#f5f5f7] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300 cursor-default select-none"
      style={{ background: 'rgba(255,255,255,0.015)' }}
    >
      {Icon && <Icon size={14} className="flex-shrink-0" />}
      <span>{skill}</span>
    </motion.div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="section-padding relative">
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
            05 — Skills
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold mt-4 leading-[1.1] tracking-[-0.03em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Skills &<br />Technologies
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.08, duration: 0.6 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-5">
                <h3
                  className="text-[12px] font-medium text-[#b0b0b5] tracking-[0.1em] uppercase"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {category.title}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,0.06), transparent)',
                  }}
                />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <SkillPill
                    key={skill}
                    skill={skill}
                    index={catIndex * 10 + i}
                  />
                ))}
              </div>
            </motion.div>
          ))}


        </div>
      </div>
    </section>
  )
}
