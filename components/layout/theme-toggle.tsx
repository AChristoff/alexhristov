"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle({extraAction}: {extraAction?: () => void}) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        extraAction && extraAction()
        setTheme(theme === "light" ? "dark" : "light")}
      }
    >
      <Moon className="h-[1.5rem] dark:hidden" />
      <Sun className="h-[1.5rem] hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
