'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'

const LanguageSwitcher = ({extraAction}: {extraAction?: () => void}) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" id="lang">
            <Globe />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              extraAction && extraAction()
              let newPathname = '/en'
              if(pathname.includes('/bg')) {
                newPathname =  pathname.replace('/bg', '/en')
              }
              router.push(newPathname)
            }}
            className="flex items-center space-x-2"
          >
            <span>{'English'}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
             onClick={() => {
              extraAction && extraAction()
              let newPathname = '/bg'
              if(pathname.includes('/en')) {
                newPathname = pathname.replace('/en', '/bg')
              }
              router.push(newPathname)
            }}
            className="flex items-center space-x-2"
          >
            <span>{'Български'}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default LanguageSwitcher
