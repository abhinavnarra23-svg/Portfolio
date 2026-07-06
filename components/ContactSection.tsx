'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { PERSON_INFO } from '@/lib/constants'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${PERSON_INFO.email}?subject=Portfolio inquiry from ${formData.name}&body=${body}`
    setIsLoading(false)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s discuss analytics opportunities.</h2>
          <p className="section-copy">
            Open to analytics internships, business intelligence projects, dashboard development, and data-driven roles.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactCard icon={<Mail />} label="Email" value={PERSON_INFO.email} href={`mailto:${PERSON_INFO.email}`} />
            <ContactCard icon={<Linkedin />} label="LinkedIn" value={PERSON_INFO.linkedin} href={`https://linkedin.com/in/${PERSON_INFO.linkedin}`} />
            <ContactCard icon={<Github />} label="GitHub" value={PERSON_INFO.github} href={`https://github.com/${PERSON_INFO.github}`} />
            <ContactCard icon={<Download />} label="Resume Download" value="PDF resume" href="/resume.pdf" download />
            <ContactCard icon={<Phone />} label="Phone" value={PERSON_INFO.phone} href={`tel:${PERSON_INFO.phone}`} />
            <div className="bento-card p-5">
              <MapPin className="mb-3 text-primary-600" size={22} />
              <p className="text-sm text-corporate-muted">Location</p>
              <p className="font-semibold text-corporate-heading">{PERSON_INFO.location}</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bento-card p-6 sm:p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-corporate-heading">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-corporate-heading">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-corporate-heading">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>
              <button type="submit" className="btn-primary w-full" disabled={isLoading}>
                <Send size={18} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  label,
  value,
  href,
  download,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  download?: boolean
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      download={download ? true : undefined}
      className="group bento-card p-5 hover:-translate-y-1 hover:border-primary-500/50"
    >
      <div className="flex items-center gap-4">
        <span className="rounded-2xl border border-primary-100 bg-primary-50 p-3 text-primary-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary-600 group-hover:text-white">
          {icon}
        </span>
        <span>
          <span className="block text-sm text-corporate-muted">{label}</span>
          <span className="block break-all font-semibold text-corporate-heading">{value}</span>
        </span>
      </div>
    </a>
  )
}
