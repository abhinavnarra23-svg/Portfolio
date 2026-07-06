'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, FileText, Github, Sparkles, Target, TrendingUp } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/lib/types'

type Filter = 'all' | Project['category']

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Machine Learning', value: 'ml' },
  { label: 'Dashboards', value: 'dashboard' },
]

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('all')
  const projects = filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === filter)

  return (
    <section id="projects" className="section section-soft">
      <div className="container">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Analytics case work with dashboard-first storytelling.</h2>
            <p className="section-copy">
              Each project is framed around the business question, the analytical method, and the decision impact a
              recruiter or consulting team would want to see.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 rounded-[20px] border border-corporate-border bg-white/80 p-2 shadow-sm backdrop-blur">
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`rounded-[14px] border px-4 py-2 text-sm font-bold transition duration-300 ${
                  filter === item.value
                    ? 'border-primary-600 bg-primary-600 text-white shadow-corporate'
                    : 'border-corporate-border bg-white text-corporate-body hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={project.id === '1' && filter === 'all'} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const shortPreview = ['2', '3', '4'].includes(project.id)

  return (
    <motion.article
      className={`group bento-card overflow-hidden ${featured ? 'premium-border md:col-span-2' : ''}`}
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
      whileHover={{ y: -8, scale: 1.01 }}
    >
      <div className={featured ? 'grid lg:grid-cols-[1.08fr_0.92fr]' : ''}>
      <div
        className={`relative overflow-hidden border-b border-corporate-border bg-corporate-background p-3 ${
          featured ? 'min-h-[360px] lg:border-b-0 lg:border-r' : shortPreview ? 'h-52 sm:h-56' : 'h-64'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.08),transparent_18rem),radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.08),transparent_18rem)]" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={featured ? '(max-width: 1024px) 100vw, 55vw' : '(max-width: 768px) 100vw, 50vw'}
          priority={featured}
          className={`object-contain opacity-95 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 ${
            featured ? 'p-5 sm:p-8' : 'p-4'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-2xl border border-corporate-border bg-white/90 px-3 py-2 text-sm font-semibold text-primary-600 shadow-sm backdrop-blur">
          {project.category === 'ml' ? 'Predictive Analytics' : project.category === 'dashboard' ? 'BI Dashboard' : 'Business Analytics'}
        </div>
        {featured && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-2xl border border-primary-100 bg-white/90 px-3 py-2 text-sm font-bold text-primary-600 shadow-sm backdrop-blur">
            <Sparkles size={16} />
            Featured Project
          </div>
        )}
      </div>

      <div className={featured ? 'p-7 sm:p-8' : 'p-6'}>
        <h3 className={featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}>{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-corporate-body">
          <span className="font-semibold text-corporate-heading">Problem statement: </span>
          {project.description}
        </p>

        <div className="mt-5 rounded-2xl border border-primary-100 bg-primary-50/70 p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-bold text-corporate-heading">
            <TrendingUp size={17} className="text-primary-600" />
            Business Impact
          </p>
          <p className="text-sm leading-6 text-corporate-body">{project.businessImpact}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="badge text-xs">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-corporate-border bg-corporate-background p-4">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-normal text-corporate-heading">
            <Target size={16} className="text-primary-600" />
            Key Insights
          </p>
          <ul className="space-y-2">
            {project.insights.slice(0, featured ? 4 : 3).map((insight) => (
              <li key={insight} className="flex gap-2 text-sm text-corporate-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <ProjectLink href={project.links.github} icon={<Github size={17} />} label="GitHub" />
          <ProjectLink href={project.links.live_demo} icon={<ExternalLink size={17} />} label="Live Demo" />
          <ProjectLink href={project.links.case_study} icon={<FileText size={17} />} label="Case Study" />
        </div>
      </div>
      </div>
    </motion.article>
  )
}

function ProjectLink({ href, icon, label }: { href?: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href || '#'}
      target={href && href !== '#' ? '_blank' : undefined}
      rel={href && href !== '#' ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded-[14px] border border-corporate-border bg-white px-3 py-2 text-sm font-bold text-corporate-body shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600"
    >
      {icon}
      {label}
    </a>
  )
}
