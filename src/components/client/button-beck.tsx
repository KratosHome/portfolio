'use client'
import { useRouter } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'

export const ButtonBeck = () => {
  const router = useRouter()
  return (
    <button
      className="duration-300 hover:scale-75"
      onClick={() => router.back()}
    >
      <div className="flex items-center text-blue-500">
        <FiArrowLeft size={30} className="text-current" />
        <div className="!-ml-2 h-[2px] w-12 bg-current"></div>
      </div>
    </button>
  )
}
