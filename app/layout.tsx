import "@/styles/globals.css"
import { Metadata } from "next"
import { dir } from "i18next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { languages } from '@/i18n/settings'
import { Lang } from "@/types"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
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
      <html lang={lng || 'en'} dir={dir(lng)} suppressHydrationWarning>
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
              <main className="md:container md:mx-auto flex-1 px-2">{children}</main>
              <Footer />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
