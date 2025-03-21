'use client'
import './hero.scss'
import { useTranslations } from 'next-intl'
import { Technologies } from '@/components/client/hero/technologies/technologies'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { HireMe } from '@/components/client/hire-me'
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Hero = () => {
  const t = useTranslations('home-page.hero')

  const bigСircleRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const hireMeRef = useRef<HTMLDivElement>(null)
  const planetRef = useRef<HTMLDivElement>(null)
  const bgСircleTextRef = useRef<HTMLDivElement>(null)
  const socialIconsRef = useRef<HTMLDivElement>(null)

  const startDate = new Date('2021-10-01')

  const calculateYears = (start: Date, end: Date): number => {
    const years: number = end.getFullYear() - start.getFullYear()
    return years
  }

  const years = calculateYears(startDate, new Date())

  useGSAP(() => {
    if (bigСircleRef.current) {
      gsap.fromTo(
        bigСircleRef.current,
        {
          scale: 0.1,
          opacity: 0.5,
          y: -100,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 2,
          ease: 'power2.out',
        },
      )
    }

    gsap.fromTo(
      bgСircleTextRef.current,
      {
        scale: 0.1,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
      },
    )

    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 0.5,
          duration: 2,
          ease: 'power2.out',
        },
      )
    }

    if (hireMeRef.current) {
      gsap.fromTo(
        hireMeRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
        },
      )
    }

    if (planetRef.current) {
      gsap.fromTo(
        planetRef.current,
        {
          opacity: 0,
          rotation: 340,
        },
        {
          opacity: 1,
          rotation: 0,
          duration: 2.5,
          ease: 'power2.out',
        },
      )
    }

    if (socialIconsRef.current) {
      gsap.fromTo(
        socialIconsRef.current.children,
        { opacity: 0, y: 50, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.3,
        },
      )
    }
  })

  return (
    <section className="relative min-h-[1700px] overflow-x-hidden lg:overflow-visible">
      <div className="relative mx-auto max-w-[1442px] px-[24px]">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div
            ref={bigСircleRef}
            className="absolute -top-[10px] left-[40px] z-10 size-[100px] flex-shrink-0 rounded-[280px] border-stone-500/30 bg-[linear-gradient(127deg,_rgba(11,_102,_245,_0.30)_49.23%,_rgba(78,_128,_206,_0.15)_83.27%,_rgba(255,_255,_255,_0.00)_102.62%)] opacity-0 backdrop-blur-[12.5px] dark:border-[1px] dark:bg-gradient-to-tr dark:from-[rgba(255,255,255,0.12)] dark:to-[rgba(255,255,255,0)] lg:-top-[20px] lg:left-[20px] lg:size-[280px]"
          />
          <div
            ref={bgRef}
            className="bg-ellipse-light-pattern absolute left-[5px] top-[20px] -z-20 h-[70px] w-[80px] rotate-[10deg] bg-contain opacity-0 dark:bg-ellipse-pattern lg:-left-[80px] lg:top-[70px] lg:h-[103px] lg:w-[125px]"
          />
          <div className="z-20 w-full max-w-[400px] lg:max-w-[600px]">
            <h1 className="relative mt-[55px] flex w-full max-w-[300px] flex-col uppercase lg:-mt-[50px] lg:max-w-full">
              <span className="overlay-theme-fr delay-1 inline-block items-end text-end text-[40px] font-extrabold leading-[0.5] text-[#0B66F5] lg:text-[80px]">
                {t('frontend')}
              </span>
              <span className="overlay-theme-dv delay-2 -mt-[10px] inline-block text-[36px] font-light uppercase lg:text-[64px]">
                {t('developer')}
              </span>
            </h1>
            <div className="flex justify-end">
              <span className="overlay-blue delay-2 !-mt-[25px] block w-full max-w-[153px] text-end text-[12px] text-[#0B66F5] lg:!-mt-[5px] lg:ml-12 lg:max-w-max lg:text-[20px]">
                {t('subtitle')}
              </span>
              <div
                ref={bgСircleTextRef}
                // eslint-disable-next-line prettier/prettier
                className="bg-group-torus-9 absolute -mr-12 mt-4 h-[70px] w-[80px] scale-0 bg-contain opacity-0"
              />
            </div>
          </div>
          <div className="bg-cover bg-hero-pattern" />
          <div className="overflow-hidden">
            <Technologies />
          </div>
        </div>
        <div className="relative mt-[52px] flex flex-col-reverse items-end justify-between lg:flex-row">
          <div className="flex justify-between lg:w-1/2">
            <div
              ref={socialIconsRef}
              className="flex min-w-[160px] flex-row justify-between gap-2 border-t-2 border-black py-[5px] pr-[16px] dark:border-white lg:min-w-[0px] lg:flex-col lg:border-r-[1px] lg:border-t-0"
            >
              <a
                href="https://github.com/KratosHome"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="GitHub"
                className="scale-0 opacity-0"
              >
                <FaGithub
                  size={35}
                  className="transition-transform duration-300 hover:scale-[1.1]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/olegtkach101/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="LinkedIn"
                className="scale-0 opacity-0"
              >
                <FaLinkedin
                  size={35}
                  className="transition-transform duration-300 hover:scale-[1.1]"
                />
              </a>
              <a
                href="https://t.me/KratosHome"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Telegram"
                className="scale-0 opacity-0"
              >
                <FaTelegram
                  size={35}
                  className="transition-transform duration-300 hover:scale-[1.1]"
                />
              </a>
              <a
                href="https://www.instagram.com/codecraftmaster9"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Instagram"
                className="scale-0 opacity-0"
              >
                <FaInstagram
                  size={35}
                  className="transition-transform duration-300 hover:scale-[1.1]"
                />
              </a>
            </div>
            <div
              ref={hireMeRef}
              className="absolute left-0 opacity-0 lg:-top-[120px] lg:left-[310px]"
            >
              <HireMe title={t('hire-me')} modalTitle={t('hire-me')} />
            </div>
          </div>
          <h2 className="relative min-w-[190px] text-end text-[24px] font-light uppercase leading-[1] lg:min-w-[550px] lg:text-[64px]">
            <span className="overlay delay-2" />
            <span className="delay-3 overlay-ex block text-[#0B66F5]">
              <span> {t('experience')}</span>
            </span>
            <span className="overlay-blue-year delay-3 -mt-3 block text-start lg:mt-0">
              {years} <span> {t('years')}</span>
            </span>
          </h2>
        </div>
        <div className="absolute -bottom-[700px] -right-[200px] z-[-1] h-[700px] w-[700px] rounded-full bg-gradient-to-r from-blue-300 to-blue-500 opacity-[0.18] blur-3xl lg:h-[900px] lg:w-[900px]" />
        <div className="absolute left-1/2 top-[180px] z-[-1] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 opacity-10 blur-3xl" />
        <div className="absolute left-0 top-[180px] z-[-1] hidden h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-300 to-blue-500 opacity-10 blur-3xl lg:block" />
        <div className="absolute -top-10 right-10 z-[-1] hidden h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-300 to-blue-500 opacity-10 blur-3xl lg:block" />
        <div className="absolute -right-[75px] bottom-[190px] -z-20 h-[103px] w-[125px] rotate-[10deg] bg-contain opacity-[0.4] bg-ellipse-pattern" />
        <div className="animate-scale-in-out bg-group-pattern-light absolute -bottom-[20px] left-[75vw] -z-20 size-[200px] -translate-x-1/2 dark:opacity-[0.1] dark:bg-group-pattern xl:-bottom-[220px] xl:left-[400px] xl:size-[300px]" />
      </div>
      <div className="mt-[124px] h-[1px] w-full bg-stone-500/0" />
      <div className="relative mx-auto max-w-[1442px]">
        <div
          ref={planetRef}
          className="absolute -right-[150px] bottom-0 -mt-[290px] rotate-[25deg] overflow-hidden opacity-0"
        >
          <div className="relative max-h-[500px] max-w-[500px]">
            <div className="circle-hero absolute right-[100px] ml-[110px] mt-[70px] size-[125px] rounded-full bg-[rgba(255,255,255,0.3)] p-[135px] opacity-40 blur-2xl" />
            <div className="absolute right-[115px] ml-[120px] mt-[80px] size-[250px] rounded-full bg-black" />
            <div className="absolute right-[120px] z-10 ml-[125px] mt-[130px] h-[100px] w-[240px] rounded-full bg-black" />
            <div className="bg-orbit-light dark:bg-orbit absolute -top-5 right-0 size-[500px] dark:top-0" />
            <div className="planet-hero absolute right-[230px] z-10 ml-[80px] mt-[215px] h-40 w-40 rounded-full bg-white opacity-40 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
