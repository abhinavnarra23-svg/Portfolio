'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BarChart3, Download, Menu, X } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'
import { cn, scrollToSection } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

      let current = 'home'
      NAVIGATION.map((item) => item.href.replace('#', '')).forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= 140) {
          current = id
        }
      })

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    scrollToSection(href.replace('#', ''))
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={cn(
        'fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 backdrop-blur-[12px]',
        isScrolled
          ? 'border-corporate-border bg-white/88 shadow-corporate'
          : 'border-white/40 bg-white/72'
      )}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="container flex h-[72px] min-h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-primary-100 bg-primary-50 text-primary-600 shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary-600 group-hover:text-white">
            <BarChart3 size={20} />
          </span>
          <span className="font-heading text-sm font-bold uppercase tracking-normal text-corporate-heading">
            Narra Analytics
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-[18px] border border-corporate-border bg-white/72 p-1 shadow-sm backdrop-blur-xl lg:flex">
          {NAVIGATION.map((item) => {
            const id = item.href.replace('#', '')
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                aria-current={activeSection === id ? 'page' : undefined}
                className={cn(
                  'group relative rounded-[14px] px-3 py-2 text-sm font-semibold text-corporate-muted transition duration-300 hover:bg-primary-50 hover:text-primary-600',
                  activeSection === id && 'bg-primary-50 text-primary-600'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute bottom-1 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-primary-600 transition-transform duration-300 group-hover:scale-x-100',
                    activeSection === id && 'scale-x-100'
                  )}
                />
                <span
                  className={cn(
                    'absolute right-2 top-2 h-1.5 w-1.5 scale-0 rounded-full bg-accent-500 transition-transform duration-300',
                    activeSection === id && 'scale-100'
                  )}
                />
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <a href="/resume.pdf" download className="btn-primary hidden sm:inline-flex">
            <Download size={17} />
            Resume
          </a>
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-[14px] border border-corporate-border bg-white p-2 text-corporate-heading shadow-sm lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="border-t border-corporate-border bg-white/95 px-4 py-4 shadow-corporate backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="grid gap-2">
            {NAVIGATION.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="rounded-[14px] px-3 py-3 text-left text-sm font-semibold text-corporate-muted transition duration-300 hover:bg-primary-50 hover:text-primary-600"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
