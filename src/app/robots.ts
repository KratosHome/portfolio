import { MetadataRoute } from 'next'
import { locales } from '@/data/locales'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: [
          '/*?sort=*',
          '/*?new=*',
          '/*?filters=*',
          '/*?page=*',
          '/*?categories=*',
          '/*?minWeight=*',
          '/*?maxWeight=*',
        ],
        allow: [
          '/',
          ...locales.map((locale) => `/${locale}/`),
          ...locales.map((locale) => `/${locale}/*`),
        ],
      },
    ],
    sitemap: 'https://codecraftmaster.com/sitemap.xml',
  }
}
