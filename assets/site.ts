export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Aleksandar Hristov',
  description:
    'Front-End Software Engineer with profound knowledge in React, Next.js, and beyond. Passionately committed to ongoing development and top-tier results. Based in Sofia. Reach out now.',
  keywords:
    'software_development,software,front-end,react,next.js,react-native,typescript,web_development,web,developer,portfolio,resume,contacts,aleksov,aleksandar_hristov,alexhristov,alekshristov',
  mainNav: [
    {
      title: {
        en: 'Home',
        bg: 'Начало',
      },
      href: '/',
      activeSegment: null,
    },
    {
      title: {
        en: 'About',
        bg: 'За мен',
      },
      href: '/about',
      activeSegment: 'about',
    },
    {
      title: {
        en: 'Portfolio',
        bg: 'Портфолио',
      },
      href: '/portfolio',
      activeSegment: 'portfolio',
    },
  ],
}
