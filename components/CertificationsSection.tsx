'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { CERTIFICATIONS } from '@/lib/constants'

export function CertificationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="text-primary-400 font-semibold uppercase tracking-widest">Credentials</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Certifications & Credentials
          </motion.h2>
          <motion.div variants={itemVariants} className="separator mx-auto mb-4" />
          <motion.p variants={itemVariants} className="text-slate-400 max-w-2xl mx-auto text-lg">
            Continuous learning and professional development through industry-recognized certifications
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              className="group card p-8 hover:border-primary-600 hover:shadow-glow transition-all cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center mb-4 group-hover:bg-primary-600/40 transition-all">
                <Award className="text-primary-400" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-primary-400 font-semibold mb-3">{cert.issuer}</p>
              <p className="text-slate-400 text-sm mb-4">{cert.date}</p>

              {/* Credential Link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                >
                  View Credential
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Learning */}
        <motion.div
          className="mt-16 card p-8 bg-dark-card/50"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Continuous Learning</h3>
          <p className="text-slate-300 mb-4">Currently exploring:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Advanced Machine Learning', 'Cloud Analytics (AWS/GCP)', 'Deep Learning with TensorFlow'].map(
              (course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-lg bg-dark-bg border border-dark-border hover:border-primary-600 transition-colors"
                >
                  <span className="text-2xl">📚</span>
                  <span className="text-slate-300">{course}</span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
