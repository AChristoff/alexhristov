import { Lang } from '@/types'

import { siteConfig } from '@/assets/site'
import { MainNav } from '@/components/layout/main-nav'
import { ThemeToggle } from '@/components/layout/theme-toggle'

import LanguageSwitcher from './language-switcher'

export function Header({ lng }: { lng: Lang }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background drop-shadow-sm">
      <section className="md:container md:mx-auto flex flex-1 items-center space-x-4 h-16">
        <MainNav items={siteConfig.mainNav} lng={lng} />
        <section className="hidden md:flex items-center space-x-1">
          <span className="border-l h-5 mr-2" />
          <ThemeToggle />
          <LanguageSwitcher />
        </section>
      </section>
    </header>
  )
}
