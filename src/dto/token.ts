export interface GenerateTokenDTO {
  email: string
  password: string
}

export interface TokenDTO {
  refresh: string
  access: string
}
