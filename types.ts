export type Lang = 'en' | 'bg'

export type PortfolioCard = {
  img: string
  title: string
  description: string
  buttons: {
    link: string
    title: string
    class: string
  }[]
}
