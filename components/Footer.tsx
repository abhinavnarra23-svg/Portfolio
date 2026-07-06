'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { PERSON_INFO } from '@/lib/constants'

export function Footer() {
  const links = [
    { label: 'GitHub', href: `https://github.com/${PERSON_INFO.github}`, icon: <Github size={19} /> },
    { label: 'LinkedIn', href: `https://linkedin.com/in/${PERSON_INFO.linkedin}`, icon: <Linkedin size={19} /> },
    { label: 'Email', href: `mailto:${PERSON_INFO.email}`, icon: <Mail size={19} /> },
    { label: 'Resume', href: '/resume.pdf', icon: <Download size={19} /> },
  ]

  return (
    <footer className="border-t border-corporate-border bg-white">
      <div className="container py-10">
        <motion.div
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <h3 className="text-xl font-bold">Narra Abhinav</h3>
            <p className="mt-2 max-w-xl text-sm text-corporate-body">
              Executive analytics portfolio combining Power BI dashboards, Python analytics, and business insight
              storytelling.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                download={link.label === 'Resume' ? true : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-corporate-border bg-white text-corporate-muted shadow-sm hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600"
                aria-label={link.label}
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        <div className="mt-8 border-t border-corporate-border pt-6 text-sm text-corporate-muted">
          Copyright {new Date().getFullYear()} Narra Abhinav. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
