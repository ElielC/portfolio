import * as Yup from "yup"

export const emailValidation = Yup.string()
  .email("Email Inválido")
  .required("Informe o email")
