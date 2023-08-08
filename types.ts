export type Lang = 'en' | 'bg'

export type PortfolioCard = {
  id: number
  img: string
  title: string
  description: string
  buttons: {
    link: string
    title: string
  }[]
}


export type NavItem = {
  title: {
    en: string
    bg: string
  }
  href?: string
  disabled?: boolean
  external?: boolean
}


export type TFunction = (key: string, options?: any) => any;
