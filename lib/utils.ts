export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((c): c is string => typeof c === 'string' && c.length > 0)
    .join(' ')
}

export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (element) {
    const yOffset = -80
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export function downloadFile(filename: string): void {
  const link = document.createElement('a')
  link.href = `/resume.pdf`
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0]?.toUpperCase())
    .join('')
}
