'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/constants'

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="section relative bg-dark-card/50 border-y border-dark-border">
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
            <span className="text-primary-400 font-semibold uppercase tracking-widest">My Expertise</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Technical Skills
          </motion.h2>
          <motion.div variants={itemVariants} className="separator mx-auto mb-4" />
          <motion.p variants={itemVariants} className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit of programming languages, analytics frameworks, and business intelligence tools
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="card p-8 hover:border-primary-600 hover:shadow-glow transition-all"
              variants={itemVariants}
              whileHover={{ translateY: -5 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-600" />
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-slate-300 font-medium text-sm hover:border-primary-600 hover:text-primary-400 transition-all hover:shadow-glow"
                    variants={skillVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          className="mt-16 card p-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Proficiency Levels</h3>

          <div className="space-y-6">
            {[
              { name: 'Python & SQL', level: 90 },
              { name: 'Data Analysis & Statistics', level: 88 },
              { name: 'Power BI & Excel', level: 85 },
              { name: 'Machine Learning', level: 82 },
              { name: 'R Programming', level: 75 },
              { name: 'Business Intelligence', level: 87 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-primary-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-dark-bg border border-dark-border rounded-full overflow-hidden h-2">
                  <motion.div
                    className="h-full bg-gradient-blue rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 * index }}
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
