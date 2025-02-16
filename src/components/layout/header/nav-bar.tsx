'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/cn'
import {
  HoveredLink,
  Menu,
  MenuItem,
  NoteItem,
  ProductItem,
} from '@/components/ui/menu'
import { useTranslations } from 'next-intl'
import { notesData } from '@/data/nav-bar-notes'
import { useLocale } from 'use-intl'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const t = useTranslations('header')
  const local = useLocale() as ILocale
  const [active, setActive] = useState<string | null>(null)

  const notes = notesData[local]

  // TODO: Add user, posts data, from server
  return (
    <div className={cn('z-50 mx-auto max-w-2xl', className)}>
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item={t('home')}
          link="/"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#services">{t('services')}</HoveredLink>
            <HoveredLink href="#projects">{t('projects')}</HoveredLink>
            <HoveredLink href="#experience">{t('experience')}</HoveredLink>
            <HoveredLink href="#reviews">{t('reviews')}</HoveredLink>
            <HoveredLink href="#faq">{t('faq')}</HoveredLink>
            <HoveredLink href="#contact">{t('contact')}</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item={t('blog')}
          link="/blog"
        >
          <div className="grid grid-cols-[auto_1fr_auto] gap-10 p-4 text-sm">
            <div className="flex flex-col gap-3">
              <ProductItem
                title={t('practice')}
                href="/blog/practice-key-achieving-success"
                src="/header/modern.webp"
                description={t('practice_the_key_factor_in_achieving_success')}
              />
              <ProductItem
                title={t('modern_job_search')}
                href="/blog/modern-problems-job-search"
                src="/header/practice.webp"
                description={t(
                  'modern_job_search_challenges_in_IT_is_there_light_at_the_end_of_the_tunnel',
                )}
              />
            </div>
            <div className="h-full w-[1px] bg-gray-600/20 dark:bg-gray-600/50" />
            <div className="flex flex-col gap-3">
              {notes.map((note, index) => (
                <NoteItem key={index} {...note} />
              ))}
            </div>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item={t('mentoring')}
          link="mentoring/projects"
        >
          <div className="grid grid-cols-2 gap-10 p-4 text-sm">
            <div className="flex flex-col gap-3">
              <HoveredLink href="/mentoring/projects" className="text-center">
                {t('projects')}
              </HoveredLink>
              <ProductItem
                title="Ecousadba"
                href="/blog/practice-key-achieving-success"
                src="/header/ecousadba.png"
                description={t(
                  'hotel_and_restaurant_complex_in_harmony_with_nature',
                )}
              />
              <ProductItem
                title="Slice Drys"
                href="/blog/practice-key-achieving-success"
                src="/header/slice-drys.png"
                description={t('natural_dried_meat_fruits_vegetables')}
              />
              <ProductItem
                title="Sharm Beauty"
                href="/blog/practice-key-achieving-success"
                src="/header/sharm-beauty.png"
                description={t('cosmetic_treatments_for_your_perfect_skin')}
              />
            </div>
            <div className="flex flex-col gap-3">
              <HoveredLink href="/mentoring/members" className="text-center">
                {t('members')}
              </HoveredLink>
              <ProductItem
                title="Andrey Viazovskiy"
                href="/blog/practice-key-achieving-success"
                src="/header/andrey_viazovskiy.jpeg"
                description={t(
                  'specialist_in_developing_complex_interfaces_well_versed_in_the_modern_frontend_stack',
                )}
              />
              <ProductItem
                title="Evgeniy Martynrnko"
                href="/blog/practice-key-achieving-success"
                src="/header/evgeni_martynrnko.jpeg"
                description={t(
                  'front_end_developer_with_experience_in_building_high_performance_web_applications_and_optimizing_UI_UX',
                )}
              />
              <ProductItem
                title="Liudmyla Babenko"
                href="/blog/practice-key-achieving-success"
                src="/header/liudmyla_babenko.jpeg"
                description={t(
                  'front_end_developer_with_experience_in_building_user_friendly_and_fast_interfaces_focused_on_high_quality_code_and_modern_technologies',
                )}
              />
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
