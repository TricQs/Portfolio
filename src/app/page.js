'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

// Dynamic Imports with { ssr: false } for background animation & heavy interactive components
const AnimatedGradientBackground = dynamic(() => import('@/components/AnimatedGradientBackground'), { ssr: false })
const MouseGlowWrapper = dynamic(() => import('@/components/MouseGlowWrapper'), { ssr: false })
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), { ssr: false })
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: false })
const SkillsSection = dynamic(() => import('@/components/SkillsSection'), { ssr: false })
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'), { ssr: false })
const CertificatesSection = dynamic(() => import('@/components/CertificatesSection'), { ssr: false })
const AISection = dynamic(() => import('@/components/AISection'), { ssr: false })
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  return (
    <>
      {/* 21st.dev Animated Radial Gradient Background (Fixed & Following Scroll) */}
      <AnimatedGradientBackground opacity={1.0} blurAmount="35px" />

      {/* Mouse spotlight glow */}
      <MouseGlowWrapper />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Landmark */}
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-[1] bg-transparent focus:outline-none"
      >
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificatesSection />
        <AISection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
