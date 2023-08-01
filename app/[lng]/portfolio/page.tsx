import { useTranslation } from "@/app/i18n"

type Props = {
  params: {
    lng: string
  }
}

const PortfolioPage = async ({ params }: Props) => {
  const { t } = await useTranslation(params?.lng, 'portfolio')
  return (
    <h1>{t('title')}</h1>
  )
}

export default PortfolioPage