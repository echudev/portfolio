import { useState } from 'react'
import { useGetScreenSize } from './useGetScreenSize';

interface MouseEvent {
    pageX: number;
    pageY: number;
  }

export const useGetIconTransform = () => {
 const { halfHeight, halfWidth } = useGetScreenSize()

 const [iconTransformX, setIconTransformX] = useState({
    fast: 0,
    normal: 0,
    slow: 0,
  })
  
  const [iconTransformY, setIconTransformY] = useState({
    fast: 0,
    normal: 0,
    slow: 0,
  })


  const handleMousePosition = (event: MouseEvent) => {
    const { pageX, pageY } = event;

      setIconTransformX({
        fast: ((pageX - halfWidth) / halfWidth) * 200,
        normal: ((pageX - halfWidth) / halfWidth) * 160,
        slow: ((pageX - halfWidth) / halfWidth) * 130,
      }),
      setIconTransformY({
        fast: ((pageY - halfHeight) / halfHeight) * 150,
        normal: ((pageY - halfHeight) / halfHeight) * 100,
        slow: ((pageY - halfHeight) / halfHeight) * 80,
      })
  }


return { iconTransformX, iconTransformY, handleMousePosition }
};
