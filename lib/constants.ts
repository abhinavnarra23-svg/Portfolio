import { Project, Experience, Certification, Skill } from './types'

export const PERSON_INFO = {
  name: 'NARRA ABHINAV',
  title: 'Business & Data Analytics Aspirant',
  tagline: 'Transforming Data into Actionable Insights',
  phone: '+91 7416541884',
  email: 'abhinavnarra23@gmail.com',
  linkedin: 'abhinav-narra',
  github: 'narraabhinav', // Placeholder - update as needed
  location: 'India',
}

export const PROFILE_SUMMARY = `MBA Business Analytics student passionate about transforming complex datasets into meaningful business insights. Experienced in data analysis, machine learning, dashboard development, and business intelligence. Skilled in identifying trends, uncovering growth opportunities, and delivering actionable recommendations that support data-driven decision-making.`

export const STATS = [
  { label: 'Projects Completed', value: '3+', icon: 'briefcase' },
  { label: 'Internships', value: '1+', icon: 'award' },
  { label: 'Tools & Technologies', value: '10+', icon: 'zap' },
]

export const SKILLS: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL', 'R'],
  },
  {
    category: 'Analytics & ML',
    items: ['Machine Learning', 'Data Analytics', 'Statistics', 'Data Mining', 'XGBoost'],
  },
  {
    category: 'BI & Tools',
    items: ['Power BI', 'Excel', 'Google Colab', 'Jupyter Notebook', 'R Studio'],
  },
  {
    category: 'Soft Skills',
    items: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Adaptability', 'Time Management', 'Teamwork'],
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    position: 'HR Analytics Intern',
    company: 'Global Aluminium Pvt Ltd',
    period: 'October 2025 – November 2025',
    startDate: '2025-10-01',
    endDate: '2025-11-30',
    description: 'Analyzed HR datasets and created insights for workforce optimization and decision-making.',
    responsibilities: [
      'Employee attendance analysis and reporting',
      'Leave data management and tracking',
      'Attrition analysis and trend identification',
      'Workforce reporting and metrics',
      'Dashboard creation for HR insights',
      'HR insights generation for management',
    ],
    highlights: [
      'Built automated dashboard reducing manual reporting time by 60%',
      'Identified key attrition drivers through statistical analysis',
      'Improved attendance tracking accuracy by implementing data validation',
    ],
  },
]

export const EDUCATION = [
  {
    degree: 'Master of Business Administration',
    specialization: 'Business Analytics',
    institution: 'Anurag University',
    period: '2024–2026',
    gpa: '3.8/4.0',
  },
  {
    degree: 'Bachelor of Commerce (Honours)',
    specialization: 'Commerce',
    institution: 'Avinash College of Commerce',
    period: '2021–2024',
    gpa: '3.7/4.0',
  },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Levi\'s Retail Analytics',
    description: 'Comprehensive retail analytics project analyzing sales, inventory, and demand patterns for Levi\'s stores. Implemented forecasting models and optimization strategies.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    tech: ['Python', 'Power BI', 'SQL', 'Pandas', 'NumPy'],
    insights: [
      'Sales forecasting with 85%+ accuracy',
      'Inventory optimization reducing dead stock by 35%',
      'Store-wise performance insights',
      'Demand prediction model for better planning',
    ],
    links: {
      case_study: '#',
      dashboard: '#',
    },
    category: 'analytics',
  },
  {
    id: '2',
    title: 'Credit Risk Analytics',
    description: 'Advanced machine learning project analyzing 30,000 customer records to predict credit default risk using XGBoost algorithm.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    insights: [
      'XGBoost model with AUC Score of 0.79',
      'Identified 12 key default risk factors',
      'Feature engineering across 50+ variables',
      'Customer segmentation for risk management',
    ],
    links: {
      case_study: '#',
    },
    category: 'ml',
  },
  {
    id: '3',
    title: 'Healthcare Analytics Dashboard',
    description: 'Comprehensive hospital analytics project analyzing patient admission trends, disease prevalence, and resource optimization opportunities.',
    image: "/Projects/healthcare.png",
    tech: ['Python', 'Power BI', 'SQL', 'Seaborn', 'Plotly'],
    insights: [
      'Admission trend analysis across departments',
      'Disease prevalence patterns identified',
      'Hospital resource optimization recommendations',
      'Interactive dashboards for decision makers',
    ],
    links: {
      dashboard: '#',
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
    title: 'Data Analysis & Visualization',
    issuer: 'DataCamp',
    date: '2024',
  },
]

export const TYPING_PHRASES = [
  'Business Analytics Student',
  'Power BI Developer',
  'Data Analyst',
  'Machine Learning Enthusiast',
]

export const NAVIGATION = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
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
    label: 'Phone',
    url: `tel:${PERSON_INFO.phone}`,
    icon: 'Phone',
  },
]
