import type React from 'react'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Playfair_Display, Lato } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Mathéo Pinget - Portfolio Ingénieur DevOps & Cloud',
  description:
    'Portfolio de Mathéo Pinget, Ingénieur DevOps & Cloud spécialisé en automatisation (Terraform, Ansible, Docker) et CI/CD. Découvrez mes projets et mon parcours.',
  keywords: [
    'DevOps',
    'Cloud',
    'Terraform',
    'Ansible',
    'Docker',
    'GitLab CI',
    'Portfolio',
    'Ingénieur',
  ],
  icons: {
    icon: '/Portfolio_V2/FaviconMP.png',
  },
  openGraph: {
    title: 'Mathéo Pinget - Portfolio Ingénieur DevOps & Cloud',
    description: "Découvrez les projets et le parcours d'un Ingénieur DevOps & Cloud passionné.",
    url: 'https://intoxy.github.io/Portfolio_V2/',
    images: [
      {
        url: '/Portfolio_V2/profile-5.png',
        width: 128,
        height: 128,
        alt: 'Mathéo Pinget',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`font-sans ${playfair.variable} ${lato.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
