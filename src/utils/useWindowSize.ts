import { useEffect, useState } from "react"

const isClient = typeof window != "undefined"

export const useWindowSize = (initialWidth = 2000, initialHeight = 1024) => {
  const [state, setState] = useState<{ width: number; height: number }>({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  })

  useEffect(() => {
    if (isClient) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener("resize", handler)
      return () => window.removeEventListener("resize", handler)
    } else {
      return undefined
    }
  }, [])

  return state
}
