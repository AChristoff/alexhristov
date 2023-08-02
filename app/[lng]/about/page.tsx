import { Metadata } from 'next'
import Image from 'next/image'
import cover from '@/public/assets/about-cover.png'

import { Icons } from '@/config/icons'
import Rating from '@/components/rating'
import { useTranslation } from '@/i18n'

const skills = [
  { technology: 'JavaScript', stars: 5 },
  { technology: 'TypeScript', stars: 4 },
  { technology: 'HTML5', stars: 5 },
  { technology: 'CSS3', stars: 5 },
  { technology: 'Sass', stars: 4 },
  { technology: 'React', stars: 5 },
  { technology: 'NextJS', stars: 4 },
  { technology: 'React Native', stars: 4 },
  { technology: 'Redux', stars: 2 },
  { technology: 'NodeJS', stars: 3 },
  { technology: 'Express', stars: 3 },
  { technology: 'Mongo', stars: 4 },
  { technology: 'Linux', stars: 4 },
  { technology: 'Rest API', stars: 5 },
  { technology: 'Scrum', stars: 3 },
  { technology: 'Git', stars: 5 },
  { technology: 'Jira', stars: 5 },
  { technology: 'Bootstrap', stars: 5 },
  { technology: 'Tailwind', stars: 4 },
  { technology: 'MUI', stars: 5 },
  { technology: 'jQuery', stars: 3 },
  { technology: 'VueJS', stars: 3 },
]

export const metadata: Metadata = {
  title: 'About',
}

type Props = {
  params: {
    lng: string
  }
}

const AboutPage = async ({ params }: Props) => {
  const { t } = await useTranslation(params?.lng, 'about')

  const childish: any[] = t('workHistory.jobs.childish.description', { returnObjects: true })
  const atos: any[] = t('workHistory.jobs.atos.description', { returnObjects: true })
  const neterra: any[] = t('workHistory.jobs.neterra.description', { returnObjects: true })
  const walltopiaPM: any[] = t('workHistory.jobs.walltopia.pm.description', { returnObjects: true })
  const walltopiaLead: any[] = t('workHistory.jobs.walltopia.teamLead.description', { returnObjects: true })
  const walltopiaDrafter: any[] = t('workHistory.jobs.walltopia.drafter.description', { returnObjects: true })

  return (
    <div className="about mb-20">
      <h1 className="mt-10 mb-3 text-center uppercase font-semibold leading-tight text-xl md:text-2xl tracking-[3px]">
        {t('title')}
      </h1>
      {/* Cover */}
      <section className="about-cover">
        <Image
          src={cover}
          alt="Profile"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          className="rounded-md overflow-hidden mx-auto"
        />
      </section>
      {/* Summary */}
      <section className="mt-7 mb-10 max-w-4xl mx-auto text-stale-800">
        {t('generalInfo')}
      </section>
      {/* CV */}
      <section className="flex flex-wrap flex-row gap-10">
        {/* Left column */}
        <div className="w-full md:w-[31%] lg:w-[22%] xl:w-[20%]">
          <section className="contacts">
            <h5 className="flex mb-5 border-b items-center uppercase font-semibold tracking-[3px]">
              <span className="flex items-center p-[0.6rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
                <Icons.contacts className="text-secondary mt-[-2px]" />
              </span>
              {t('contacts.title')}
            </h5>
            <ul>
              <li className="font-semibold">{t('contacts.address.title')}</li>
              <li className="mb-2">{t('contacts.address.address')}</li>
              <li className="font-semibold">{t('contacts.phone')}</li>
              <li className="w-full whitespace-nowrap mb-2">
                +359 888 199 889
              </li>
              <li className="font-semibold">{t('contacts.email')}</li>
              <li>
                <Icons.email className="h-5 w-auto" />
              </li>
            </ul>
          </section>

          <section className="skills">
            <h5 className="flex mt-10 mb-5 border-b items-center uppercase font-semibold tracking-[3px]">
              <span className="flex items-center p-[0.5rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
                <Icons.pizzle className="text-secondary mt-[-2px] mr-[-2px]" />
              </span>
              {t('skills.title')}
            </h5>

            <ul>
              {skills.map((skill, index) => (
                <li key={index} className="flex mb-[2px]">
                  <span className="mr-auto">{skill.technology}</span>{' '}
                  <Rating stars={skill.stars.toString()} />
                </li>
              ))}
            </ul>
          </section>

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
        </div>
        {/* Right column */}
        <div className="flex-1">
          <section className="work-history">
          <h5 className="flex border-b items-center uppercase font-semibold tracking-[3px]">
              <span className="flex items-center p-[0.5rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
                <Icons.work className="text-secondary mt-[-2px]" />
              </span>
              {t('workHistory.title')}
            </h5>

            <ul className='mt-5'>
              <li className='uppercase font-bold tracking-[1px] mb-1'>
                {t('workHistory.jobs.childish.title')}
              </li>
              <li className='flex mb-5'>
                <span className='mr-auto'>{t('workHistory.jobs.childish.period')}</span>{' '}
                <a
                  type="button"
                  href={t('workHistory.jobs.childish.link')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('workHistory.jobs.childish.employer')}
                </a>
              </li>
              {childish.map((p, i) => (
                <li className="left" key={i}>
                  {p}
                </li>
              ))}
            </ul>

            <ul className='mt-10'>
              <li className='uppercase font-bold tracking-[1px] mb-1'>
                {t('workHistory.jobs.atos.title')}
              </li>
              <li className='flex mb-5'>
                <span className='mr-auto'>{t('workHistory.jobs.atos.period')}</span>{' '}
                <a
                  type="button"
                  href={t('workHistory.jobs.atos.link')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('workHistory.jobs.atos.employer')}
                </a>
              </li>
              {atos.map((p, i) => (
                <li className="left" key={i}>
                  {p}
                </li>
              ))}
            </ul>

            <ul className='mt-10'>
              <li className='uppercase font-bold tracking-[1px] mb-1'>
                {t('workHistory.jobs.neterra.title')}
              </li>
              <li className='flex mb-5'>
                <span className='mr-auto'>{t('workHistory.jobs.neterra.period')}</span>{' '}
                <a
                  type="button"
                  href={t('workHistory.jobs.neterra.link')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('workHistory.jobs.neterra.employer')}
                </a>
              </li>
              {neterra.map((p, i) => (
                <li className="left" key={i}>
                  {p}
                </li>
              ))}
            </ul>

            <ul className='mt-10'>
              <li className='uppercase font-bold tracking-[1px] mb-1'>
                {t('workHistory.jobs.walltopia.title')}
              </li>
              <li className='flex mb-5'>
                <span className='mr-auto'>{t('workHistory.jobs.walltopia.period')}</span>{' '}
                <a
                  type="button"
                  href={t('workHistory.jobs.walltopia.link')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('workHistory.jobs.walltopia.employer')}
                </a>
              </li>

              <li className="flex font-semibold mt-5 mb-2">
                <span className='mr-auto'>{t('workHistory.jobs.walltopia.pm.time')}</span>{' '}
                <span>{t('workHistory.jobs.walltopia.pm.title')}</span>
              </li>
              {walltopiaPM.map((p, i) => (
                <li className="left" key={i}>
                  {p}
                </li>
              ))}

              <li className="flex font-semibold mt-5 mb-2">
                <span className='mr-auto'>{t('workHistory.jobs.walltopia.teamLead.time')}</span>{' '}
                <span>{t('workHistory.jobs.walltopia.teamLead.title')}</span>
              </li>
              {walltopiaLead.map(
                (p, i) => (
                  <li className="left" key={i}>
                    {p}
                  </li>
                )
              )}

              <li className="flex font-semibold mt-5 mb-2">
                <span className='mr-auto'>{t('workHistory.jobs.walltopia.drafter.time')}</span>{' '}
                <span>{t('workHistory.jobs.walltopia.drafter.title')}</span>
              </li>
              {walltopiaDrafter.map(
                (p, i) => (
                  <li className="left" key={i}>
                    {p}
                  </li>
                )
              )}
            </ul>
          </section>

          <section className="education">
            <h5 className="flex mt-10 mb-5 border-b items-center uppercase font-semibold tracking-[3px]">
              <span className="flex items-center p-[0.45rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
                <Icons.education className="text-secondary mt-[-2px] mr-[-2px]" />
              </span>
              {t('education.title')}
            </h5>

            <ul className='mb-7'>
              <li className="uppercase font-bold tracking-[1px]">{t('education.softUni.specialty')}</li>
              <li className='flex'>
                <span className="mr-auto">
                  {t('education.softUni.period')}
                </span>{' '}
                <span>{t('education.softUni.university')}</span>
              </li>
            </ul>

            <ul className='mb-7'>
              <li className="uppercase font-bold tracking-[1px]">{t('education.forestry.specialty')}</li>
              <li className='flex'>
                <span className="mr-auto">
                  {t('education.forestry.period')}
                </span>{' '}
                <span className="right">
                  {t('education.forestry.university')}
                </span>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
