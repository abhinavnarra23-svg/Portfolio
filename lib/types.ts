export interface Project {
  id: string
  title: string
  description: string
  businessImpact: string
  image: string
  tech: string[]
  insights: string[]
  links: {
    github?: string
    live_demo?: string
    case_study?: string
    dashboard?: string
  }
  category: 'analytics' | 'ml' | 'dashboard' | 'other'
}

export interface Experience {
  id: string
  position: string
  company: string
  period: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
  highlights?: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface StatCard {
  label: string
  value: string
  icon?: string
}
