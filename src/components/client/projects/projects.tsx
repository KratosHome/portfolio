'use client'
import React, { FC, useRef, useState } from 'react'
import './projects.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useTranslations } from 'next-intl'
import { HireMe } from '@/components/client/hire-me'
import { useWindowWidth } from '@/hooks/use-window-width'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Swiper as SwiperCore } from 'swiper'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectItem from '@/components/client/project-item/projects'
import { cn } from '@/lib/cn'

gsap.registerPlugin(ScrollTrigger)

interface ProjectsNewProps {
  projects: IProject[]
}

const Projects: FC<ProjectsNewProps> = ({ projects }) => {
  const t = useTranslations('home-page.project')

  const swiperRef = useRef<SwiperCore | null>(null)

  const headerRef = useRef<HTMLHeadingElement>(null)
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()

  const [activeIndex, setActiveIndex] = useState(0)

  const width = useWindowWidth()
  const isMobileDevice = !!width && width < 768

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 55%',
          end: 'top 55px',
          toggleActions: 'play reverse play reverse',
        },
      },
    )

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sliderContainerRef.current,
        start: 'top 55%',
        end: 'top 55px',
        toggleActions: 'play reverse play reverse',
      },
    })

    tl.fromTo(
      sliderContainerRef.current,
      { opacity: 0, scale: 0.6, rotation: -10, y: 50 },
      {
        opacity: 1,
        scale: 1.05,
        rotation: 0,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
      },
    )
  }, [])

  return (
    <section aria-label="projects" id="projects">
      <div className="relative mx-auto mb-[140px] mt-[120px] max-w-[1442px] lg:px-[24px]">
        <div className="absolute -left-[100px] -top-[30px] size-[200px] flex-shrink-0 rounded-full border-black border-stone-500/30 bg-[linear-gradient(127deg,_rgba(11,_102,_245,_0.30)_49.23%,_rgba(78,_128,_206,_0.15)_83.27%,_rgba(255,_255,_255,_0.00)_102.62%)] backdrop-blur-[12.5px] dark:border dark:bg-gradient-to-tr dark:from-[rgba(255,255,255,0.12)] dark:to-[rgba(255,255,255,0)] xl:-left-[200px] xl:size-[400px]" />
        <div className="absolute right-[200px] top-[100px] -z-40 hidden h-[1900px] w-[1900px] transform bg-hero-pattern lg:block" />
        <h2
          ref={headerRef}
          className="my-0 mr-[20px] text-right text-[40px] font-light uppercase lg:text-[96px]"
        >
          {t('project')}
        </h2>
        <div className="relative mx-auto mb-[140px] mt-[120px] max-w-[1442px] lg:px-[24px]">
          <div ref={sliderContainerRef} className="mb-[-280px]">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              effect="coverflow"
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              spaceBetween={30}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: -20,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
            >
              {projects.map((slide, index) => {
                const isActive = activeIndex === index
                return (
                  <SwiperSlide
                    key={slide.id}
                    className={cn(
                      `slide mt-[-400px] flex items-center justify-center py-[500px] ${
                        slide.isMobile
                          ? isActive
                            ? 'w-[400px] max-w-[200px] sm:w-[250px] sm:max-w-[250px]'
                            : 'w-[250px] max-w-[200px] sm:w-[250px] sm:max-w-[250px]'
                          : isActive
                            ? 'w-[400px] max-w-[250px] sm:w-[250px] sm:max-w-[250px]'
                            : 'w-[250px] max-w-[200px] sm:w-[250px] sm:max-w-[250px]'
                      } `,
                    )}
                  >
                    <ProjectItem
                      isMobileDevice={isMobileDevice}
                      project={slide}
                      isActive={activeIndex === index}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="absolute z-50 mt-[-100px] flex w-full justify-end gap-2 pr-14">
            <button
              onClick={handlePrev}
              className="rounded p-2 transition-all duration-75 ease-linear hover:scale-150"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="rounded p-2 transition-all duration-75 ease-linear hover:scale-150"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="mt-[41px] flex w-full justify-end pr-12">
            <HireMe title={t('resume')} modalTitle={t('resume')} />
          </div>
        </div>
        <div className="bg-ellipse-light-pattern absolute -bottom-[180px] right-0 hidden h-[90px] w-[100px] rotate-[10deg] bg-contain dark:opacity-[0.3] dark:bg-ellipse-pattern sm:block" />
      </div>
      <div className="mt-[124px] h-[1px] w-full bg-stone-500/30" />
    </section>
  )
}

export default Projects
