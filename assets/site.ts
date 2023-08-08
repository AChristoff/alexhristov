export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Aleksandar Hristov",
  description:
    "At my website you can find my resume, portfolio and contacts © Aleksov",
  keywords: 'software_development,software,front-end,react,next.js,react-native,typescript,web_development,web,developer,portfolio,resume,contacts,aleksov,aleksandar_hristov,alexhristov,alekshristov',
  mainNav: [
    {
      title: {
        en: "Home",
        bg: "Начало",
      },
      href: "/",
    },
    {
      title: {
        en: "About",
        bg: "За мен",
      },
      href: "/about",
    },
    {
      title: {
        en: "Portfolio",
        bg: "Портфолио",
      },
      href: "/portfolio",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
