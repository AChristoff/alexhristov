export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Aleksandar Hristov | Front-Еnd Developer",
  description:
    "At my website you can find my resume, portfolio and contacts © Aleksov",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
