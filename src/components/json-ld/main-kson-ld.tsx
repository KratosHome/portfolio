import React, { FC } from 'react'

interface MainJsonLdProps {
  services: IService[]
  projects: IProject[]
  review: IReview[]
}

const MainJsonLd: FC<MainJsonLdProps> = ({ services, projects, review }) => {
  const baseUrl = process.env.NEXT_URL

  const servicesNodes = services.map((service) => ({
    '@type': 'Service',
    '@id': `${baseUrl}/#service-${service.id}`,
    name: service.title,
    description: service.description,
    image: service.icon.map((i) => ({
      '@type': 'ImageObject',
      url: i.icon,
      description: i.alt,
    })),
  }))

  const projectsNodes = {
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
      },
    })),
  }

  const reviewsNodes = {
    '@type': 'ItemList',
    itemListElement: review.map((r, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Review',
        '@id': `${baseUrl}/#review-${r._id}`,
        author: {
          '@type': 'Person',
          name: r.userName,
        },
        reviewBody: r.reviews,
        datePublished: r.createdAt,
      },
    })),
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: 'https://codecraftmaster.com',
        name: 'codecraftmaster',
        description: 'Професійний сайт фронтенд розробника',
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: 'Oleh Tkach',
        jobTitle: 'Frontend Developer',
        url: baseUrl,
      },
      ...servicesNodes,
      projectsNodes,
      reviewsNodes,
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export default MainJsonLd
