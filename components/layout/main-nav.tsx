'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Lang, NavItem } from '@/types'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Icons } from '@/assets/icons'
import { cn } from '@/assets/utils'

import Burger from './burger'
import LanguageSwitcher from './language-switcher'
import { ThemeToggle } from './theme-toggle'

interface MainNavProps {
  items: NavItem[]
  lng: Lang
}

export function MainNav({ items, lng }: MainNavProps) {
  const [activeLang, setActiveLang] = useState('en')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const activeSegment = useSelectedLayoutSegment()

  useEffect(() => {
    const lang = window.location.pathname.split('/')[1]
    if (lang === 'en' || lang === 'bg') {
      setActiveLang(lang as Lang)
    }
  }, [])

  return (
    <div className="mr-2 flex flex-1 justify-between h-full">
      <Link
        href={`/${activeLang}`}
        className="flex items-center space-x-2 ml-4 md:ml-0"
      >
        <Icons.logo className="h-9" />
      </Link>
      {/* Mobile nav */}
      <Sheet
        open={mobileNavOpen}
        onOpenChange={() => setMobileNavOpen((state) => !state)}
      >
        <SheetTrigger
          aria-controls="sheet-toggle"
          style={{ width: '3.5em', height: '3.3em' }}
        >
          <Burger mobileNavOpen={mobileNavOpen} />
        </SheetTrigger>
        <SheetContent
          id="sheet-toggle"
          side="top"
          className="opacity-90 pb-4 border-b border-b-slate-200"
        >
          <section className="w-full pt-14">
            <nav className="flex flex-col gap-6 w-auto pt-2">
              <NavItems
                items={items}
                lng={lng}
                activeSegment={activeSegment}
                mobile
                onClick={() => setMobileNavOpen(false)}
              />
            </nav>
            <section className="flex flex-col justify-center items-center pt-1 mt-4">
              <span className="border-t my-4 w-10" />
              <span className="flex justify-center items-center">
                <ThemeToggle />
                <LanguageSwitcher extraAction={() => setMobileNavOpen(false)} />
              </span>
            </section>
          </section>
        </SheetContent>
      </Sheet>

      {/* Main nav */}
      {items?.length ? (
        <nav className="hidden md:flex gap-6 w-auto">
          <NavItems items={items} lng={lng} activeSegment={activeSegment} />
        </nav>
      ) : null}
    </div>
  )
}

const NavItems = ({
  items,
  lng,
  activeSegment,
  mobile,
  onClick,
}: {
  items: NavItem[]
  lng: Lang
  activeSegment: string | null
  mobile?: boolean
  onClick?: () => void
}) => {
  return (
    <>
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              onClick={onClick}
              key={index}
              href={`/${lng}${item.href}`}
              className={cn(
                'uppercase flex items-center text-sm font-medium text-muted-foreground hover:text-primary',
                mobile && 'justify-center',
                activeSegment === item.activeSegment &&
                  'text-primary font-semibold',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title[lng]}
            </Link>
          )
      )}
    </>
  )
}
