'use client'

import { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, ArrowRight, Download, Mail, Phone,
  Check,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons'
import { GlassEffect } from './ui/liquid-glass'

const quickActions = [
  {
    id: 'act-cv',
    label: 'Download CV (PDF)',
    description: 'Open curriculum vitae in a new tab',
    keywords: 'cv resume download pdf curriculum vitae profile',
    icon: Download,
    action: () =>
      window.open(
        'https://drive.google.com/file/d/1KvDJ4PDQWPXYdr3xumVfAmV3xaYX2YOA/view?usp=drive_link',
        '_blank'
      ),
  },
  {
    id: 'act-email',
    label: 'Copy Email Address',
    description: 'ferdinandarya80@gmail.com',
    keywords: 'email copy clipboard mail contact ferdinandarya80',
    icon: Mail,
    action: null, // Handled with clipboard copy
  },
  {
    id: 'act-whatsapp',
    label: 'Chat on WhatsApp',
    description: '+62 857-7913-7093',
    keywords: 'whatsapp chat phone wa call message contact 085779137093',
    icon: Phone,
    action: () => window.open('https://wa.me/6285779137093', '_blank'),
  },
  {
    id: 'act-github',
    label: 'Open GitHub Profile',
    description: 'github.com/TricQs',
    keywords: 'github code repository source project portfolio tricqs',
    icon: GitHubIcon,
    action: () => window.open('https://github.com/TricQs', '_blank'),
  },
  {
    id: 'act-linkedin',
    label: 'Open LinkedIn Profile',
    description: 'linkedin.com/in/ferdinandaryaw',
    keywords: 'linkedin professional network connect career ferdinandaryaw',
    icon: LinkedInIcon,
    action: () =>
      window.open('https://www.linkedin.com/in/ferdinandaryaw/', '_blank'),
  },
  {
    id: 'act-instagram',
    label: 'Open Instagram Profile',
    description: '@ferndaryzt',
    keywords: 'instagram social ig follow ferndaryzt',
    icon: InstagramIcon,
    action: () =>
      window.open('https://www.instagram.com/ferndaryzt/', '_blank'),
  },
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  // Filter results by fuzzy keyword matching
  const results = useMemo(() => {
    if (!query.trim()) return quickActions
    const q = query.toLowerCase()
    return quickActions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        (a.description && a.description.toLowerCase().includes(q)) ||
        a.keywords.includes(q)
    )
  }, [query])

  // Reset selection index whenever query/results change
  useEffect(() => {
    setSelectedIndex(0)
  }, [results])

  // Open / Close handlers
  const open = useCallback(() => {
    setIsOpen(true)
    setQuery('')
    setSelectedIndex(0)
    setCopiedEmail(false)
    // Lock body scroll
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }, [])

  // Global Ctrl+K / Cmd+K and Esc listener
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (isOpen) {
          close()
        } else {
          open()
        }
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        close()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, open, close])

  // Auto-focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Action execution
  const executeAction = useCallback(
    (action) => {
      if (action.id === 'act-email') {
        navigator.clipboard.writeText('ferdinandarya80@gmail.com').then(() => {
          setCopiedEmail(true)
          setTimeout(() => setCopiedEmail(false), 2000)
        })
        return // Keep modal open so user sees "Copied!" confirmation
      }
      action.action?.()
      close()
    },
    [close]
  )

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => Math.max(prev - 1, 0))
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault()
        executeAction(results[selectedIndex])
      }
    },
    [results, selectedIndex, executeAction]
  )

  // Auto-scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const item = listRef.current.children[selectedIndex]
      if (item) item.scrollIntoView({ block: 'nearest' })
    }
  }, [selectedIndex])

  return (
    <>
      {/* Trigger button for desktop navbar */}
      <button
        onClick={open}
        className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-[#cbd5e1] hover:text-[#38bdf8] transition-colors cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.10)',
        }}
        aria-label="Open quick actions"
        title="Ctrl + K"
      >
        <Search size={11} />
        <span className="hidden lg:inline">Actions</span>
        <kbd className="ml-1 px-1 py-0.5 rounded text-[9px] font-mono bg-white/[0.06] border border-white/10 text-[#94a3b8]">
          ⌘K
        </kbd>
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Palette Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg z-10"
              role="dialog"
              aria-label="Quick Actions Palette"
            >
              <GlassEffect className="rounded-2xl border border-white/15 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7),0_0_30px_rgba(56,189,248,0.1)]">
                <div
                  style={{
                    background: 'linear-gradient(145deg, rgba(18,18,28,0.95) 0%, rgba(8,8,12,0.98) 100%)',
                  }}
                >
                  {/* Search Input */}
                  <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
                    <Search size={16} className="text-[#38bdf8] shrink-0" />
                    <input
                      ref={inputRef}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Search quick actions..."
                      className="flex-1 bg-transparent text-sm text-[#f5f5f7] placeholder-[#64748b] outline-none font-sans"
                      autoComplete="off"
                      spellCheck={false}
                    />
                    <kbd className="px-1.5 py-0.5 rounded text-[9px] font-mono text-[#64748b] bg-white/[0.05] border border-white/10">
                      ESC
                    </kbd>
                  </div>

                  {/* Quick Actions List */}
                  <div ref={listRef} className="max-h-[320px] overflow-y-auto py-2 px-2">
                    <div className="px-2 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-[#64748b] flex items-center justify-between">
                      <span>Quick Actions</span>
                      <span className="text-[9px] text-[#475569] lowercase font-mono">
                        {results.length} action{results.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    {results.length === 0 ? (
                      <div className="py-8 text-center text-xs text-[#64748b]">
                        No actions found for &ldquo;{query}&rdquo;
                      </div>
                    ) : (
                      results.map((item, idx) => {
                        const isSelected = selectedIndex === idx
                        const isCopied = item.id === 'act-email' && copiedEmail

                        return (
                          <button
                            key={item.id}
                            onClick={() => executeAction(item)}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer group ${
                              isSelected
                                ? 'bg-[#38bdf8]/10 text-white'
                                : 'text-[#cbd5e1] hover:bg-white/[0.04]'
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isSelected
                                  ? 'bg-[#38bdf8]/20 text-[#38bdf8]'
                                  : 'bg-white/[0.03] border border-white/10 text-[#64748b] group-hover:text-[#cbd5e1]'
                              }`}
                            >
                              <item.icon size={15} />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium leading-snug flex items-center gap-2">
                                <span>{item.label}</span>
                                {isCopied && (
                                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono flex items-center gap-1">
                                    <Check size={10} /> Copied!
                                  </span>
                                )}
                              </div>
                              {item.description && (
                                <p className="text-[11px] text-[#64748b] truncate font-mono mt-0.5">
                                  {item.description}
                                </p>
                              )}
                            </div>

                            <ArrowRight
                              size={13}
                              className={`transition-all duration-200 shrink-0 ${
                                isSelected
                                  ? 'opacity-100 text-[#38bdf8] translate-x-0'
                                  : 'opacity-0 -translate-x-1'
                              }`}
                            />
                          </button>
                        )
                      })
                    )}
                  </div>

                  {/* Footer Hint */}
                  <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 text-[9px] font-mono text-[#4a5568]">
                    <span>↑↓ Navigate</span>
                    <span>↵ Select</span>
                    <span>ESC Close</span>
                  </div>
                </div>
              </GlassEffect>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
