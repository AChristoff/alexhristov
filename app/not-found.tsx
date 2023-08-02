import Image from 'next/image'
import NotFoundSVG from '@/public/404.svg'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="container text-center">
      <h1 className="text-center uppercase font-semibold leading-tight text-xl tracking-[3px] my-5">
        Page not found
      </h1>
      <Button className="my-2">
        <Link className="text-center" href="/en">
          Go to home
        </Link>
      </Button>
      <Image
        src={NotFoundSVG}
        alt="Profile"
        width={0}
        height={0}
        sizes="100vw"
        className="mx-auto"
      />
    </section>
  )
}
