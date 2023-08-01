"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"

import { NavItem } from "@/types/nav"
import { Icons } from "@/config/icons"
import { cn } from "@/lib/utils"
import { Lang } from "@/types"

interface MainNavProps {
  items?: NavItem[]
  lng: Lang
}

export function MainNav({ items, lng }: MainNavProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [activeLand, setActiveLand] = useState('')

  useEffect(() => {
    const lang = window.location.pathname.split('/')[1]
    setActiveLand(lang)
  }, [])

  return (
    <div className="mr-5 flex flex-1 justify-between">
      {mounted && (
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo
            className="h-8 w-auto"
            fill={theme === "dark" ? "white" : "black"}
          />
        </Link>
      )}
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={`/${activeLand}${item.href}`}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
