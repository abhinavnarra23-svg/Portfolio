import { Project, Experience, Certification, Skill } from './types'

export const PERSON_INFO = {
  name: 'Narra Abhinav',
  title: 'MBA Business Analytics Student | Business Analytics Intern',
  tagline: 'Business analytics portfolio built around executive dashboards, decision-ready insights, Power BI reporting, Python analytics, and machine learning.',
  phone: '+91 7416541884',
  email: 'abhinavnarra23@gmail.com',
  linkedin: 'abhinav-narra',
  github: 'abhinavnarra23-svg',
  location: 'India',
}

export const PROFILE_SUMMARY = `MBA Business Analytics student focused on turning complex business data into decision-ready insights. Experienced in analytics dashboards, machine learning workflows, retail and HR reporting, and executive-ready storytelling through Power BI, Python, Excel, and statistical analysis.`

export const PROFILE_TAGS = [
  'MBA Business Analytics Student',
  'Business Analytics Intern',
  'Power BI',
  'Python',
  'Machine Learning',
  'Retail Analytics',
]

export const STATS = [
  { label: 'Projects', value: '4+', icon: 'briefcase' },
  { label: 'Dashboards', value: '10+', icon: 'zap' },
  { label: 'Internships', value: '2', icon: 'award' },
  { label: 'MBA Business Analytics', value: 'Anurag University', icon: 'graduation' },
]

export const SKILLS: Skill[] = [
  {
    category: 'Analytics Stack',
    items: ['Python', 'Power BI', 'Excel', 'Machine Learning'],
  },
  {
    category: 'Python Analytics',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Jupyter Notebook'],
  },
  {
    category: 'Business Intelligence',
    items: ['Data Visualization', 'Predictive Analytics', 'Dashboard Design', 'MIS Reporting'],
  },
  {
    category: 'Professional Skills',
    items: ['Analytical Thinking', 'Communication', 'Problem Solving', 'Time Management', 'Adaptability'],
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    position: 'Business Analytics Intern',
    company: 'Sri Devi Group',
    period: 'May - June 2026',
    startDate: '2026-05-01',
    endDate: '2026-06-30',
    description: 'Worked on retail analytics for Levi\'s sales and inventory data, translating business data into dashboard-led decisions.',
    responsibilities: [
      'Analyzed retail sales, inventory, stock turnover, and store performance data',
      'Built Power BI dashboards and MIS views for business review',
      'Created insight summaries to support inventory and performance decisions',
    ],
    highlights: [
      'Delivered dashboard-ready insights for retail decision-making',
      'Connected sales and inventory signals into clearer executive reporting',
    ],
  },
  {
    id: '2',
    position: 'HR Analytics Intern',
    company: 'Global Aluminium Pvt Ltd',
    period: 'October - November 2025',
    startDate: '2025-10-01',
    endDate: '2025-11-30',
    description: 'Supported HR reporting with structured analysis of employee attendance, leave, attrition, and workforce trends.',
    responsibilities: [
      'Managed employee attendance and leave datasets using Excel',
      'Tracked attrition patterns and workforce trends for review',
      'Prepared monthly workforce insights for HR management',
    ],
    highlights: [
      'Improved visibility into employee attendance and leave trends',
      'Supported HR decision-making with recurring workforce reports',
    ],
  },
]

export const EDUCATION = [
  {
    degree: 'Master of Business Administration',
    specialization: 'Business Analytics',
    institution: 'Anurag University',
    period: '2024 - 2026',
    gpa: '3.8/4.0',
  },
  {
    degree: 'Bachelor of Commerce (Honours)',
    specialization: 'Commerce',
    institution: 'Avinash College of Commerce',
    period: '2021 - 2024',
    gpa: '3.7/4.0',
  },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Levi\'s Retail Analytics',
    description: 'Retail analytics dashboard focused on Levi\'s sales performance, inventory flow, stock turnover, and store-level decision support.',
    businessImpact: 'Created an executive retail view that helps managers connect sales, stock movement, and store performance into faster merchandising decisions and cleaner business reviews.',
    image: '/projects/levis.png',
    tech: ['Power BI', 'Excel', 'Retail Analytics', 'MIS Reporting'],
    insights: [
      'Tracked store performance and stock turnover',
      'Connected sales and inventory signals for business review',
      'Identified performance patterns for retail decision-making',
      'Built executive dashboard views for fast interpretation',
    ],
    links: {
      github: '#',
      live_demo: '#',
      case_study: '#',
    },
    category: 'analytics',
  },
  {
    id: '2',
    title: 'Healthcare Analytics',
    description: 'Hospital analytics project studying patient stay duration, disease prevalence, expenditure, admissions, and resource allocation.',
    businessImpact: 'Translated hospital operations data into a Power BI dashboard supporting resource planning, admission visibility, and expenditure review.',
    image: '/projects/healthcare.png',
    tech: ['Power BI', 'Excel', 'Data Visualization', 'Healthcare Analytics'],
    insights: [
      'Analyzed hospital stay duration and disease prevalence',
      'Visualized admission trends and patient demographics',
      'Studied disease-wise medical expenditure',
      'Generated insights to optimize hospital resource allocation',
    ],
    links: {
      github: '#',
      live_demo: '#',
      case_study: '#',
    },
    category: 'dashboard',
  },
  {
    id: '3',
    title: 'Credit Risk Analytics',
    description: 'Machine learning project using 30K credit card client records to predict default risk and identify lending risk drivers.',
    businessImpact: 'Built a risk-focused analytical model to help lending teams prioritize default drivers, customer segments, and portfolio monitoring.',
    image: '/projects/creditrisk.png',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Predictive Analytics'],
    insights: [
      'Performed EDA and feature engineering using Python',
      'Built an XGBoost model achieving an AUC score of 0.79',
      'Identified key default drivers for risk review',
      'Supported improved lending and risk management decisions',
    ],
    links: {
      github: '#',
      live_demo: '#',
      case_study: '#',
    },
    category: 'ml',
  },
  {
    id: '4',
    title: 'HR Analytics Dashboard',
    description: 'Workforce analytics dashboard for attendance, leave, attrition trends, and recurring HR management reporting.',
    businessImpact: 'Improved workforce visibility by consolidating attrition, attendance, and leave indicators into a management-ready reporting view.',
    image: '/projects/hranalytics.png',
    tech: ['Excel', 'Power BI', 'HR Analytics', 'Dashboard Design'],
    insights: [
      'Tracked attendance and leave data for workforce visibility',
      'Analyzed attrition and employee trend patterns',
      'Created management-ready monthly workforce reporting',
      'Improved HR review workflows with structured dashboards',
    ],
    links: {
      github: '#',
      live_demo: '#',
      case_study: '#',
    },
    category: 'dashboard',
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: 'Python Foundation',
    issuer: 'Infosys Springboard',
    date: '2024',
  },
  {
    id: '2',
    title: 'Data Camp',
    issuer: 'R Programming',
    date: '2024',
  },
]

export const TYPING_PHRASES = [
  'Executive Analytics Dashboards',
  'Power BI Business Intelligence',
  'Python Machine Learning',
  'Predictive Analytics Storytelling',
]

export const NAVIGATION = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    url: `https://github.com/${PERSON_INFO.github}`,
    icon: 'Github',
  },
  {
    label: 'LinkedIn',
    url: `https://linkedin.com/in/${PERSON_INFO.linkedin}`,
    icon: 'Linkedin',
  },
  {
    label: 'Email',
    url: `mailto:${PERSON_INFO.email}`,
    icon: 'Mail',
  },
  {
    label: 'Resume',
    url: '/resume.pdf',
    icon: 'Download',
  },
]
