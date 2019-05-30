import { useEffect, useState } from "react"

const isClient = typeof window != "undefined"

export const useWindowSize = (initialWidth = 1024, initialHeight = 1024) => {
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
      setTimeout(() => {
        setState({ width: 0, height: 0 })
        setState({ width: window.innerWidth, height: window.innerHeight })
      }, 10)
      window.addEventListener("resize", handler)
      return () => window.removeEventListener("resize", handler)
    } else {
      return undefined
    }
  }, [])

  return state
}

// import { useEffect, useState, useContext } from "react"
// import createContainer from "constate"

// const isClient = typeof window != "undefined"

// function hook() {
//   const [state, setState] = useState<{ width: number; height: number }>({
//     width: isClient ? window.innerWidth : 1024,
//     height: isClient ? window.innerHeight : 1024,
//   })

//   useEffect(() => {
//     if (isClient) {
//       const handler = () => {
//         setState({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         })
//       }
//       setTimeout(() => {
//         setState({ width: 0, height: 0 })
//         setState({ width: window.innerWidth, height: window.innerHeight })
//       }, 10)
//       window.addEventListener("resize", handler)
//       return () => window.removeEventListener("resize", handler)
//     } else {
//       return undefined
//     }
//   }, [])

//   return state
// }

// export function useWindowSize() {
//   return useContext(WindowSizeContainer.Context)
// }

// export const WindowSizeContainer = createContainer(hook)
