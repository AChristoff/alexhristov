'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Lang } from '@/types'
import { Menu, X } from 'lucide-react'

import { NavItem } from '@/types/nav'
import { Icons } from '@/assets/icons'
import { cn } from '@/assets/utils'

import LanguageSwitcher from './language-switcher'
import { ThemeToggle } from './theme-toggle'
import { Button } from '@/components/ui/button'

interface MainNavProps {
  items?: NavItem[]
  lng: Lang
}

export function MainNav({ items, lng }: MainNavProps) {
  const [activeLang, setActiveLang] = useState('en')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const lang = window.location.pathname.split('/')[1]
    if(lang === 'en' || lang === 'bg' ) {
      setActiveLang(lang as Lang)
    }
  }, [])

  return (
    <div className="mr-2 flex flex-1 justify-between">
      <Link href={`/${activeLang}`} className="flex items-center space-x-2 ml-4 md:ml-0">
        <Icons.logo className="h-9" />
      </Link>
      <Button
        className="px-3 md:hidden mr-4 md:mr-0"
        onClick={() => setMobileNavOpen((state) => !state)}
      >
        {mobileNavOpen ? <X className="h-7" /> : <Menu className="h-7" />}
      </Button>
      {items?.length ? (
        <nav className="hidden md:flex gap-6 w-auto">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={`/${activeLang}${item.href}`}
                  className={cn(
                    'uppercase flex items-center text-sm font-medium text-muted-foreground hover:text-primary',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title[lng]}
                </Link>
              )
          )}
        </nav>
      ) : null}
      {mobileNavOpen && (
        <section className="md:hidden absolute bg-background w-full pt-5 px-3 mt-12 drop-shadow-xl border-y">
          <nav className="flex flex-col gap-6 w-auto">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={`/${activeLang}${item.href}`}
                    onClick={() => setMobileNavOpen(false)}
                    className={cn(
                      'uppercase flex items-center text-sm font-medium text-muted-foreground hover:text-primary',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                  >
                    {item.title[lng]}
                  </Link>
                )
            )}
          </nav>
          <section className="flex flex-col py-2">
            <span className="border-t w-20 my-2" />
            <span>
              <ThemeToggle extraAction={() => setMobileNavOpen(false)}/>
              <LanguageSwitcher extraAction={() => setMobileNavOpen(false)} />
            </span>
          </section>
        </section>
      )}
    </div>
  )
}
