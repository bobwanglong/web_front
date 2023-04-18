/**实现一个自定义的hook函数，实现获取滚动距离Y
 * const [y] = useWindowScroll()
 */

import { useState, useEffect } from "react"


export function useWindowScroll () {
  const [y, setY] = useState(0)
  useEffect(() => {
    const scrollHandler = () => {
      const h = document.documentElement.scrollTop
      setY(h)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  })

  return [y]
}