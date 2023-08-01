import { useTranslation } from "@/app/i18n"

type Props = {
  params: {
    lng: string
  }
}

const AboutPage = async ({ params }: Props) => {
  const { t } = await useTranslation(params?.lng, 'about')
  return (
    <h1>{t('title')}</h1>
  )
}

export default AboutPage