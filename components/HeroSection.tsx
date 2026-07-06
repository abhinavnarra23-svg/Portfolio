'use client'

import { useEffect, useMemo } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight, Download, GraduationCap, LayoutDashboard, LineChart, Sparkles, TrendingUp } from 'lucide-react'
import { PERSON_INFO, STATS } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'

const statIcons = [LineChart, TrendingUp, LayoutDashboard, GraduationCap]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="hero-gradient absolute inset-0" />
      <div className="dashboard-grid absolute inset-0" />
      <motion.div
        className="absolute left-[8%] top-28 h-56 w-56 rounded-full bg-primary-100/70 blur-3xl"
        animate={{ scale: [1, 1.14, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] top-36 h-64 w-64 rounded-full bg-accent-100/80 blur-3xl"
        animate={{ scale: [1.08, 0.96, 1.08], opacity: [0.5, 0.28, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 flex min-h-[calc(100vh-6rem)] flex-col justify-center py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-[14px] border border-primary-100 bg-white/90 px-4 py-2 text-sm font-semibold text-primary-600 shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Business Analytics Portfolio
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.02] text-corporate-heading sm:text-6xl lg:text-[72px]">
              {PERSON_INFO.name}
            </h1>
            <div className="mt-6 space-y-2 text-xl font-semibold text-primary-600 sm:text-2xl">
              <p>MBA Business Analytics Student</p>
              <p>Business Analytics Intern</p>
            </div>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-corporate-body sm:text-xl">{PERSON_INFO.tagline}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                View Projects
                <ArrowRight size={18} />
              </button>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="absolute -inset-8 rounded-full bg-primary-200/30 blur-3xl" />
            <FloatingAnalyticsIllustration />
          </motion.div>
        </div>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
          }}
        >
          {STATS.map((stat, index) => {
            const Icon = statIcons[index] ?? LineChart
            return (
              <motion.div
                key={stat.label}
                className="glass-card metric-sheen p-5"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] border border-primary-100 bg-primary-50 text-primary-600">
                  <Icon size={22} />
                </div>
                <p className="text-2xl font-bold text-corporate-heading">
                  <AnimatedMetric value={stat.value} />
                </p>
                <p className="mt-1 text-sm font-medium text-corporate-muted">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function FloatingAnalyticsIllustration() {
  return (
    <motion.div
      className="premium-border relative overflow-hidden rounded-[28px] bg-white p-5 shadow-glow"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="rounded-[22px] border border-corporate-border bg-corporate-background p-5">
        <div className="flex items-center justify-between border-b border-corporate-border pb-5">
          <div>
            <p className="eyebrow">Executive Dashboard</p>
            <h2 className="mt-2 text-2xl">Decision Analytics</h2>
          </div>
          <LineChart className="text-primary-600" size={28} />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ['Projects', '4+'],
            ['Dashboards', '10+'],
            ['Internships', '2'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[16px] border border-corporate-border bg-white p-3 shadow-sm">
              <p className="text-xs font-semibold text-corporate-muted">{label}</p>
              <p className="mt-1 text-lg font-bold text-corporate-heading">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3">
          {['Power BI dashboarding', 'Python machine learning', 'Predictive business insights'].map((item, index) => (
            <div key={item} className="flex items-center justify-between gap-4 rounded-[16px] bg-white p-4 shadow-sm">
              <span className="text-sm font-semibold text-corporate-body">{item}</span>
              <motion.span
                className="h-2 shrink-0 rounded-full bg-gradient-to-r from-primary-600 to-accent-500"
                initial={{ width: 0 }}
                animate={{ width: `${72 + index * 9}px` }}
                transition={{ duration: 0.9, delay: 0.45 + index * 0.12 }}
              />
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[18px] border border-corporate-border bg-white p-4">
          <div className="flex h-32 items-end gap-3">
            {[44, 68, 52, 88, 74, 96, 62].map((height, index) => (
              <motion.span
                key={`${height}-${index}`}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-primary-600 to-accent-400"
                initial={{ height: 0 }}
                animate={{ height }}
                transition={{ duration: 0.7, delay: 0.25 + index * 0.07 }}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -right-3 top-10 rounded-[18px] border border-corporate-border bg-white px-4 py-3 shadow-corporate"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-accent-500" />
          <span className="text-sm font-bold text-corporate-heading">Insight ready</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

function AnimatedMetric({ value }: { value: string }) {
  const match = useMemo(() => value.match(/^(\d+)(.*)$/), [value])
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${match?.[2] ?? ''}`)

  useEffect(() => {
    if (!match) return
    const controls = animate(count, Number(match[1]), { duration: 1.25, ease: 'easeOut', delay: 0.35 })
    return controls.stop
  }, [count, match])

  if (!match) return <span>{value}</span>

  return <motion.span>{rounded}</motion.span>
}
