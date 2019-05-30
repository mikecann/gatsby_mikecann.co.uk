import { useState, useEffect } from "react"

interface ScrollPosition {
  x: number
  y: number
}

function getScrollPosition(): ScrollPosition {
  return { x: window.pageXOffset, y: window.pageYOffset }
}

// Partly borrowed from: https://github.com/neo/react-use-scroll-position
export function useScroll() {
  const [position, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 })
  useEffect(() => {
    let requestRunning: number | null = null
    function handleScroll() {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition())
          requestRunning = null
        })
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const distanceFromBottom =
    document.documentElement.scrollHeight - window.innerHeight - scrollY
  return { ...position, distanceFromBottom }
}
