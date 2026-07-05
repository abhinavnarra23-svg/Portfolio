'use client'

import { motion } from 'framer-motion'
import { Calendar, ChevronRight } from 'lucide-react'
import { EXPERIENCE } from '@/lib/constants'

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="section">
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
            <span className="text-primary-400 font-semibold uppercase tracking-widest">Career Path</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Professional Experience
          </motion.h2>
          <motion.div variants={itemVariants} className="separator mx-auto mb-4" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600 opacity-30" />

          {/* Experience Items */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-cols-2' : 'md:grid-cols-2'
                }`}
                variants={itemVariants}
              >
                {/* Left Side - Content */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <motion.div
                    className="card p-8 hover:border-primary-600 hover:shadow-glow transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">💼</span>
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    </div>

                    <p className="text-primary-400 font-semibold mb-4">{exp.company}</p>

                    <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                        Key Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300">
                            <ChevronRight size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-dark-border space-y-2">
                        <p className="text-sm font-semibold text-accent-400 uppercase tracking-wide">Highlights</p>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                              <span className="text-primary-400 mt-1">✓</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Right Side - Timeline Dot */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-primary-600 border-4 border-dark-bg shadow-glow"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
