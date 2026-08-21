'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, FileText, ShieldCheck, Calendar, Check, X, ZoomIn, ZoomOut, RotateCcw, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Card3D from './Card3D'
import Magnetic from './Magnetic'
import { GlassEffect } from './ui/liquid-glass'
import { GlowingEffect } from './ui/glowing-effect'

const certificates = [
  {
    title: 'Supercharge Code Quality and Security: AI-Assisted Checks with Antigravity CLI and SDK',
    issuer: 'Google (GDG Live Indonesia)',
    platform: 'Challenge Lab',
    date: 'Aug 2026',
    image: '/certificates/LabTracer.png',
    images: ['/certificates/LabTracer.png'],
    verifyUrl: 'https://drive.google.com/file/d/1sj4u4cK-MPxfmOtypAz89FPY3g5TmqL8/view',
    learnings: [
      'Built AI code review assistant prototype using Antigravity CLI & SDK for CI/CD pipelines.',
      'Automated software validation, vulnerability scanning, and quality checks.',
      'Skills: AI, Code Review, App Security, Software Validation, CI/CD.'
    ]
  },
  {
    title: 'IT - AI Agent for Programming — Capstone & Transcripts',
    issuer: 'IBM SkillsBuild × Hacktiv8',
    platform: 'University Education Program',
    date: 'Jul 2026',
    image: '/certificates/IT_AI_Agent_for_Programming_p1.png',
    images: [
      '/certificates/IT_AI_Agent_for_Programming_p1.png',
      '/certificates/IT_AI_Agent_for_Programming_2_p1.png',
      '/certificates/IT_AI_Agent_for_Programming_2_p2.png',
    ],
    verifyUrl: 'https://students.hacktiv8.com/certificates/98a19f71-062b-48a0-9858-6804300ce228',
    learnings: [
      'Built end-to-end AI Agent workflows and automated orchestration using Langflow & IBM Bob.',
      'Achieved 92.35 Final Project Score (97 Creativity & Innovation, 93 Completeness & Feasibility).',
      'Skills: AI Agents, Langflow, LLM Integration, Workflow Automation, Hacktiv8 × IBM SkillsBuild.'
    ]
  },
  {
    title: 'Spec-Driven Development with Antigravity CLI — Skills & MCP Workflows',
    issuer: 'Google (GDG Live Indonesia)',
    platform: 'Challenge Lab',
    date: 'Jul 2026',
    image: '/certificates/Recognition of Engagement.png',
    images: ['/certificates/Recognition of Engagement.png'],
    verifyUrl: 'https://drive.google.com/file/d/1KbLPIMCq-ItKok3DjWzu9XTVZieAFZ01/view',
    learnings: [
      'Mastered Agent Engineering workflow, Antigravity CLI, and Agent Skills.',
      'Implemented Spec-Driven Development (SDD) & BigQuery Model Context Protocol (MCP).',
      'Skills: Antigravity CLI, SDD, MCP, BigQuery, GCP, Agent Engineering.'
    ]
  },
  {
    title: 'Frontend Development Internship Certificate',
    issuer: 'ICA Course',
    platform: 'Internship Program',
    date: 'Jun 2026',
    image: '/certificates/Sertifikat ICA Course (1).png',
    images: [
      '/certificates/Sertifikat ICA Course (1).png',
      '/certificates/Sertifikat ICA Course (2).png',
    ],
    verifyUrl: 'https://bimbel-icacourse.com/',
    learnings: [
      'Designed and deployed responsive web landing page using Next.js & Tailwind CSS.',
      'Optimized layout performance, cross-browser responsiveness, and component architecture.',
      'Completed practical 6-month front-end engineering internship.'
    ]
  },
  {
    title: 'Coursera Technical Certification',
    issuer: 'Coursera Platform',
    platform: 'Online Academy',
    date: 'Jun 2026',
    image: '/certificates/Coursera MZSZG06CCL70.jpg',
    images: ['/certificates/Coursera MZSZG06CCL70.jpg'],
    verifyUrl: 'https://coursera.org/verify/MZSZG06CCL70',
    learnings: [
      'Mastered core computer science and web application fundamentals.',
      'Completed practical coursework in software design and algorithms.',
      'Passed standardized course assessments with distinction.'
    ]
  },
  {
    title: 'IBM SkillsBuild — AI Agents, LLMs & Code Troubleshooting',
    issuer: 'IBM SkillsBuild',
    platform: 'Adobe Learning Manager',
    date: 'Jun – Jul 2026',
    image: '/certificates/CompletionCertificate_SkillsBuild.png',
    images: [
      '/certificates/CompletionCertificate_SkillsBuild.png',
      '/certificates/CompletionCertificate_SkillsBuild2.png',
      '/certificates/CompletionCertificate_SkillsBuild3.png',
    ],
    verifyUrl: '/certificates/CompletionCertificate_SkillsBuild.pdf',
    learnings: [
      'Introduction to Large Language Models: Transformer architectures, prompt engineering, and LLM foundations.',
      'Lab: Troubleshoot Your Code Using IBM Bob: AI-assisted debugging, automated error resolution, and code quality.',
      'Intelligent by Design: Build an AI Agent: Architectural patterns for autonomous AI agents and task orchestration.',
      'Skills: AI Agents, LLMs, AI Debugging, Software Quality, IBM SkillsBuild.'
    ]
  },
  {
    title: 'Certificate of Competency — Computer & Soft Skills',
    issuer: 'Competency Assessment Board',
    platform: 'Certification',
    date: 'May 2023',
    image: '/certificates/computer-skill-front.jpeg',
    images: ['/certificates/computer-skill-front.jpeg', '/certificates/computer-skill-back.jpeg'],
    verifyUrl: null,
    learnings: [
      'Demonstrated high proficiency in technical problem solving & IT operations.',
      'Certified in professional adaptability and team collaboration.',
      'Validated readiness for corporate software engineering environments.'
    ]
  },
  {
    title: 'English Assessment — Basic Proficiency',
    issuer: 'SMK Negeri 5 Tangerang',
    platform: 'Proficiency Test',
    date: 'May 2023',
    image: '/certificates/english-basic-front.jpeg',
    images: ['/certificates/english-basic-front.jpeg', '/certificates/english-basic-back.jpeg'],
    verifyUrl: null,
    learnings: [
      'Demonstrated foundational English communication skills.',
      'Understand technical terminology and essential vocabulary.',
      'Passed standardized school proficiency assessment.'
    ]
  },
  {
    title: 'English Language Course Certificate',
    issuer: 'Les Gracia',
    platform: 'Language Academy',
    date: 'Jun 2023',
    image: '/certificates/gracia.jpeg',
    images: ['/certificates/gracia.jpeg'],
    verifyUrl: 'https://www.graciaenglishcourse.com/',
    learnings: [
      'Completed comprehensive English language curriculum.',
      'Developed practical reading, writing, and technical speaking skills.',
      'Enhanced communication confidence for software development.'
    ]
  }
]

function ImageWithFallback({ src, alt, priority, ...props }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
        <Award size={32} className="text-cyan-400 mb-2 opacity-80" />
        <span className="text-xs font-semibold text-[#f5f5f7]">{alt}</span>
        <span className="text-[10px] text-[#a1a1a6] mt-1 font-mono">Verified Credentials Record</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      onError={() => setError(true)}
      {...props}
    />
  )
}

export default function CertificatesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [visibleCount, setVisibleCount] = useState(6)
  const [activeLightbox, setActiveLightbox] = useState(null)
  const [zoomScale, setZoomScale] = useState(1)

  const handleLoadMore = () => setVisibleCount(prev => prev + 6)
  const handleShowLess = () => {
    setVisibleCount(6)
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleZoomIn = useCallback(() => {
    setZoomScale(prev => Math.min(Number((prev + 0.35).toFixed(2)), 3.5))
  }, [])

  const handleZoomOut = useCallback(() => {
    setZoomScale(prev => Math.max(Number((prev - 0.35).toFixed(2)), 1))
  }, [])

  const handleResetZoom = useCallback(() => {
    setZoomScale(1)
  }, [])

  const openLightbox = (cert) => {
    setZoomScale(1)
    setActiveLightbox({
      title: cert.title,
      images: cert.images || [cert.image],
      index: 0,
    })
  }

  const closeLightbox = useCallback(() => {
    setActiveLightbox(null)
    setZoomScale(1)
  }, [])

  const handlePageChange = useCallback((newIndex) => {
    setZoomScale(1)
    setActiveLightbox(prev => (prev ? { ...prev, index: newIndex } : null))
  }, [])

  const handleWheel = (e) => {
    if (!activeLightbox) return
    if (e.deltaY < 0) {
      handleZoomIn()
    } else if (e.deltaY > 0) {
      handleZoomOut()
    }
  }

  const handleDoubleClick = () => {
    setZoomScale(prev => (prev > 1 ? 1 : 2))
  }

  // Lock background / page scroll when lightbox modal is open + add keyboard hotkeys
  useEffect(() => {
    if (activeLightbox) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeLightbox()
        } else if (e.key === '+' || e.key === '=') {
          handleZoomIn()
        } else if (e.key === '-' || e.key === '_') {
          handleZoomOut()
        } else if (e.key === '0') {
          handleResetZoom()
        } else if (e.key === 'ArrowLeft' && activeLightbox.images.length > 1) {
          handlePageChange((activeLightbox.index - 1 + activeLightbox.images.length) % activeLightbox.images.length)
        } else if (e.key === 'ArrowRight' && activeLightbox.images.length > 1) {
          handlePageChange((activeLightbox.index + 1) % activeLightbox.images.length)
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
        document.body.style.touchAction = ''
      }
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [activeLightbox, handleZoomIn, handleZoomOut, handleResetZoom, closeLightbox, handlePageChange])

  return (
    <section
      id="certificates"
      ref={ref}
      className="section-padding relative"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#cbd5e1] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            05 — Verification &amp; Credentials
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold mt-2 leading-[1.08] tracking-[-0.035em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Certificate Exhibition
          </h2>
        </motion.div>

        {/* Exhibition Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.slice(0, visibleCount).map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.06, duration: 0.6 }}
            >
              <Card3D maxRotate={10} className="h-full rounded-2xl">
                <GlassEffect className="rounded-2xl border border-white/15 h-full relative">
                  <GlowingEffect
                    spread={35}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <article className="group overflow-hidden flex flex-col h-full bg-transparent z-10 relative">
                    {/* Thumbnail Area */}
                    <div
                      className="relative aspect-[16/10] flex items-center justify-center p-4 border-b border-white/10 overflow-hidden select-none cursor-pointer group/img bg-transparent"
                      onClick={() => openLightbox(cert)}
                    >
                      <ImageWithFallback
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-500 ease-out"
                      />
                      {/* Hover Overlay with Smooth Dynamic Liquid Glass */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px] opacity-0 group-hover/img:opacity-100 transition-all duration-300 ease-out flex items-center justify-center pointer-events-none">
                        <div
                          className="px-4 py-2.5 rounded-full text-white flex items-center gap-2 text-xs font-semibold transform scale-90 group-hover/img:scale-100 opacity-0 group-hover/img:opacity-100 transition-all duration-300 ease-out select-none"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(56, 189, 248, 0.06) 100%)',
                            backdropFilter: 'blur(16px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                            border: '1px solid rgba(56, 189, 248, 0.4)',
                            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.25), 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.2)',
                          }}
                        >
                          <ZoomIn size={15} className="text-[#38bdf8]" />
                          <span className="tracking-wide text-[#f5f5f7]">View Certificate</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between text-[#cbd5e1] text-[11px] mb-3">
                        <span className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[#f5f5f7]">
                          <ShieldCheck size={13} className="text-[#38bdf8]" />
                          {cert.issuer}
                        </span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar size={11} />
                          {cert.date}
                        </span>
                      </div>

                      <h3
                        className="font-bold text-[#f5f5f7] text-base leading-snug mb-4 tracking-tight"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {cert.title}
                      </h3>

                      {/* Learnings Bullet List */}
                      <ul className="space-y-2 mb-6 flex-1 text-xs text-[#cbd5e1] leading-relaxed">
                        {cert.learnings.map((l, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check size={12} className="text-[#38bdf8] flex-shrink-0 mt-0.5" />
                            <span>{l}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Interactive Actions */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                        {cert.verifyUrl && (
                          <Magnetic strength={0.2} className="w-full">
                            <a
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold rounded-xl bg-white/[0.06] border border-white/15 text-[#f5f5f7] hover:bg-white/[0.14] transition-all"
                            >
                              <ExternalLink size={13} /> Official Record
                            </a>
                          </Magnetic>
                        )}
                        <Magnetic strength={0.2} className="w-full">
                          <button
                            onClick={() => openLightbox(cert)}
                            className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold rounded-xl border border-white/15 text-[#cbd5e1] hover:text-[#f5f5f7] hover:bg-white/[0.06] transition-all cursor-pointer"
                          >
                            <FileText size={13} /> View Certificate
                          </button>
                        </Magnetic>
                      </div>
                    </div>
                  </article>
                </GlassEffect>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Load More Pagination */}
        {(visibleCount < certificates.length || visibleCount > 6) && (
          <div className="mt-12 flex justify-center gap-4">
            {visibleCount > 6 && (
              <Magnetic strength={0.3}>
                <button
                  onClick={handleShowLess}
                  className="px-6 py-3 rounded-xl border border-white/15 text-xs font-semibold text-[#cbd5e1] hover:text-[#f5f5f7] hover:bg-white/[0.06] transition-all cursor-pointer"
                >
                  Show Less ↑
                </button>
              </Magnetic>
            )}
            {visibleCount < certificates.length && (
              <Magnetic strength={0.3}>
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 rounded-xl bg-[#f5f5f7] text-[#0c0c0e] text-xs font-bold hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Load More Certificates ↓
                </button>
              </Magnetic>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal with Zoom In/Out, Drag/Pan, and Multi-Page Support */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-2xl p-3 sm:p-6 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full h-[85vh] sm:h-[88vh] rounded-2xl overflow-hidden border border-white/20 bg-[#0c0c0e] shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header with Title & Zoom Toolbar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-black/50 backdrop-blur-md z-30">
                <div className="flex items-center gap-2.5 min-w-0 pr-3">
                  <FileText size={16} className="text-[#38bdf8] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#f5f5f7] truncate">
                    {activeLightbox.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  {/* Zoom Controls Bar */}
                  <div className="flex items-center bg-white/[0.06] border border-white/15 rounded-xl p-1 gap-1">
                    <button
                      onClick={handleZoomOut}
                      disabled={zoomScale <= 1}
                      title="Zoom Out (-)"
                      className="p-1.5 rounded-lg text-[#cbd5e1] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all cursor-pointer"
                    >
                      <ZoomOut size={14} />
                    </button>

                    <button
                      onClick={handleResetZoom}
                      title="Reset Zoom (100%)"
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold text-[#38bdf8] hover:bg-white/10 transition-all cursor-pointer select-none"
                    >
                      {Math.round(zoomScale * 100)}%
                    </button>

                    <button
                      onClick={handleZoomIn}
                      disabled={zoomScale >= 3.5}
                      title="Zoom In (+)"
                      className="p-1.5 rounded-lg text-[#cbd5e1] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all cursor-pointer"
                    >
                      <ZoomIn size={14} />
                    </button>

                    {zoomScale > 1 && (
                      <button
                        onClick={handleResetZoom}
                        title="Reset to 100% (0)"
                        className="p-1.5 rounded-lg text-[#cbd5e1] hover:text-[#38bdf8] hover:bg-white/10 transition-all cursor-pointer"
                      >
                        <RotateCcw size={13} />
                      </button>
                    )}
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeLightbox}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-white/25 border border-white/20 transition-all cursor-pointer shadow-lg flex-shrink-0"
                    title="Close (Esc)"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal Image View Area with Zoom & Drag */}
              <div
                className={`relative flex-1 w-full bg-black/70 flex items-center justify-center p-4 overflow-hidden select-none ${
                  zoomScale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
                }`}
                onWheel={handleWheel}
                onDoubleClick={handleDoubleClick}
              >
                <motion.div
                  key={`${activeLightbox.images[activeLightbox.index]}-${activeLightbox.index}`}
                  drag={zoomScale > 1}
                  dragConstraints={{
                    left: -220 * (zoomScale - 1),
                    right: 220 * (zoomScale - 1),
                    top: -160 * (zoomScale - 1),
                    bottom: 160 * (zoomScale - 1),
                  }}
                  dragElastic={0.1}
                  animate={{ scale: zoomScale }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  className="relative w-full h-full flex items-center justify-center pointer-events-auto"
                >
                  <ImageWithFallback
                    src={activeLightbox.images[activeLightbox.index]}
                    alt={`${activeLightbox.title} - Page ${activeLightbox.index + 1}`}
                    fill
                    className="object-contain p-2 pointer-events-none"
                    priority
                  />
                </motion.div>

                {/* Multi-Page Navigation Arrows */}
                {activeLightbox.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePageChange((activeLightbox.index - 1 + activeLightbox.images.length) % activeLightbox.images.length)
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-[#38bdf8] text-white hover:text-black transition-all border border-white/20 shadow-2xl cursor-pointer z-20"
                      title="Previous Page (←)"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePageChange((activeLightbox.index + 1) % activeLightbox.images.length)
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/75 hover:bg-[#38bdf8] text-white hover:text-black transition-all border border-white/20 shadow-2xl cursor-pointer z-20"
                      title="Next Page (→)"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Floating Guide Bar when Zoomed In */}
                {zoomScale > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-white/15 px-3 py-1 rounded-full text-[10px] font-mono text-[#cbd5e1] pointer-events-none z-20 backdrop-blur-md shadow-lg">
                    Drag to pan • Double-click or click % to reset
                  </div>
                )}
              </div>

              {/* Bottom Multi-Page Tab Bar */}
              {activeLightbox.images.length > 1 && (
                <div className="flex items-center justify-center gap-2 px-6 py-3 border-t border-white/10 bg-black/40 backdrop-blur-md z-30">
                  {activeLightbox.images.map((img, idx) => (
                    <button
                      key={img}
                      onClick={() => handlePageChange(idx)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                        activeLightbox.index === idx
                          ? 'bg-[#38bdf8] text-black font-bold shadow-md scale-105'
                          : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      Page {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
