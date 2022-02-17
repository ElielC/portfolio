import { useContext } from "react"

import { AuthContext, IAuthContext } from "@/contexts"

function useAuthContext(): IAuthContext {
  const context = useContext(AuthContext)

  return context
}

export default useAuthContext
