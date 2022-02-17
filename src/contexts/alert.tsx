import { createContext, useState } from "react"

import SnackBar from "@/components/SnackBar"
import { Color } from "@material-ui/lab"

export interface IAlertContext {
  isOpen: boolean
  severity: Color
  message: string
  showAlert(message: string, severity: Color): void
  closeAlert(): void
}

const AlertContext = createContext<IAlertContext>({} as IAlertContext)

const AlertContextProvider: React.FC = ({ children }) => {
  const [{ isOpen, severity, message }, setAlert] = useState<{
    isOpen: boolean
    severity: Color
    message: string
  }>({ isOpen: false, severity: "success", message: "" })

  const showAlert = (message: string, severity: Color) => {
    setAlert({ isOpen: true, severity, message })
  }

  const closeAlert = () => {
    setAlert(prevState => ({ ...prevState, isOpen: false }))
  }

  return (
    <AlertContext.Provider
      value={{ isOpen, severity, message, showAlert, closeAlert }}
    >
      <SnackBar
        open={isOpen}
        message={message}
        severity={severity}
        onClose={closeAlert}
      />
      {children}
    </AlertContext.Provider>
  )
}

export { AlertContext, AlertContextProvider }
