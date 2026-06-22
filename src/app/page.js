import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ApproachSection from '@/components/ApproachSection'
import PersonalInfoSection from '@/components/PersonalInfoSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import AISection from '@/components/AISection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import MouseGlowWrapper from '@/components/MouseGlowWrapper'

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
        <AISection />
        <ContactSection />
      </div>

      {/* Sticky-reveal footer — fixed behind content */}
      <Footer />
    </>
  )
}
