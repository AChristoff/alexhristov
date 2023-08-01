
import { Icons } from "@/config/icons"

import { buttonVariants } from "./ui/button"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <section className="container flex items-center justify-center py-1">
        <p className="text-sm font-medium  mr-3 text-muted-foreground">&copy;{` 2019-${currentYear}`}</p>
        <Link
          href="https://github.com/AChristoff"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.gitHub className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/aleksandar-hristov-812340122/"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.linkedIn className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </div>
        </Link>
        <Link
          href="https://stackoverflow.com/users/10745932/aleksandar-hristov/"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.stackOverflow className="h-6 w-6" />
            <span className="sr-only">Stack Overflow</span>
          </div>
        </Link>
      </section>
    </footer>
  )
}
