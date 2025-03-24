'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  link,
  children,
  openInNewTab = false,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  link?: string
  children?: React.ReactNode
  openInNewTab?: boolean
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {link ? (
        <Link
          href={link}
          target={openInNewTab ? '_blank' : undefined}
          rel={openInNewTab ? 'noopener noreferrer' : undefined}
        >
          <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
          >
            {item}
          </motion.p>
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_-_0.5rem)] z-50 -translate-x-1/2 transform pt-7">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
              >
                <motion.div layout className="h-full w-max p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-4"
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
  openInNewTab = false,
}: {
  title: string
  description: string
  href: string
  src: string
  openInNewTab?: boolean
}) => {
  const [loading, setLoading] = useState(true)

  const maxLength = 90
  const shortText =
    description.length > maxLength
      ? description.slice(0, maxLength) + '...'
      : description

  return (
    <Link
      href={href}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      className="group flex space-x-2 transition-all duration-300 ease-out hover:scale-105"
    >
      {loading && (
        <Skeleton className="size-[120px] rounded-md lg:size-[140px]" />
      )}
      <Image
        placeholder="blur"
        priority
        src={src}
        width={140}
        height={70}
        alt={title}
        className="group-hover:shadow-3xl size-[120px] flex-shrink-0 rounded-md object-cover shadow-lg transition-all duration-300 ease-out group-hover:size-[120px] lg:size-[140px] lg:group-hover:size-[140px]"
        onLoadingComplete={() => setLoading(false)}
      />
      <div className="transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
        <h4 className="mb-1 text-xl font-bold text-black group-hover:text-primary dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 transition-opacity duration-300 ease-out group-hover:opacity-75 dark:text-neutral-300">
          {shortText}
        </p>
      </div>
    </Link>
  )
}

export const NoteItem = ({
  title,
  description,
  href,
  link,
}: {
  title: string
  description: string
  href: string
  link?: string
}) => {
  const maxLength = 90
  const shortText =
    description.length > maxLength
      ? description.slice(0, maxLength) + '...'
      : description

  return (
    <Link
      href={href}
      className="group flex leading-[1.2] transition-all duration-300 ease-out hover:scale-105"
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
    >
      <div className="transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
        <h4 className="mb-1 max-w-[19rem] text-[16px] font-bold text-black group-hover:text-primary dark:text-white">
          {title}
        </h4>
        {link && <p className="text-[13px] text-blue-500">{link}</p>}
        <p className="max-w-[16rem] text-[12px] text-neutral-700 transition-opacity duration-300 ease-out group-hover:opacity-75 dark:text-neutral-300">
          {shortText}
        </p>
      </div>
    </Link>
  )
}

type HoveredLinkProps = React.ComponentPropsWithoutRef<typeof Link>

export const HoveredLink = ({
  children,
  className,
  ...rest
}: HoveredLinkProps) => {
  return (
    <Link
      {...rest}
      className={cn(
        className,
        'text-neutral-700 transition-all duration-300 ease-out hover:scale-105 hover:text-neutral-900 dark:text-neutral-200 hover:dark:text-neutral-400',
      )}
    >
      {children}
    </Link>
  )
}
