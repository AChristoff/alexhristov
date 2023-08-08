import Image from 'next/image'
import { PortfolioCard } from '@/types'

import { Button } from '../../ui/button'

export default function FlipCard({
  img,
  title,
  description,
  buttons,
}: Omit<PortfolioCard, 'id'> ) {

  const cardCover = require(`@/public/assets/cards/${img}`)

  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="overflow-hidden sm:h-[13rem] md:h-[14rem] border-b">
        <Image
          src={cardCover}
          alt={title}
          width={0}
          height={0}
          sizes="40vw"
          className="mx-auto"
        />
      </div>

      <div className="px-2 bg-slate-100 dark:bg-slate-900">
        <h4 className="text-2xl font-semibold leading-none tracking-tight text-center mb-2 pt-5">
          {title}
        </h4>

        <p className="text-sm text-muted-foreground dark:text-slate-100 text-center min-h-[3rem]">
          {description}
        </p>

        <section className="buttons text-center mt-auto">
          {buttons.map((button, index) => (
            <Button
              variant="outline"
              className="my-5 bg-slate-200 dark:bg-slate-700 border-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <a
                key={index}
                type="button"
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {button.title}
              </a>
            </Button>
          ))}
        </section>
      </div>
    </div>
  )
}
