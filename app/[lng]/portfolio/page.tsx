import { useTranslation } from '@/app/i18n'
import FlipCard from '@/components/flip-card'
import { PortfolioCard } from '@/types'

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
      <section className="my-10 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card, index) => (
          <FlipCard
            key={index}
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
