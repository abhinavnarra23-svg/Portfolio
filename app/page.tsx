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
  ResumeSection,
  ContactSection,
} from '@/components'
import ScrollProgressBar from '@/components/ScrollProgressBar'

export default function Home() {
  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

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

        {/* Resume Section */}
        <ResumeSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
