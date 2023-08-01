"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { NavItem } from "@/types/nav"
import { Icons } from "@/config/icons"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {

  const [activeLand, setActiveLand] = useState("")

  useEffect(() => {
    const lang = window.location.pathname.split("/")[1]
    setActiveLand(lang)
  }, [])

  return (
    <div className="mr-5 flex flex-1 justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-8" />
      </Link>
      {items?.length ? (
        <nav className="flex gap-6 w-auto">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={`/${activeLand}${item.href}`}
                  className={cn(
                    "uppercase flex items-center text-sm font-medium text-muted-foreground",
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
