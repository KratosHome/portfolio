import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { locales } from '@/data/locales'

export const routing = defineRouting({
  locales,

  defaultLocale: 'en',
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
