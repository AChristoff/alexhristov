import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { languages } from '@/i18n/settings'
import { Lang } from '@/types'
import { dir } from 'i18next'

import Footer from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { TailwindIndicator } from '@/components/layout/tailwind-indicator'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { fontSans } from '@/assets/fonts'
import { siteConfig } from '@/assets/site'
import { cn } from '@/assets/utils'

const LargeScreensComponent = dynamic(()=>{return import('@/components/layout/large-screens-only-view')}, {ssr: false});
const Particles = dynamic(()=>{return import('@/components/ui/particles')}, {ssr: false});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Software Engineering`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
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
              <LargeScreensComponent>
                <Particles className="fixed inset-0 pointer-events-none" quantity={200}/>
              </LargeScreensComponent>
              <Header lng={lng} />
              <main className="  md:max-w-4xl md:mx-auto flex-1 px-8 md:px-2 z-10" style={{backdropFilter: 'saturate(100%) blur(3px)'}}>
                {children}
              </main>
              <Footer />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
