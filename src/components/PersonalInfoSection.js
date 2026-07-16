'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, MapPin, GraduationCap, Mail, Phone, Languages, Briefcase, Laptop, Smartphone } from 'lucide-react'

const personalInfo = [
  { icon: User, label: 'Name', value: 'Ferdinand Arya Wijaya' },
  { icon: MapPin, label: 'Location', value: 'Dadap Tangerang Kosambi' },
  { icon: GraduationCap, label: 'Education', value: 'Undergraduate Informatics Student at Universitas Bunda Mulia Serpong' },
  { icon: Mail, label: 'Email', value: 'ferdinandarya80@gmail.com', href: 'mailto:ferdinandarya80@gmail.com' },
  { icon: Phone, label: 'Phone', value: '0857-7913-7093', href: 'tel:085779137093' },
  { icon: Languages, label: 'Languages', value: 'Indonesia (Native), English & Japanese (Basic)' },
  { icon: Briefcase, label: 'Availability', value: 'Open to Opportunities' },
]

const devices = [
  {
    type: 'laptop',
    name: 'Asus TUF A16',
    role: 'Primary Laptop',
    specs: [
      { label: 'CPU', value: 'Ryzen 7 7445HS' },
      { label: 'GPU', value: 'RTX 4050 6GB VRAM' },
      { label: 'RAM', value: '16GB DDR5' },
      { label: 'Storage', value: '512GB NVMe SSD' },
    ],
  },
  {
    type: 'laptop',
    name: 'Asus X441UV',
    role: 'Secondary Laptop',
    specs: [
      { label: 'CPU', value: 'Intel Core i3' },
      { label: 'GPU', value: 'GeForce 920MX' },
      { label: 'RAM', value: '4GB DDR4' },
      { label: 'Storage', value: '1TB HDD' },
    ],
  },
  {
    type: 'phone',
    name: 'Poco X6 Pro',
    role: 'Primary Mobile',
    specs: [
      { label: 'CPU', value: 'Dimensity 8300 Ultra' },
      { label: 'RAM', value: '12GB LPDDR5X' },
      { label: 'Storage', value: '512GB UFS 4.0' },
    ],
  },
  {
    type: 'phone',
    name: 'Vivo Y15',
    role: 'Secondary Mobile',
    specs: [
      { label: 'CPU', value: 'Helio P35' },
      { label: 'RAM', value: '4GB' },
      { label: 'Storage', value: '64GB' },
    ],
  },
]

export default function PersonalInfoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="personal-info" ref={ref} className="section-padding relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#86868b]">
            03 — Info
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold mt-4 leading-[1.1] tracking-[-0.03em] text-gradient"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Personal<br />Information
          </h2>
        </motion.div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {personalInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-start gap-4 border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-400"
              style={{ background: 'rgba(255,255,255,0.015)' }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-white/[0.06] flex items-center justify-center mt-0.5 group-hover:border-white/[0.12] transition-colors duration-300" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <info.icon size={15} strokeWidth={1.5} className="text-[#86868b] group-hover:text-[#f5f5f7] transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#6e6e73] mb-1">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-[13px] text-[#f5f5f7] hover:text-white/70 transition-colors duration-300 truncate block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-[13px] text-[#f5f5f7] leading-snug">{info.value}</p>
                )}
              </div>

              {/* Availability badge */}
              {info.label === 'Availability' && (
                <div className="ml-auto flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/[0.06] border border-emerald-500/15 text-emerald-400/90 text-[10px] font-medium">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    Open
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Workstation & Gear Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24 mb-12"
        >
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#86868b]">
            Workspace Setup
          </span>
          <h3
            className="text-2xl sm:text-3xl font-bold mt-3 text-[#f5f5f7] tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Workstation & Gear
          </h3>
        </motion.div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {devices.map((device, i) => {
            const Icon = device.type === 'laptop' ? Laptop : Smartphone
            return (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-400 flex flex-col justify-between"
                style={{ background: 'rgba(255,255,255,0.015)' }}
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl border border-white/[0.06] flex items-center justify-center group-hover:border-white/[0.12] transition-colors duration-300" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <Icon size={15} strokeWidth={1.5} className="text-[#86868b] group-hover:text-[#f5f5f7] transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#f5f5f7] tracking-[-0.01em]">{device.name}</h4>
                      <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#6e6e73]">{device.role}</p>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2 mt-4 pt-4 border-t border-white/[0.04]">
                    {device.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center text-[12px]">
                        <span className="text-[#6e6e73]">{spec.label}</span>
                        <span className="text-[#b0b0b5] font-mono text-[11px] text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
