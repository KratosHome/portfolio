import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import React, { ReactNode } from 'react'
import { ThemeProvider } from '@/components/providers/theme-provider'
import ScrollToTop from '@/components/features/scroll-to-top'
import StarsCanvas from '@/components/ui/star-background/star-background'
import SplashCursor from '@/components/ui/splash-cursor'
import dynamic from 'next/dynamic'
import { Loader } from '@/components/ui/loader/loader'

const Footer = dynamic(() => import('@/components/layout/footer/footer'), {
  loading: () => <Loader />,
})

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode
}) {
  const messages = await getMessages()
  return (
    <>
      <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
        <NextIntlClientProvider messages={messages}>
          <ScrollToTop />
          <StarsCanvas />
          <main className="min-h-[90svh]">
            <SplashCursor SPLAT_RADIUS={0.1} />
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </ThemeProvider>
    </>
  )
}

export function generateStaticParams() {
  return [
    { params: { locale: 'ar' } },
    { params: { locale: 'de' } },
    { params: { locale: 'en' } },
    { params: { locale: 'es' } },
    { params: { locale: 'fr' } },
    { params: { locale: 'he' } },
    { params: { locale: 'hi' } },
    { params: { locale: 'it' } },
    { params: { locale: 'ja' } },
    { params: { locale: 'ko' } },
    { params: { locale: 'pt' } },
    { params: { locale: 'sv' } },
    { params: { locale: 'uk' } },
    { params: { locale: 'zh' } },
  ]
}
