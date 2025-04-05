import { ReactNode } from 'react'
import { notFound } from 'next/navigation'

export default async function LocaleLayout(props: {
  children: ReactNode
  params: Promise<{ locale: ILocale }>
}) {
  const { children } = props

  if (process.env.NODE_ENV != 'development') {
    return notFound()
  }

  return <>{children}</>
}
