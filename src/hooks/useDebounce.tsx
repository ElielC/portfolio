/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useRef } from "react"

export default function useDebounce(fn: () => void, delay: number) {
  const timeoutRef = useRef(null)

  function debounce() {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      fn()
    }, delay)
  }

  return debounce
}
