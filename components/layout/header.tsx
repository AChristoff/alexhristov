import { Lang } from '@/types'

import { siteConfig } from '@/assets/site'
import { MainNav } from '@/components/layout/main-nav'

export function Header({ lng }: { lng: Lang }) {
  return (
    <header className="z-[100] sticky top-0 w-full border-b bg-background/80 backdrop-blur-sm drop-shadow-sm" style={{backdropFilter: 'blur(10px)'}}>
      <section className="md:max-w-4xl md:mx-auto flex flex-1 items-center space-x-4 h-14 md:px-2">
        <MainNav items={siteConfig.mainNav} lng={lng} />
      </section>
    </header>
  )
}
