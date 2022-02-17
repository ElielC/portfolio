import router from "next/router"
import { useEffect } from "react"

import useAuthContext from "./useAuth"

export default function useUser({
  redirectTo = "",
  redirectIfFound = false
} = {}): void {
  const { isLoggedIn } = useAuthContext()

  useEffect(() => {
    if (!redirectTo) return

    if ((redirectIfFound && isLoggedIn) || (!redirectIfFound && !isLoggedIn)) {
      router.push(redirectTo)
    }
  }, [redirectIfFound, redirectTo])
}
