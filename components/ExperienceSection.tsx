'use client'

import { motion } from 'framer-motion'
import { CalendarDays, CheckCircle2 } from 'lucide-react'
import { EXPERIENCE } from '@/lib/constants'

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Internship timeline across business and HR analytics.</h2>
          <p className="section-copy">
            Practical analytics exposure across retail performance, MIS reporting, workforce tracking, and executive
            dashboard development.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary-600 via-sky-500 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative grid gap-8 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>div:first-child]:col-start-2'}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55 }}
              >
                <div className="absolute left-2 top-8 h-5 w-5 rounded-full border-4 border-white bg-primary-600 shadow-corporate md:left-1/2 md:-translate-x-1/2" />
                <motion.div className="bento-card ml-10 p-6 md:ml-0" whileHover={{ y: -6, scale: 1.01 }}>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-2xl border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-corporate-muted">
                      <CalendarDays size={16} />
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-2xl">{exp.position}</h3>
                  <p className="mt-3 text-corporate-body">{exp.description}</p>
                  <div className="mt-6 space-y-3">
                    {exp.responsibilities.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-corporate-body">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-accent-500" size={17} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
