import { NextResponse } from 'next/server'
import { getPosts } from '@/server/blog/get-posts.server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get('locale') as ILocale

  const page = searchParams.get('page')
  const authorsParam = searchParams.get('authors') ?? undefined
  const filtersParam = searchParams.get('filters') ?? undefined

  const data = await getPosts(
    locale,
    +(page || 1),
    10,
    true,
    filtersParam,
    authorsParam,
  )

  return NextResponse.json(data)
}
