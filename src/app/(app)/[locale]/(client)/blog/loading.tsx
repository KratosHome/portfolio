import { Skeleton } from '@/components/ui/skeleton'

export default function AnimatedLoader() {
  return (
    <div className="mx-auto max-w-[1380px] overflow-hidden p-5">
      <Skeleton className="mt-14 h-[25px] w-[150px] rounded-xl" />
      <div className="flex items-center justify-center">
        <Skeleton className="mt-14 h-[125px] w-[350px] rounded-xl" />
      </div>
      <div className="flex flex-wrap gap-3">
        <Skeleton className="mt-14 h-[25px] w-[100px] rounded-xl" />
        <Skeleton className="mt-14 h-[25px] w-[100px] rounded-xl" />
      </div>
      <div className="flex flex-wrap gap-5">
        <Skeleton className="mt-14 h-[525px] w-[400px] rounded-xl" />
        <Skeleton className="mt-14 h-[525px] w-[400px] rounded-xl" />
        <Skeleton className="mt-14 h-[525px] w-[400px] rounded-xl" />
        <Skeleton className="mt-14 h-[525px] w-[400px] rounded-xl" />
        <Skeleton className="mt-14 h-[525px] w-[400px] rounded-xl" />
        <Skeleton className="mt-14 h-[525px] w-[400px] rounded-xl" />
        <Skeleton className="mt-14 h-[525px] w-[400px] rounded-xl" />
        <Skeleton className="mt-14 h-[525px] w-[400px] rounded-xl" />
      </div>
    </div>
  )
}
