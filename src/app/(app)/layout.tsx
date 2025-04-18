import './globals.scss'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getLocale } from 'next-intl/server'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@/components/providers/google-tag-manager'
import { Toaster } from '@/components/ui/toaster'

export const dynamic = 'force-dynamic'

const sansation = localFont({
  src: [
    {
      path: '../../assets/fonts/Sansation_Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Sansation_Light_Italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/Sansation_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Sansation_Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../assets/fonts/Sansation_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Sansation_Bold_Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-sansation',
})

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode
}) {
  const locale = await getLocale()

  return (
    <html lang={locale} suppressHydrationWarning>
      <SpeedInsights />
      <GoogleTagManager />
      <body
        // prettier-ignore
        className={`${sansation.variable} max-w-screen font-sansation relative overflow-x-hidden bg-white antialiased dark:bg-black`}
      >
        {children}
        <Toaster />
      </body>
      <Analytics />
    </html>
  )
}
