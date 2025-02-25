import Hero from '@/components/client/hero/hero'
import Services from '@/components/client/services/services'
import { servicesData } from '@/data/services'
import Projects from '@/components/client/projects/projects'
import { projectsData } from '@/data/projects-data'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import Experience from '@/components/client/experience/experience'
import { experienceData } from '@/data/experience'
import Reviews from '@/components/client/reviews/reviews'
import { dataReviews } from '@/data/reviews'

type Params = Promise<{ locale: ILocale }>

const Home = async ({ params }: { params: Params }) => {
  const { locale } = await params

  return (
    <>
      <Hero />
      <Services services={servicesData[locale]} />
      <Projects projects={projectsData[locale]} />
      <Experience experience={experienceData[locale]} />
      <Reviews data={dataReviews} />
    </>
  )
}

export default Home
