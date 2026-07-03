import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import dynamic from 'next/dynamic'

const ApproachSection = dynamic(() => import('@/components/ApproachSection'))
const PersonalInfoSection = dynamic(() => import('@/components/PersonalInfoSection'))
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'))
const SkillsSection = dynamic(() => import('@/components/SkillsSection'))
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'))
const CertificatesSection = dynamic(() => import('@/components/CertificatesSection'))
const AISection = dynamic(() => import('@/components/AISection'))
const ContactSection = dynamic(() => import('@/components/ContactSection'))
const Footer = dynamic(() => import('@/components/Footer'))
const MouseGlowWrapper = dynamic(() => import('@/components/MouseGlowWrapper'))

// Footer height that content needs to push below
const FOOTER_HEIGHT = '70vh'

export default function Home() {
  return (
    <>
      {/* Mouse spotlight glow — client only */}
      <MouseGlowWrapper />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content — sits on top of fixed footer (z-index: 1) */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'var(--bg-primary)',
          marginBottom: FOOTER_HEIGHT,
        }}
      >
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <PersonalInfoSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <AISection />
        <ContactSection />
      </div>

      {/* Sticky-reveal footer — fixed behind content */}
      <Footer />
    </>
  )
}
