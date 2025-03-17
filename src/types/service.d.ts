interface IIcon {
  id: number
  alt: string
  icon: string
}

interface IService {
  id: number
  title: string
  description: string
  icon: IIcon[]
}
