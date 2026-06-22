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
    role: 'Primary Dev & Gaming',
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

        {/* Workstation & Gear Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-24 mb-12"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8a8a]">
            Workspace Setup
          </span>
          <h3
            className="text-3xl font-bold mt-2 text-white"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Workstation & Gear
          </h3>
        </motion.div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {devices.map((device, i) => {
            const Icon = device.type === 'laptop' ? Laptop : Smartphone
            return (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group glass border border-white/[0.07] rounded-2xl p-5 hover:border-white/15 hover:bg-white/[0.03] transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-300">
                      <Icon size={16} className="text-[#8a8a8a] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white tracking-wide">{device.name}</h4>
                      <p className="text-[10px] font-medium tracking-wider uppercase text-[#8a8a8a]">{device.role}</p>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2 mt-4 pt-4 border-t border-white/[0.05]">
                    {device.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center text-xs">
                        <span className="text-[#6a6a6a] font-medium">{spec.label}</span>
                        <span className="text-white/85 font-mono text-[11px] text-right">{spec.value}</span>
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
