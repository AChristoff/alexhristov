import { TFunction } from '@/types'
import { Icons } from '@/assets/icons'

type Props = {
  t: TFunction
}

const ContactsSection = ({ t }: Props) => {
  
  return (
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
        <li className="w-full whitespace-nowrap mb-2">+359 888 199 889</li>
        <li className="font-semibold">{t('contacts.email')}</li>
        <li>
          <Icons.email className="h-5 w-auto" />
        </li>
      </ul>
    </section>
  )
}

export default ContactsSection
