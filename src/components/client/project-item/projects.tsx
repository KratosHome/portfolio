'use client'
import React, { FC, useState } from 'react'
import '../projects/projects.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import arrowAslant from '@/assets/icons/arrow-aslant.svg'
import { useTranslations } from 'next-intl'
import { Skeleton } from '@/components/ui/skeleton'

interface ProjectProps {
  project: IProject
  isActive: boolean
  isMobileDevice: boolean | undefined
}

const ProjectItem: FC<ProjectProps> = ({
  project,
  isMobileDevice,
  isActive,
}) => {
  const t = useTranslations('home-page.project')
  const [loading, setLoading] = useState(true)

  const widthClass =
    project.isMobile && isActive
      ? isMobileDevice
        ? 'w-[200px]'
        : 'w-[400px]'
      : isMobileDevice
        ? 'w-[200px]'
        : 'w-[250px]'

  const heightClass =
    !project.isMobile && isActive
      ? isMobileDevice
        ? 'h-[250px]'
        : 'h-[350px]'
      : isMobileDevice
        ? 'h-[200px]'
        : 'h-[300px]'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 50 }}
      animate={{
        opacity: isActive ? 1 : 0.7,
        scale: isActive ? 1.6 : 1,
        y: 0,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={`project-card overflow-hidden rounded-2xl text-white ${widthClass} ${heightClass}`}
    >
      <AnimatePresence>
        {isActive ? (
          <>
            {project.isMobile ? (
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
                  {loading && (
                    <Skeleton className="h-full w-full rounded-[20px]" />
                  )}
                  <Image
                    priority
                    className="rounded-xl object-center"
                    src={project.gif}
                    alt={project.title}
                    fill={true}
                    onLoadingComplete={() => setLoading(false)}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col"
                >
                  <h3 className="text-[20px] font-light leading-[0.9] group-hover:text-white group-hover:dark:text-[#0B66F5] md:text-[35px]">
                    {project.title}
                  </h3>
                  <div className="my-2 text-[9px] font-bold text-[#0B66F5] duration-700 group-hover:text-right group-hover:text-white md:text-[12px]">
                    {t('cooperation-with')}: &quot;{project.company}&quot;
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
                      {project.description}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <div className="flex size-[15px] min-w-[15px] items-center justify-center rounded-full border border-stone-500/30 bg-gradient-to-r to-white/0 md:size-[20px] md:min-w-[20px]">
                        <Image
                          priority
                          src={arrowAslant}
                          alt={t('arrow-link')}
                          width={5}
                          height={5}
                        />
                      </div>
                      {project.technologies.map((tech, index) => (
                        <Image
                          priority
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
                  {loading && (
                    <Skeleton className="h-full w-full rounded-[20px]" />
                  )}
                  <Image
                    priority
                    className="rounded-xl object-center"
                    src={project.gif}
                    alt={project.title}
                    fill={true}
                    onLoadingComplete={() => setLoading(false)}
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
                    {project.title}
                  </h3>
                  <div className="flex flex-col">
                    <div className="my-2 text-[9px] font-bold text-[#0B66F5] duration-700 group-hover:text-right group-hover:text-white md:text-[12px]">
                      {t('cooperation-with')}: &quot;
                      {project.company}
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
                      {project.description}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <div className="flex size-[10px] min-w-[10px] items-center justify-center rounded-full border border-stone-500/30 bg-gradient-to-r to-white/0 md:size-[20px] md:min-w-[20px]">
                        <Image
                          priority
                          src={arrowAslant}
                          alt={t('arrow-link')}
                          width={5}
                          height={5}
                        />
                      </div>
                      {project.technologies.map((tech, index) => (
                        <Image
                          priority
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
              {project.title}
            </h3>
            <div className="my-2 text-[12px] font-bold text-[#0B66F5] duration-700 group-hover:text-right group-hover:text-white">
              {t('cooperation-with')}: &quot;{project.company}&quot;
            </div>
            <div
              className="mb-2 max-w-max overflow-hidden text-[12px]"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }}
            >
              {project.description}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <div className="flex !size-[20px] min-w-[20px] items-center justify-center rounded-full border border-stone-500/30 bg-gradient-to-r to-white/0">
                <Image
                  priority
                  src={arrowAslant}
                  alt={t('arrow-link')}
                  width={5}
                  height={5}
                />
              </div>
              {project.technologies.map((tech, index) => (
                <Image
                  priority
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
  )
}

export default ProjectItem
