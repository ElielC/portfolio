import { setCookies, getCookie, removeCookies } from "cookies-next"
import { useRouter } from "next/router"
import { createContext, useState } from "react"

export interface IAuthContext {
  isLoggedIn: boolean
  signIn(token: string): void
  signOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthContextProvider: React.FC = ({ children }) => {
  const router = useRouter()

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    // const token = localStorage.getItem('@doctor-web:token');
    const token = getCookie("@doctor-web:token")

    if (token) return true

    return false
  })

  const signIn = (token: string) => {
    setCookies("@doctor-web:token", token)
    setIsLoggedIn(true)
    router.push("/home")
  }

  const signOut = () => {
    removeCookies("@doctor-web:token")
    setIsLoggedIn(false)
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
