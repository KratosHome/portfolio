'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/cn'
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/ui/menu'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn('z-50 mx-auto max-w-2xl', className)}>
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
          link="/ffff"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#services">Services</HoveredLink>
            <HoveredLink href="#projects">projects</HoveredLink>
            <HoveredLink href="#experience">experience</HoveredLink>
            <HoveredLink href="#reviews">reviews</HoveredLink>
            <HoveredLink href="#faq">faq</HoveredLink>
            <HoveredLink href="#contact">contact</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Blog"
          link="/mentoring/projects"
        >
          <div className="grid grid-cols-2 gap-10 p-4 text-sm">
            <ProductItem
              title="Algochurn"
              href="practice-key-achieving-success"
              src="https://codecraftmaster.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdfreocjfu%2Fimage%2Fupload%2Fv1727623050%2Fposts222%2Fbq8oqec6u96wjgri06ss.webp&w=828&q=75"
              description="Practice - The Key Factor in Achieving Success"
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="practice-key-achieving-success"
              src="https://codecraftmaster.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdfreocjfu%2Fimage%2Fupload%2Fv1727020377%2Fposts222%2Fexljezmauyipoxhpywad.jpg&w=828&q=75"
              description="Modern Job Search Challenges in IT: Is There Light at the End of the Tunnel?"
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Mentoring"
          link="mentoring/projects"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="mentoring/projects">Projects</HoveredLink>
            <HoveredLink href="mentoring/members">Members</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
