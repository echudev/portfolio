import { useState, useEffect } from 'react'

export const useGetScreenSize = () => {
  const [halfHeight, setHalfHeight] = useState(window.innerHeight / 2)
  const [halfWidth, setHalfWidth] = useState(window.innerWidth / 2)

  useEffect(() => {
    const handleResize = () => {
      setHalfHeight(window.innerHeight / 2)
      setHalfWidth(window.innerWidth / 2)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { halfHeight, halfWidth }
}

