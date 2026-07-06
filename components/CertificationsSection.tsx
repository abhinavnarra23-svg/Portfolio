'use client'

import { motion } from 'framer-motion'
import { Award, BookOpenCheck } from 'lucide-react'
import { CERTIFICATIONS } from '@/lib/constants'

export function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">Credentials supporting analytics execution.</h2>
          <p className="section-copy">Focused learning across Python foundations, R programming, and analytics practice.</p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              className="bento-card p-6"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-100 bg-accent-50 text-accent-600">
                <Award size={26} />
              </div>
              <h3 className="text-2xl">{cert.title}</h3>
              <p className="mt-2 font-semibold text-primary-600">{cert.issuer}</p>
              <p className="mt-1 text-sm text-corporate-muted">{cert.date}</p>
            </motion.div>
          ))}

          <motion.div
            className="bento-card p-6 md:col-span-2"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <BookOpenCheck className="mt-1 text-primary-600" size={28} />
                <div>
                  <h3 className="text-2xl">Continuous Learning Focus</h3>
                  <p className="mt-2 text-corporate-body">
                    Advanced machine learning, cloud analytics, data visualization, and executive analytics storytelling.
                  </p>
                </div>
              </div>
              <span className="rounded-2xl border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-bold text-primary-600">
                Analytics Growth Track
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
