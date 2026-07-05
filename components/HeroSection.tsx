'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Linkedin } from 'lucide-react'
import { PERSON_INFO, TYPING_PHRASES } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex]
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(
          () => {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          },
          50
        )
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => {
            setDisplayText(currentPhrase.slice(0, displayText.length - 1))
          },
          30
        )
      } else {
        setIsTyping(true)
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, phraseIndex, isTyping])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Content */}
      <motion.div
        className="container relative z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-primary-600/30 hover:border-primary-600 transition-colors">
                <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
                <span className="text-sm text-primary-400">Welcome to my portfolio</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {PERSON_INFO.name}
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-slate-400">{PERSON_INFO.title}</p>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={itemVariants}>
              <div className="h-12 flex items-center">
                <span className="text-2xl md:text-3xl font-semibold text-gradient">
                  {displayText}
                  <span className="animate-pulse ml-1">|</span>
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-slate-400 max-w-lg leading-relaxed">
                Transforming complex data into meaningful business insights through advanced analytics and machine
                learning. Currently pursuing MBA in Business Analytics with hands-on experience in Power BI, Python, and
                statistical analysis.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all hover:shadow-glow group"
              >
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-card border border-dark-border text-white font-semibold hover:border-primary-600 hover:bg-dark-border transition-all"
              >
                <Mail size={20} />
                Get in Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <a
                href={`https://linkedin.com/in/${PERSON_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-slate-300 hover:text-primary-400 hover:border-primary-600 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${PERSON_INFO.email}`}
                className="w-12 h-12 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-slate-300 hover:text-primary-400 hover:border-primary-600 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Illustration Placeholder */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              className="relative w-80 h-80"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-blue rounded-2xl opacity-10 blur-2xl" />
              <div className="absolute inset-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl opacity-20 backdrop-blur-xl border border-primary-600/50" />
              <div className="relative w-full h-full rounded-2xl bg-dark-card border border-primary-600/30 flex items-center justify-center p-8">
                <motion.div
                  className="text-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-slate-400 text-sm">Data-Driven Insights</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <ChevronDown size={20} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
