'use client'

import {
  Navbar,
  Footer,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  CertificationsSection,
  ContactSection,
} from '@/components'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import ParticlesBackground from '@/components/ParticlesBackground'

export default function Home() {
  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
