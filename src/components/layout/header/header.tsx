import './header.scss'
import { FC, ReactNode } from 'react'
import { Navbar } from '@/components/layout/header/nav-bar'
import ThemeChange from '@/components/layout/header/theme-change'
import LanguageChange from '@/components/layout/header/language-change'
import { MobileMenu } from '@/components/layout/header/mobile-menu'

interface IMenuProps {
  logo?: ReactNode
}

const Header: FC<IMenuProps> = ({ logo }) => {
  return (
    <>
      <header className="max-w-screen pt-[20px]">
        <div className="mx-auto max-w-[1442px] px-[24px] text-[10px] font-normal sm:text-[20px] lg:text-[28px]">
          <div className="relative mb-[10px] lg:max-w-[90%]">
            <div className="flex w-full items-center justify-between">
              {logo}
              <nav className="hidden text-[20px] md:block">
                <ul className="flex items-center gap-[32px]">
                  <Navbar />
                </ul>
              </nav>
              <div className="hidden items-center gap-[15px] md:flex">
                <ThemeChange />
                <LanguageChange />
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
        <div className="responsive-width relative">
          <div className="animate-grow inabsolute block h-[1px] overflow-x-hidden bg-[#050505] dark:bg-[#FAFAFA]"></div>
        </div>
      </header>
      <div className="absolute mt-[15px] flex w-full justify-end pr-[30px] md:hidden">
        <ThemeChange />
      </div>
      <div className="relative mx-auto max-w-[1842px]">
        <div className="animate-scale-in-out bg-group-pattern-light absolute -top-[170px] right-0 -z-10 hidden h-[300px] w-[300px] translate-x-[50px] transform bg-cover bg-center dark:opacity-[.1] dark:bg-group-pattern lg:block" />
      </div>
    </>
  )
}

export default Header

/*
  <li className="group">
                    <Link
                      className="custom-login block rounded-[35px] border-b border-[#0B66F5] px-[15px] py-[10px] text-[#0B66F5] backdrop-blur-[12.5px] dark:border-zinc-600 dark:text-white"
                      href={`/${locale}/login`}
                    >
                      <span className="block duration-300 group-hover:scale-[1.1]">
                        {t('login')}
                      </span>
                    </Link>
                  </li>
 */
