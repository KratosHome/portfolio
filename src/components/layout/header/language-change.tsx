'use client'
import { useEffect, useState } from 'react'
import { useLocale } from 'use-intl'
import Image from 'next/image'
import arrow from '@/assets/icons/arrow.svg'
import { localesData } from '@/data/locales-data'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import arrowBlack from '@/assets/icons/arrow-dark-small.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'

interface LanguageChangeProps {
  isMobile?: boolean
}

export default function LanguageChange({ isMobile }: LanguageChangeProps) {
  const t = useTranslations('header')
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const { theme } = useTheme()
  const [currentSrc, setCurrentSrc] = useState(arrow)

  useEffect(() => {
    setCurrentSrc(theme === 'dark' ? arrow : arrowBlack)
  }, [theme])

  const changeLocale = (sendLocale: string) => {
    const newPathname = `/${sendLocale}/${pathname.split('/').slice(2).join('/')}`
    router.push(newPathname)
  }

  if (isMobile) {
    return (
      <Dialog>
        <DialogTrigger className="flex items-center gap-2 rounded-[35px] border-b border-zinc-600 bg-transparent px-[12px] py-[8px] text-[16px] uppercase backdrop-blur-[0.5px]">
          <span className="text-[20px]">{locale}</span>
          <Image
            src={currentSrc}
            alt={t('switch-local')}
            width={20}
            height={20}
          />
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] max-w-[300px] overflow-y-auto rounded-lg bg-white p-4 dark:bg-zinc-900">
          <DialogTitle className="mb-3 text-center text-lg font-semibold">
            {t('choose_language')}
          </DialogTitle>
          <div className="flex flex-col gap-4">
            {localesData.map((loc) => (
              <DialogClose asChild key={loc.name}>
                <button
                  onClick={() => changeLocale(loc.local)}
                  className={`flex w-full items-center gap-2 rounded-lg px-4 py-2 transition ${
                    locale === loc.local
                      ? 'bg-zinc-100 font-semibold dark:bg-zinc-800'
                      : 'font-light'
                  }`}
                >
                  {loc.icon && (
                    <Image
                      src={loc.icon}
                      alt={loc.name}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  )}
                  <span className="text-[16px]">{loc.name}</span>
                </button>
              </DialogClose>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="group flex gap-2 text-lg">
      <DropdownMenu>
        <DropdownMenuTrigger className="relative flex items-center gap-2 rounded-[35px] border-b border-zinc-600 bg-transparent px-[15px] py-[10px] text-[20px] uppercase backdrop-blur-[0.5px]">
          <span className="block text-[20px] duration-300 group-hover:scale-105">
            {locale}
          </span>
          <Image
            className="block duration-300 group-hover:scale-125"
            src={currentSrc}
            alt={t('switch-local')}
            width={20}
            height={20}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute z-10 -ml-[40px] flex max-h-[210px] min-w-[175px] -translate-x-1/3 flex-col items-start gap-[6px] overflow-auto rounded-[8px] border border-black bg-[#0B66F5] bg-gradient-to-r from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0)] p-[8px_12px] backdrop-blur-[12.5px] dark:bg-transparent">
          {localesData.map((loc) => (
            <DropdownMenuItem
              key={loc.name}
              onClick={() => changeLocale(loc.local)}
              className={`flex w-full cursor-pointer items-center gap-2 rounded-lg border-b border-black bg-gradient-to-r px-[12px] py-[8px] normal-case backdrop-blur-[12.5px] duration-300 ${
                locale === loc.local ? 'font-semibold' : 'font-light'
              }`}
            >
              {loc.icon && (
                <Image
                  className="min-h-[20px] min-w-[20px] overflow-hidden rounded-full object-cover"
                  src={loc.icon}
                  alt={loc.name}
                  width={20}
                  height={20}
                />
              )}
              <span className="text-[16px]">{loc.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
