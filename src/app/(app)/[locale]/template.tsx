"use client"
import React, {JSX} from 'react'
import {usePathname} from 'next/navigation'
import Header from "@/components/layout/header/header";
import MenuInfoOlegTkach from "@/components/layout/header/logos/menu-info-oleg-tkach";
import {useLocale} from "use-intl";

export default function Template({children}: { children: React.ReactNode }) {
    const locale = useLocale()
    const path = usePathname()
    const split = path.split('/')


    const userInfoComponentsMap: { [key: string]: JSX.Element } = {
        [`/`]: <Header userInfo={<MenuInfoOlegTkach/>}/>,
        [`/${locale}`]: <Header userInfo={<MenuInfoOlegTkach />} />,
        [`/${locale}/`]: <Header userInfo={<MenuInfoOlegTkach />} />,
    }

    const userInfoComponent = userInfoComponentsMap[path] || null


    return (
        <div>
            {userInfoComponent}
            {children}
        </div>
    )
}
