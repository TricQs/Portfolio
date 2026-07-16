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
    bg: 'rgba(16, 163, 127, 0.05)',
    border: 'rgba(16, 163, 127, 0.1)',
  },
  {
    icon: ClaudeIcon,
    name: 'Claude',
    usage: 'My go-to for long-context analysis, reviewing large codebases, writing detailed technical proposals, and nuanced creative writing tasks.',
    color: '#c96342',
    bg: 'rgba(201, 99, 66, 0.05)',
    border: 'rgba(201, 99, 66, 0.1)',
  },
  {
    icon: GeminiIcon,
    name: 'Gemini',
    usage: 'Leveraged for multimodal tasks — analyzing UI designs, generating image assets, integrating with Google services, and building with Google Antigravity IDE.',
    color: '#4285f4',
    bg: 'rgba(66, 133, 244, 0.05)',
    border: 'rgba(66, 133, 244, 0.1)',
  },
  {
    icon: OpenCodeIcon,
    name: 'OpenCode',
    usage: 'My go-to AI coding agent for the terminal. I use it to plan, edit files, run commands, and debug across multiple AI providers with full codebase context and LSP integration.',
    color: '#a855f7',
    bg: 'rgba(168, 85, 247, 0.05)',
    border: 'rgba(168, 85, 247, 0.1)',
  },
]

export default function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ai" ref={ref} className="section-padding relative overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Large "AI" background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="text-[18vw] font-bold text-white/[0.015] leading-none"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          AI
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#86868b]">
            08 — AI
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold mt-4 leading-[1.1] tracking-[-0.03em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            AI Playground
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[#86868b] text-[15px] max-w-xl mb-14 leading-[1.7]"
        >
          I use AI not only as a tool but as a creative partner. From generating ideas and
          accelerating development to building advanced prompting workflows, AI plays a
          central role in my process.
        </motion.p>

        {/* AI Tool Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl p-6 overflow-hidden cursor-default transition-all duration-500 flex flex-col gap-5"
              style={{
                background: tool.bg,
                border: `1px solid ${tool.border}`,
              }}
            >
              {/* Top glow line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${tool.color}40, transparent)`,
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${tool.color}10, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${tool.color}10`,
                  border: `1px solid ${tool.color}20`,
                }}
              >
                <tool.icon size={18} style={{ color: tool.color }} />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-lg font-semibold text-[#f5f5f7] mb-2.5 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {tool.name}
                </h3>
                <p className="text-[13px] text-[#86868b] leading-[1.7]">{tool.usage}</p>
              </div>

              {/* Bottom indicator dot */}
              <div className="mt-auto pt-3 flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: tool.color }}
                />
                <span className="text-[11px] text-[#6e6e73]">Active in workflow</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
