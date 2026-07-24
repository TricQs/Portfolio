import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import CertificatesSection from '@/components/CertificatesSection'
import AISection from '@/components/AISection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import MouseGlowWrapper from '@/components/MouseGlowWrapper'

const FOOTER_HEIGHT = '70vh'

export default function Home() {
  return (
    <>
      {/* Mouse spotlight glow */}
      <MouseGlowWrapper />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Landmark */}
      <main
        id="main-content"
        tabIndex={-1}
        className="relative z-[1] bg-[var(--bg-primary)] focus:outline-none"
        style={{
          marginBottom: FOOTER_HEIGHT,
        }}
      >
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificatesSection />
        <AISection />
        <ContactSection />
      </main>

      {/* Sticky Reveal Footer */}
      <Footer />
    </>
  )
}
