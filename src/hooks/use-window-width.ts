import { useEffect, useState } from 'react'

export function useWindowWidth() {
  const [width, setWidth] = useState(1800)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
