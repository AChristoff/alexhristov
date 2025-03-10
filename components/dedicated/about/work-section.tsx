import { TFunction } from '@/types'
import { Icons } from '@/assets/icons'

type Props = {
  t: TFunction
}

const WorkSection = ({ t }: Props) => {

  const eviden: string[] = t('workHistory.jobs.eviden.description', { returnObjects: true })
  const nexo: string[] = t('workHistory.jobs.nexo.description', { returnObjects: true })
  const fabrico: string[] = t('workHistory.jobs.fabrico.description', { returnObjects: true })
  const atos: string[] = t('workHistory.jobs.atos.description', { returnObjects: true })
  const neterra: string[] = t('workHistory.jobs.neterra.description', { returnObjects: true })
  const walltopiaPM: string[] = t('workHistory.jobs.walltopia.pm.description', { returnObjects: true })
  const walltopiaLead: string[] = t('workHistory.jobs.walltopia.teamLead.description', { returnObjects: true })
  const walltopiaDrafter: any[] = t('workHistory.jobs.walltopia.drafter.description', { returnObjects: true })

  return (
    <section className="work-history">
      <h5 className="flex border-b items-center uppercase font-semibold tracking-[3px]">
        <span className="flex items-center p-[0.5rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
          <Icons.work className="text-secondary mt-[-2px] w-[2rem] h-[2rem]" />
        </span>
        {t('workHistory.title')}
      </h5>

      <ul className="mt-5">
        <li className="uppercase font-bold tracking-[1px] mb-1">
          {t('workHistory.jobs.eviden.title')}
        </li>
        <li className="flex mb-5">
          <span className="mr-auto">
            {t('workHistory.jobs.eviden.period')}
          </span>{' '}
          <a
            type="button"
            href={t('workHistory.jobs.eviden.link')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary"
          >
            {t('workHistory.jobs.eviden.employer')}
          </a>
        </li>
        {eviden.map((p, i) => (
          <li className="left" key={i}>
            {p}
          </li>
        ))}
      </ul>

      <ul className="mt-5">
        <li className="uppercase font-bold tracking-[1px] mb-1">
          {t('workHistory.jobs.nexo.title')}
        </li>
        <li className="flex mb-5">
          <span className="mr-auto">
            {t('workHistory.jobs.nexo.period')}
          </span>{' '}
          <a
            type="button"
            href={t('workHistory.jobs.nexo.link')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary"
          >
            {t('workHistory.jobs.nexo.employer')}
          </a>
        </li>
        {nexo.map((p, i) => (
          <li className="left" key={i}>
            {p}
          </li>
        ))}
      </ul>

      <ul className="mt-5">
        <li className="uppercase font-bold tracking-[1px] mb-1">
          {t('workHistory.jobs.fabrico.title')}
        </li>
        <li className="flex mb-5">
          <span className="mr-auto">
            {t('workHistory.jobs.fabrico.period')}
          </span>{' '}
          <a
            type="button"
            href={t('workHistory.jobs.fabrico.link')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary"
          >
            {t('workHistory.jobs.fabrico.employer')}
          </a>
        </li>
        {fabrico.map((p, i) => (
          <li className="left" key={i}>
            {p}
          </li>
        ))}
      </ul>

      <ul className="mt-10">
        <li className="uppercase font-bold tracking-[1px] mb-1">
          {t('workHistory.jobs.atos.title')}
        </li>
        <li className="flex mb-5">
          <span className="mr-auto">{t('workHistory.jobs.atos.period')}</span>{' '}
          <a
            type="button"
            href={t('workHistory.jobs.atos.link')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary"
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

      <ul className="mt-10">
        <li className="uppercase font-bold tracking-[1px] mb-1">
          {t('workHistory.jobs.neterra.title')}
        </li>
        <li className="flex mb-5">
          <span className="mr-auto">
            {t('workHistory.jobs.neterra.period')}
          </span>{' '}
          <a
            type="button"
            href={t('workHistory.jobs.neterra.link')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary"
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

      <ul className="mt-10">
        <li className="uppercase font-bold tracking-[1px] mb-1">
          {t('workHistory.jobs.walltopia.title')}
        </li>
        <li className="flex mb-5">
          <span className="mr-auto">
            {t('workHistory.jobs.walltopia.period')}
          </span>{' '}
          <a
            type="button"
            href={t('workHistory.jobs.walltopia.link')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary"
          >
            {t('workHistory.jobs.walltopia.employer')}
          </a>
        </li>

        <li className="flex font-semibold mt-5 mb-2">
          <span className="mr-auto">
            {t('workHistory.jobs.walltopia.pm.time')}
          </span>{' '}
          <span>{t('workHistory.jobs.walltopia.pm.title')}</span>
        </li>
        {walltopiaPM.map((p, i) => (
          <li className="left" key={i}>
            {p}
          </li>
        ))}

        <li className="flex font-semibold mt-5 mb-2">
          <span className="mr-auto">
            {t('workHistory.jobs.walltopia.teamLead.time')}
          </span>{' '}
          <span>{t('workHistory.jobs.walltopia.teamLead.title')}</span>
        </li>
        {walltopiaLead.map((p, i) => (
          <li className="left" key={i}>
            {p}
          </li>
        ))}

        <li className="flex font-semibold mt-5 mb-2">
          <span className="mr-auto">
            {t('workHistory.jobs.walltopia.drafter.time')}
          </span>{' '}
          <span>{t('workHistory.jobs.walltopia.drafter.title')}</span>
        </li>
        {walltopiaDrafter.map((p, i) => (
          <li className="left" key={i}>
            {p}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WorkSection
