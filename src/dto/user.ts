import { TokenDTO } from "./token"

export interface UserDTO {
  id?: string
  email?: string
  phone?: string
  name?: string
  cpf?: string
  doc?: string
  tokens?: TokenDTO
  isLoggedIn?: boolean
  jwt?: string
}
