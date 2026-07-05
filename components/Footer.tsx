'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Phone, Heart } from 'lucide-react'
import { PERSON_INFO } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-dark-bg border-t border-dark-border mt-20">
      <div className="container py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">Narra Abhinav</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Business Analytics student transforming data into actionable insights. Passionate about machine learning,
              data visualization, and driving business decisions through analytics.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={`https://linkedin.com/in/${PERSON_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-slate-400 hover:text-primary-400 hover:border-primary-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${PERSON_INFO.email}`}
                className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-slate-400 hover:text-primary-400 hover:border-primary-600 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={`tel:${PERSON_INFO.phone}`}
                className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-slate-400 hover:text-primary-400 hover:border-primary-600 transition-all"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="separator my-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} Narra Abhinav. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> using Next.js & TailwindCSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
