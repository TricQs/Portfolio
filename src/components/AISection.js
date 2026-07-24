'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Terminal, Play, CheckCircle2, RefreshCw } from 'lucide-react'
import { ChatGPTIcon, ClaudeIcon, GeminiIcon, OpenCodeIcon } from './TechIcons'
import Card3D from './Card3D'

const aiTools = [
  {
    id: 'chatgpt',
    icon: ChatGPTIcon,
    name: 'ChatGPT (OpenAI)',
    usage: 'Assists with debugging code errors, generating initial logic ideas, writing boilerplate, and understanding complex documentation.',
    color: '#10a37f',
    prompts: [
      'How to optimize PostgreSQL query triggers for multi-account financial balances?',
      'Generate safe Next.js App Router Server Action with Zod schema validation.',
      'Fix null reference error in async event dispatcher queue.'
    ],
    responses: [
      '✓ Query optimized: Created indexed B-Tree triggers with atomic transaction isolation to prevent race conditions during balance calculations.',
      '✓ Server Action generated: Formatted type-safe Zod schema with row-level security mutation rules.',
      '✓ Debugging complete: Resolved null reference in async queue dispatcher by wrapping payload in optional chaining.'
    ]
  },
  {
    id: 'claude',
    icon: ClaudeIcon,
    name: 'Claude (Anthropic)',
    usage: 'Used for refactoring component logic, explaining code structures, and improving documentation clarity.',
    color: '#c96342',
    prompts: [
      'Refactor complex React component state into clean custom hooks.',
      'Structure clean architectural documentation for component hierarchy.',
      'Optimize layout rendering performance to achieve 60fps frame rate.'
    ],
    responses: [
      '✓ Refactoring complete: Extracted state logic into decoupled custom hook `useMousePosition` with zero re-render overhead.',
      '✓ Architecture verified: Modularized component hierarchy into functional container-presenter design pattern.',
      '✓ Performance optimized: Wrapped heavy list items in React.memo to prevent unnecessary virtual DOM diffing.'
    ]
  },
  {
    id: 'gemini',
    icon: GeminiIcon,
    name: 'Gemini (Google AI)',
    usage: 'Helps analyze design concepts, explore API documentation, and test prompt workflows for AI integration projects.',
    color: '#4285f4',
    prompts: [
      'Analyze modern UI design trends and generate responsive CSS tokens.',
      'Evaluate multi-turn system prompt parameters for AI companion endpoint.',
      'Test Python FastAPI integration with Google Generative AI SDK.'
    ],
    responses: [
      '✓ Tokens generated: Glassmorphic HSL system configured with 8px vertical rhythm and fluid typography scales.',
      '✓ Prompt parameters tuned: Configured temperature=0.7 and top_p=0.9 for creative mood suggestions.',
      '✓ Endpoint validated: Verified FastAPI CORS headers and JSON payload serialization for mobile app clients.'
    ]
  },
  {
    id: 'cli',
    icon: OpenCodeIcon,
    name: 'OpenCode / CLI Tools',
    usage: 'Assists terminal-based file edits, script execution, and project automation during local development.',
    color: '#a855f7',
    prompts: [
      'Execute production build verification & Turbopack bundle analysis.',
      'Run lint audit across workspace components.',
      'Inspect static route generation performance.'
    ],
    responses: [
      '✓ Build succeeded: 0 TypeScript errors, 100% static page optimization, 0ms layout shifts.',
      '✓ Bundle analyzed: Turbopack tree-shaking removed 42KB unused dependencies.',
      '✓ Script completed: Lint check passed clean across all workspace components.'
    ]
  },
]

export default function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTool, setActiveTool] = useState(aiTools[0])
  const [variationIndex, setVariationIndex] = useState(0)

  // Terminal state: prompt is static; 2-second thinking phase -> streaming result text
  const [displayedResponse, setDisplayedResponse] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)

  const currentPrompt = activeTool.prompts[variationIndex % activeTool.prompts.length]
  const currentResponse = activeTool.responses[variationIndex % activeTool.responses.length]

  const handleSimulate = (tool) => {
    if (activeTool.id === tool.id) {
      setVariationIndex(prev => prev + 1)
    } else {
      setActiveTool(tool)
      setVariationIndex(prev => prev + 1)
    }
  }

  // 2-Second Loading Transition -> Character-by-Character Result Streaming
  useEffect(() => {
    let isCancelled = false
    setDisplayedResponse('')
    setIsThinking(true)
    setIsStreaming(false)

    // 0.5-second (500ms) loading transition delay
    const thinkTimer = setTimeout(() => {
      if (isCancelled) return
      setIsThinking(false)
      setIsStreaming(true)

      let idx = 0
      const respTimer = setInterval(() => {
        if (isCancelled) return
        if (idx < currentResponse.length) {
          idx = Math.min(idx + 2, currentResponse.length)
          setDisplayedResponse(currentResponse.slice(0, idx))
        } else {
          setIsStreaming(false)
          clearInterval(respTimer)
        }
      }, 8)
    }, 500)

    return () => {
      isCancelled = true
      clearTimeout(thinkTimer)
    }
  }, [activeTool.id, variationIndex, currentResponse])

  return (
    <section id="ai-lab" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#a1a1a6] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            06 — Developer Tooling &amp; AI Integration
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold mt-2 leading-[1.08] tracking-[-0.035em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Interactive AI Lab
          </h2>
          <p className="text-sm text-[#a1a1a6] mt-3 max-w-xl">
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
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden ${activeTool.id === tool.id
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
                    <p className="text-xs text-[#a1a1a6] leading-relaxed mb-4">{tool.usage}</p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#a1a1a6]">
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
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#a1a1a6] flex items-center gap-1.5">
                    <Terminal size={13} style={{ color: activeTool.color }} /> ai-sandbox.sh
                  </span>
                  {(isThinking || isStreaming) && (
                    <RefreshCw size={11} className="animate-spin text-amber-400" />
                  )}
                </div>
              </div>

              {/* Terminal Screen Content */}
              <div className="p-6 font-mono text-xs space-y-4 min-h-[300px] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-[#a1a1a6]">
                    <span className="text-emerald-400">$</span> dev-assistant --model=&quot;{activeTool.name}&quot;
                  </div>

                  {/* Static Prompt Box */}
                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] text-[#f5f5f7] leading-relaxed">
                    <div className="text-[10px] text-[#a1a1a6] uppercase tracking-wider mb-1 font-sans font-semibold">PROMPT</div>
                    &ldquo;{currentPrompt}&rdquo;
                  </div>

                  {/* 1-Second Thinking Indicator */}
                  {isThinking && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2.5 text-amber-400 py-3.5 font-sans text-xs"
                    >
                      <div className="w-3.5 h-3.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                      <span>Executing AI workflow simulation...</span>
                    </motion.div>
                  )}

                  {/* Character-by-Character Result Streaming */}
                  {(!isThinking || isStreaming || displayedResponse) && (
                    <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 space-y-2 relative min-h-[110px]">
                      <div className="flex items-center justify-between gap-2 font-bold text-emerald-400 text-[11px] uppercase tracking-wider font-sans border-b border-emerald-500/20 pb-2">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 size={14} /> SIMULATED AI RESULT
                        </span>
                        <span className="text-[10px] font-mono text-[#a1a1a6]">
                          {isStreaming ? 'Streaming Result...' : isThinking ? 'Waiting...' : 'Complete'}
                        </span>
                      </div>

                      <p className="leading-relaxed font-sans text-xs text-[#f5f5f7] pt-1">
                        {displayedResponse}
                        {isStreaming && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.4 }}
                            className="inline-block w-2 h-3.5 bg-emerald-400 ml-1 translate-y-0.5"
                          />
                        )}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#a1a1a6] font-sans">
                  <span>Engine: {activeTool.name}</span>
                  <span className="text-emerald-400 font-mono">Status: 100% Truthful Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
