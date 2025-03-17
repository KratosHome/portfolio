import { NextResponse } from 'next/server'
import { getPost } from '@/server/blog/get-post.server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get('locale') as ILocale
  const postId = searchParams.get('postId') as string

  const data = await getPost(postId, locale)

  return NextResponse.json(data)
}
