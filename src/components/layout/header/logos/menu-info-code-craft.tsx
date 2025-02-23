import Link from 'next/link'
import { useLocale } from 'use-intl'
import Image from 'next/image'

const MenuInfoCodeCraft = () => {
  const locale = useLocale() as ILocale
  return (
    <Link
      href={`/${locale}`}
      className="relative flex gap-2 font-bold uppercase"
    >
      <Image src={'/logo.svg'} alt={'logo'} width="40" height="40" />
      <div className="flex flex-col justify-center font-bold">
        <div className="text-[20px] md:text-[25px]"> code craft</div>
        <div className="absolute -bottom-1 right-0 text-[10px]">master</div>
      </div>
    </Link>
  )
}

export default MenuInfoCodeCraft
