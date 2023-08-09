import "@/styles/globals.css"
import { Metadata } from "next"
import { dir } from "i18next"

import { siteConfig } from "@/assets/site"
import { fontSans } from "@/assets/fonts"
import { cn } from "@/assets/utils"
import { languages } from '@/i18n/settings'

import { TailwindIndicator } from "@/components/layout/tailwind-indicator"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Header } from "@/components/layout/header"
import Footer from "@/components/layout/footer"

import { Lang } from "@/types"

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Software Engineering`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.svg",
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
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Header lng={lng} />
              <main className="md:container md:mx-auto flex-1 px-8 md:px-2">{children}</main>
              <Footer />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
