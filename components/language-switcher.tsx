import { FC } from "react"
import FlagBg from "@/assets/flag-bg.svg"
import FlagEn from "@/assets/flag-en.svg"
import { ChevronDown, Globe } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import "tailwindcss/tailwind.css"
import { Trans } from "react-i18next/TransWithoutContext"

import { languages } from "@/app/i18n/settings"

import { Button } from "./ui/button"

interface IProps {
  t?: any
  lng?: any
}

const LanguageSwitcher: FC<IProps> = ({ t, lng }) => {
  console.log("t:", t)
  console.log("lng:", lng)
  if (!languages) return null

  // const FlagIcon = languages === 'bg' ? FlagBg : FlagEn;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" size="icon">
            <Globe />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {languages.map((loc: string) => (
            <DropdownMenuItem key={loc} onClick={() => {}}>
              <div className="flex items-center space-x-2">
                <span>{loc === "bg" ? "Български" : "English"}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center space-x-2">
            <ChevronDown className="w-5 h-5 transition-all transform rotate-0 hover:rotate-180" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {languages.map((loc: string) => (
            <DropdownMenuItem key={loc} onClick={() => {}}>
              <div className="flex items-center space-x-2">
                <span>{loc === "bg" ? "Български" : "English"}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Trans i18nKey="languageSwitcher" t={t}>
        <Globe />
      </Trans> */}
    </>
  )
}

export default LanguageSwitcher
