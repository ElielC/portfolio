import { useEffect, useState } from "react"

function useHasMounted(): boolean {
  const [hasMounted, setHasMounted] = useState<boolean>(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}

export default useHasMounted
