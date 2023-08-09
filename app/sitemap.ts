import type { MetadataRoute } from 'next'
import { languages } from '@/i18n/settings'
import { siteConfig } from '@/assets/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = siteConfig.mainNav.map((page) => page.href.replace('/', ''))
  const pageUrls = pages.flatMap((page) =>
    languages.map((lang) => ({
      url: `https://www.alekshristov.com/${lang}/${page}`,
      lastModified: new Date(),
    }))
  )

  return pageUrls
}

// Dynamic sitemap example

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

// const posts = await getPosts()
// const postUrls = posts.map((post) => ({
//   url: `${config.url}/blog/${post.id}`,
//   lastModified: new Date(post.date),
// }))

// const categories = getCategories()
// const categoryUrls = categories.map((tag) => ({
//   url: `${config.url}/blog/categories/${tag.slug}`,
//   lastModified: new Date(),
// }))

// return [...pageUrls, ...postUrls, ...categoryUrls]