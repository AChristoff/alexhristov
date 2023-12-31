import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/i18n'
import cover from '@/public/assets/home-cover.png'

export const metadata: Metadata = {
  openGraph: {
    title: 'Aleksandar Hristov | Software Engineering',
    description:
      'Front-End Software Engineer with profound knowledge in React, Next.js, and beyond. Passionately committed to ongoing development and top-tier results. Based in Sofia. Reach out now.',
    images: [
      {
        url: '/og_image_home.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

type Props = {
  params: {
    lng: string
  }
}

const HomePage = async ({ params }: Props) => {
  const { t } = await useTranslation(params?.lng, 'home')

  return (
    <section className="grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-2 items-center">
        <h6 className="text-center uppercase tracking-[3px] font-semibold text-[0.8rem] md:text-[0.9rem] ">
          {t('hello')}
        </h6>
        <h1 className="text-center uppercase font-semibold leading-tight text-3xl md:text-4xl tracking-[3px]">
          {t('name')}
        </h1>
        <p className="text-center border-y py-4 mt-3 text-muted-foreground w-full">
          {t('jobTitle')}
        </p>
        <Image
          src={cover}
          alt="Profile"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          className="rounded-full mt-1"
        />
        <h6 className="flex flex-wrap items-center justify-center uppercase tracking-[3px] font-semibold text-[0.8rem] md:text-[0.9rem]">
          <span className="text-muted-foreground">{t('more')}</span>
          <Link className="ml-2" href={`/${params?.lng}/about`}>
            {t('link')}
          </Link>
        </h6>
      </div>
    </section>
  )
}

export default HomePage
