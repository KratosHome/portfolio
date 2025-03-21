'use client'
import React, { FC, useRef, useState } from 'react'
import './projects.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { AnimatePresence, motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import arrowAslant from '@/assets/icons/arrow-aslant.svg'
import { HireMe } from '@/components/client/hire-me'
import { useWindowWidth } from '@/hooks/use-window-width'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Swiper as SwiperCore } from 'swiper'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
  const isMobileDevice = width < 768

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
        <div
          ref={sliderContainerRef}
          className="relative mx-auto mb-[140px] mt-[120px] max-w-[1442px] lg:px-[24px]"
        >
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
              const slideWidth =
                slide.isMobile && isActive
                  ? `${isMobileDevice ? '200px' : '400px'}`
                  : `${isMobileDevice ? '200px' : '250px'}`

              const slideHeight =
                !slide.isMobile && isActive
                  ? `${isMobileDevice ? '250px' : '350px'}`
                  : `${isMobileDevice ? '200px' : '300px'}`

              return (
                <SwiperSlide
                  key={slide.id}
                  className="mt-[-400px] flex items-center justify-center py-[500px]"
                  style={{ width: slideWidth, height: '300px' }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.3, y: 50 }}
                    animate={{
                      opacity: isActive ? 1 : 0.7,
                      scale: isActive ? 1.6 : 1,
                      y: 0,
                    }}
                    transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                    className="project-card overflow-hidden rounded-2xl text-white"
                    style={{ width: slideWidth, height: slideHeight }}
                  >
                    <AnimatePresence>
                      {isActive ? (
                        <>
                          {slide.isMobile ? (
                            <div className="flex h-full gap-2 p-2 md:p-4">
                              <motion.div
                                initial={{ opacity: 0, scale: 0.7, x: -50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.7, x: -50 }}
                                transition={{
                                  delay: 0.3,
                                  type: 'spring',
                                  stiffness: 120,
                                }}
                                className="relative h-full min-w-[90px] md:min-w-[170px]"
                              >
                                <Image
                                  className="rounded-xl object-center"
                                  src={slide.gif}
                                  alt={slide.title}
                                  fill={true}
                                />
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col"
                              >
                                <h3 className="text-[20px] font-light leading-[0.9] group-hover:text-white group-hover:dark:text-[#0B66F5] md:text-[35px]">
                                  {slide.title}
                                </h3>
                                <div className="my-2 text-[9px] font-bold text-[#0B66F5] duration-700 group-hover:text-right group-hover:text-white md:text-[12px]">
                                  {t('cooperation-with')}: &quot;{slide.company}
                                  &quot;
                                </div>
                                <div className="flex h-full flex-col justify-between">
                                  <div
                                    className="mb-2 max-w-max overflow-hidden text-[8px] md:text-[12px]"
                                    style={{
                                      display: '-webkit-box',
                                      WebkitBoxOrient: 'vertical',
                                      WebkitLineClamp: 7,
                                    }}
                                  >
                                    {slide.description}
                                  </div>

                                  <div className="mt-2 flex flex-wrap items-center gap-2">
                                    <div className="flex size-[15px] min-w-[15px] items-center justify-center rounded-full border border-stone-500/30 bg-gradient-to-r to-white/0 md:size-[20px] md:min-w-[20px]">
                                      <Image
                                        src={arrowAslant}
                                        alt={t('arrow-link')}
                                        width={5}
                                        height={5}
                                      />
                                    </div>
                                    {slide.technologies.map((tech, index) => (
                                      <Image
                                        key={index}
                                        src={tech}
                                        alt={`Technology ${index}`}
                                        width={20}
                                        height={20}
                                        className="size-[10px] md:size-[20px]"
                                      />
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          ) : (
                            <div className="border-white/3 flex h-full flex-col justify-between rounded-2xl border-r-2 p-2 md:p-4">
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  scale: 0.8,
                                  rotateX: 90,
                                }}
                                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                                transition={{
                                  delay: 0.3,
                                  type: 'spring',
                                  stiffness: 120,
                                }}
                                className="relative h-24 w-full overflow-hidden rounded-xl md:h-32"
                              >
                                <Image
                                  className="rounded-xl object-center"
                                  src={slide.gif}
                                  alt={slide.title}
                                  fill={true}
                                />
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                exit={{ opacity: 0, y: 30 }}
                                className="mt-2 flex flex-col justify-between"
                              >
                                <h3 className="text-[20px] font-light leading-[0.9] group-hover:text-white group-hover:dark:text-[#0B66F5] md:text-[35px]">
                                  {slide.title}
                                </h3>
                                <div className="flex flex-col">
                                  <div className="my-2 text-[9px] font-bold text-[#0B66F5] duration-700 group-hover:text-right group-hover:text-white md:text-[12px]">
                                    {t('cooperation-with')}: &quot;
                                    {slide.company}
                                    &quot;
                                  </div>
                                  <div
                                    className="mb-2 max-w-max overflow-hidden text-[8px] md:text-[12px]"
                                    style={{
                                      display: '-webkit-box',
                                      WebkitBoxOrient: 'vertical',
                                      WebkitLineClamp: 5,
                                    }}
                                  >
                                    {slide.description}
                                  </div>

                                  <div className="mt-2 flex flex-wrap items-center gap-2">
                                    <div className="flex size-[10px] min-w-[10px] items-center justify-center rounded-full border border-stone-500/30 bg-gradient-to-r to-white/0 md:size-[20px] md:min-w-[20px]">
                                      <Image
                                        src={arrowAslant}
                                        alt={t('arrow-link')}
                                        width={5}
                                        height={5}
                                      />
                                    </div>
                                    {slide.technologies.map((tech, index) => (
                                      <Image
                                        key={index}
                                        src={tech}
                                        alt={`Technology ${index}`}
                                        width={20}
                                        height={20}
                                        className="size-[10px] md:size-[20px]"
                                      />
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          )}
                        </>
                      ) : (
                        <motion.div className="center flex h-full flex-col justify-end p-2">
                          <h3 className="text-[35px] font-light leading-[0.9] group-hover:text-white group-hover:dark:text-[#0B66F5]">
                            {slide.title}
                          </h3>
                          <div className="my-2 text-[12px] font-bold text-[#0B66F5] duration-700 group-hover:text-right group-hover:text-white">
                            {t('cooperation-with')}: &quot;{slide.company}
                            &quot;
                          </div>
                          <div
                            className="mb-2 max-w-max overflow-hidden text-[12px]"
                            style={{
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 5,
                            }}
                          >
                            {slide.description}
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <div className="flex !size-[20px] min-w-[20px] items-center justify-center rounded-full border border-stone-500/30 bg-gradient-to-r to-white/0">
                              <Image
                                src={arrowAslant}
                                alt={t('arrow-link')}
                                width={5}
                                height={5}
                              />
                            </div>
                            {slide.technologies.map((tech, index) => (
                              <Image
                                key={index}
                                src={tech}
                                alt={`Technology ${index}`}
                                width={20}
                                height={20}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </SwiperSlide>
              )
            })}
          </Swiper>
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
          <div className="mt-[41px] flex w-full justify-end">
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
