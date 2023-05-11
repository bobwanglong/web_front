import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const usePointerPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const getY = (y) => {
    if (y > 580) {
      return 560
    }
    if (y < 100) {
      return 100
    }
    return y
  }
  useEffect(() => {
    function handleMove (e) {
      let movX = e.clientX > 500 ? 480 : e.clientX
      let movY = getY(e.clientY)

      setPosition({ x: movX, y: movY })
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])
  return position
}

export { usePointerPosition }