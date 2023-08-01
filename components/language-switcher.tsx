"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Globe } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { languages } from "@/app/i18n/settings"

import { Button } from "./ui/button"

const LanguageSwitcher = () => {


  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" id="lang">
            <Globe />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {languages.map((loc: string) => (
            <DropdownMenuItem key={loc} onClick={() => {}}>
              <Link
                href={`/${loc}`}
                className="flex items-center space-x-2"
              >
                <span>{loc === "bg" ? "Български" : "English"}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default LanguageSwitcher
