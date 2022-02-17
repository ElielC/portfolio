import { UserDTO } from "@/dto"
import "iron-session"

declare module "iron-session" {
  export interface IronSessionData {
    user: UserDTO
  }
}
