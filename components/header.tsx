import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import LanguageSwitcher from "./language-switcher"
import { Lang } from "@/types"


export function Header({ lng }: { lng: Lang }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b">
      <div className="container flex flex-1 items-center space-x-4 h-16">
        <MainNav items={siteConfig.mainNav} lng={lng} />
        <section className="flex items-center space-x-1">
          <ThemeToggle />
          <LanguageSwitcher />
        </section>
      </div>
    </header>
  )
}

/* <Link
      href={siteConfig.links.github}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.gitHub className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </div>
    </Link>
    <Link
      href={siteConfig.links.twitter}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.twitter className="h-5 w-5 fill-current" />
        <span className="sr-only">Twitter</span>
      </div>
    </Link> */
