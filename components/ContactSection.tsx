'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react'
import { PERSON_INFO } from '@/lib/constants'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create mailto link as fallback
      const mailtoLink = `mailto:${PERSON_INFO.email}?subject=Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`

      window.location.href = mailtoLink
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

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

  return (
    <section id="contact" className="section relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="text-primary-400 font-semibold uppercase tracking-widest">Get in Touch</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Let&apos;s Work Together
          </motion.h2>
          <motion.div variants={itemVariants} className="separator mx-auto mb-4" />
          <motion.p variants={itemVariants} className="text-slate-400 max-w-2xl mx-auto text-lg">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Email */}
            <motion.a
              href={`mailto:${PERSON_INFO.email}`}
              className="card p-6 hover:border-primary-600 hover:shadow-glow transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/40 transition-all">
                  <Mail className="text-primary-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-semibold text-white">{PERSON_INFO.email}</p>
                </div>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${PERSON_INFO.phone}`}
              className="card p-6 hover:border-primary-600 hover:shadow-glow transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-600/20 flex items-center justify-center group-hover:bg-accent-600/40 transition-all">
                  <Phone className="text-accent-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-semibold text-white">{PERSON_INFO.phone}</p>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={`https://linkedin.com/in/${PERSON_INFO.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 hover:border-primary-600 hover:shadow-glow transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/40 transition-all">
                  <Linkedin className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="font-semibold text-white break-all">{PERSON_INFO.linkedin}</p>
                </div>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              className="card p-6 hover:border-primary-600 transition-all"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-blue/20 flex items-center justify-center">
                  <MapPin className="text-gradient-blue" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-semibold text-white">{PERSON_INFO.location}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.form onSubmit={handleSubmit} className="card p-8 space-y-6" variants={itemVariants}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading || isSubmitted}
                className="w-full px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-glow flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin">⏳</div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <span>✓</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  className="p-4 rounded-lg bg-green-600/10 border border-green-600/50 text-green-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
