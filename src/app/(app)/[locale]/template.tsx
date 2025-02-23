'use client'
import React, { JSX } from 'react'
import { usePathname } from 'next/navigation'
import Header from '@/components/layout/header/header'
import MenuInfoOlegTkach from '@/components/layout/header/logos/menu-info-oleg-tkach'
import { useLocale } from 'use-intl'
import MenuInfoCodeCraft from '@/components/layout/header/logos/menu-info-code-craft'

export default function Template({ children }: { children: React.ReactNode }) {
  const locale = useLocale()
  const path = usePathname()

  const userInfoComponentsMap: { [key: string]: JSX.Element } = {
    [`/`]: <Header logo={<MenuInfoOlegTkach />} />,
    [`/${locale}`]: <Header logo={<MenuInfoOlegTkach />} />,
    [`/${locale}/`]: <Header logo={<MenuInfoOlegTkach />} />,
    [`/${locale}/blog`]: <Header logo={<MenuInfoCodeCraft />} />,
  }

  const userInfoComponent = userInfoComponentsMap[path] || null

  return (
    <div>
      {userInfoComponent}
      {children}
    </div>
  )
}
