'use client'

import { motion } from 'framer-motion'
import { Database, LineChart, Network, Sparkles } from 'lucide-react'
import { SKILLS } from '@/lib/constants'

const icons = [Database, LineChart, Network, Sparkles]
const proficiency = [
  { name: 'Power BI Dashboard Design', level: 92 },
  { name: 'Python Analytics', level: 88 },
  { name: 'Predictive Analytics', level: 84 },
  { name: 'Business Storytelling', level: 90 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 className="section-title">Analytics toolkit for dashboards, models, and insights.</h2>
          </div>
          <p className="max-w-xl text-corporate-body">
            A balanced stack across BI reporting, Python analytics, machine learning, and executive communication.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            className="grid gap-8 lg:col-span-2 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {SKILLS.map((group, index) => {
              const Icon = icons[index] ?? Database
              return (
                <motion.div
                  key={group.category}
                  className="group bento-card p-6"
                  variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -6 }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-2xl border border-primary-100 bg-primary-50 p-2 text-primary-600 transition duration-300 group-hover:bg-primary-600 group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <h3 className="text-xl">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="bento-card p-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow">Capability Map</p>
            <h3 className="mt-3 text-2xl">Recruiter-ready strengths</h3>
            <div className="mt-7 space-y-6">
              {proficiency.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-corporate-heading">{item.name}</span>
                    <span className="text-primary-600">{item.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-corporate-border">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary-600 to-accent-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
