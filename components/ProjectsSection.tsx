'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, FileText, BarChart3 } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/lib/types'

type LinkType = keyof Project['links']

const getLinkIcon = (type: LinkType) => {
  switch (type) {
    case 'github':
      return <Github size={18} />
    case 'case_study':
      return <FileText size={18} />
    case 'dashboard':
      return <BarChart3 size={18} />
    default:
      return <ExternalLink size={18} />
  }
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'analytics' | 'ml' | 'dashboard' | 'other'>('all')

  const categories = [
    { value: 'all' as const, label: 'All Projects' },
    { value: 'analytics' as const, label: 'Analytics' },
    { value: 'ml' as const, label: 'Machine Learning' },
    { value: 'dashboard' as const, label: 'Dashboards' },
  ]

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === filter)

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

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  }

  return (
    <section id="projects" className="section relative bg-dark-card/50 border-y border-dark-border">
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
            <span className="text-primary-400 font-semibold uppercase tracking-widest">Portfolio</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured Projects
          </motion.h2>
          <motion.div variants={itemVariants} className="separator mx-auto mb-4" />
          <motion.p variants={itemVariants} className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of data analytics and machine learning projects demonstrating practical skills
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === category.value
                  ? 'bg-primary-600 text-white shadow-glow'
                  : 'bg-dark-card border border-dark-border text-slate-300 hover:border-primary-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-slate-400">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="card overflow-hidden hover:border-primary-600 hover:shadow-glow transition-all h-full flex flex-col"
      whileHover={{ y: -5 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-dark-bg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="mb-4 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-primary-600/20 text-primary-400 border border-primary-600/30"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 text-xs rounded bg-slate-700/20 text-slate-400">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Insights */}
        <div className="mb-6 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Key Insights</p>
          <ul className="space-y-1">
            {project.insights.slice(0, 2).map((insight, idx) => (
              <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                <span className="text-primary-400 mt-1">✓</span>
                {insight}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="border-t border-dark-border pt-4 flex gap-3 flex-wrap">
          {Object.entries(project.links ?? {}).map(([type, url]) => {
            if (!url) return null
            const linkType = type as LinkType
            return (
              <a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-dark-bg border border-dark-border text-slate-300 hover:text-primary-400 hover:border-primary-600 transition-all"
                title={type.replace('_', ' ')}
              >
                {getLinkIcon(linkType)}
                <span className="capitalize hidden sm:inline">{type.replace('_', ' ')}</span>
              </a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
