import '@/styles/globals.scss'
import { Metadata } from 'next'
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'

import Lines from '@/components/ui/lines'
import Footer from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { TailwindIndicator } from '@/components/layout/tailwind-indicator'

import { cn } from '@/assets/utils'
import { fontSans } from '@/assets/fonts'
import { siteConfig } from '@/assets/site'

import { Lang } from '@/types'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Software Engineering`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://www.alekshristov.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'bg-BG': '/bg',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: {
      default: `${siteConfig.name} | Software Engineering`,
      template: `%s | ${siteConfig.name}`,
    },
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@aleksov101',
  },
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lng: Lang
  }
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <>
      <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Header lng={lng} />
              <main className="md:max-w-4xl md:mx-auto flex-1 px-8 md:px-2 z-10">
                {children}
              </main>
              <Footer />
              <Lines />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
