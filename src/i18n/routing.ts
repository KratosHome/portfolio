import {defineRouting} from 'next-intl/routing'
import {createNavigation} from 'next-intl/navigation'

export const routing = defineRouting({
    locales: ['de',
        'en',
        'es',
        'fr',
        'hi',
        'it',
        'ja',
        'ko',
        'pt',
        'sv',
        'uk',
        'zh',],

    defaultLocale: 'en',
})

export const {Link, redirect, usePathname, useRouter, getPathname} =
    createNavigation(routing)
