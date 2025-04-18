'use client'
import { useRef, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { gsap } from 'gsap'
import sun from '@/assets/icons/sun.svg'
import moon from '@/assets/icons/moon.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Spinner from '@/components/ui/spinner'

const ThemeChange = () => {
  const t = useTranslations('header')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const svgRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    gsap.to(svgRef.current, {
      rotate: 360,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.inOut',
    })
    gsap.set(svgRef.current, { clearProps: 'all' })
  }

  const handleMouseEnter = () => {
    gsap.fromTo(
      svgRef.current,
      { scale: 1 },
      {
        scale: 0.6,
        duration: 0.3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: 1,
      },
    )
  }

  if (!mounted)
    return (
      <div className="!size-[28px]">
        {' '}
        <Spinner />
      </div>
    )

  return (
    <div onClick={changeTheme} className="z-10 max-w-max">
      <div
        ref={svgRef}
        onMouseEnter={handleMouseEnter}
        className="-mt-1 cursor-pointer fill-orange-800 dark:stroke-orange-800"
      >
        {theme === 'light' ? (
          <Image
            src={sun}
            alt={t('switch-dark')}
            width={28}
            height={28}
            className="stroke-black stroke-2 text-gray-700"
          />
        ) : (
          <Image src={moon} alt={t('switch-light')} width={28} height={28} />
        )}
      </div>
    </div>
  )
}

export default ThemeChange
