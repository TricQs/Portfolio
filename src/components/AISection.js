'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChatGPTIcon, ClaudeIcon, GeminiIcon, OpenCodeIcon } from './TechIcons'

const aiTools = [
  {
    icon: ChatGPTIcon,
    name: 'ChatGPT',
    usage: 'My primary AI partner for code generation, debugging, documentation, and brainstorming. I use GPT-4 to prototype features rapidly and write technical content.',
    color: '#10a37f',
    bg: 'rgba(16, 163, 127, 0.08)',
    border: 'rgba(16, 163, 127, 0.15)',
  },
  {
    icon: ClaudeIcon,
    name: 'Claude',
    usage: 'My go-to for long-context analysis, reviewing large codebases, writing detailed technical proposals, and nuanced creative writing tasks.',
    color: '#c96342',
    bg: 'rgba(201, 99, 66, 0.08)',
    border: 'rgba(201, 99, 66, 0.15)',
  },
  {
    icon: GeminiIcon,
    name: 'Gemini',
    usage: 'Leveraged for multimodal tasks — analyzing UI designs, generating image assets, integrating with Google services, and building with Google Antigravity IDE.',
    color: '#4285f4',
    bg: 'rgba(66, 133, 244, 0.08)',
    border: 'rgba(66, 133, 244, 0.15)',
  },
  {
    icon: OpenCodeIcon,
    name: 'OpenCode',
    usage: 'My go-to AI coding agent for the terminal. I use it to plan, edit files, run commands, and debug across multiple AI providers with full codebase context and LSP integration.',
    color: '#a855f7',
    bg: 'rgba(168, 85, 247, 0.08)',
    border: 'rgba(168, 85, 247, 0.15)',
  },
]

export default function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ai" ref={ref} className="pt-8 pb-14 md:pt-12 md:pb-22 relative overflow-hidden">
      {/* Large "AI" background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="text-[20vw] font-bold text-white/[0.02] leading-none"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          AI
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            08 — AI
          </span>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mt-3 leading-tight text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            AI Playground
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-[#8a8a8a] text-base max-w-2xl mb-16 leading-relaxed"
        >
          I use AI not only as a tool but as a creative partner. From generating ideas and
          accelerating development to building advanced prompting workflows, AI plays a
          central role in my process.
        </motion.p>

        {/* AI Tool Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl p-7 overflow-hidden cursor-default transition-all duration-500 flex flex-col gap-5"
              style={{
                background: tool.bg,
                border: `1px solid ${tool.border}`,
              }}
            >
              {/* Top glow line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${tool.color}50, transparent)`,
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${tool.color}15, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${tool.color}15`,
                  border: `1px solid ${tool.color}30`,
                }}
              >
                <tool.icon size={20} style={{ color: tool.color }} />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {tool.name}
                </h3>
                <p className="text-sm text-[#8a8a8a] leading-relaxed">{tool.usage}</p>
              </div>

              {/* Bottom indicator dot */}
              <div className="mt-auto pt-4 flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: tool.color }}
                />
                <span className="text-xs text-[#8a8a8a]">Active in workflow</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
