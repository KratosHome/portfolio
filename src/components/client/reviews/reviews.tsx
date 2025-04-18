'use client'
import './reviews.scss'
import { useTranslations } from 'next-intl'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Grid } from 'swiper/modules'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HireMe } from '@/components/client/hire-me'

gsap.registerPlugin(ScrollTrigger)

const Reviews = ({ data }: { data: IReview[] }) => {
  const reviewRefs = useRef<HTMLDivElement[]>([])

  const t = useTranslations('home-page.reviews')
  const { contextSafe } = useGSAP()

  const [mobActiveSlide, setMobActiveSlide] = useState(0)

  useGSAP(
    () => {
      gsap.to('.reviews-mob-wrapper', {
        height: 'auto',
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to('.reviews-mob-wrapper-hidden', {
        height: '420px',
        duration: 0.5,
        ease: 'power2.out',
      })
    },
    { dependencies: [mobActiveSlide] },
  )

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.reviews-card')

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          scale: 0.5,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: 'top 90%',
            end: 'top -5%',
            toggleActions: 'play reverse play reverse',
            markers: false,
          },
        },
      )
    })
  })

  const handleMouseEnter = contextSafe((index: number) => {
    const serviceRef = reviewRefs.current[index]

    gsap.to(serviceRef, {
      height: 'auto',
      duration: 0.5,
      ease: 'power2.out',
    })
  })

  const handleMouseLeave = contextSafe((index: number) => {
    const serviceRef = reviewRefs.current[index]

    gsap.to(serviceRef, {
      height: '420px',
      duration: 0.5,
      ease: 'power2.out',
    })
  })

  return (
    <section aria-label="reviews" id="reviews" className="z-20">
      <div className="relative mx-auto mb-[140px] mt-[120px] max-w-[1442px] overflow-hidden lg:overflow-visible lg:px-[24px]">
        <div className="animate-scale-in-out bg-group-pattern-light absolute -top-[50px] left-[120px] -z-10 h-[300px] w-[300px] bg-cover bg-center bg-group-pattern dark:opacity-[.2] dark:bg-group-pattern lg:left-[340px] lg:top-0" />
        <div className="clip-half-circle absolute -left-[100px] top-[550px] size-[200px] flex-shrink-0 rounded-full border-black border-stone-500/30 bg-[linear-gradient(127deg,_rgba(11,_102,_245,_0.30)_49.23%,_rgba(78,_128,_206,_0.15)_83.27%,_rgba(255,_255,_255,_0.00)_102.62%)] backdrop-blur-[12.5px] dark:border dark:bg-gradient-to-tr dark:from-[rgba(255,255,255,0.12)] dark:to-[rgba(255,255,255,0)] xl:-left-[200px] xl:size-[400px]"></div>
        <div className="absolute right-[200px] top-[100px] -z-40 hidden h-[1900px] w-[1900px] transform bg-hero-pattern lg:block" />
        <h2 className="ml-4 text-[40px] font-light uppercase lg:text-[96px]">
          {t('reviews')}
        </h2>
        <div className="z-20 mt-[69px] hidden w-full lg:mt-[51px] xl:block">
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            grid={{
              rows: 2,
              fill: 'row',
            }}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            className="custom-swiper-grid"
          >
            {data.map((review, index) => (
              <SwiperSlide key={review._id}>
                <a href={review.link} target="_blank">
                  <div
                    ref={(el) => {
                      if (el) reviewRefs.current[index] = el
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className="reviews-card group relative z-30 m-4 flex h-[420px] w-[420px] flex-col justify-end gap-[21px] rounded-lg bg-gradient-to-r from-white/20 to-transparent px-[16px] py-[24px] backdrop-blur-[12.5px] duration-700 hover:justify-between"
                  >
                    <div className="overflow-hidden">
                      <div className="text-[20px] font-light">
                        {review.reviews}
                      </div>
                    </div>
                    <div className="border-t-[1px] border-amber-50">
                      <div className="flex w-full items-center justify-between">
                        <div className="text-[64px] font-light text-black">
                          0{index + 1}
                        </div>
                        <div className="mt-[16px] flex flex-col items-end">
                          <Image
                            className="size-[32px] rounded-full object-cover"
                            src={review.icon}
                            alt={t('arrow-link')}
                          />
                          <div className="mt-[12px] text-[20px] text-[#0B66F5]/50 duration-300 group-hover:text-white">
                            {review.position}
                          </div>
                        </div>
                      </div>
                      <div className="text-[32px] font-bold uppercase text-[#0B66F5]">
                        {review.userName}
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute -bottom-[80px] left-[170px]">
            <HireMe title={t('leave-review')} modalTitle={t('leave-review')} />
          </div>
        </div>

        <div className="mt-[69px] block w-full xl:hidden">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              350: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1.5,
              },
              600: {
                slidesPerView: 2.1,
              },
              840: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            spaceBetween={40}
            loop={true}
            onSlideChangeTransitionStart={(swiper) => {
              setMobActiveSlide(swiper.realIndex)
            }}
          >
            {data.map((review: IReview, index: number) => (
              <SwiperSlide key={review._id}>
                <a href={review.link} target="_blank">
                  <div
                    className={`reviews-card group relative z-10 m-4 flex !w-full flex-col justify-end gap-[21px] rounded-lg bg-gradient-to-r from-white/20 to-transparent px-[16px] py-[24px] backdrop-blur-[12.5px] duration-700 hover:justify-between lg:w-[310px] ${mobActiveSlide === index ? 'reviews-mob-wrapper' : 'reviews-mob-wrapper-hidden'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="text-[20px] font-light">
                        {review.reviews}
                      </div>
                    </div>
                    <div className="border-t-[1px] border-amber-50">
                      <div className="flex w-full items-center justify-between">
                        <div className="text-[64px] font-light text-black">
                          0{index + 1}
                        </div>
                        <div className="mt-[16px] flex flex-col items-end">
                          <Image
                            className="size-[32px] rounded-full object-cover"
                            src={review.icon}
                            alt={t('arrow-link')}
                          />
                          <div className="mt-[12px] text-end text-[20px] text-[#0B66F5]/50">
                            {review.position}
                          </div>
                        </div>
                      </div>
                      <div className="text-[32px] font-bold uppercase text-[#0B66F5]">
                        {review.userName}
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-[41px] flex w-full justify-center">
            <HireMe title={t('leave-review')} modalTitle={t('leave-review')} />
          </div>
        </div>
        <div className="bg-ellipse-light-pattern absolute -bottom-[180px] right-0 h-[90px] w-[100px] rotate-[10deg] bg-contain dark:opacity-[0.3] dark:bg-ellipse-pattern" />
      </div>
      <div className="mt-[124px] h-[1px] w-full bg-stone-500/30" />
    </section>
  )
}

export default Reviews
