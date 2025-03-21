import type { MetadataRoute } from 'next'
import { locales } from '@/data/locales'

const url = process.env.NEXT_URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const homePage = locales.map((lang) => ({
    url: `${url}/${lang}`,
    lastModified: new Date('2024-03-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...homePage]
}
