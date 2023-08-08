export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Aleksandar Hristov',
  description:
    'At my website you can find my resume, portfolio and contacts © Aleksov',
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
