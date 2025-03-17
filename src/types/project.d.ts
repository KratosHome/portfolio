interface IProject {
  id: number
  isEmptiness: boolean
  count?: string
  title?: string
  company?: string
  description?: string
  link?: string | null
  technologies?: { id: number; icon: string; alt: string }[]
  technologies2?: string
}
