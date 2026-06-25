'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, FileText, Calendar, ShieldCheck, Check } from 'lucide-react'

const certificates = [
  {
    title: 'AI for App Building',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Jun 25, 2026',
    image: '/certificates/ai-for-app-building.png',
    pdf: '/certificates/ai-for-app-building.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/P1RG0OICH7RN',
    learnings: [
      'Analyze professional workflows to identify high-impact AI opportunities.',
      'Construct functional web applications using vibe coding techniques.',
      'Evaluate and debug code using AI for stable and functional prototypes.',
      'Build sophisticated, scalable solutions with Gemini and AI Studio.'
    ]
  },
  {
    title: 'AI for Data Analysis',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Jun 25, 2026',
    image: '/certificates/ai-for-data-analysis.png',
    pdf: '/certificates/ai-for-data-analysis.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/KUEP622NJYUA',
    learnings: [
      'Identify success metrics by using AI to analyze business objectives.',
      'Clean, standardise, and format messy data using effective prompting.',
      'Generate spreadsheet formulas using natural language with Gemini in Google Sheets.',
      'Create data visualisations with AI to communicate insights and trends.'
    ]
  },
  {
    title: 'AI for Content Creation',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Jun 25, 2026',
    image: '/certificates/ai-for-content-creation.png',
    pdf: '/certificates/ai-for-content-creation.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/UHW3AWRWYF5Y',
    learnings: [
      'Generate high-quality visual and video assets using Gemini models.',
      'Transform slide decks into visual presentations with Gemini in Google Slides.',
      'Establish custom design guidelines for brand-aligned AI content.',
      'Critique creative assets using targeted AI feedback based on design criteria.'
    ]
  },
  {
    title: 'AI for Writing and Communicating',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Jun 25, 2026',
    image: '/certificates/ai-for-writing-and-communicating.png',
    pdf: '/certificates/ai-for-writing-and-communicating.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/QBG1Z8SOIDJQ',
    learnings: [
      'Synthesize meeting transcripts into actionable summaries and to-do lists.',
      'Refine work with critical AI feedback to prepare for high-stakes reviews.',
      'Construct targeted communication assets using Gemini Canvas constraints.',
      'Evaluate communication strategies by role-playing with Gemini Live.'
    ]
  },
  {
    title: 'AI for Research and Insights',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Jun 25, 2026',
    image: '/certificates/ai-for-research-and-insights.png',
    pdf: '/certificates/ai-for-research-and-insights.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/HNYOCXZ8X1RF',
    learnings: [
      'Synthesize data sources using Gemini Deep Research for comprehensive reports.',
      'Construct a central research hub in NotebookLM to extract key themes.',
      'Develop custom AI expert systems using Gemini Gems for new perspectives.',
      'Evaluate and ground AI-generated findings with source verification.'
    ]
  },
  {
    title: 'AI for Brainstorming and Planning',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Jun 25, 2026',
    image: '/certificates/ai-for-brainstorming-and-planning.png',
    pdf: '/certificates/ai-for-brainstorming-and-planning.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/Y1YGWZHSUHHK',
    learnings: [
      'Brainstorm project concepts using AI as an active creative partner.',
      'Evaluate and prioritize ideas using custom AI decision frameworks.',
      'Identify timeline risks, gaps, and dependencies in project plans.',
      'Manage documentation by building a centralized knowledge hub.'
    ]
  }
]

export default function CertificatesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass border border-white/[0.07] hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col"
            >
              {/* Image / Thumbnail Area */}
              <div className="relative aspect-[16/10] bg-[#0d0d0d] flex items-center justify-center p-4 border-b border-white/[0.06] overflow-hidden select-none">
                {/* Glow behind image on hover */}
                <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors duration-500" />
                
                {/* Thumbnail image */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain rounded border border-white/[0.05] shadow-lg group-hover:scale-[1.02] transition-transform duration-500 z-10"
                />

                {/* Hover Quick actions overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-3 z-20">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                    aria-label="Verify Certificate"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                    aria-label="View PDF"
                  >
                    <FileText size={16} />
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta details (Issuer & Date) */}
                <div className="flex items-center justify-between text-[#8a8a8a] text-[11px] mb-3">
                  <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider">
                    <ShieldCheck size={12} className="text-[#4285f4]" />
                    {cert.issuer} • {cert.platform}
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
                  {cert.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 w-3 h-3 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        <Check size={8} className="text-[#8a8a8a]" />
                      </span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons/Actions */}
                <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <ExternalLink size={12} /> Verify Online
                  </a>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium rounded-xl bg-white/5 border border-white/10 text-[#8a8a8a] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <FileText size={12} /> View PDF
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
