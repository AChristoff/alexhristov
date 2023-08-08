import { Metadata } from 'next'
import Image from 'next/image'
import { useTranslation } from '@/i18n'

import cover from '@/public/assets/about-cover.png'

import Contacts from '@/components/dedicated/about/contacts-section'
import Skills from '@/components/dedicated/about/skills-section'
import Languages from '@/components/dedicated/about/languages-section'
import WorkHistory from '@/components/dedicated/about/work-section'
import Education from '@/components/dedicated/about/languages-section copy'
import Certifications from '@/components/dedicated/about/certification-section'

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

  return (
    <div className="about mb-20">
      {/* ----- Title ----- */}
      <h1 className="mt-10 mb-3 text-center uppercase font-semibold leading-tight text-xl md:text-2xl tracking-[3px]">
        {t('title')}
      </h1>
      {/* ----- Cover ----- */}
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
      {/* ----- Summary ----- */}
      <section className="mt-7 mb-10 max-w-4xl mx-auto text-stale-800">
        {t('generalInfo')}
      </section>
      {/* ----- CV ----- */}
      <section className="flex flex-wrap flex-row gap-10">
        {/* ----- Left Col ----- */}
        <div className="w-full md:w-[31%] lg:w-[22%] xl:w-[20%]">
          <Contacts t={t} />

          <Skills t={t} />

          <Languages t={t} />
        </div>
        {/* ----- Right Col ----- */}
        <div className="flex-1">
          <WorkHistory t={t} />

          <Education t={t} />
          
          <Certifications t={t} lang={params?.lng} />
        </div>
      </section>
    </div>
  )
}

export default AboutPage
