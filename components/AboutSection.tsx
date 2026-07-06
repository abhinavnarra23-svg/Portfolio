'use client'

import { motion } from 'framer-motion'
import { BarChart3, BriefcaseBusiness, GraduationCap, Target, TrendingUp } from 'lucide-react'
import { EDUCATION, PERSON_INFO, PROFILE_SUMMARY, PROFILE_TAGS } from '@/lib/constants'

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">Business analytics profile built for decision support.</h2>
          <p className="section-copy">{PROFILE_SUMMARY}</p>
        </div>

        <motion.div
          className="grid gap-8 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            className="bento-card premium-border p-7 lg:col-span-2"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-primary-600 font-heading text-2xl font-extrabold text-white shadow-glow">
                NA
              </div>
              <div>
                <p className="eyebrow">Professional Profile</p>
                <h3 className="mt-2 text-3xl">{PERSON_INFO.name}</h3>
                <p className="mt-2 font-semibold text-primary-600">{PERSON_INFO.title}</p>
                <p className="mt-4 text-corporate-body">{PROFILE_SUMMARY}</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {PROFILE_TAGS.map((tag) => (
                <span key={tag} className="badge bg-white">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <BentoCard className="lg:col-span-2" icon={<Target />} title="Analytics Focus">
            <p className="text-corporate-body">
              I translate business questions into datasets, dashboards, and explainable insights that help teams act
              faster across retail, healthcare, credit risk, and HR analytics.
            </p>
          </BentoCard>

          <BentoCard icon={<BarChart3 />} title="Dashboard Thinking">
            <p className="text-sm text-corporate-body">Power BI dashboards, MIS reporting, KPI design, and visual storytelling.</p>
          </BentoCard>

          <BentoCard icon={<TrendingUp />} title="Predictive Lens">
            <p className="text-sm text-corporate-body">Machine learning, feature engineering, risk modeling, and trend analysis.</p>
          </BentoCard>

          <BentoCard icon={<BriefcaseBusiness />} title="Business Context">
            <p className="text-sm text-corporate-body">Retail analytics, workforce reporting, healthcare operations, and credit risk use cases.</p>
          </BentoCard>

          <div className="bento-card p-6 lg:col-span-4">
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="text-primary-600" size={26} />
              <h3 className="text-2xl">Education</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="rounded-2xl border border-corporate-border bg-corporate-background p-4">
                  <p className="text-sm font-semibold text-primary-600">{edu.period}</p>
                  <h4 className="mt-2 text-lg font-bold">{edu.degree}</h4>
                  <p className="text-sm text-corporate-body">{edu.specialization}</p>
                  <p className="mt-3 text-sm font-medium text-corporate-heading">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function BentoCard({
  children,
  className,
  icon,
  title,
}: {
  children: React.ReactNode
  className?: string
  icon: React.ReactNode
  title: string
}) {
  return (
    <motion.div
      className={`bento-card p-6 ${className ?? ''}`}
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
      whileHover={{ y: -6 }}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary-100 bg-primary-50 text-primary-600">
        {icon}
      </div>
      <h3 className="mb-3 text-2xl">{title}</h3>
      {children}
    </motion.div>
  )
}
