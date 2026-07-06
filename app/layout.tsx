import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { PERSON_INFO } from '@/lib/constants'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-heading',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: `${PERSON_INFO.name} | ${PERSON_INFO.title}`,
  description: 'Executive analytics portfolio for Narra Abhinav, MBA Business Analytics student and analytics intern.',
  keywords: ['Business Analytics', 'Power BI', 'Python', 'Machine Learning', 'Executive Analytics', 'Data Visualization'],
  authors: [{ name: PERSON_INFO.name }],
  creator: PERSON_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://narraabhinav.com',
    title: `${PERSON_INFO.name} | ${PERSON_INFO.title}`,
    description: 'Premium analytics portfolio showcasing dashboards, machine learning, and business insight projects.',
    siteName: PERSON_INFO.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSON_INFO.name} | ${PERSON_INFO.title}`,
    description: 'Premium analytics portfolio showcasing dashboards, machine learning, and business insight projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#F8FAFC" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="bg-corporate-background text-corporate-body antialiased">
        {children}
      </body>
    </html>
  )
}
