import * as Yup from "yup"

export const passwordValidation = Yup.string()
  .min(5, "A senha deve conter no mínimo 5 caracteres")
  .required("Informe a senha")
