'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, FileText, Calendar, ShieldCheck, Check } from 'lucide-react'
import Image from 'next/image'

const certificates = [
  {
    title: 'ICA Course Internship',
    issuer: 'ICA Course',
    platform: 'Internship',
    date: 'Jan 01, 2026 - Jun 30, 2026',
    image: '/certificates/Sertifikat ICA Course (1).png',
    pdf: ['/certificates/Sertifikat ICA Course (1).png', '/certificates/Sertifikat ICA Course (2).png'],
    verifyUrl: null,
    learnings: [
      "Successfully completed a web development internship at ICA Course, spearheading the platform's digital transformation and migration into a custom, scalable web architecture.",
      'Bridged academic theoretical knowledge with hands-on execution by designing responsive UI/UX components and deploying live full-stack website prototypes.',
      "Cultivated collaborative software engineering skills within an agile cross-functional team, earning the 'Most ImprovedIntern Award' award for delivering outstanding technical solutions."
    ]
  },
  {
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Jul 03, 2026',
    image: '/certificates/Coursera MZSZG06CCL70.jpg',
    pdf: '/certificates/Coursera MZSZG06CCL70.jpg',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/MZSZG06CCL70',
    learnings: [
      'Demonstrate advanced fluency in AI workflows across 7 specialized tracks.',
      'Apply prompt engineering and evaluate AI-generated outputs effectively.',
      'Manage a comprehensive portfolio of 20+ AI-driven artifacts.',
      'Vibe code custom AI solutions to solve real-world workplace challenges.'
    ]
  },
  {
    title: 'Lab: Troubleshoot Your Code Using IBM Bob',
    issuer: 'IBM',
    platform: 'SkillsBuild',
    date: 'Jul 07, 2026',
    image: '/certificates/CompletionCertificate_SkillsBuild2.jpg',
    pdf: '/certificates/CompletionCertificate_SkillsBuild2.jpg',
    verifyUrl: null,
    learnings: [
      'Understand the fundamentals of Large Language Models (LLMs) and their capabilities.',
      'Explore real-world applications and use cases of generative AI technologies.',
      'Learn about the ethical considerations and limitations of using LLMs.'
    ]
  },
  {
    title: 'Introduction to Large Language Models',
    issuer: 'IBM',
    platform: 'SkillsBuild',
    date: 'Jun 29, 2026',
    image: '/certificates/CompletionCertificate_SkillsBuild.jpg',
    pdf: '/certificates/CompletionCertificate_SkillsBuild.jpg',
    verifyUrl: null,
    learnings: [
      'Understand the fundamentals of Large Language Models (LLMs) and their capabilities.',
      'Explore real-world applications and use cases of generative AI technologies.',
      'Learn about the ethical considerations and limitations of using LLMs.'
    ]
  },
  {
    title: 'Computer Skill',
    issuer: 'School',
    platform: 'Academic',
    date: 'May 08, 2023',
    image: '/certificates/computer-skill-front.jpeg',
    pdf: ['/certificates/computer-skill-front.jpeg', '/certificates/computer-skill-back.jpeg'],
    verifyUrl: null,
    learnings: [
      'Understand operating system fundamentals and essential software.',
      'Master the use of standard office productivity applications.',
      'Passed the foundational computer skills competency assessment.'
    ]
  },
  {
    title: 'English Basic',
    issuer: 'School',
    platform: 'Academic',
    date: 'May 08, 2023',
    image: '/certificates/english-basic-front.jpeg',
    pdf: ['/certificates/english-basic-front.jpeg', '/certificates/english-basic-back.jpeg'],
    verifyUrl: null,
    learnings: [
      'Demonstrate foundational English communication skills.',
      'Understand basic grammar and essential vocabulary.',
      'Passed the school-level English proficiency assessment.'
    ]
  },
  {
    title: 'English Course',
    issuer: 'Les Gracia',
    platform: 'Offline Course',
    date: 'Jun 23, 2023',
    image: '/certificates/gracia.jpeg',
    pdf: '/certificates/gracia.jpeg',
    verifyUrl: 'https://www.graciaenglishcourse.com/',
    learnings: [
      'Completed a comprehensive English language learning curriculum.',
      'Developed reading, writing, and speaking skills.',
      'Enhanced confidence in practical English communication.'
    ]
  }
]

function CertificateCard({ cert, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group glass border border-white/[0.07] hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full"
    >
      {/* Image / Thumbnail Area */}
      <div className="relative aspect-[16/10] bg-[#0d0d0d] flex items-center justify-center p-4 border-b border-white/[0.06] overflow-hidden select-none">
        <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors duration-500" />

        <Image
          src={cert.image}
          alt={cert.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain rounded border border-white/[0.05] shadow-lg group-hover:scale-[1.02] transition-transform duration-500 z-10"
        />

        {(cert.verifyUrl || cert.pdf) && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-3 z-20">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Verify Certificate"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {Array.isArray(cert.pdf) ? cert.pdf.map((link, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label={`Fullscreen View ${idx + 1}`}
              >
                <FileText size={16} />
              </a>
            )) : cert.pdf && (
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Fullscreen View"
              >
                <FileText size={16} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta details (Issuer & Date) */}
        <div className="flex items-center justify-between text-[#8a8a8a] text-[11px] mb-3">
          <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider">
            <ShieldCheck size={12} className="text-[#4285f4]" />
            {cert.issuer} {cert.platform && `• ${cert.platform}`}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {cert.date}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-semibold text-white text-base leading-snug mb-4 group-hover:text-white/90 transition-colors"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {cert.title}
        </h3>

        {/* Bullet learnings */}
        <ul className="space-y-2 mb-6 flex-1 text-xs text-[#8a8a8a] leading-relaxed">
          {cert.learnings.map((learning, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 w-3 h-3 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <Check size={8} className="text-[#8a8a8a]" />
              </span>
              <span>{learning}</span>
            </li>
          ))}
        </ul>

        {/* Buttons/Actions */}
        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-white/[0.06]">
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${!cert.pdf ? 'col-span-2' : ''}`}
            >
              <ExternalLink size={12} /> Official Website
            </a>
          )}
          {Array.isArray(cert.pdf) ? cert.pdf.map((link, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium rounded-xl bg-white/5 border border-white/10 text-[#8a8a8a] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${(!cert.verifyUrl && cert.pdf.length === 1) ? 'col-span-2' : ''}`}
            >
              <FileText size={12} /> {idx === 0 ? 'Front Side' : 'Back Side'}
            </a>
          )) : cert.pdf && (
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium rounded-xl bg-white/5 border border-white/10 text-[#8a8a8a] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${!cert.verifyUrl ? 'col-span-2' : ''}`}
            >
              <FileText size={12} /> Fullscreen View
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function CertificatesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [visibleCount, setVisibleCount] = useState(6)

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  const handleShowLess = () => {
    setVisibleCount(6)
    if (ref.current) {
      const yOffset = -100 // adjust for header
      const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="certificates"
      ref={ref}
      className="pt-14 pb-8 md:pt-22 md:pb-12 relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            07 — Credentials
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-3 leading-tight text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Certificates &<br />Achievements
          </h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.slice(0, visibleCount).map((cert, i) => (
            <CertificateCard key={cert.title} cert={cert} index={i} inView={inView} />
          ))}
        </div>

        {/* Pagination Buttons */}
        {(visibleCount < certificates.length || visibleCount > 6) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {visibleCount > 6 && (
              <button
                onClick={handleShowLess}
                className="group px-6 py-3 rounded-xl bg-transparent border border-white/10 text-[#8a8a8a] font-medium hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                <span className="group-hover:-translate-y-1 transition-transform duration-300">
                  ↑
                </span>
                Show Less
              </button>
            )}

            {visibleCount < certificates.length && (
              <button
                onClick={handleLoadMore}
                className="group px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Load More Certificates
                <span className="group-hover:translate-y-1 transition-transform duration-300">
                  ↓
                </span>
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
