import Image from 'next/image'
import NotFoundSVG from '@/public/404.svg'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { useTranslation } from '@/i18n'

type Props = {
  params: {
    lng: string
  }
}
const NotFound = async ({ params }: Props) => {
  const { t } = await useTranslation(params?.lng, 'home')

  return (
    <section className="container text-center">
      <h1 className="text-center uppercase font-semibold leading-tight text-xl tracking-[3px] my-5">
        {t('notFound')}
      </h1>
      <Button className="my-2">
        <Link className="text-center" href={`/${params?.lng}`}>
          {t('goHome')}
        </Link>
      </Button>
      <Image
        src={NotFoundSVG}
        alt="Profile"
        width={0}
        height={0}
        sizes="100vw"
        className="mx-auto"
        placeholder="blur"
      />
    </section>
  )
}

export default NotFound