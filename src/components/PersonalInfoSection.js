'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, MapPin, GraduationCap, Mail, Phone, Languages, Briefcase } from 'lucide-react'

const personalInfo = [
  { icon: User, label: 'Name', value: 'Ferdinand Arya Wijaya' },
  { icon: MapPin, label: 'Location', value: 'Dadap Tangerang Kosambi' },
  { icon: GraduationCap, label: 'Education', value: 'Undergraduate Informatics Student at Universitas Bunda Mulia Serpong' },
  { icon: Mail, label: 'Email', value: 'ferdinandarya80@gmail.com', href: 'mailto:ferdinandarya80@gmail.com' },
  { icon: Phone, label: 'Phone', value: '0857-7913-7093', href: 'tel:085779137093' },
  { icon: Languages, label: 'Languages', value: 'Indonesia (Native), English & Japanese (Basic)' },
  { icon: Briefcase, label: 'Availability', value: 'Open to Opportunities' },
]

export default function PersonalInfoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="personal-info" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            03 — Info
          </span>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mt-3 leading-tight text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Personal<br />Information
          </h2>
        </motion.div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {personalInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-start gap-4 glass border border-white/[0.07] rounded-2xl p-5 hover:border-white/15 hover:bg-white/[0.03] transition-all duration-400"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center mt-0.5 group-hover:border-white/20 transition-colors duration-300">
                <info.icon size={15} className="text-[#8a8a8a] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#8a8a8a] mb-1">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm text-white hover:text-white/70 transition-colors duration-300 truncate block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-white leading-snug">{info.value}</p>
                )}
              </div>

              {/* Availability badge */}
              {info.label === 'Availability' && (
                <div className="ml-auto flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-medium">
                    <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                    Open
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
