import type { Metadata } from 'next'
import { Fira_Code, Poppins } from 'next/font/google'
import { PERSON_INFO } from '@/lib/constants'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
})

const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: `${PERSON_INFO.name} | ${PERSON_INFO.title}`,
  description: PERSON_INFO.tagline,
  keywords: ['Business Analytics', 'Data Analysis', 'Machine Learning', 'Power BI', 'Python', 'SQL'],
  authors: [{ name: PERSON_INFO.name }],
  creator: PERSON_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://narraabhinav.com',
    title: `${PERSON_INFO.name} | ${PERSON_INFO.title}`,
    description: PERSON_INFO.tagline,
    siteName: PERSON_INFO.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSON_INFO.name} | ${PERSON_INFO.title}`,
    description: PERSON_INFO.tagline,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${fira.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#0F172A" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
