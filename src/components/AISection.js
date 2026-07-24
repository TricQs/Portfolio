'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Terminal, Play, CheckCircle2, Sparkles, Code, Cpu } from 'lucide-react'
import { ChatGPTIcon, ClaudeIcon, GeminiIcon, OpenCodeIcon } from './TechIcons'
import Card3D from './Card3D'
import Magnetic from './Magnetic'

const aiTools = [
  {
    id: 'chatgpt',
    icon: ChatGPTIcon,
    name: 'ChatGPT (OpenAI)',
    usage: 'Assists with debugging code errors, generating initial logic ideas, writing boilerplate, and understanding complex documentation.',
    color: '#10a37f',
    simulatedPrompt: 'How to optimize PostgreSQL query triggers for multi-account financial balances?',
    simulatedResponse: '✓ Query optimized: Created indexed B-Tree triggers with atomic transaction isolation to prevent race conditions during concurrent balance calculations.',
  },
  {
    id: 'claude',
    icon: ClaudeIcon,
    name: 'Claude (Anthropic)',
    usage: 'Used for refactoring component logic, explaining code structures, and improving documentation clarity.',
    color: '#c96342',
    simulatedPrompt: 'Refactor complex React component state into clean custom hooks.',
    simulatedResponse: '✓ Refactoring complete: Extracted state logic into decoupled custom hook `useMousePosition` with zero re-render overhead.',
  },
  {
    id: 'gemini',
    icon: GeminiIcon,
    name: 'Gemini (Google AI)',
    usage: 'Helps analyze design concepts, explore API documentation, and test prompt workflows for AI integration projects.',
    color: '#4285f4',
    simulatedPrompt: 'Analyze modern UI design trends and generate responsive CSS tokens.',
    simulatedResponse: '✓ Tokens generated: Glassmorphic HSL system configured with 8px vertical rhythm and fluid typography scales.',
  },
  {
    id: 'cli',
    icon: OpenCodeIcon,
    name: 'OpenCode / CLI Tools',
    usage: 'Assists terminal-based file edits, script execution, and project automation during local development.',
    color: '#a855f7',
    simulatedPrompt: 'Execute production build verification & Turbopack bundle analysis.',
    simulatedResponse: '✓ Build succeeded: 0 TypeScript errors, 100% static page optimization, 0ms layout shifts.',
  },
]

export default function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTool, setActiveTool] = useState(aiTools[0])
  const [isSimulating, setIsSimulating] = useState(false)

  const handleSimulate = (tool) => {
    setActiveTool(tool)
    setIsSimulating(true)
    setTimeout(() => setIsSimulating(false), 800)
  }

  return (
    <section id="ai" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#86868b] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            06 — Developer Tooling &amp; AI Integration
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold mt-2 leading-[1.08] tracking-[-0.035em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Interactive AI Lab
          </h2>
          <p className="text-sm text-[#86868b] mt-3 max-w-xl">
            Leveraging AI development assistants to accelerate debugging, explore advanced APIs, and maintain high standards of code craftsmanship.
          </p>
        </motion.div>

        {/* AI Lab Grid & Interactive Terminal */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tool Selector Cards (7 Cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {aiTools.map((tool) => (
              <Card3D key={tool.id} maxRotate={10}>
                <div
                  onClick={() => handleSimulate(tool)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden ${
                    activeTool.id === tool.id
                      ? 'border-white/30 bg-white/[0.04] shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                      : 'border-white/[0.08] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        background: `${tool.color}15`,
                        borderColor: `${tool.color}30`,
                      }}
                    >
                      <tool.icon size={20} style={{ color: tool.color }} />
                    </div>
                    {activeTool.id === tool.id && (
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 font-mono">
                        Active Simulation
                      </span>
                    )}
                  </div>

                  <div>
                    <h3
                      className="text-base font-bold text-[#f5f5f7] mb-2 tracking-tight"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {tool.name}
                    </h3>
                    <p className="text-xs text-[#86868b] leading-relaxed mb-4">{tool.usage}</p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#86868b]">
                    <span>Test Workflow</span>
                    <Play size={12} style={{ color: tool.color }} />
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          {/* Simulated Terminal Output Sandbox (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="border border-white/15 rounded-2xl bg-[#0a0a0c] overflow-hidden shadow-2xl backdrop-blur-xl">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 border-b border-white/10 bg-white/[0.03] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-[#86868b] flex items-center gap-1.5">
                  <Terminal size={13} /> ai-sandbox.sh
                </span>
              </div>

              {/* Terminal Screen Content */}
              <div className="p-6 font-mono text-xs space-y-4 min-h-[280px]">
                <div className="text-[#86868b]">
                  <span className="text-emerald-400">$</span> dev-assistant --model=&quot;{activeTool.name}&quot;
                </div>

                <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] text-[#f5f5f7]">
                  <div className="text-[11px] text-[#86868b] uppercase tracking-wider mb-1">PROMPT</div>
                  &ldquo;{activeTool.simulatedPrompt}&rdquo;
                </div>

                {isSimulating ? (
                  <div className="flex items-center gap-2 text-amber-400 py-4">
                    <div className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                    <span>Executing developer workflow simulation...</span>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 space-y-2"
                  >
                    <div className="flex items-center gap-2 font-bold text-emerald-400 text-[11px] uppercase tracking-wider">
                      <CheckCircle2 size={14} /> SIMULATED AI RESULT
                    </div>
                    <p className="leading-relaxed font-sans text-xs text-[#f5f5f7]">
                      {activeTool.simulatedResponse}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
