import { TFunction } from '@/types'
import { Icons } from '@/assets/icons'
import Rating from './rating'

type Props = {
  t: TFunction
}

const LanguagesSection = ({ t }: Props) => {
  return (
    <section className="languages">
      <h5 className="flex mt-10 mb-5 border-b items-center uppercase font-semibold tracking-[3px]">
        <span className="flex items-center p-[0.6rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
          <Icons.flag className="text-secondary mt-[-2px] mr-[-2px]" />
        </span>
        {t('languages.title')}
      </h5>

      <ul className="rating-list">
        <li className="flex mb-[2px]">
          <span className="mr-auto">{t('languages.en')}</span>{' '}
          <Rating stars="4" />
        </li>
        <li className="flex">
          <span className="mr-auto">{t('languages.bg')}</span>{' '}
          <Rating stars="5" />
        </li>
      </ul>
    </section>
  )
}

export default LanguagesSection
