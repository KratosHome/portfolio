import Hero from '@/components/client/hero/hero'
import { servicesData } from '@/data/services'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { experienceData } from '@/data/experience'
import { dataReviews } from '@/data/reviews'
import { locales } from '@/data/locales'
import type { Metadata } from 'next'
import { homeMateData } from '@/data/meta-data/home-meta-data'
import MainJsonLd from '@/components/json-ld/main-kson-ld'
import { projectsData } from '@/data/projects'
import dynamic from 'next/dynamic'
import { Loader } from '@/components/ui/loader/loader'

const Services = dynamic(
  () => import('@/components/client/services/services'),
  {
    loading: () => <Loader />,
  },
)

const Projects = dynamic(
  () => import('@/components/client/projects/projects'),
  {
    loading: () => <Loader />,
  },
)

const Reviews = dynamic(() => import('@/components/client/reviews/reviews'), {
  loading: () => <Loader />,
})

const Experience = dynamic(
  () => import('@/components/client/experience/experience'),
  {
    loading: () => <Loader />,
  },
)

type Params = Promise<{ locale: ILocale }>

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { locale } = await params

  const projects = homeMateData[locale]

  return {
    title: projects.title,
    description: projects.description,
    keywords: projects.keywords,
    authors: projects.authors,
    openGraph: {
      url: projects.canonicalUrl,
      title: projects.openGraph.title,
      description: projects.openGraph.description,
      locale: projects.openGraph.locale,
      siteName: projects.openGraph.site_name,
      images: projects.openGraph.images,
    },
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const Home = async ({ params }: { params: Params }) => {
  const { locale } = await params

  return (
    <>
      <MainJsonLd
        services={servicesData[locale]}
        projects={projectsData[locale]}
        review={dataReviews}
      />
      <Hero />
      <Services services={servicesData[locale]} />
      <Projects projects={projectsData[locale]} />
      <Experience experience={experienceData[locale]} />
      <Reviews data={dataReviews} />
    </>
  )
}

export default Home
