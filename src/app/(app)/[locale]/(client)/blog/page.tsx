import { getTranslations } from 'next-intl/server'
import { PostItem } from '@/components/client/post-itme/post-itme'
import { ButtonBeck } from '@/components/client/button-beck'
import { FilterItems } from '@/components/client/filter-items'
import { Pagination } from '@/components/client/pagination'
import { notFound } from 'next/navigation'

type Params = Promise<{ locale: ILocale }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Page(props: {
  params: Params
  searchParams: SearchParams
}) {
  const url = process.env.NEXT_URL

  if (url === 'https://codecraftmaster.com/') {
    return notFound()
  }

  const { locale } = await props.params
  const searchParams = await props.searchParams

  const t = await getTranslations('post-client')

  const authors = searchParams.authors ? searchParams.authors : ''
  const filters = searchParams.filters ? searchParams.filters : ''

  const post = await fetch(
    `${url}/api/post/get-posts?locale=${locale}&authors=${authors}&filters=${filters}`,
    {
      next: { revalidate: 60 },
    },
  ).then((res) => res.json())

  return (
    <div className="mx-auto max-w-[1442px] px-[24px]">
      <div className="mt-[100px]">
        <ButtonBeck />
      </div>
      <div>
        <h1 className="text-center text-[64px] font-light uppercase lg:text-[160px]">
          {t('blog')}
        </h1>
        <div className="flex flex-wrap gap-9">
          <FilterItems
            title={t('All filters')}
            url={'filters'}
            filters={post.categories}
          />
          <FilterItems
            title={t('All authors')}
            url={'authors'}
            filters={post.authors}
          />
        </div>
        <div className="flex min-h-screen flex-col justify-between">
          <div className="flex flex-wrap items-center justify-center gap-10 lg:justify-start">
            {post.posts.map((item: IPost) => (
              <PostItem key={item.title} item={item} />
            ))}
          </div>
          <Pagination totalPages={post.totalPages} />
        </div>
      </div>
    </div>
  )
}
