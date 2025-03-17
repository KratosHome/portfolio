import { ButtonBeck } from '@/components/client/button-beck'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/formatDate'
import { fetchTags } from '@/data/fetch-tags'
import 'quill/dist/quill.snow.css'

type Params = Promise<{ locale: ILocale; postId: string }>

export default async function Page({ params }: { params: Params }) {
  const { locale, postId } = await params
  const url = process.env.NEXT_URL

  const post = await fetch(
    `${url}/api/post/get-post?locale=${locale}&postId=${postId}`,
    {
      cache: 'force-cache',
      next: { tags: [`${fetchTags.post}`] },
    },
  ).then((res) => res.json())

  if (!post.success || !post.post) {
    notFound()
  }

  const postContent: IPost = post.post
  const formattedDate = formatDate(postContent.createdAt)

  return (
    <div>
      <div className="mx-auto max-w-[1442px] px-[24px]">
        <div className="mt-[100px]">
          <ButtonBeck />
        </div>
        <h1 className="text-center text-[40px] font-light lg:text-[64px]">
          {postContent.title}
        </h1>
        <div className="mt-[100px] flex cursor-pointer justify-end gap-[32px] pb-[10px]">
          <div className="bg-orbit-services-light dark:bg-orbit-services absolute -right-[50px] -z-20 h-[153px] w-[155px] dark:opacity-[0.7]" />
        </div>
        <div className="h-[1px] w-full bg-black dark:bg-white" />
        <div className="mb-[150px] flex justify-between pt-[20px]">
          <div className="text-[#0B66F5]">{post.user.username}</div>
          <div>{formattedDate}</div>
        </div>
        <article
          className="ql-editor prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: postContent.desc }}
        />
        <div className="mt-[146px] h-[1px] w-full bg-black dark:bg-white" />
        <div className="relative">
          <div className="animate-scale-in-out bg-group-pattern-light absolute -right-[150px] -top-[150px] -z-10 hidden h-[300px] w-[300px] bg-cover bg-center dark:opacity-[.1] dark:bg-group-pattern lg:block" />
        </div>
      </div>
    </div>
  )
}
