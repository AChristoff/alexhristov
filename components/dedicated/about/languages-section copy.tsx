import { TFunction } from 'i18next'

import { Icons } from '@/assets/icons'

type Props = {
  t: TFunction<any, string>
}

const EducationSection = ({ t }: Props) => {
  return (
    <section className="education">
      <h5 className="flex mt-10 mb-5 border-b items-center uppercase font-semibold tracking-[3px]">
        <span className="flex items-center p-[0.45rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
          <Icons.education className="text-secondary mt-[-2px] mr-[-2px]" />
        </span>
        {t('education.title')}
      </h5>

      <ul className="mb-7">
        <li className="uppercase font-bold tracking-[1px]">
          {t('education.softUni.specialty')}
        </li>
        <li className="flex">
          <span className="mr-auto">{t('education.softUni.period')}</span>{' '}
          <span>{t('education.softUni.university')}</span>
        </li>
      </ul>

      <ul className="mb-7">
        <li className="uppercase font-bold tracking-[1px]">
          {t('education.forestry.specialty')}
        </li>
        <li className="flex">
          <span className="mr-auto">{t('education.forestry.period')}</span>{' '}
          <span className="right">{t('education.forestry.university')}</span>
        </li>
      </ul>
    </section>
  )
}

export default EducationSection
