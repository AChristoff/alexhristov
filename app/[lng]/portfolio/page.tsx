import { Metadata } from 'next'
import { useTranslation } from '@/i18n'
import { PortfolioCard } from '@/types'

import FlipCard from '@/components/dedicated/portfolio/flip-card'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Dive into my portfolio to witness a rich blend of projects utilizing React, Next.js, TypeScript, and many more. From early drafting roles to front-end leadership, explore my journey.',
  openGraph: {
    title: 'Portfolio',
    description:
      'Dive into my portfolio to witness a rich blend of projects utilizing React, Next.js, TypeScript, and many more. From early drafting roles to front-end leadership, explore my journey.',
    images: [
      {
        url: '/og_image_portfolio.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: '/portfolio',
    languages: {
      'en-US': '/en/portfolio',
      'bg-BG': '/bg/portfolio',
    },
  },
}

type Props = {
  params: {
    lng: string
  }
}

const PortfolioPage = async ({ params }: Props) => {
  const { t } = await useTranslation(params?.lng, 'portfolio')

  const cards: PortfolioCard[] = t('cards', { returnObjects: true })

  return (
    <>
      <h1 className="mt-10 text-center uppercase font-semibold leading-tight text-xl md:text-2xl tracking-[3px]">
        {t('title')}
      </h1>
      <section className="mt-10 mb-14 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card) => (
          <FlipCard
            key={card.id}
            img={card.img}
            title={t('technologies')}
            description={card.description}
            buttons={card.buttons}
          />
        ))}
      </section>
    </>
  )
}

export default PortfolioPage
