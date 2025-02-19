import Hero from '@/components/client/hero/hero'
import Services from '@/components/client/services/services'
import { servicesData } from '@/data/services'

type Params = Promise<{ locale: ILocale }>

const Home = async ({ params }: { params: Params }) => {
  const { locale } = await params

  return (
    <>
      <Hero />
      <Services services={servicesData[locale]} />
    </>
  )
}

export default Home
