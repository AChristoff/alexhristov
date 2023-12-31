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

const LanguageSwitcher = ({extraAction}: {extraAction?: (params: any) => any}) => {
  const router = useRouter()
  const pathname = usePathname()

  const activeLang = pathname.includes('/en') ? 'en' : 'bg'

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
              let newPathname = '/en'
              if(pathname.includes('/bg')) {
                newPathname =  pathname.replace('/bg', '/en')
              }
              router.push(newPathname)

              extraAction && extraAction(newPathname)
            }}
            className={`flex items-center space-x-2 ${activeLang === 'en' ? 'text-primary font-semibold' : ''}`} 
          >
            <span>{'English'}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
             onClick={() => {
              let newPathname = '/bg'
              if(pathname.includes('/en')) {
                newPathname = pathname.replace('/en', '/bg')
              }
              router.push(newPathname)

              extraAction && extraAction(newPathname)
            }}
            className={`flex items-center space-x-2 ${activeLang === 'bg' ? 'text-primary font-semibold' : ''}`} 
          >
            <span>{'Български'}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default LanguageSwitcher
