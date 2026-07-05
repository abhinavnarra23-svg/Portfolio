'use client'

import { motion } from 'framer-motion'
import { Briefcase, Award, Zap } from 'lucide-react'
import { PROFILE_SUMMARY, EDUCATION } from '@/lib/constants'

export function AboutSection() {
  const stats = [
    { label: 'Projects Completed', value: '3+', icon: Briefcase },
    { label: 'Internships', value: '1+', icon: Award },
    { label: 'Tools & Technologies', value: '10+', icon: Zap },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section relative">
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
            <span className="text-primary-400 font-semibold uppercase tracking-widest">About Me</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Business Analytics Professional
          </motion.h2>
          <motion.div variants={itemVariants} className="separator mx-auto mb-4" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Summary */}
            <motion.div variants={itemVariants} className="card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
              <p className="text-slate-300 leading-relaxed text-lg">{PROFILE_SUMMARY}</p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Education</h3>
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  className="card p-6 hover:border-primary-600 transition-all"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-accent-400">{edu.specialization}</p>
                    </div>
                    <span className="text-xs font-semibold text-primary-400 bg-primary-600/10 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-400">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mt-2">GPA: {edu.gpa}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Statistics</h3>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="card p-6 border-l-4 border-primary-600"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <Icon className="text-primary-400" size={24} />
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </div>
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Data Analysis',
                desc: 'Expert in exploratory data analysis and statistical insights',
              },
              {
                title: 'Machine Learning',
                desc: 'Proficient with XGBoost, Scikit-learn, and predictive modeling',
              },
              {
                title: 'BI Tools',
                desc: 'Advanced Power BI dashboards and data visualization',
              },
              {
                title: 'SQL & Python',
                desc: 'Strong database querying and Python programming skills',
              },
              {
                title: 'Problem Solving',
                desc: 'Analytical approach to complex business problems',
              },
              {
                title: 'Communication',
                desc: 'Ability to translate data insights into business value',
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="card p-6 hover:border-primary-600 hover:shadow-glow transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-bold text-white mb-2">{highlight.title}</h4>
                <p className="text-slate-400 text-sm">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
