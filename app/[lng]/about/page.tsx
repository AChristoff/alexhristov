import { Metadata } from 'next'
import Image from 'next/image'
import { useTranslation } from '@/i18n'
import cover from '@/public/assets/about-cover.png'

import Certifications from '@/components/dedicated/about/certification-section'
import Contacts from '@/components/dedicated/about/contacts-section'
import Education from '@/components/dedicated/about/education-section'
import Languages from '@/components/dedicated/about/languages-section'
import Skills from '@/components/dedicated/about/skills-section'
import VCard from '@/components/dedicated/about/v-card-section'
import WorkHistory from '@/components/dedicated/about/work-section'

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm a dedicated developer with a proven track record, skilled in JavaScript, React, TypeScript, and more. Transforming concepts into realities for various companies and clients. Discover more about my work on this page.",
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en/about',
      'bg-BG': '/bg/about',
    },
  },
}

type Props = {
  params: {
    lng: string
  }
}

const AboutPage = async ({ params }: Props) => {
  const { t } = await useTranslation(params?.lng, 'about')

  return (
    <div className="about mb-10">
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
      <section className="mt-7 mb-10 max-w-4xl mx-auto">
        {t('generalInfo')}
      </section>
      {/* ----- CV ----- */}
      <section className="flex flex-wrap flex-row gap-10">
        {/* ----- Left Col ----- */}
        <div className="w-full md:w-[31%] lg:w-[25%] flex flex-col">
          <Contacts t={t} />

          <Skills t={t} />

          <Languages t={t} />
        </div>
        {/* ----- Right Col ----- */}
        <div className="flex-1">
          <WorkHistory t={t} />

          <Education t={t} />

          <Certifications t={t} lang={params?.lng} />

          <VCard t={t} />
        </div>
      </section>
    </div>
  )
}

export default AboutPage
