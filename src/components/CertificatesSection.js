'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, FileText, ShieldCheck, Calendar, Check, X, ZoomIn, Award, ChevronLeft, ChevronRight } from 'lucide-react'
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
    title: 'IBM SkillsBuild Technical Completion',
    issuer: 'IBM SkillsBuild',
    platform: 'Global Learning',
    date: 'Jun 2026',
    image: '/certificates/CompletionCertificate_SkillsBuild.jpg',
    images: ['/certificates/CompletionCertificate_SkillsBuild.jpg', '/certificates/CompletionCertificate_SkillsBuild2.jpg'],
    verifyUrl: null,
    learnings: [
      'Earned technical credential in web architecture & modern IT skills.',
      'Completed structured self-paced modules in cloud and frontend concepts.',
      'Validated readiness for professional technology projects.'
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

function ImageWithFallback({ src, alt, ...props }) {
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
      loading="lazy"
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

  const handleLoadMore = () => setVisibleCount(prev => prev + 6)
  const handleShowLess = () => {
    setVisibleCount(6)
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const openLightbox = (cert) => {
    setActiveLightbox({
      title: cert.title,
      images: cert.images || [cert.image],
      index: 0,
    })
  }

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
                        className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                        <span className="p-3 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white shadow-xl flex items-center gap-1.5 text-xs font-medium">
                          <ZoomIn size={16} /> View Certificate
                        </span>
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

      {/* Lightbox Modal with Multi-Page Navigation Support */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-2xl p-4 sm:p-6 flex flex-col items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full h-[80vh] sm:h-[85vh] rounded-2xl overflow-hidden border border-white/20 bg-[#0c0c0e] shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-3 min-w-0 pr-4">
                  <FileText size={16} className="text-[#38bdf8] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#f5f5f7] truncate">
                    {activeLightbox.title}
                  </span>
                </div>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/25 border border-white/20 transition-all cursor-pointer shadow-lg flex-shrink-0"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Image View Area */}
              <div className="relative flex-1 w-full bg-black/60 flex items-center justify-center p-4 overflow-hidden">
                <ImageWithFallback
                  key={activeLightbox.images[activeLightbox.index]}
                  src={activeLightbox.images[activeLightbox.index]}
                  alt={`${activeLightbox.title} - Page ${activeLightbox.index + 1}`}
                  fill
                  className="object-contain p-2"
                />

                {/* Navigation Arrows for Multi-Page Certificates */}
                {activeLightbox.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveLightbox(prev => ({
                          ...prev,
                          index: (prev.index - 1 + prev.images.length) % prev.images.length,
                        }))
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#38bdf8] text-white hover:text-black transition-all border border-white/20 shadow-xl cursor-pointer"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setActiveLightbox(prev => ({
                          ...prev,
                          index: (prev.index + 1) % prev.images.length,
                        }))
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#38bdf8] text-white hover:text-black transition-all border border-white/20 shadow-xl cursor-pointer"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Bottom Multi-Page Tab Bar */}
              {activeLightbox.images.length > 1 && (
                <div className="flex items-center justify-center gap-2 px-6 py-3 border-t border-white/10 bg-black/40 backdrop-blur-md">
                  {activeLightbox.images.map((img, idx) => (
                    <button
                      key={img}
                      onClick={() => setActiveLightbox(prev => ({ ...prev, index: idx }))}
                      className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${activeLightbox.index === idx
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
