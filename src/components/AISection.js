'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Terminal, Play, CheckCircle2, RefreshCw, Sparkles, Code2,
  Copy, Check, Bot, Zap, ArrowRight, Layers, FileCode2
} from 'lucide-react'
import { ChatGPTIcon, ClaudeIcon, GeminiIcon, OpenCodeIcon } from './TechIcons'
import Card3D from './Card3D'
import { GlassEffect, GlassFilter } from './ui/liquid-glass'
import AnimatedGenerateButton from './ui/animated-generate-button-shadcn-tailwind'

const aiTools = [
  {
    id: 'chatgpt',
    icon: ChatGPTIcon,
    name: 'ChatGPT-4o (OpenAI)',
    filename: 'query-trigger.sql',
    language: 'sql',
    usage: 'Debugs database queries, drafts architecture boilerplate, and explains complex documentation.',
    color: '#10a37f',
    latency: '24ms',
    prompts: [
      'How to optimize PostgreSQL query triggers for multi-account financial balances?',
      'Generate safe Next.js App Router Server Action with Zod schema validation.',
      'Fix null reference error in async event dispatcher queue.'
    ],
    responses: [
      `-- Optimized PostgreSQL Balance Synchronization Trigger
CREATE OR REPLACE FUNCTION sync_account_balance()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE accounts
  SET balance = balance + (NEW.amount - COALESCE(OLD.amount, 0))
  WHERE id = NEW.account_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_sync_balance
AFTER INSERT OR UPDATE ON transactions
FOR EACH ROW EXECUTE FUNCTION sync_account_balance();`,

      `// Next.js App Router Server Action with Zod Validation
'use server'

import { z } from 'zod'

const TransactionSchema = z.object({
  accountId: z.string().uuid(),
  amount: z.number().positive(),
  category: z.string().min(2),
})

export async function createTransaction(formData: FormData) {
  const parsed = TransactionSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { error: parsed.error.flatten() }
  
  // Atomic Database Mutation
  return { success: true, data: parsed.data }
}`,

      `// Async Event Queue Dispatcher Fix
class AsyncQueueDispatcher {
  async dispatch(eventPayload: EventPayload | null) {
    if (!eventPayload?.id) return { status: 'skipped', reason: 'null_payload' }
    
    await Promise.allSettled(
      this.listeners.map(listener => listener.notify?.(eventPayload))
    )
    return { status: 'dispatched', eventId: eventPayload.id }
  }
}`
    ]
  },
  {
    id: 'claude',
    icon: ClaudeIcon,
    name: 'Claude 3.5 Sonnet',
    filename: 'useMousePosition.ts',
    language: 'typescript',
    usage: 'Refactors complex React hooks, structures clean code, and enhances documentation clarity.',
    color: '#c96342',
    latency: '18ms',
    prompts: [
      'Refactor complex React component state into clean custom hooks.',
      'Structure clean architectural documentation for component hierarchy.',
      'Optimize layout rendering performance to achieve 60fps frame rate.'
    ],
    responses: [
      `// Custom React Hook: Zero Re-Render Mouse Tracking
import { useState, useEffect } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return position
}`,

      `/**
 * Portfolio Architecture & Component Hierarchy
 * 
 * App Router (layout.js)
 * ├── Navbar (Floating Glass Pill)
 * ├── HeroSection (Profile Stage & Ambient Aura)
 * ├── ProjectsSection (Filtered 3D Liquid Cards)
 * ├── SkillsSection (Interactive Matrix)
 * └── AISection (Authentic AI Generation Studio)
 */`,

      `// Performance Optimization: React.memo & Pure Components
import React, { memo } from 'react'

export const HeavyListItem = memo(function HeavyListItem({ item }: { item: Item }) {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
      <h4>{item.title}</h4>
      <p className="text-xs text-[#a1a1a6]">{item.description}</p>
    </div>
  )
})`
    ]
  },
  {
    id: 'gemini',
    icon: GeminiIcon,
    name: 'Gemini 1.5 Pro',
    filename: 'fastapi_ai.py',
    language: 'python',
    usage: 'Analyzes design tokens, explores API specs, and builds multi-turn prompt endpoints.',
    color: '#4285f4',
    latency: '21ms',
    prompts: [
      'Analyze modern UI design trends and generate responsive CSS tokens.',
      'Evaluate multi-turn system prompt parameters for AI companion endpoint.',
      'Test Python FastAPI integration with Google Generative AI SDK.'
    ],
    responses: [
      `/* Glassmorphic HSL Design System Tokens */
:root {
  --bg-primary: #08080c;
  --bg-secondary: #0c0c10;
  --accent-gold: #d4a853;
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.12);
  --apple-ease: cubic-bezier(0.16, 1, 0.3, 1);
}`,

      `# FastAPI Multi-Turn AI System Endpoint
from fastapi import FastAPI, HTTPException
import google.generativeai as genai

app = FastAPI(title="MoodFit AI Companion")
model = genai.GenerativeModel('gemini-1.5-pro')

@app.post("/api/ai/suggest")
async def suggest_activity(user_mood: str):
    prompt = f"Given user mood '{user_mood}', suggest 3 healthy activities."
    response = model.generate_content(prompt)
    return {"status": "success", "suggestions": response.text}`,

      `# Google Generative AI Integration Test
import os
import google.generativeai as genai

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
response = genai.generate_content(
    contents="Explain micro-animations in web design",
    generation_config={"temperature": 0.7, "top_p": 0.9}
)
print("Result:", response.text)`
    ]
  },
  {
    id: 'cli',
    icon: OpenCodeIcon,
    name: 'OpenCode CLI Agent',
    filename: 'turbopack.log',
    language: 'bash',
    usage: 'Executes terminal script edits, Turbopack builds, and workspace lint verification.',
    color: '#a855f7',
    latency: '12ms',
    prompts: [
      'Execute production build verification & Turbopack bundle analysis.',
      'Run lint audit across workspace components.',
      'Inspect static route generation performance.'
    ],
    responses: [
      `$ next build --turbo

▲ Next.js 16.2.9 (Turbopack)
✓ Compiled successfully in 2.6s
✓ TypeScript checked in 81ms
✓ Static pages generated (5/5) in 481ms
✓ 0 Errors, 0 Warnings
✓ Output: 100% Optimized Production Bundle`,

      `$ eslint src/components --fix

✔ Audited 24 workspace components
✔ Fixed 0 lint errors
✔ All imports resolved cleanly
✔ Codebase quality score: 100%`,

      `$ npx next-sitemap

✔ Generated sitemap.xml for static routes
✔ Verified canonical URLs & meta tags
✔ Route optimization score: A+`
    ]
  },
]

export default function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTool, setActiveTool] = useState(aiTools[0])
  const [variationIndex, setVariationIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  // Simulation states
  const [displayedResponse, setDisplayedResponse] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [currentStep, setCurrentStep] = useState(1) // 1: Analyzing, 2: Building, 3: Generating
  const [activeLabel, setActiveLabel] = useState('Analyzing...')

  const currentPrompt = activeTool.prompts[variationIndex % activeTool.prompts.length]
  const currentResponse = activeTool.responses[variationIndex % activeTool.responses.length]

  const handleSimulate = (tool, promptIdx = null) => {
    setDisplayedResponse('')
    setIsProcessing(true)
    setIsStreaming(false)
    setCurrentStep(1)
    setActiveLabel('Analyzing...')
    setCopied(false)

    if (promptIdx !== null) {
      setActiveTool(tool)
      setVariationIndex(promptIdx)
    } else if (activeTool.id === tool.id) {
      setVariationIndex(prev => prev + 1)
    } else {
      setActiveTool(tool)
      setVariationIndex(0)
    }
  }

  // Realistic Multi-Stage Sequential Delay Pipeline (Analyzing -> Building -> Generating -> Stream)
  useEffect(() => {
    let isCancelled = false

    // Step 1: Analyzing (0 - 1000ms)
    setCurrentStep(1)
    setActiveLabel('Analyzing...')

    // Step 2: Building (1000ms - 2200ms)
    const t1 = setTimeout(() => {
      if (isCancelled) return
      setCurrentStep(2)
      setActiveLabel('Building...')
    }, 1000)

    // Step 3: Generating (2200ms - 3000ms)
    const t2 = setTimeout(() => {
      if (isCancelled) return
      setCurrentStep(3)
      setActiveLabel('Generating...')
    }, 2200)

    // Step 4: Code Output Streaming (3000ms+)
    const thinkTimer = setTimeout(() => {
      if (isCancelled) return
      setIsProcessing(false)
      setIsStreaming(true)

      let idx = 0
      const respTimer = setInterval(() => {
        if (isCancelled) return
        if (idx < currentResponse.length) {
          idx = Math.min(idx + 3, currentResponse.length)
          setDisplayedResponse(currentResponse.slice(0, idx))
        } else {
          setIsStreaming(false)
          clearInterval(respTimer)
        }
      }, 10)
    }, 3000)

    return () => {
      isCancelled = true
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(thinkTimer)
    }
  }, [activeTool.id, variationIndex, currentResponse])

  const handleCopy = () => {
    if (displayedResponse) {
      navigator.clipboard.writeText(displayedResponse)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="ai-lab" ref={ref} className="section-padding relative overflow-hidden">
      <GlassFilter />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Ambient glowing background aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.06] blur-3xl transition-colors duration-700"
          style={{ background: `radial-gradient(circle, ${activeTool.color} 0%, transparent 70%)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#a1a1a6] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] animate-pulse" />
              06 — Developer Tooling &amp; AI Integration
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold mt-2 leading-[1.08] tracking-[-0.035em] text-gradient"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Interactive AI Lab
            </h2>
            <p className="text-sm text-[#a1a1a6] mt-2 max-w-xl">
              Experience live AI code generation, architectural analysis, and real-time prompt workflow execution.
            </p>
          </motion.div>
        </div>

        {/* AUTHENTIC AI STUDIO CONTAINER (Liquid Glass Wrapper) */}
        <GlassEffect className="rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
          <div className="w-full bg-[#0a0a0d]/90 backdrop-blur-2xl p-6 sm:p-8 space-y-6">

            {/* TOP BAR: AI Model Tabs & Engine Selector */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2 flex-wrap">
                {aiTools.map((tool) => (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => handleSimulate(tool)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${activeTool.id === tool.id
                        ? 'bg-white/15 text-white border border-white/20 shadow-md'
                        : 'bg-white/[0.02] text-[#a1a1a6] hover:text-white hover:bg-white/[0.06] border border-white/10'
                      }`}
                  >
                    <tool.icon size={16} style={{ color: tool.color }} />
                    <span>{tool.name}</span>
                    {activeTool.id === tool.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-[#a1a1a6]">
                <span className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full">
                  <Zap size={12} className="text-amber-400" /> Latency: {activeTool.latency}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                </span>
              </div>
            </div>

            {/* PROMPT CONSOLE: Preset Prompt Pills & Interactive Generate Input */}
            <div className="space-y-4">
              {/* Preset Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-[11px]">
                <span className="text-[#a1a1a6] font-mono flex-shrink-0 flex items-center gap-1">
                  <Bot size={13} className="text-[#d4a853]" /> Presets:
                </span>
                {activeTool.prompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSimulate(activeTool, idx)}
                    className={`px-3 py-1.5 rounded-lg border text-left whitespace-nowrap transition-all cursor-pointer ${variationIndex % activeTool.prompts.length === idx
                        ? 'border-[#d4a853]/40 bg-[#d4a853]/10 text-[#f5f5f7]'
                        : 'border-white/10 bg-white/[0.02] text-[#a1a1a6] hover:border-white/20 hover:text-white'
                      }`}
                  >
                    &ldquo;{p.length > 45 ? p.slice(0, 45) + '...' : p}&rdquo;
                  </button>
                ))}
              </div>

              {/* Main Prompt Bar with Embedded AnimatedGenerateButton */}
              <div className="p-4 rounded-2xl border border-white/15 bg-white/[0.02] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex-1 space-y-1">
                  <div className="text-[10px] text-[#a1a1a6] uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Sparkles size={11} className="text-[#d4a853]" /> INPUT PROMPT
                  </div>
                  <div className="text-xs sm:text-sm font-sans text-[#f5f5f7] font-medium leading-relaxed">
                    &ldquo;{currentPrompt}&rdquo;
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center justify-end">
                  <AnimatedGenerateButton
                    labelIdle="Generate"
                    labelActive={activeLabel}
                    generating={isProcessing || isStreaming}
                    onClick={() => handleSimulate(activeTool)}
                    highlightHueDeg={210}
                  />
                </div>
              </div>
            </div>

            {/* REAL-TIME MULTI-STAGE GENERATION SCREEN */}
            <div className="border border-white/15 rounded-2xl bg-[#060608] overflow-hidden shadow-2xl">

              {/* Screen Top Bar */}
              <div className="px-4 py-3 border-b border-white/10 bg-white/[0.03] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCode2 size={14} style={{ color: activeTool.color }} />
                  <span className="text-xs font-mono text-[#f5f5f7] font-semibold">
                    {activeTool.filename}
                  </span>
                  <span className="text-[10px] font-mono text-[#a1a1a6] uppercase px-2 py-0.5 rounded bg-white/[0.04]">
                    {activeTool.language}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {(isProcessing || isStreaming) && (
                    <span className="text-xs font-mono text-amber-400 flex items-center gap-1.5 font-semibold">
                      <RefreshCw size={12} className="animate-spin" /> {activeLabel}
                    </span>
                  )}
                  {displayedResponse && !isProcessing && !isStreaming && (
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-xs font-mono text-[#a1a1a6] hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      {copied ? 'Copied' : 'Copy Code'}
                    </button>
                  )}
                </div>
              </div>

              {/* Screen Body */}
              <div className="p-6 font-mono text-xs min-h-[300px] space-y-6">

                {/* REALISTIC MULTI-STAGE SEQUENTIAL DELAY PIPELINE (Analyzing -> Building -> Generating) */}
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.04] space-y-3 font-sans"
                  >
                    <div className="text-xs font-bold text-amber-400 flex items-center gap-2 tracking-wide uppercase">
                      <RefreshCw size={13} className="animate-spin" /> AI Execution Pipeline — {activeLabel}
                    </div>
                    <div className="space-y-2.5 text-xs">
                      <div className={`flex items-center gap-2.5 ${currentStep >= 1 ? 'text-emerald-400 font-semibold' : 'text-[#86868b]'}`}>
                        {currentStep > 1 ? (
                          <CheckCircle2 size={14} className="text-emerald-400" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-amber-400 border-t-transparent animate-spin flex-shrink-0" />
                        )}
                        <span>Analyzing prompt intent, AST structure &amp; tokens...</span>
                      </div>

                      <div className={`flex items-center gap-2.5 ${currentStep >= 2 ? 'text-emerald-400 font-semibold' : 'text-[#86868b]'}`}>
                        {currentStep > 2 ? (
                          <CheckCircle2 size={14} className="text-emerald-400" />
                        ) : currentStep === 2 ? (
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-amber-400 border-t-transparent animate-spin flex-shrink-0" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-white/20 flex-shrink-0" />
                        )}
                        <span>Building code architecture, schema &amp; dependencies...</span>
                      </div>

                      <div className={`flex items-center gap-2.5 ${currentStep >= 3 ? 'text-emerald-400 font-semibold' : 'text-[#86868b]'}`}>
                        {currentStep === 3 ? (
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-amber-400 border-t-transparent animate-spin flex-shrink-0" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-white/20 flex-shrink-0" />
                        )}
                        <span>Generating production solution code...</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE STREAMING CODE OUTPUT WINDOW */}
                {(!isProcessing || isStreaming || displayedResponse) && (
                  <div className="relative">
                    <pre className="text-xs sm:text-[13px] text-[#f5f5f7] leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono">
                      <code>{displayedResponse}</code>
                      {isStreaming && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.4 }}
                          className="inline-block w-2 h-4 bg-emerald-400 ml-1 translate-y-0.5 shadow-[0_0_8px_#34d399]"
                        />
                      )}
                    </pre>
                  </div>
                )}
              </div>

              {/* Screen Footer Status Bar */}
              <div className="px-6 py-3.5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[11px] font-sans text-[#a1a1a6]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Engine: <strong className="text-[#f5f5f7]">{activeTool.name}</strong></span>
                </span>
                <span className="font-mono text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {isProcessing ? activeLabel : isStreaming ? 'Streaming Code...' : '✓ 100% Truthful Portfolio Artifact'}
                </span>
              </div>

            </div>

          </div>
        </GlassEffect>
      </div>
    </section>
  )
}
