import { useContext } from "react"

import { AlertContext, IAlertContext } from "@/contexts/alert"

function useAlertContext(): IAlertContext {
  const context = useContext(AlertContext)

  return context
}

export default useAlertContext
