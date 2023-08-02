'use client'

import { useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from './ui/button'

const LanguageSwitcher = ({extraAction}: {extraAction?: () => void}) => {
  const router = useRouter()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" size="icon" id="lang">
            <Globe />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              extraAction && extraAction()
              router.push('/en')
            }}
            className="flex items-center space-x-2"
          >
            <span>{'English'}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
             onClick={() => {
              extraAction && extraAction()
              router.push('/bg')
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
