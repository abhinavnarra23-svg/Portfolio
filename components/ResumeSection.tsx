'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Mail } from 'lucide-react'
import { PERSON_INFO } from '@/lib/constants'

export function ResumeSection() {
  return (
    <section id="resume" className="section bg-white">
      <div className="container">
        <motion.div
          className="bento-card overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-corporate-border bg-corporate-background p-8 lg:border-b-0 lg:border-r">
              <p className="eyebrow">Resume</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Recruiter-ready analytics profile.</h2>
              <p className="mt-4 text-corporate-body">
                Download the latest resume with analytics internships, dashboards, machine learning projects, and MBA
                Business Analytics education details.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="/resume.pdf" download className="btn-primary">
                  <Download size={18} />
                  Download Resume
                </a>
                <a href={`mailto:${PERSON_INFO.email}`} className="btn-secondary">
                  <Mail size={18} />
                  Contact Me
                </a>
              </div>
            </div>

            <div className="grid gap-4 p-8 sm:grid-cols-3">
              {[
                ['Profile', 'MBA Business Analytics student with internship experience'],
                ['Strength', 'Power BI dashboards, Python analytics, ML insights'],
                ['Focus', 'Recruiter-friendly business impact storytelling'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-corporate-border bg-corporate-background p-5">
                  <FileText className="mb-4 text-primary-600" size={22} />
                  <p className="text-sm font-bold uppercase tracking-normal text-corporate-muted">{label}</p>
                  <p className="mt-3 text-sm font-semibold text-corporate-heading">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
