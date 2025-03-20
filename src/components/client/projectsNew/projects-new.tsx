'use client'
import React, { useState } from 'react'
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
import { projectsNew } from '@/data/projects'

const ProjectsNew = () => {
  const t = useTranslations('home-page.project')

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section aria-label="projects" id="projects">
      <div className="relative mx-auto mb-[140px] mt-[120px] max-w-[1442px] lg:px-[24px]">
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          spaceBetween={30}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: -10,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {projectsNew.map((slide, index) => {
            const isActive = activeIndex === index
            const slideWidth = slide.isMobile && isActive ? '400px' : '250px'
            const slideHeight = !slide.isMobile && isActive ? '350px' : '300px'

            return (
              <SwiperSlide
                key={slide.id}
                className="flex items-center justify-center py-[500px]"
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
                          <div className="flex h-full gap-2 p-2">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.7, x: -50 }}
                              animate={{ opacity: 1, scale: 1, x: 0 }}
                              exit={{ opacity: 0, scale: 0.7, x: -50 }}
                              transition={{
                                delay: 0.3,
                                type: 'spring',
                                stiffness: 120,
                              }}
                              className="relative h-full min-w-[170px]"
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
                              <h3 className="text-[35px] font-light leading-[0.9] group-hover:text-white group-hover:dark:text-[#0B66F5]">
                                {slide.title}
                              </h3>
                              <div className="my-2 text-[12px] font-bold text-[#0B66F5] duration-700 group-hover:text-right group-hover:text-white">
                                {t('cooperation-with')}: &quot;{slide.company}
                                &quot;
                              </div>
                              <div className="flex h-full flex-col justify-between">
                                <div
                                  className="mb-2 max-w-max overflow-hidden text-[12px]"
                                  style={{
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 7,
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
                              </div>
                            </motion.div>
                          </div>
                        ) : (
                          <div className="flex h-full flex-col justify-between p-1">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                              exit={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                              transition={{
                                delay: 0.3,
                                type: 'spring',
                                stiffness: 120,
                              }}
                              className="relative h-32 w-full overflow-hidden rounded-xl"
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
                              <h3 className="text-[35px] font-light leading-[0.9] group-hover:text-white group-hover:dark:text-[#0B66F5]">
                                {slide.title}
                              </h3>
                              <div className="flex flex-col">
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
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </>
                    ) : (
                      <motion.div
                        key={`inactive-${slide.id}`}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 0.7, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="center flex h-full flex-col justify-end p-2"
                      >
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
      </div>
    </section>
  )
}

export default ProjectsNew
