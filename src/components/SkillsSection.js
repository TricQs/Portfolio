'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Front-End',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'UI/UX',
    skills: ['Figma', 'Design Systems', 'Responsive Design', 'Wireframing'],
  },
  {
    title: 'AI Tools',
    skills: ['ChatGPT', 'Claude', 'Gemini', 'Prompt Engineering'],
  },
  {
    title: 'Dev Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Google Antigravity IDE', 'Sublime Text', 'Notepad++'],
  },
]

const currentlyLearning = {
  title: 'Currently Building',
  description:
    'MoodFit App — an AI-powered application that recommends activities based on your current mood (stress, neutral, or productive). Building with Google Antigravity IDE.',
  tags: ['React Native', 'AI Recommendations', 'Mental Wellness', 'Google Antigravity IDE'],
}

function SkillPill({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="px-3.5 py-2 glass border border-white/[0.07] rounded-xl text-sm text-[#8a8a8a] hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-colors duration-300 cursor-default select-none"
    >
      {skill}
    </motion.div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            05 — Skills
          </span>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mt-3 leading-tight text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Skills &<br />Technologies
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1, duration: 0.7 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <h3
                  className="text-sm font-medium text-white tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {category.title}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)',
                  }}
                />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
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

          {/* Currently Learning Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative glass border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-white/20 transition-colors duration-500 group"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 0% 100%, rgba(255,255,255,0.04) 0%, transparent 60%)',
              }}
            />

            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              }}
            />

            <div className="flex flex-wrap items-start gap-4 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/10 tracking-widest uppercase">
                ⚡ Currently Building
              </span>
            </div>

            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {currentlyLearning.title}
            </h3>
            <p className="text-[#8a8a8a] text-sm leading-relaxed mb-5 max-w-2xl">
              {currentlyLearning.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs rounded-full glass border border-white/10 text-[#8a8a8a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
