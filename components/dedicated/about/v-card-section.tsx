import Image from 'next/image'
import vCard from '@/public/assets/aleksov-v-card.svg'
import { TFunction } from '@/types'
import { CornerLeftUp } from 'lucide-react'

import { Icons } from '@/assets/icons'

type Props = {
  t: TFunction
}

const VCardSection = ({ t }: Props) => {
  return (
    <section className="v-card mt-auto">
      <h5 className="flex mt-12 mb-5 border-b items-center uppercase font-semibold tracking-[3px]">
        <span className="flex items-center p-[0.5rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
          <Icons.vCard className="text-secondary mt-[-2px] w-[2rem] h-[2rem]" />
        </span>
        {t('v-card.title')}
      </h5>

      <section className="max-w-sm">
        <Image
          src={vCard}
          alt="Profile"
          width={0}
          height={0}
          sizes="100%"
          placeholder="empty"
          className="rounded-md overflow-hidden mx-auto"
        />
      </section>
      <div className='flex items-end ml-2 align-sub'>
        <CornerLeftUp className="h-10" />
        <p className="ml-2"> {t('v-card.scan-me')}</p>
      </div>
    </section>
  )
}

export default VCardSection
